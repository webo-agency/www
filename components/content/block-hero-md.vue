<template>
  <div
    @mousemove="mouseMove"
    ref="container"
    class="relative h-[90vh] max-h-[860px] min-h-[650px] desktop:h-[860px] px-5 tablet:px-10 desktop:px-20 bg-center bg-cover bg-no-repeat ultraHd:bg-contain bg-gray-darkest -mt-[100px]"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      :style="{transform: `translate(${-mouseX/12}px,${-mouseY/30}px)`}"
      class="hidden desktop:block absolute top-[22%] right-[5%] z-[2]"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M-0.00069046 14.7187C-0.00069046 17.6311 2.36471 20 5.27775 20L9.9977 19.9968L14.7173 20C17.6307 20 19.9961 17.6311 19.9961 14.7187V5.27815C19.9961 2.36894 17.6307 0 14.7176 0H5.27775C2.36471 0 -0.00069046 2.36894 -0.00069046 5.27815V14.7187ZM1.11599 14.7187V5.27815C1.11599 2.98275 2.98108 1.11892 5.27775 1.11892H14.7176C17.0143 1.11892 18.8791 2.98275 18.8791 5.27815V14.7187C18.8791 17.0173 17.0143 18.8811 14.7176 18.8811L9.9977 18.8779C9.99738 18.8779 5.27775 18.8811 5.27775 18.8811C2.98108 18.8811 1.11599 17.0173 1.11599 14.7187Z"
        fill="#07E7C4"
      />
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      :style="{transform: `translate(${mouseX/10}px,${mouseY/20}px)`}"
      class="hidden desktop:block absolute bottom-[21%] right-[45%] z-[8]"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M-0.00069046 14.7187C-0.00069046 17.6311 2.36471 20 5.27775 20L9.9977 19.9968L14.7173 20C17.6307 20 19.9961 17.6311 19.9961 14.7187V5.27815C19.9961 2.36894 17.6307 0 14.7176 0H5.27775C2.36471 0 -0.00069046 2.36894 -0.00069046 5.27815V14.7187ZM1.11599 14.7187V5.27815C1.11599 2.98275 2.98108 1.11892 5.27775 1.11892H14.7176C17.0143 1.11892 18.8791 2.98275 18.8791 5.27815V14.7187C18.8791 17.0173 17.0143 18.8811 14.7176 18.8811L9.9977 18.8779C9.99738 18.8779 5.27775 18.8811 5.27775 18.8811C2.98108 18.8811 1.11599 17.0173 1.11599 14.7187Z"
        fill="#07E7C4"
      />
    </svg>

    <div
      class="desktop:flex items-center h-full mx-auto max-w-screen-desktop-wide relative z-10"
    >
      <EffectAppearMdc>
        <div
          class="pt-32 desktop:pt-0 mt-0 desktop:mt-[60px] max-w-[970px] transition duration-300"
        >
          <p class="text-[14px] desktop:text-lg text-white">
            <em class="font-semibold text-green-main not-italic mr-1">-/</em>
            <ContentSlot :use="$slots.subtitle" unwrap="p" />
          </p>

          <div
            ref="titleContainer"
            class="inline-block mb-6 desktop:mb-10 text-[28px] tablet:text-5xl desktop:text-[60px] leading-[40px] desktop:leading-[73px] font-semibold text-white"
          >
            <ContentSlot :use="$slots.title" />
          </div>

          <div
            class="separator h-[3px] desktop:h-[4px] mb-10 desktop:mb-16 w-[200px] border-b-[#07E7C4] border-b-[4px]"
          ></div>
          <div
            class="max-w-[440px] mb-8 desktop:mb-14 text-[18px] desktop:text-2xl font-normal text-white"
          >
            <ContentSlot :use="$slots.description" />
          </div>
          <ButtonMain
            class="text-gray-darker mb-[65px]"
            :link="button.link"
            :title="button.title"
            :isWide="true"
          />
        </div>
        <div
        class="flex gap-[20px]">
          <WidgetRatingClutch />
          <WidgetRatingGoogle
            :rating="5"
            :link="'https://www.google.com/search?q=webo+gliwice&sca_esv=581867933&ei=avdRZdPPHbCVxc8PqvGHwAM&ved=0ahUKEwjTrJKs38CCAxWwSvEDHar4ATgQ4dUDCBA&uact=5&oq=webo+gliwice&gs_lp=Egxnd3Mtd2l6LXNlcnAiDHdlYm8gZ2xpd2ljZTICECZIsdsJUPXHCVj1xwlwAngAkAEAmAFXoAFXqgEBMbgBA8gBAPgBAeIDBBgBIEGIBgE&sclient=gws-wiz-serp#lrd=0x471131b61b903edb:0xe16af5e90276dac,1,,,,'"
            :text="'See all our reviews'"
          />
        </div>

      </EffectAppearMdc>

    </div>

    <div id="phone-model" class="absolute bottom-0 right-0 z-[5] w-1/3 min-w-[300px] h-4/5 md:h-full">

    </div>

    <div
      class="absolute bottom-0 left-0 right-0 hidden desktop:flex justify-center z-10 py-4 desktop:pt-0 desktop:pb-2"
    >
      <button-scroll-down :getContainerRef="() => $refs.container" />
    </div>
  </div>
</template>

<script setup>
import EffectAppearMdc from "./effect-appear-md.vue";
import { useMouse } from '@vueuse/core'
import { WebGLRenderer, PCFSoftShadowMap,OrthographicCamera ,Clock, PerspectiveCamera,Scene, PlaneGeometry, TextureLoader, Mesh, Shape,MeshBasicMaterial, ExtrudeGeometry, MeshStandardMaterial, PMREMGenerator } from "three";
import CameraControls from 'camera-controls';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import * as THREE from 'three';


const props = defineProps({
  subtitle: { type: String, required: false },
  title: { type: String, required: false, default: "Title" },
  description: { type: String, required: false },
  button: {
    type: Object,
    required: false,
    default: () => ({ link: "/", title: "Click here" }),
  },
  googleRating: Number,
  googleRatingLink: String,
  googleRatingText: String,
});

const visible = ref(false);
const titleContainer = ref(null)


function createRenderer(container) {
  const renderer = new WebGLRenderer({ antialias: true,alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;
  renderer.localClippingEnabled = true;
  container.appendChild(renderer.domElement);
  return renderer;
}

function createCamera(container, renderer) {
  const width = 5;
  const height = 5;
  const near = 0;
  const far = 40;
  const aspect = container.clientWidth / container.clientHeight
  const camera = new OrthographicCamera(width * aspect / - 2, width * aspect / 2, height / 2, height / - 2, near, far)
  // const camera = new PerspectiveCamera(20, container.clientWidth / container.clientHeight, 0.01, 40);
  camera.zoom = 0.3
  camera.position.set(-10, 8, 5);
  camera.updateProjectionMatrix();

  const controls = new CameraControls(camera, renderer.domElement);
  controls.setTarget(0, 5, 0);
  // controls.enabled = true; // Ensures controls are enabled
  controls.azimuthRotateSpeed = 2;
  controls.polarRotateSpeed = 2;
  // controls.dollyToCursor = false; // Disable zooming
  // controls.draggingDampingFactor = 0; // Disable damping if not needed
  controls.mouseButtons.wheel = CameraControls.ACTION.NONE; // Disable zoom with the mouse wheel
  controls.mouseButtons.left = CameraControls.ACTION.NONE; // Disable panning
  controls.mouseButtons.right = CameraControls.ACTION.NONE; // Disable rotation


  return { camera, controls };
}

function createScene() {
  const scene = new Scene();
  const width = 7.15; // width in arbitrary units
  const height = 14.7; // height in arbitrary units
  const depth = 0.78; // thickness in arbitrary units
  const cornerRadius = 1.4; // corner radius

  // Create a rounded rectangle shape
  const shape = new Shape();
  shape.moveTo(-width / 2 + cornerRadius, -height / 2);
  shape.lineTo(width / 2 - cornerRadius, -height / 2);
  shape.quadraticCurveTo(width / 2, -height / 2, width / 2, -height / 2 + cornerRadius);
  shape.lineTo(width / 2, height / 2 - cornerRadius);
  shape.quadraticCurveTo(width / 2, height / 2, width / 2 - cornerRadius, height / 2);
  shape.lineTo(-width / 2 + cornerRadius, height / 2);
  shape.quadraticCurveTo(-width / 2, height / 2, -width / 2, height / 2 - cornerRadius);
  shape.lineTo(-width / 2, -height / 2 + cornerRadius);
  shape.quadraticCurveTo(-width / 2, -height / 2, -width / 2 + cornerRadius, -height / 2);

  // Extrude the shape to create 3D geometry
  const bevelThickness = .15
  const extrudeSettings = {
    depth: depth - 2*bevelThickness,
    curveSegments: 128,
    bevelThickness: bevelThickness,
    bevelSegments: 32,
  };
  const geometry = new ExtrudeGeometry(shape, extrudeSettings);

  // Create a material
  const material = new MeshStandardMaterial({
    color: 0x9a9a9a,
    roughness: 0.03,
    metalness: 1
  });

  // Create the mesh
  const iphone = new Mesh(geometry, material);

  // Rotate the phone to stand vertically
  // iphone.rotation.x = -0.05; // Default upright orientation
  iphone.rotation.y = - Math.PI / 2 // Rotate to stand
  iphone.position.z = - depth + bevelThickness; // Adjust position so it stands on the base

  // Add the iPhone shape to the scene
  scene.add(iphone);

    // Add a plane for the screen
  const screenMaterial = new MeshBasicMaterial({
    map: new TextureLoader().load('/model/screen.png'), // Replace with the path to your image
    transparent: true
  });

  const screenGeometry = new PlaneGeometry(width - 0.1, height - 0.1); // Slightly smaller than the body
  const screen = new Mesh(screenGeometry, screenMaterial);

  // Position the screen to the front face of the iPhone
  screen.position.set(0, 0, depth - bevelThickness/2 + 0.01); // Offset slightly in front of the body

  // Add the screen to the scene
  iphone.add(screen);

  return {scene, iphone};
}

function addEnvironment(scene,renderer){
  const pmremGenerator = new PMREMGenerator(renderer);
  const hdriLoader = new RGBELoader()
  hdriLoader.load('/model/studio.hdr', function (texture) {
    const envMap = pmremGenerator.fromEquirectangular(texture).texture;
    texture.dispose();
    scene.environment = envMap
  }, function (xhr) {
    console.log(xhr)
  }, function (err) {
    console.log(err);

  });
}

const { x: mouseX, y: mouseY } = useMouse({ touch: false });

onMounted(() => {
  visible.value = true;

  const modelContainer = document.querySelector('#phone-model')

  if(!modelContainer) return

  CameraControls.install( { THREE: THREE } );
  const renderer = createRenderer(modelContainer)
  const {camera,controls} = createCamera(modelContainer,renderer)
  const {scene,iphone} = createScene()
  addEnvironment(scene,renderer)
  const clock = new Clock()
  scene.add(camera)
  

  // Base camera position
  const baseAzimuthAngle = controls.azimuthAngle;
  const basePolarAngle = controls.polarAngle;

  watchEffect(() => {
    // Normalize mouse positions to [-1, 1]
    const normalizedX = (mouseX.value / window.innerWidth) * 2 - 1;
    const normalizedY = (mouseY.value / window.innerHeight) * 2 - 1;

    // Calculate new camera position (adjust factors for sensitivity)
    const offsetX = normalizedX * .2; // Horizontal parallax
    const offsetY = normalizedY * .1; // Vertical parallax

    controls.rotateTo(baseAzimuthAngle - offsetX,basePolarAngle - offsetY,true)
  });

  // Parameters for sine wave movement
  const oscillationSpeed = 0.75; // Adjust for speed of movement
  const oscillationAmplitude = 0.5; // Adjust for magnitude of movement
  const basePositionY = iphone.position.y;
  const baseRotationY = iphone.rotation.y;

  ( function anim () {

    const delta = clock.getDelta();
    const elapsedTime = clock.getElapsedTime()

    const oscillationHeight = Math.sin(elapsedTime * oscillationSpeed) * oscillationAmplitude;
    const oscillationRotation = Math.sin(elapsedTime * oscillationSpeed/3) * oscillationAmplitude/2;
    iphone.position.set(
      0,  
      basePositionY + oscillationHeight,
      0,
    );

    iphone.rotation.y = baseRotationY + oscillationRotation

    const hasControlsUpdated = controls.update( delta );

    requestAnimationFrame( anim );
    renderer.render( scene, camera );

  } )();



});
</script>

<style></style>
