<template>
  <div
    @mousemove="mouseMove"
    ref="container"
    class="relative h-[90vh] max-h-[860px] min-h-[650px] desktop:h-[860px] px-5 tablet:px-10 desktop:px-20 bg-center bg-cover bg-no-repeat ultraHd:bg-contain bg-gray-darker -mt-[100px]"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      class="hidden desktop:block absolute top-[22%] left-[42%] z-[2]"
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
      class="hidden desktop:block absolute bottom-[21%] right-[45%] z-[2]"
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
      </EffectAppearMdc>
      <div
        class="z-[2] flex gap-[20px] desktop:absolute desktop:bottom-[14%] desktop:right-[6%]"
      >
        <WidgetRatingClutch />
        <WidgetRatingGoogle
          :rating="5"
          :link="'https://www.google.com/search?q=webo+gliwice&sca_esv=581867933&ei=avdRZdPPHbCVxc8PqvGHwAM&ved=0ahUKEwjTrJKs38CCAxWwSvEDHar4ATgQ4dUDCBA&uact=5&oq=webo+gliwice&gs_lp=Egxnd3Mtd2l6LXNlcnAiDHdlYm8gZ2xpd2ljZTICECZIsdsJUPXHCVj1xwlwAngAkAEAmAFXoAFXqgEBMbgBA8gBAPgBAeIDBBgBIEGIBgE&sclient=gws-wiz-serp#lrd=0x471131b61b903edb:0xe16af5e90276dac,1,,,,'"
          :text="'See all our reviews'"
        />
      </div>

    </div>

    <div id="phone-model" class="absolute bottom-0 right-0 w-1/2 min-w-[300px] h-4/5 md:h-full">

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
import { WebGLRenderer, PCFSoftShadowMap, PerspectiveCamera,Scene, PlaneGeometry, TextureLoader, Mesh, Shape,MeshBasicMaterial, ExtrudeGeometry, MeshStandardMaterial, PMREMGenerator } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';


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
  const camera = new PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.01, 40);
  camera.position.set(-9, 4, 15);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 5, 0);
  controls.enablePan = false;
  controls.enableDamping = true;
  controls.dampingFactor = 0.2;
  controls.minDistance = 10;
  controls.maxDistance = 15;
  controls.minPolarAngle = Math.PI / 8;
  controls.maxPolarAngle = Math.PI / 2;
  controls.zoomSpeed = 0.8;
  controls.update();

  return { camera, controls };
}

function createScene() {
  const scene = new Scene();
    // Define iPhone 14 dimensions (adjust as needed)
  const width = 7.15; // width in arbitrary units
  const height = 14.7; // height in arbitrary units
  const depth = 0.78; // thickness in arbitrary units
  const cornerRadius = 1.5; // corner radius

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
  const extrudeSettings = {
    depth: depth -0.15,
    curveSegments: 128,
    bevelThickness: .15,
    bevelSegments: 32,
  };
  const geometry = new ExtrudeGeometry(shape, extrudeSettings);

  // Create a material
  const material = new MeshStandardMaterial({
    color: 0xcccccc,
    roughness: 0,
    metalness: 1
  });

  // Create the mesh
  const iphone = new Mesh(geometry, material);

  // Rotate the phone to stand vertically
  iphone.rotation.x = 0; // Default upright orientation
  // iphone.rotation.z = Math.PI / 2; // Rotate to stand
  // iphone.position.z = depth / 2; // Adjust position so it stands on the base

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
  screen.position.set(0, 0, depth + 0.01); // Offset slightly in front of the body

  // Add the screen to the scene
  scene.add(screen);

  return scene;
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

onMounted(() => {
  visible.value = true;

  const modelContainer = document.querySelector('#phone-model')

  if(!modelContainer) return

  const renderer = createRenderer(modelContainer)
  const {camera,controls} = createCamera(modelContainer,renderer)
  const scene = createScene()
  addEnvironment(scene,renderer)
  scene.add(camera)

  renderer.setAnimationLoop(function () {
    controls.update();
    renderer.render(scene, camera);
  });



});
</script>

<style></style>
