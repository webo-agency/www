<template>
  <nav
    class="fixed top-0 left-0 w-full z-40"
    :class="{
      'pointer-events-none': !isVisible && !mobileExpanded,
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
            <CustomLink v-if="clutchLink" :url="clutchLink">
              <svg
                class="fill-gray-darker"
                width="124"
                height="57"
                viewBox="0 0 124 57"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M32.042 22H37.711V56.9997H32.042V22Z" />
                <path
                  d="M57.4292 45.9082C57.4292 51.3307 52.9926 51.8237 51.5137 51.8237C48.063 51.8237 47.5701 48.6195 47.5701 46.8941V33.3379H41.9011V46.6476C41.9011 49.8518 42.887 52.8096 44.8588 54.5349C46.5842 56.2603 48.8025 56.9997 51.5137 56.9997C53.4855 56.9997 55.9503 56.5067 57.4292 55.0279V56.9997H63.0982V33.3379H57.4292V45.9082Z"
                />
                <path
                  d="M74.1896 24.7109H68.5207V33.3376H64.3306V38.7601H68.5207V56.9994H74.1896V38.7601H78.3798V33.3376H74.1896V24.7109Z"
                />
                <path
                  d="M96.1262 49.8526C94.8938 50.8385 93.1684 51.578 91.4431 51.578C87.4995 51.578 84.7882 48.6202 84.7882 44.6766C84.7882 40.733 87.4995 38.0217 91.4431 38.0217C93.1684 38.0217 94.8938 38.5147 96.1262 39.7471L96.8656 40.4865L100.809 36.7893L99.8233 36.0499C97.605 34.0781 94.6473 32.8457 91.4431 32.8457C84.5417 32.8457 79.3657 38.0217 79.3657 44.9231C79.3657 51.8244 84.5417 57.0004 91.4431 57.0004C94.6473 57.0004 97.605 55.7681 99.8233 53.7962L100.809 53.0568L96.8656 49.1132L96.1262 49.8526Z"
                />
                <path
                  d="M120.774 35.3098C119.048 33.5844 117.323 32.845 114.612 32.845C112.64 32.845 110.668 33.3379 109.189 34.8168V22H103.52V56.9997H109.189V43.9365C109.189 38.514 112.886 38.021 114.365 38.021C117.816 38.021 117.569 41.2252 117.569 42.9505V56.7533H123.238V43.197C123.238 39.9928 122.499 37.0351 120.774 35.3098Z"
                />
                <path
                  d="M91.1963 48.8658C93.3743 48.8658 95.14 47.1002 95.14 44.9222C95.14 42.7441 93.3743 40.9785 91.1963 40.9785C89.0183 40.9785 87.2527 42.7441 87.2527 44.9222C87.2527 47.1002 89.0183 48.8658 91.1963 48.8658Z"
                  fill="#EF4335"
                />
                <path
                  d="M24.1548 48.3732C22.1829 50.345 19.2252 51.5774 16.021 51.5774C9.85908 51.5774 5.4225 46.6479 5.4225 39.993C5.4225 33.3381 9.85908 28.4086 16.2675 28.4086C19.2252 28.4086 22.1829 29.641 24.4012 31.8592L25.1407 32.5987L28.8378 28.9015L28.0984 28.1621C24.8942 24.9579 20.7041 23.2325 16.2675 23.2325C6.90136 22.9861 0 30.3804 0 39.993C0 49.6056 6.90136 56.9999 16.021 56.9999C20.4576 56.9999 24.8942 55.2746 27.8519 52.0704L28.5913 51.3309L24.8942 47.6338L24.1548 48.3732Z"
                />
                <path
                  d="M9.47197 12.0001L6.91197 8.4001C6.62398 8.4321 6.32531 8.4481 6.01597 8.4481H3.00797V12.0001H1.82397V0.800101H6.01597C7.44531 0.800101 8.56531 1.14143 9.37597 1.8241C10.1866 2.50677 10.592 3.44544 10.592 4.6401C10.592 5.51477 10.368 6.2561 9.91997 6.8641C9.48264 7.46144 8.85331 7.89344 8.03197 8.1601L10.768 12.0001H9.47197ZM5.98397 7.4401C7.09331 7.4401 7.94131 7.19477 8.52798 6.7041C9.11464 6.21344 9.40797 5.52544 9.40797 4.6401C9.40797 3.73344 9.11464 3.0401 8.52798 2.5601C7.94131 2.06943 7.09331 1.8241 5.98397 1.8241H3.00797V7.4401H5.98397Z"
                />
                <path
                  d="M21.3065 10.9761V12.0001H13.3865V0.800101H21.0665V1.8241H14.5705V5.8081H20.3625V6.8161H14.5705V10.9761H21.3065Z"
                />
                <path
                  d="M33.2453 0.800101L28.2853 12.0001H27.1173L22.1573 0.800101H23.4373L27.7253 10.5281L32.0454 0.800101H33.2453Z"
                />
                <path d="M34.8708 0.800101H36.0548V12.0001H34.8708V0.800101Z" />
                <path
                  d="M47.619 10.9761V12.0001H39.699V0.800101H47.379V1.8241H40.883V5.8081H46.675V6.8161H40.883V10.9761H47.619Z"
                />
                <path
                  d="M59.5578 0.800101L54.5979 12.0001H53.4299L48.4698 0.800101H49.7499L54.0378 10.5281L58.3578 0.800101H59.5578Z"
                />
                <path
                  d="M69.1033 10.9761V12.0001H61.1833V0.800101H68.8633V1.8241H62.3673V5.8081H68.1593V6.8161H62.3673V10.9761H69.1033Z"
                />
                <path
                  d="M71.8865 0.800101H76.4465C77.6305 0.800101 78.6758 1.0401 79.5825 1.5201C80.4891 1.98944 81.1931 2.65077 81.6945 3.5041C82.1958 4.34677 82.4465 5.3121 82.4465 6.4001C82.4465 7.4881 82.1958 8.45877 81.6945 9.3121C81.1931 10.1548 80.4891 10.8161 79.5825 11.2961C78.6758 11.7654 77.6305 12.0001 76.4465 12.0001H71.8865V0.800101ZM76.3825 10.9761C77.3638 10.9761 78.2225 10.7841 78.9585 10.4001C79.6945 10.0054 80.2651 9.46677 80.6705 8.7841C81.0758 8.09077 81.2785 7.2961 81.2785 6.4001C81.2785 5.5041 81.0758 4.71477 80.6705 4.0321C80.2651 3.33877 79.6945 2.8001 78.9585 2.4161C78.2225 2.02143 77.3638 1.8241 76.3825 1.8241H73.0705V10.9761H76.3825Z"
                />
                <path
                  d="M94.1887 12.0961C93.0794 12.0961 92.0714 11.8508 91.1647 11.3601C90.2687 10.8588 89.5647 10.1761 89.0527 9.3121C88.5514 8.4481 88.3007 7.47744 88.3007 6.4001C88.3007 5.32277 88.5514 4.3521 89.0527 3.4881C89.5647 2.6241 90.2687 1.94677 91.1647 1.4561C92.0714 0.954768 93.0794 0.704102 94.1887 0.704102C95.2981 0.704102 96.2954 0.949435 97.1807 1.4401C98.0767 1.93077 98.7807 2.61344 99.2927 3.4881C99.8047 4.3521 100.061 5.32277 100.061 6.4001C100.061 7.47744 99.8047 8.45344 99.2927 9.3281C98.7807 10.1921 98.0767 10.8694 97.1807 11.3601C96.2954 11.8508 95.2981 12.0961 94.1887 12.0961ZM94.1887 11.0401C95.0741 11.0401 95.8741 10.8428 96.5887 10.4481C97.3034 10.0428 97.8634 9.4881 98.2687 8.7841C98.6741 8.06943 98.8767 7.27477 98.8767 6.4001C98.8767 5.52543 98.6741 4.7361 98.2687 4.0321C97.8634 3.31744 97.3034 2.76277 96.5887 2.3681C95.8741 1.96277 95.0741 1.7601 94.1887 1.7601C93.3034 1.7601 92.4981 1.96277 91.7727 2.3681C91.0581 2.76277 90.4927 3.31744 90.0767 4.0321C89.6714 4.7361 89.4687 5.52543 89.4687 6.4001C89.4687 7.27477 89.6714 8.06943 90.0767 8.7841C90.4927 9.4881 91.0581 10.0428 91.7727 10.4481C92.4981 10.8428 93.3034 11.0401 94.1887 11.0401Z"
                />
                <path
                  d="M112.075 0.800101V12.0001H111.099L103.899 2.9121V12.0001H102.715V0.800101H103.691L110.907 9.8881V0.800101H112.075Z"
                />
              </svg>
            </CustomLink>
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
