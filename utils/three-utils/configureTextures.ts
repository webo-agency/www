import { TextureLoader, RepeatWrapping } from "three";
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';

function loadResource(path: string, loader: RGBELoader | TextureLoader ): Promise<any> {
  return new Promise((resolve, reject) => {
    loader.load(path, resolve, undefined, reject);
  });
}

function loadTexture(path: string): Promise<any> {
  return loadResource(path, new TextureLoader());
}

function loadHDRI(path: string): Promise<any> {
  return loadResource(path, new RGBELoader());
}

import { Texture, DataTexture } from "three";

export default async function configureTextures(): Promise<{ [key: string]: Texture | DataTexture }> {
  const texturePaths = [
    "/model/textures/metal-brushed/map.jpg",
    "/model/textures/metal-brushed/metalness.jpg",
    "/model/textures/metal-brushed/roughness.jpg",
    "/model/textures/metal-brushed/normal.jpg",
    "/model/screen.png",
  ];

  const hdriPath = "/model/studio.hdr";

  const [map, metalness, roughness, normal, screen, hdri] = await Promise.all([
    ...texturePaths.map(loadTexture),
    loadHDRI(hdriPath),]);

  function configureFrameTexture(texture: Texture): Texture  {
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    texture.repeat.set(0.05, 1);
    return texture;
  }

  return {
    map: configureFrameTexture(map),
    metalness: configureFrameTexture(metalness),
    roughness: configureFrameTexture(roughness),
    normal: configureFrameTexture(normal),
    screen: screen,
    hdri: hdri,
  };
}
