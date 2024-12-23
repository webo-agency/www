import {
  Texture,
  Scene,
  PlaneGeometry,
  Mesh,
  Shape,
  MeshBasicMaterial,
  ExtrudeGeometry,
  MeshStandardMaterial,
} from "three";

function cloneAndRotateTexture(
  texture: Texture | null,
  angle: number = Math.PI / 2
): Texture | null {
  if (!texture) return null;

  const clonedTexture = texture.clone();
  clonedTexture.rotation = angle;
  return clonedTexture;
}

export default function createScene(textures: {
  map: Texture;
  metalness: Texture;
  roughness: Texture;
  normal: Texture;
  screen: Texture;
}) {
  const width = 7.15;
  const height = 14.7;
  const depth = 0.78;
  const cornerRadius = 1.4;

  const shape = new Shape();
  shape.moveTo(-width / 2 + cornerRadius, -height / 2);
  shape.lineTo(width / 2 - cornerRadius, -height / 2);
  shape.quadraticCurveTo(
    width / 2,
    -height / 2,
    width / 2,
    -height / 2 + cornerRadius
  );
  shape.lineTo(width / 2, height / 2 - cornerRadius);
  shape.quadraticCurveTo(
    width / 2,
    height / 2,
    width / 2 - cornerRadius,
    height / 2
  );
  shape.lineTo(-width / 2 + cornerRadius, height / 2);
  shape.quadraticCurveTo(
    -width / 2,
    height / 2,
    -width / 2,
    height / 2 - cornerRadius
  );
  shape.lineTo(-width / 2, -height / 2 + cornerRadius);
  shape.quadraticCurveTo(
    -width / 2,
    -height / 2,
    -width / 2 + cornerRadius,
    -height / 2
  );

  const bevelThickness = 0.15;
  const extrudeSettings = {
    depth: depth - 2 * bevelThickness,
    curveSegments: 128,
    bevelThickness: bevelThickness,
    bevelSegments: 32,
  };
  const geometry = new ExtrudeGeometry(shape, extrudeSettings);
  const material = new MeshStandardMaterial({
    color: 0x9a9a9a,
    roughness: 0.4,
    metalness: 1,
    map: textures.map,
    metalnessMap: textures.metalness,
    roughnessMap: textures.roughness,
    normalMap: textures.normal,
  });

  const iphone = new Mesh(geometry, material);

  iphone.rotation.y = -Math.PI / 2;
  iphone.position.z = -depth + bevelThickness;

  const buttonWidth = 0.26;
  const buttonHeight = 1.8;
  const buttonDepth = 0.2;
  const buttonCornerRadius = 0.15;

  const buttonShape = new Shape();
  buttonShape.moveTo(-buttonWidth / 2 + buttonCornerRadius, -buttonHeight / 2);
  buttonShape.lineTo(buttonWidth / 2 - buttonCornerRadius, -buttonHeight / 2);
  buttonShape.quadraticCurveTo(
    buttonWidth / 2,
    -buttonHeight / 2,
    buttonWidth / 2,
    -buttonHeight / 2 + buttonCornerRadius
  );
  buttonShape.lineTo(buttonWidth / 2, buttonHeight / 2 - buttonCornerRadius);
  buttonShape.quadraticCurveTo(
    buttonWidth / 2,
    buttonHeight / 2,
    buttonWidth / 2 - buttonCornerRadius,
    buttonHeight / 2
  );
  buttonShape.lineTo(-buttonWidth / 2 + buttonCornerRadius, buttonHeight / 2);
  buttonShape.quadraticCurveTo(
    -buttonWidth / 2,
    buttonHeight / 2,
    -buttonWidth / 2,
    buttonHeight / 2 - buttonCornerRadius
  );
  buttonShape.lineTo(-buttonWidth / 2, -buttonHeight / 2 + buttonCornerRadius);
  buttonShape.quadraticCurveTo(
    -buttonWidth / 2,
    -buttonHeight / 2,
    -buttonWidth / 2 + buttonCornerRadius,
    -buttonHeight / 2
  );
  const buttonBevelThickness = 0.05;
  const buttonExtrudeSettings = {
    depth: buttonDepth,
    curveSegments: 32,
    bevelThickness: buttonBevelThickness,
    bevelSize: buttonBevelThickness,
    bevelSegments: 32,
  };
  const buttonGeometry = new ExtrudeGeometry(
    buttonShape,
    buttonExtrudeSettings
  );
  const buttonMaterial = new MeshStandardMaterial({
    color: material.color,
    roughness: material.roughness,
    metalness: material.metalness,
    map: cloneAndRotateTexture(material.map),
    metalnessMap: cloneAndRotateTexture(material.metalnessMap),
    roughnessMap: cloneAndRotateTexture(material.roughnessMap),
    normalMap: cloneAndRotateTexture(material.normalMap),
  });

  const powerButton = new Mesh(buttonGeometry, buttonMaterial);
  powerButton.position.set(
    width / 2 - (buttonDepth + buttonBevelThickness) / 2,
    3,
    (depth - 2 * bevelThickness) / 2
  );
  powerButton.rotation.y = Math.PI / 2;

  iphone.add(powerButton);

  const screenMaterial = new MeshBasicMaterial({
    map: textures.screen,
    transparent: true,
    toneMapped: false,
  });

  const screenGeometry = new PlaneGeometry(width - 0.1, height - 0.1);
  const screen = new Mesh(screenGeometry, screenMaterial);

  screen.position.set(0, 0, depth - bevelThickness + 0.01);

  iphone.add(screen);

  const scene = new Scene();
  scene.add(iphone);

  return { scene, iphone };
}
