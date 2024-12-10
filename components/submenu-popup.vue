<template>
  <div
    class="relative w-full z-10 transition-all rounded-[5px] duration-300 overflow-hidden"
    :class="
      active
        ? 'h-[370px] filter blur-0 brightness-100 contrast-100 grayscale-0 hue-rotate-0 saturate-100 invert-0 sepia-0 drop-shadow-[0_20px_25px_rgba(66,66,66,0.2)]'
        : 'h-[0px] pointer-events-none'
    "
  >
    <div
      class="absolute top-[35px] w-6 h-6 bg-white rotate-45 rounded-[3px] transition-all duration-200"
      :style="{ left: pointerPosition - 16 + 'px' }"
      :class="{ '-translate-y-full': active }"
    ></div>

    <div
      class="relative h-full mt-5 px-10 desktop-wide:px-[120px] bg-white rounded-[5px] text-black transition-all duration-200 overflow-hidden"
      :class="active ? 'py-[50px]' : 'py-0 '"
    >
      <div class="absolute bottom-[50px] left-[50px]">
        <svg
          width="76"
          height="100"
          viewBox="0 0 76 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M59.9764 0.00800124L59.9832 0.0122262H59.9895L59.9971 0.0164512C60.058 0.0291288 60.1158 0.0586911 60.1657 0.105176L60.1716 0.109425L60.1796 0.117875L60.1877 0.1221L75.236 15.1747L75.2432 15.1789L75.2517 15.1873L75.258 15.1958L75.2648 15.2042L75.2686 15.2085C75.3037 15.255 75.3286 15.3015 75.3434 15.3564L75.3451 15.3606L75.3476 15.3691L75.3484 15.3776C75.3506 15.386 75.3522 15.3901 75.3535 15.3986C75.3573 15.424 75.3599 15.4494 75.3599 15.4705V83.7438C75.3599 83.9171 75.255 84.0692 75.0953 84.1368L39.8806 98.3653C33.2392 101.045 27.2262 100.318 22.8694 97.0088C19.4802 94.4395 17.0884 90.2896 16.201 84.9312C7.20829 84.5255 0.772285 76.9824 0.772285 65.0992V24.1378C0.772285 23.9645 0.87793 23.8081 1.03851 23.7447L59.7254 0.033375C59.7427 0.0249232 59.7608 0.0206771 59.779 0.0164512L59.7879 0.0122262H59.7926L59.8002 0.00800124C59.8585 -0.0046764 59.9185 -0.000450517 59.9764 0.00800124ZM60.1201 21.915L74.5147 16.1002V83.4606L39.5637 97.5794C33.2473 100.132 27.5221 99.4851 23.3807 96.3369C19.2182 93.1801 16.6658 87.526 16.6658 80.1476V39.4693L59.9675 21.9741C60.0229 21.9656 60.0744 21.9446 60.1201 21.915ZM1.61745 25.1647L15.8206 39.3594V80.1476C15.8206 81.5168 15.9094 82.8309 16.0742 84.0818C7.58437 83.6043 1.61745 76.3569 1.61745 65.0992V25.1647ZM59.4659 21.2684L16.3446 38.6875L1.93862 24.2899L59.4659 1.04754V21.2684ZM74.1868 15.3183L60.3111 20.9261V1.44485L74.1868 15.3183Z"
            fill="#07E7C4"
          />
        </svg>
      </div>
      <Transition name="fade" mode="out-in">
        <div v-if="data" :key="name" class="flex justify-between h-full">
          <div class="mr-10">
            <p class="text-sm text-gray-darker">
              <span class="text-green-main">-/ </span> {{ name }}
            </p>
            <h4
              v-if="data.title"
              class="prose text-2xl font-semibold max-w-xs text-gray-darker"
              v-html="$formatText(data.title)"
            ></h4>
          </div>
          <ul
            v-if="data && data.links"
            class="flex flex-wrap items-start justify-between w-2/3 desktop-wide:w-3/5"
          >
            <li
              v-for="item in data.links"
              :key="item.name"
              class="flex-shrink basis-[200px]"
            >
              <CustomLink
                :url="item.link"
                :activeClass="
                  item.link === 'https://www.webo.agency/'
                    ? 'none'
                    : 'link-active-line'
                "
                class="group"
                @click="emitLinkClick()"
              >
                <div
                  class="text-lg font-semibold mb-1.5 tracking-normal"
                  v-html="$formatText(item.name)"
                ></div>
                <p
                  class="pr-6 mb-4 text-xs leading-relaxed font-normal"
                  v-html="$formatText(item.description)"
                ></p>
                <div
                  class="line relative w-[135px] h-0.5 rounded-full bg-gray-light overflow-hidden after:content-[''] after:absolute after:-top-0.5 after:right-full after:w-full after:h-2 after:bg-green-main group-hover:after:translate-x-full after:transition after:duration-300"
                ></div>
              </CustomLink>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script>
import CustomLink from "./custom-link.vue";
export default {
  name: "subMenuPopup",
  props: {
    pointerPosition: Number,
    name: String,
    data: Object,
    active: Boolean,
  },
  components: { CustomLink },
  methods:{
    emitLinkClick(){
      this.$emit('link-clicked')
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.link-active-line .line {
  @apply after:translate-x-full;
}
</style>
