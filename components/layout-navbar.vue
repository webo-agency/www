<template>
  <nav 
    class="fixed top-0 left-0 w-full z-40" 
    :class="{
      'pointer-events-none': !isVisible && !mobileExpanded,
      '!z-50': mobileExpandedVisible,
    }"
  >
    <div
      class="absolute desktop:hidden top-0 left-0 h-d-screen w-screen bg-black/50 pointer-events-none transition duration-500"
      :class="{ 'opacity-0': !mobileExpanded || isLargeScreen }"
    />

    <div
      class="relative px-5 tablet:px-10 desktop:px-20 desktop:overflow-visible transition-all duration-500 desktop:duration-300"
      :class="[
        { '-translate-y-full shadow-none': !isVisible && !mobileExpanded },
        { 'bg-green-gray': !isTransparent || mobileExpanded },
        {
          'text-white border-b-[1px] !border-b-[rgba(8,219,186,0.2)]':
            isTransparent && !mobileExpanded,
        },
        {
          'text-gray-darker border-b-[1px] border-b-[#E4EFED]':
            !isTransparent && !mobileExpanded,
        },
        mobileExpanded ? 'h-d-screen ' : 'h-[60px] desktop:h-[94px]',
      ]"
      @transitionstart="handleTransitionStart"
      @transitionend="handleTransitionEnd"
    >
      <div
        ref="containerRef"
        class="h-full flex flex-col desktop:flex-row desktop:justify-between desktop:items-center mx-auto max-w-screen-desktop-wide"
        :class="isTransparent && !mobileExpanded ? 'text-white' : 'text-gray-darker'"
      >
        <div class="flex items-center justify-between py-3 tablet:py-2 desktop:py-0">
          <CustomLink
            url="https://webo.agency/"
            active-class="none"
            aria-label="Homepage"
            @click="handleLogoClick"
          >
            <svg
              class="fill-current transition duration-300 h-[30px] tablet:h-[41px] w-auto"
              width="135"
              height="41"
              viewBox="0 0 135 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill-rule="evenodd" clip-rule="evenodd" d="M131.605 41H127.55V34.2414H134.308V38.2958C134.308 39.7881 133.096 41 131.605 41ZM124.847 38.2958V40.9943L112.006 41C107.903 41 104.573 37.6687 104.573 33.5662V18.6985C104.573 14.5948 107.903 11.2647 112.006 11.2647H126.874C130.977 11.2647 134.308 14.5948 134.308 18.6985V31.5338H131.605V19.4664C131.605 16.1089 129.463 13.9677 126.107 13.9677H112.775C109.417 13.9677 107.276 16.1089 107.276 19.4664V32.7983C107.276 36.1547 109.417 38.2958 112.775 38.2958H124.847Z" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M79.318 11.2693L92.1589 11.2636C96.2614 11.2636 99.5916 14.5949 99.5916 18.6974V33.5651C99.5916 37.6688 96.2614 40.9989 92.1589 40.9989H77.2901C73.1876 40.9989 69.8563 37.6688 69.8563 33.5651V0.601559H72.5593V32.7972C72.5593 36.1548 74.7016 38.2959 78.058 38.2959H91.3899C94.7475 38.2959 96.8886 36.1548 96.8886 32.7972V19.4653C96.8886 16.1089 94.7475 13.9678 91.3899 13.9678H79.318V11.2693Z" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M64.8764 40.9943L42.5738 41C38.4712 41 35.1411 37.6687 35.1411 33.5662V18.6985C35.1411 14.5948 38.4712 11.2647 42.5738 11.2647H57.4425C61.5451 11.2647 64.8764 14.5948 64.8764 18.6985V31.5338H44.6016V28.8331H62.1733V19.4664C62.1733 16.1089 60.0311 13.9677 56.6747 13.9677H43.3428C39.9852 13.9677 37.8441 16.1089 37.8441 19.4664V32.7983C37.8441 36.1547 39.9852 38.2958 43.3428 38.2958H64.8764V40.9943Z" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M22.7255 41H21.6578V38.2821H22.2426C25.4629 38.1425 27.4518 36.0655 27.4564 32.7983V11.2647H30.1548L30.1593 33.5662C30.1593 37.6687 26.8292 41 22.7255 41ZM2.70368 11.2647V32.7983C2.70826 36.0655 4.69716 38.1425 7.91856 38.2821L7.43449 41C3.33079 41 0 37.6687 0 33.5662L0.0051477 11.2647H2.70368ZM15.08 41H7.43449L7.91856 38.2821H12.377L12.3759 28.8331H15.0743L15.08 41Z" />
            </svg>
          </CustomLink>
          <HamburgerBtn
            class="flex flex-col justify-between desktop:hidden"
            :btn-active="mobileExpanded"
            @click="toggleMobile"
          />
        </div>

        <div
          itemscope
          itemtype="https://schema.org/SiteNavigationElement"
          class="flex flex-col justify-between desktop:justify-center h-full scrollbar-none overflow-y-auto desktop:overflow-visible"
        >
          <ul class="grow desktop:grow-0 shrink-0 flex flex-col desktop:flex-row desktop:items-center desktop:gap-[26px] mt-10 desktop:my-0">
            <li
              v-for="(item, index) in menu"
              :key="index"
              itemprop="name"
              class="w-full desktop:w-auto font-semibold transition-[transform,opacity] duration-300"
              :class="[
                { 'desktop:text-green-main desktop:[&_.collapse-icon]:rotate-180': hoverItem === item.title },
                { '-translate-x-full desktop:translate-x-0 opacity-0': !mobileExpanded && !isLargeScreen },
                { 'grow flex items-end pt-7 desktop:pt-0': item.type === 'button'}
              ]"
              :style="getItemStyle(index)"
              @mouseover="handleMenuItemHover(item)"
              @mouseleave="handleMenuItemLeave(item)"
            >
              <CustomLink
                :url="item.link"
                :active-class="'none-temp'"
                itemprop="url"
                class="flex items-center justify-between desktop:mr-0 transition duration-300 group"
                :class="item.type === 'button'
                  ? 'relative w-full desktop:w-auto bg-green-main hover:bg-green-mainHover text-gray-darker transition duration-300 pl-9 pr-6 desktop:px-5 py-5 desktop:py-3 rounded-full'
                  : 'pl-0 p-[18px] desktop:p-3 hover:text-green-main border-b border-b-black/10 desktop:border-none'"
                @click="handleMenuClick()"
              >
                <div
                  class="prose uppercase"
                  itemprop="name"
                  :class="[
                    item.type === 'button' ? 'text-lg desktop:text-base leading-5' : 'text-lg desktop:text-base',
                    { 'desktop:pr-8': item.items },
                  ]"
                >
                  {{ item.title }}
                </div>
                <span
                  v-if="item.type === 'button'"
                  itemprop="name"
                  class="h-0.5 w-[14px] ml-3 mt-0.5 bg-current z-10 group-hover:translate-x-1 transition-transform duration-200"
                />
              </CustomLink>

              <div
                v-if="item.items"
                data-collapsed="true"
                class="relative transition duration-300"
              >
                <div
                  class="absolute right-0 desktop:right-2 z-20 top-[-50px] desktop:top-[-46px] w-10 h-10 flex justify-center items-center text-gray-darker desktop:text-current"
                  @click.stop="toggleAccordion"
                >
                  <svg class="desktop:hidden" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 5L19 18M19 18V5.52M19 18H6.52" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <svg class="hidden desktop:block collapse-icon transition !duration-300 desktop:transition-transform fill-current text-inherit" width="15" height="8" viewBox="0 0 10 6">
                    <path d="M9.15962 -3.67343e-08L10 0.840384L5 5.84046L-3.67343e-08 0.840383L0.840383 -4.0038e-07L5 4.21488L9.15962 -3.67343e-08Z" />
                  </svg>
                </div>
                <div class="mobile-accordion-content desktop:hidden overflow-hidden h-0 transition-all duration-300">
                  <ul>
                    <li v-for="(subItem, subIndex) in item.items" :key="subIndex" itemprop="name" class="border-b border-b-black/10">
                      <CustomLink
                        :url="subItem.link"
                        class="flex items-center text-lg uppercase py-[18px] pr-10 text-gray-darker hover:text-green-main transition duration-300"
                        @click="handleMenuClick"
                      >
                        <span class="w-2.5 h-[5px] mx-2.5 rounded-full bg-green-main"></span>
                        <div itemprop="name">{{ subItem.title }}</div>
                      </CustomLink>
                      <div v-if="subItem.items || subItem.type == 'section'" data-collapsed="true" class="relative transition duration-300">
                        <div
                          class="absolute right-0 desktop:right-2 z-20 top-[-50px] desktop:top-[-46px] w-10 h-10 flex justify-center items-center desktop:pointer-events-none text-gray-darker desktop:text-inherit"
                          @click.stop="toggleAccordion"
                        >
                          <svg class="desktop:hidden" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 5L19 18M19 18V5.52M19 18H6.52" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>
                        <div class="mobile-accordion-content overflow-hidden h-0 transition-all duration-300">
                          <div v-if="subItem.type == 'section'">
                            <SubmenuSectionTiles :data="subItem" />
                          </div>
                          <ul v-else-if="subItem.items">
                            <li v-for="(subItemDeep, subIndexDeep) in subItem.items" :key="subIndexDeep" itemprop="name">
                              <CustomLink
                                :url="subItemDeep.link"
                                class="flex items-center text-base py-4 pl-8 text-gray-darker hover:text-green-main transition duration-300 "
                                @click="handleMenuClick"
                              >
                                <div itemprop="name">{{ subItemDeep.title }}</div>
                              </CustomLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li class="transition-[transform,opacity] duration-300 order-[9999]" :class="{ '-translate-x-full desktop:translate-x-0 opacity-0': !mobileExpanded && !isLargeScreen }" :style="getLangSwitcherStyle">
              <LangSwitcher />
            </li>
          </ul>

          <div class="desktop:hidden flex flex-col mb-5 transition duration-500" :class="{ 'translate-y-[80vh] desktop:translate-y-0 opacity-0': !mobileExpanded && !isLargeScreen }">
            <WidgetRatingClutch :shrink-mobile="false" class="mb-5" />
            <Socials v-if="socials" :socials="socials" :invert-colors="true" />
          </div>
        </div>
      </div>

      <div class="hidden desktop:block absolute top-full inset-x-0 w-full z-0 bg-green-gray"
        @mouseover="popUpHover = true" @mouseleave="popupReset">
        <SubmenuPopup :active="popUpActive" :name="hoverItem" :data="popUpData" @link-clicked="popupReset" />
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import { useScroll } from '@vueuse/core';
import { useRoute } from 'vue-router';
import SubmenuPopup from './submenu-popup.vue';
import HamburgerBtn from './hamburger-btn.vue';
import Socials from './socials.vue';
import CustomLink from './custom-link.vue';

const props = defineProps({
  menu: { type: Array, default: () => [] },
  socials: { type: Array, default: () => [] },
  clutchLink: { type: String, default: '' },
});

const route = useRoute();
const isTransparent = ref(true);
const isLargeScreen = ref(true);
const mobileExpanded = ref(false);
const mobileExpandedVisible = ref(false);
const popUpData = ref(null);
const popUpActive = ref(false);
const popUpHover = ref(false);
const hoverItem = ref('');

const { y: scrollY, directions } = useScroll(globalThis.window);
const show = ref(true);

const isVisible = computed(() => {
  if (scrollY.value < 40) show.value = true;
  else if (directions.top) show.value = true;
  else if (directions.bottom) show.value = false;
  return show.value;
});

const isHomePage = computed(() => route.path === '/');

const toggleAccordion = (event) => {
  const parentWrapper = event.currentTarget.parentElement;
  const content = parentWrapper.querySelector('.mobile-accordion-content');
  const isOpening = parentWrapper.getAttribute('data-collapsed') === 'true';

  parentWrapper.setAttribute('data-collapsed', isOpening ? 'false' : 'true');

  if (isOpening) {
    content.style.height = `${content.scrollHeight}px`;
    content.addEventListener('transitionend', () => {
      if (parentWrapper.getAttribute('data-collapsed') === 'false') {
        content.style.height = 'auto';
      }
    }, { once: true });
  } else {
    if (content.style.height === 'auto') {
      content.style.height = `${content.scrollHeight}px`;
      content.offsetHeight;
    }
  
    content.style.height = '0px';
  }
};

const toggleMobile = () => { mobileExpanded.value = !mobileExpanded.value; };
const handleLogoClick = () => {
  if (!isLargeScreen.value && mobileExpanded.value) toggleMobile();
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleMenuItemHover = (item) => {
  if (item.items) {
    popUpData.value = item.items;
    popUpActive.value = true;
    popUpHover.value = true;
    hoverItem.value = item.title;
  }
};

const handleMenuItemLeave = () => {
  popUpHover.value = false;
  setTimeout(() => {
    if (!popUpHover.value) {
      popupReset()
    }
  }, 400);
};

const handleMenuClick = () => { if (!isLargeScreen.value) toggleMobile(); };
const popupReset = () => { 
  popUpData.value = null
  popUpActive.value = false;
  popUpHover.value = false;
  hoverItem.value = '';
};

const handleTransitionStart = () => { if (mobileExpanded.value) mobileExpandedVisible.value = true; };
const handleTransitionEnd = () => { if (!mobileExpanded.value) mobileExpandedVisible.value = false; };

const getItemStyle = (index) => {
  const delay = mobileExpanded.value && !isLargeScreen.value ? `${index * 60}ms` : '';
  return { 'transition-delay': delay, order: index * 2 };
};

const getLangSwitcherStyle = computed(() => ({
  'transition-delay': mobileExpanded.value && !isLargeScreen.value ? `${props.menu.length * 60}ms` : '0ms'
}));

const onWidthChange = () => { isLargeScreen.value = window.innerWidth >= 1248; };

watch(isLargeScreen, (val) => { if (val) mobileExpanded.value = false; });
watch([scrollY, isHomePage], () => {
  isTransparent.value = scrollY.value < 170 && isHomePage.value;
}, { immediate: true });

onMounted(() => {
  onWidthChange();
  window.addEventListener('resize', onWidthChange);
});
onUnmounted(() => window.removeEventListener('resize', onWidthChange));
</script>

<style scoped>
.nuxt-link-active { @apply text-green-main; }
[data-collapsed="false"] .collapse-icon { @apply rotate-180; }
.scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
.scrollbar-none::-webkit-scrollbar { display: none; }
</style>