<template>
  <nav
    class="fixed top-0 left-0 w-full z-40"
    :class="{
      'pointer-events-none': !isVisible && !mobileExpanded,
      '!z-50':mobileExpandedVisible
    }"
  >
    <div
      class="absolute desktop:hidden top-0 left-0 h-d-screen w-screen bg-black/50 pointer-events-none transition duration-500"
      :class="{ 'opacity-0': !mobileExpanded || isLargeScreen }"
    ></div>

    <div
      class="relative px-5 tablet:px-10 desktop:px-20 desktop:overflow-visible transition-all duration-500 desktop:duration-300 border-0 border-b border-b-gray-dark"
      :class="[
        {
          '-translate-y-full shadow-none': !isVisible && !mobileExpanded,
        },
        {
          'bg-white shadow-lg shadow-gray-dark/[0.02] border-b-white':
            !isTransparent || mobileExpanded,
        },
        mobileExpanded ? 'h-d-screen ' : 'h-[60px] desktop:h-[94px]',
      ]"
      @transitionstart="mobileExpanded == true ? mobileExpandedVisible = true : null"
      @transitionend="mobileExpanded == false ? mobileExpandedVisible = false : null"
    >
      <div
        ref="container"
        class="h-full flex flex-col desktop:flex-row desktop:justify-between desktop:items-center mx-auto max-w-screen-desktop-wide"
        :class="
          isTransparent && !mobileExpanded ? 'text-white' : 'text-gray-darker'
        "
      >
        <div class="flex items-center justify-between py-3 tablet:py-2 desktop:py-0">
          <CustomLink
            :url="'https://www.webo.agency/'"
            :activeClass="'none'"
            @click="
              [
                !isLargeScreen && mobileExpanded ? toggleMobile() : '',
                scrollToTop(),
              ]
            "
          >
            <svg
              class="fill-current transition duration-300 h-[30px] tablet:h-[41px] w-auto"
              width="135"
              height="41"
              viewBox="0 0 135 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M131.605 41H127.55V34.2414H134.308V38.2958C134.308 39.7881 133.096 41 131.605 41ZM124.847 38.2958V40.9943L112.006 41C107.903 41 104.573 37.6687 104.573 33.5662V18.6985C104.573 14.5948 107.903 11.2647 112.006 11.2647H126.874C130.977 11.2647 134.308 14.5948 134.308 18.6985V31.5338H131.605V19.4664C131.605 16.1089 129.463 13.9677 126.107 13.9677H112.775C109.417 13.9677 107.276 16.1089 107.276 19.4664V32.7983C107.276 36.1547 109.417 38.2958 112.775 38.2958H124.847Z"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M79.318 11.2693L92.1589 11.2636C96.2614 11.2636 99.5916 14.5949 99.5916 18.6974V33.5651C99.5916 37.6688 96.2614 40.9989 92.1589 40.9989H77.2901C73.1876 40.9989 69.8563 37.6688 69.8563 33.5651V0.601559H72.5593V32.7972C72.5593 36.1548 74.7016 38.2959 78.058 38.2959H91.3899C94.7475 38.2959 96.8886 36.1548 96.8886 32.7972V19.4653C96.8886 16.1089 94.7475 13.9678 91.3899 13.9678H79.318V11.2693Z"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M64.8764 40.9943L42.5738 41C38.4712 41 35.1411 37.6687 35.1411 33.5662V18.6985C35.1411 14.5948 38.4712 11.2647 42.5738 11.2647H57.4425C61.5451 11.2647 64.8764 14.5948 64.8764 18.6985V31.5338H44.6016V28.8331H62.1733V19.4664C62.1733 16.1089 60.0311 13.9677 56.6747 13.9677H43.3428C39.9852 13.9677 37.8441 16.1089 37.8441 19.4664V32.7983C37.8441 36.1547 39.9852 38.2958 43.3428 38.2958H64.8764V40.9943Z"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.7255 41H21.6578V38.2821H22.2426C25.4629 38.1425 27.4518 36.0655 27.4564 32.7983V11.2647H30.1548L30.1593 33.5662C30.1593 37.6687 26.8292 41 22.7255 41ZM2.70368 11.2647V32.7983C2.70826 36.0655 4.69716 38.1425 7.91856 38.2821L7.43449 41C3.33079 41 0 37.6687 0 33.5662L0.0051477 11.2647H2.70368ZM15.08 41H7.43449L7.91856 38.2821H12.377L12.3759 28.8331H15.0743L15.08 41Z"
              />
            </svg>
          </CustomLink>
          <HamburgerBtn
            class="flex flex-col justify-between desktop:hidden"
            :btnActive="mobileExpanded"
            @click="toggleMobile()"
          />
        </div>
        <div
          class="flex flex-col justify-between desktop:justify-center h-full scrollbar-none overflow-y-auto desktop:overflow-visible"
        >
          <ul
            class="shrink-0 flex flex-col desktop:flex-row desktop:items-center desktop:gap-[26px] my-10 desktop:my-0"
          >
            <li
              v-for="(item, index) in menu"
              :key="index"
              class="w-full desktop:w-auto mb-2 desktop:mb-0  rounded-[5px] font-semibold overflow-hidden transition-[transform,opacity] duration-300"
              :class="[
                { 'text-green-main desktop:[&_.collapse-icon]:rotate-180': hoverItem == item.name },
                {
                  '-translate-x-full desktop:translate-x-0 opacity-0':
                    !mobileExpanded && !isLargeScreen,
                },
              ]"
              :style="[
                {
                  'transition-delay':
                    mobileExpanded && !isLargeScreen
                      ? index * 60 + 'ms'
                      : !mobileExpanded && !isLargeScreen
                      ? (menu.length - index) * 40 + 'ms'
                      : '',
                },
                {
                  order: index*2
                }
              ]"
              @mouseover="
                item.menu
                  ? (setPopup(true, item.menu, $event),
                    (popUpHover = true),
                    (hoverItem = item.name))
                  : ((popUpActive = false),
                    (popUpHover = false),
                    (hoverItem = 'false'))
              "
              @mouseleave="
                item.menu
                  ? (setPopup(false), (popUpHover = false))
                  : ((popUpActive = false), (popUpHover = false))
              "
            >
              <CustomLink
                :url="item.link ? item.link : 'https://www.webo.agency/'"
                :activeClass="'none-temp'"
                class="flex items-center justify-between p-3 mr-12 desktop:mr-0 hover:text-green-main transition duration-300 group"
                :class="[
                  item.button
                    ? 'button relative border-green-main border-solid border-2 text-green-main hover:text-current px-5 py-2.5 rounded-full overflow-hidden'
                    : 'p-2 pl-0 desktop:p-3',
                  (!isTransparent || mobileExpanded) && item.button
                    ? 'bg-green-light hover:text-white'
                    : ' ',
                  item.button && isTransparent && !mobileExpanded
                    ? 'hover:!text-gray-darker'
                    : '',
                ]"
                @click="!isLargeScreen ? toggleMobile() : hardClosePopup()"
              >
                <div
                  class="prose uppercase"
                  v-html="item.name"
                  :class="[item.button ? 'z-10 text-base leading-5' : ' text-lg desktop:text-base',{'desktop:pr-8':item.menu}]"
                ></div>
                <span
                  v-if="item.button"
                  class="h-0.5 w-[14px] ml-3 mt-0.5 bg-current z-10 group-hover:translate-x-1 transition-transform duration-200"
                ></span>
              </CustomLink>

              <div
                ref="collapsible"
                data-collapsed="true"
                class="relative transition duration-300"
                v-if="item.menu"
              >
                <div
                  class="absolute right-0 desktop:right-2 z-20 -top-10 desktop:top-[-46px] w-10 h-10 flex justify-center items-center desktop:pointer-events-none text-gray-darker desktop:text-inherit"
                  @click="toggleCollapse(index)"
                >
                  <svg
                    class="collapse-icon transition !duration-300 desktop:transition-transform fill-current text-inherit"
                    width="15"
                    height="8"
                    viewBox="0 0 10 6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.15962 -3.67343e-08L10 0.840384L5 5.84046L-3.67343e-08 0.840383L0.840383 -4.0038e-07L5 4.21488L9.15962 -3.67343e-08Z"
                    />
                  </svg>
                </div>
                <div
                  ref="collapse-container"
                  class="overflow-hidden h-0 transition-all duration-300"
                >
                  <ul v-if="item.menu.links" class="desktop:hidden">
                    <li
                      v-for="(item, index) in item.menu.links"
                      :key="index"
                      class="py-2 pl-5 last:pb-3 last:border-b-2 last:border-gray-light last:border-solid"
                    >
                      <CustomLink
                        :url="item.link"
                        :activeClass="
                          item.link === 'https://www.webo.agency/' ? 'none' : ''
                        "
                        class="flex flex-col py-2 text-gray-darker hover:text-green-main transition duration-300"
                        @click="!isLargeScreen ? toggleMobile() : ''"
                      >
                        <div
                          v-if="item.name"
                          class="prose"
                          :class="{ 'mb-2': item.description }"
                          v-html="$formatText(item.name)"
                        ></div>
                        <div
                          v-if="item.name"
                          class="prose max-w-[75%] font-normal text-sm"
                          v-html="$formatText(item.description)"
                        ></div>
                      </CustomLink>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li 
                class="mb-2 desktop:mb-0 transition-[transform,opacity] duration-300 order-[9999]"
                :class="{
                  '-translate-x-full desktop:translate-x-0 opacity-0':
                    !mobileExpanded && !isLargeScreen,
                }"
                :style="[
                  {
                    'transition-delay':
                      mobileExpanded && !isLargeScreen
                        ? menu.length * 60 + 'ms'
                        : !mobileExpanded && !isLargeScreen
                          ? '0ms'
                          : '',
                  },
                  {
                    order: isLargeScreen && menu.length > 0
                     ? (menu.length - 1) * 2 - 1
                     : '9999'
                  }
                ]"
>
              <LangSwitcher/>
            </li>
          </ul>
          <div
            class="desktop:hidden flex flex-col mb-10 transition duration-500"
            :class="{
              'translate-y-[80vh] desktop:translate-y-0 opacity-0':
                !mobileExpanded && !isLargeScreen,
            }"
          >
            <Socials
              v-if="socials"
              class="mb-10"
              :socials="socials"
              :invertColors="true"
            />
            <RatingClutch/>
          </div>
        </div>
      </div>
      <div
        class="hidden desktop:block mx-auto max-w-screen-desktop-wide"
        @mouseover="popUpHover = true"
        @mouseleave="(popUpHover = false), setPopup(false)"
      >
        <SubmenuPopup
          :active="popUpActive"
          :name="hoverItem"
          :data="popUpData"
          :pointerPosition="pointerPosition"
          @link-clicked="hardClosePopup()"
        />
      </div>
    </div>
  </nav>
</template>

<script>
import { useScroll } from "@vueuse/core";
import { computed } from "vue";
import SubmenuPopup from "./submenu-popup.vue";
import HamburgerBtn from "./hamburger-btn.vue";
import Socials from "./socials.vue";
import CustomLink from "./custom-link.vue";
export default {
  name: "LayoutNavbar",
  props: {
    menu: {
      type: Array,
    },
    socials: Array,
    clutchLink: String,
  },
  data() {
    return {
      isTransparent: true,
      isLargeScreen: true,
      mobileExpanded: false,
      mobileExpandedVisible: false,
      popUpData: null,
      popUpActive: false,
      popUpHover: false,
      hoverItem: "",
      pointerPosition: 0,
    };
  },
  setup() {
    const scroll = useScroll(globalThis.window);
    let show = true;
    let isVisible = computed(() => {
      if (scroll.directions.top || scroll.y.value < 40) {
        show = true;
      } else if (scroll.directions.bottom) {
        show = false;
      }
      return show;
    });
    let underTreshold = computed(() => scroll.y.value < 170);

    return {
      isVisible: isVisible,
      underTreshold: underTreshold,
      scrollPositionY: scroll.y,
    };
  },
  computed: {
    isHomePage() {
      return this.$route.path === "/";
    },
  },
  mounted() {
    if (globalThis.window.scrollY < 300 && this.isHomePage) {
      this.isTransparent = true;
    } else {
      this.isTransparent = false;
    }

    this.onWidthChange();

    window.addEventListener("resize", this.onWidthChange);
  },
  unmounted() {
    window.removeEventListener("resize", this.onWidthChange);
  },
  watch: {
    isLargeScreen(value) {
      if (value) {
        this.mobileExpanded = false;
      }
    },
    underTreshold(value) {
      this.isTransparent = value;
      if (!this.isHomePage) {
        this.isTransparent = false;
      }
    },
    isHomePage(value) {
      if (value == false) {
        this.isTransparent = false;
      } else if (this.underTreshold) {
        this.isTransparent = true;
      }
    },
  },
  methods: {
    onWidthChange() {
      if (window.innerWidth < 1248) {
        this.isLargeScreen = false;
      } else {
        this.isLargeScreen = true;
      }
    },

    toggleCollapse(index) {
      const element = this.$refs.collapsible[index];
      const container = this.$refs["collapse-container"][index];
      let height;
      if (element.dataset.collapsed == "true") {
        height = container.firstChild.clientHeight;
        element.dataset.collapsed = false;
      } else {
        height = 0;
        element.dataset.collapsed = true;
      }
      container.style.height = height + "px";
    },
    toggleMobile() {
      this.mobileExpanded = !this.mobileExpanded;
    },

    setPopup(open, subMenu, event) {
      if (subMenu !== undefined) {
        this.popUpData = subMenu;
        this.popUpActive = true;
        const xOffset = event.target.getBoundingClientRect().x;
        const itemWidth = event.target.getBoundingClientRect().width / 2;
        const padding = this.$refs.container.getBoundingClientRect().x;
        this.pointerPosition = xOffset + itemWidth - padding;
      } else if (!open) {
        let vm = this;
        setTimeout(function () {
          if (!vm.popUpHover) {
            vm.popUpActive = false;
            vm.popUpData = null;
            vm.hoverItem = "";
          }
        }, 400);
      }
    },

    hardClosePopup() {
      this.popUpActive = false;
      this.popUpData = null;
    },

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  components: { SubmenuPopup, HamburgerBtn, Socials, CustomLink },
};
</script>

<style>
.nuxt-link-active {
  @apply text-green-main;
}

.button::after {
  content: " ";
  @apply block absolute -top-1 right-[105%] h-14 w-[110%] z-0 bg-green-main
    transition duration-300;
}

.button:hover::after {
  @apply translate-x-full;
}

[data-collapsed="false"] .collapse-icon {
  @apply rotate-180;
}

[data-collapsed="true"] div:last-of-type {
  @apply opacity-0;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-none::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar-none {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
