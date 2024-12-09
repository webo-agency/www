<template>
  <div>
    <div
      class="px-5 tablet:px-10 desktop:px-20 pt-20 desktop:pt-[140px] bg-gray-darkest"
    >
      <div class="mx-auto max-w-screen-desktop-wide font-body text-white">
        <div
          itemscope itemtype="https://schema.org/Organization"
          class="flex flex-col pb-20 bg-contain tablet:bg-auto bg-no-repeat bg-right-bottom"
          style="background-image: url(./img/bg_logo_slice_2.png)"
        >
          <div class="flex flex-col tablet:flex-row mb-10">
            <div
              class="flex flex-col basis-1/3 min-w-max shrink-0 mb-10 tablet:mb-0 pr-5 relative"
            >
              <div
                class="p-5 tablet:p-10 bg-gradient-to-b from-gray-darker/50 before:content-[''] before:w-full before:h-full before:bg-black before:absolute before:top-0 before:left-0 before:z-[-1]"
              >
                <div class="h-10 mb-[30px] tablet:mb-[60px]">
                  <svg
                    class="fill-current"
                    width="132"
                    height="40"
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
                </div>
                <div
                  v-if="mail"
                  class="mb-3 tablet:mb-5 text-lg desktop:text-2xl"
                >
                  <span
                    class="inline-block text-green-main w-5 tablet:w-8 font-semibold mr-2.5"
                    >M/</span
                  >
                  <CustomLink
                    itemprop="email"
                    class="inline-block underline font-normal"
                    :url="'mailto:' + mail"
                    :title="mail"
                  >
                  </CustomLink>
                </div>
                <div
                  v-if="tel"
                  class="mb-3 tablet:mb-5 text-lg desktop:text-2xl"
                >
                  <span
                    class="inline-block text-green-main w-5 tablet:w-8 font-semibold mr-2.5"
                    >T/</span
                  >
                  <CustomLink
                    itemprop="telephone"
                    class="inline-block underline font-normal"
                    :url="'tel:' + tel"
                    :title="$addTelSpaces(tel)"
                  >
                  </CustomLink>
                </div>
              </div>
            </div>
            <div
              class="p-5 tablet:p-10 flex flex-col basis-2/5 mb-[30px] tablet:mb-0"
            >
              <div
                class="flex items-end h-10 mb-[30px] tablet:mb-[60px] text-lg desktop:text-xl font-semibold"
                v-html="$formatText(servicesTitle)"
              ></div>
              <ul class="desktop:max-h-[180px] flex flex-col flex-wrap">
                <li
                  v-for="(item, index) in services"
                  :key="index"
                  class="block mb-2 tablet:mb-4 max-w-[270px] text-base desktop:text-lg pr-5"
                >
                  <CustomLink
                    v-if="item.link"
                    class="text-inherit hover:text-green-main transition duration-300"
                    :url="item.link"
                    :activeClass="'none'"
                    >{{ item.title }}
                  </CustomLink>
                  <div
                    v-else-if="item.title"
                    v-html="$formatText(item.title)"
                  ></div>
                </li>
              </ul>
            </div>
            <div class="p-5 tablet:p-10 flex flex-col basis-1/6">
              <div
                class="flex items-end h-10 mb-[30px] tablet:mb-[60px] text-lg desktop:text-xl font-semibold"
                v-html="$formatText(brandTitle)"
              ></div>
              <ul class="flex flex-col flex-wrap">
                <li
                  v-for="(item, index) in brand"
                  :key="index"
                  class="block mb-2 tablet:mb-4 max-w-[250px] text-base desktop:text-lg pr-5"
                >
                  <CustomLink
                    v-if="item.link"
                    class="text-inherit hover:text-green-main transition duration-300"
                    :url="item.link"
                    :activeClass="'none'"
                    >{{ item.title }}
                  </CustomLink>
                  <div
                    v-else-if="item.title"
                    v-html="$formatText(item.title)"
                  ></div>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex flex-col tablet:flex-row">
            <div class="flex flex-col basis-1/3 min-w-max shrink-0 pr-5">
              <div
                v-if="brandName"
                itemprop="name"
                class="prose text-base font-semibold mb-1"
                v-html="brandName"
              ></div>
              <div
                v-if="location"
                class="prose text-base mb-3"
                v-html="location"
              ></div>
              <Socials
                v-if="socials"
                class="mb-10 tablet:mb-0"
                :socials="socials"
              />
            </div>

            <div
              class="flex flex-col phone-wide:flex-row flex-wrap gap-5 tablet:gap-10 tablet-wide:basis-2/3"
            >
              <WidgetRatingClutch
                class="hidden w-[204px] self-start p-2 bg-none rounded-[5px]"
              />
              <a
                href="https://clutch.co/profile/webo?utm_source=widget&utm_medium=2&utm_campaign=widget&utm_content=logo&utm_term=localhost#highlights"
                target="_blank"
              >
                <span class="mb-1 font-light">REVIEWED ON</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="124"
                  height="35"
                  viewBox="0 0 124 35"
                  fill="none"
                >
                  <path d="M32.041 0H37.71V34.9997H32.041V0Z" fill="white" />
                  <path
                    d="M57.4284 23.9063C57.4284 29.3288 52.9919 29.8217 51.513 29.8217C48.0623 29.8217 47.5694 26.6175 47.5694 24.8922V11.3359H41.9004V24.6457C41.9004 27.8499 42.8863 30.8076 44.8581 32.533C46.5835 34.2583 48.8017 34.9977 51.513 34.9977C53.4848 34.9977 55.9496 34.5048 57.4284 33.0259V34.9977H63.0974V11.3359H57.4284V23.9063Z"
                    fill="white"
                  />
                  <path
                    d="M74.1892 2.71094H68.5202V11.3376H64.3301V16.7601H68.5202V34.9994H74.1892V16.7601H78.3793V11.3376H74.1892V2.71094Z"
                    fill="white"
                  />
                  <path
                    d="M96.1257 27.8507C94.8933 28.8366 93.168 29.576 91.4426 29.576C87.499 29.576 84.7877 26.6183 84.7877 22.6746C84.7877 18.731 87.499 16.0198 91.4426 16.0198C93.168 16.0198 94.8933 16.5127 96.1257 17.7451L96.8651 18.4845L100.809 14.7874L99.8228 14.0479C97.6045 12.0761 94.6468 10.8438 91.4426 10.8438C84.5413 10.8438 79.3652 16.0198 79.3652 22.9211C79.3652 29.8225 84.5413 34.9985 91.4426 34.9985C94.6468 34.9985 97.6045 33.7661 99.8228 31.7943L100.809 31.0549L96.8651 27.1112L96.1257 27.8507Z"
                    fill="white"
                  />
                  <path
                    d="M120.773 13.3098C119.048 11.5844 117.322 10.845 114.611 10.845C112.639 10.845 110.667 11.3379 109.188 12.8168V0H103.52V34.9997H109.188V21.9365C109.188 16.514 112.886 16.021 114.365 16.021C117.815 16.021 117.569 19.2252 117.569 20.9505V34.7533H123.238V21.197C123.238 17.9928 122.498 15.0351 120.773 13.3098Z"
                    fill="white"
                  />
                  <path
                    d="M91.1956 26.8638C93.3736 26.8638 95.1392 25.0982 95.1392 22.9202C95.1392 20.7422 93.3736 18.9766 91.1956 18.9766C89.0176 18.9766 87.252 20.7422 87.252 22.9202C87.252 25.0982 89.0176 26.8638 91.1956 26.8638Z"
                    fill="#EF4335"
                  />
                  <path
                    d="M24.1548 26.3732C22.1829 28.345 19.2252 29.5774 16.021 29.5774C9.85908 29.5774 5.4225 24.6479 5.4225 17.993C5.4225 11.3381 9.85908 6.40857 16.2675 6.40857C19.2252 6.40857 22.1829 7.64095 24.4012 9.85925L25.1407 10.5987L28.8378 6.90152L28.0984 6.16209C24.8942 2.95789 20.7041 1.23255 16.2675 1.23255C6.90136 0.986072 0 8.38038 0 17.993C0 27.6056 6.90136 34.9999 16.021 34.9999C20.4576 34.9999 24.8942 33.2746 27.8519 30.0704L28.5913 29.3309L24.8942 25.6338L24.1548 26.3732Z"
                    fill="white"
                  />
                </svg>
              </a>
              <WidgetRatingGoogle
                class="hidden self-start p-2 bg-white rounded-[5px]"
                :rating="googleRating"
                :link="googleRatingLink"
                :text="googleRatingText"
              />
              <div v-if="showContributions" class="max-w-[270px]">
                <nuxt-picture
                  src="/img/contributions.webp"
                  width="138"
                  height="64"
                  fit="inside"
                  class="object-contain object-left-top"
                  loading="lazy"
                  alt="contributions"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="px-5 tablet:px-10 desktop:px-20 bg-green-gray h-[60px] text-gray-darker flex flex-col tablet:flex-row items-center justify-between py-2.5"
    >
      <span class="text-xs desktop:text-sm mb-2.5 tablet:mb-0"
        >2024 Webo | All rights reserved</span
      >
      <CustomLink
        v-if="privacyPolicyLink"
        class="text-xs desktop:text-sm hover:text-green-main transition duration-300"
        :url="privacyPolicyLink"
        :activeClass="'none'"
        >{{ privacyPolicyTitle ? privacyPolicyTitle : "Polityka prywatności" }}
      </CustomLink>
    </div>
  </div>
</template>

<script>
import Socials from "./socials.vue";
import CustomLink from "./custom-link.vue";
export default {
  name: "LayoutFooter",
  props: {
    tel: String,
    mail: String,
    privacyPolicyLink: String,
    privacyPolicyTitle: String,
    clutchLink: String,
    servicesTitle: String,
    services: Array,
    brandTitle: String,
    brand: Array,
    brandName: String,
    location: String,
    socials: Array,
    clutchLink: String,
    googleRating: Number,
    googleRatingLink: String,
    googleRatingText: String,
    showContributions: Boolean,
  },
  components: { Socials, CustomLink },
};
</script>

<style></style>
