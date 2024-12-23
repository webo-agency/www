<template>
  <div
    @mousemove="onMouseMove"
    class="relative h-[90vh] max-h-[860px] min-h-[650px] desktop:h-[860px] px-5 tablet:px-10 desktop:px-20 bg-center bg-cover bg-no-repeat ultraHd:bg-contain bg-gray-darkest -mt-[100px]">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"
      :style="{ transform: `translate(${-mouse.x / 12}px,${-mouse.y / 30}px)` }"
      class="hidden desktop:block absolute top-[22%] right-[5%] z-[2]">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M-0.00069046 14.7187C-0.00069046 17.6311 2.36471 20 5.27775 20L9.9977 19.9968L14.7173 20C17.6307 20 19.9961 17.6311 19.9961 14.7187V5.27815C19.9961 2.36894 17.6307 0 14.7176 0H5.27775C2.36471 0 -0.00069046 2.36894 -0.00069046 5.27815V14.7187ZM1.11599 14.7187V5.27815C1.11599 2.98275 2.98108 1.11892 5.27775 1.11892H14.7176C17.0143 1.11892 18.8791 2.98275 18.8791 5.27815V14.7187C18.8791 17.0173 17.0143 18.8811 14.7176 18.8811L9.9977 18.8779C9.99738 18.8779 5.27775 18.8811 5.27775 18.8811C2.98108 18.8811 1.11599 17.0173 1.11599 14.7187Z"
        fill="#07E7C4" />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"
      :style="{ transform: `translate(${mouse.x / 10}px,${mouse.y / 20}px)` }"
      class="hidden desktop:block absolute bottom-[21%] right-[45%] z-[8]">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M-0.00069046 14.7187C-0.00069046 17.6311 2.36471 20 5.27775 20L9.9977 19.9968L14.7173 20C17.6307 20 19.9961 17.6311 19.9961 14.7187V5.27815C19.9961 2.36894 17.6307 0 14.7176 0H5.27775C2.36471 0 -0.00069046 2.36894 -0.00069046 5.27815V14.7187ZM1.11599 14.7187V5.27815C1.11599 2.98275 2.98108 1.11892 5.27775 1.11892H14.7176C17.0143 1.11892 18.8791 2.98275 18.8791 5.27815V14.7187C18.8791 17.0173 17.0143 18.8811 14.7176 18.8811L9.9977 18.8779C9.99738 18.8779 5.27775 18.8811 5.27775 18.8811C2.98108 18.8811 1.11599 17.0173 1.11599 14.7187Z"
        fill="#07E7C4" />
    </svg>

    <div class="desktop:flex items-center h-full mx-auto max-w-screen-desktop-wide relative z-10">
      <EffectAppearMdc>
        <div class="pt-32 desktop:pt-0 mt-0 desktop:mt-[60px] max-w-[970px] transition duration-300">
          <p class="text-[14px] desktop:text-lg text-white">
            <em class="font-semibold text-green-main not-italic mr-1">-/</em>
            <ContentSlot :use="$slots.subtitle" unwrap="p" />
          </p>

          <div
            class="inline-block mb-6 desktop:mb-10 text-[28px] tablet:text-5xl desktop:text-[60px] leading-[40px] desktop:leading-[73px] font-semibold text-white">
            <ContentSlot :use="$slots.title" />
          </div>

          <div
            class="separator h-[3px] desktop:h-[4px] mb-10 desktop:mb-16 w-[200px] border-b-[#07E7C4] border-b-[4px]">
          </div>
          <div class="max-w-[440px] mb-8 desktop:mb-14 text-[18px] desktop:text-2xl font-normal text-white">
            <ContentSlot :use="$slots.description" />
          </div>
          <ButtonMain class="text-gray-darker mb-[65px]" :link="button.link" :title="button.title" :isWide="true" />
        </div>
        <div class="flex gap-[20px]">
          <WidgetRatingClutch />
          <WidgetRatingGoogle :rating="5"
            :link="'https://www.google.com/search?q=webo+gliwice&sca_esv=581867933&ei=avdRZdPPHbCVxc8PqvGHwAM&ved=0ahUKEwjTrJKs38CCAxWwSvEDHar4ATgQ4dUDCBA&uact=5&oq=webo+gliwice&gs_lp=Egxnd3Mtd2l6LXNlcnAiDHdlYm8gZ2xpd2ljZTICECZIsdsJUPXHCVj1xwlwAngAkAEAmAFXoAFXqgEBMbgBA8gBAPgBAeIDBBgBIEGIBgE&sclient=gws-wiz-serp#lrd=0x471131b61b903edb:0xe16af5e90276dac,1,,,,'"
            :text="'See all our reviews'" />
        </div>

      </EffectAppearMdc>

    </div>

    <div class="absolute bottom-0 right-0 z-[5] w-1/3 min-w-[300px] md:min-w-[400px] h-4/5 md:h-full overflow-hidden">
      <div id="phone-model" class="w-full h-full transition duration-500 delay-150" :class="{ 'opacity-0 translate-y-20': !texturesLoaded }">
      </div>
    </div>

    <div
      class="absolute bottom-0 left-0 right-0 hidden desktop:flex justify-center z-10 py-4 desktop:pt-0 desktop:pb-2">
      <button-scroll-down :getContainerRef="() => $refs.container" />
    </div>
  </div>
</template>

<script setup>
import EffectAppearMdc from "./effect-appear-md.vue";
import createRenderer from "~/utils/three-utils/createRenderer";
import createCamera from "~/utils/three-utils/createCamera";
import createScene from "~/utils/three-utils/createScene";
import configureTextures from "~/utils/three-utils/configureTextures";
import { Clock, PMREMGenerator } from "three";

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

const mouse = reactive({
  x: 0,
  y: 0,
})

function onMouseMove(event){
  mouse.x = event.clientX;
  mouse.y = event.clientY;
};

const texturesLoaded = ref(false);

function addEnvironment(hdri, scene, renderer) {
  const pmremGenerator = new PMREMGenerator(renderer);
  const envMap = pmremGenerator.fromEquirectangular(hdri).texture;
  hdri.dispose();
  scene.environment = envMap
}

onMounted(async () => {
  const modelContainer = document.querySelector('#phone-model')

  if (!modelContainer) return

  const renderer = createRenderer(modelContainer)
  const { camera, controls } = createCamera(modelContainer, renderer)
  const textures = await configureTextures();
  texturesLoaded.value = true;
  const { scene, iphone } = createScene(textures)
  addEnvironment(textures.hdri ,scene, renderer)
  const clock = new Clock()
  scene.add(camera)

  const handleResize = () => {
    const width = 5;
    const height = 5;

    const { clientWidth, clientHeight } = modelContainer;

    const newAspect = clientWidth / clientHeight;
    camera.left = (width * newAspect) / -2;
    camera.right = (width * newAspect) / 2;
    camera.top = height / 2;
    camera.bottom = height / -2;
    camera.updateProjectionMatrix();
    renderer.setSize(clientWidth, clientHeight);
  };

  window.addEventListener('resize', handleResize);

  const baseAzimuthAngle = controls.azimuthAngle;
  const basePolarAngle = controls.polarAngle;

  watchEffect(() => {
    const normalizedX = (mouse.x / window.innerWidth) * 2 - 1;
    const normalizedY = (mouse.y / window.innerHeight) * 2 - 1;

    const offsetX = normalizedX * .2;
    const offsetY = normalizedY * .1;
    controls.rotateTo(baseAzimuthAngle - offsetX, basePolarAngle - offsetY, true)
  });

  const oscillationSpeed = 0.75;
  const oscillationAmplitude = 0.5;
  const basePositionY = iphone.position.y;
  const baseRotationY = iphone.rotation.y;

  (function anim() {
    const delta = clock.getDelta();
    const elapsedTime = clock.getElapsedTime()

    const oscillationHeight = Math.sin(elapsedTime * oscillationSpeed) * oscillationAmplitude;
    const oscillationRotation = Math.sin(elapsedTime * oscillationSpeed / 3) * oscillationAmplitude / 2;
    iphone.position.set(
      0,
      basePositionY + oscillationHeight,
      0,
    );

    iphone.rotation.y = baseRotationY + oscillationRotation

    const hasControlsUpdated = controls.update(delta);
    requestAnimationFrame(anim);
    renderer.render(scene, camera);
  })();

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })
});
</script>

<style></style>
