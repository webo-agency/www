<template>
  <div
    class="swiper-slide bg-[#ECF6F4] flex flex-col justify-between w-[576px] min-h-[440px] basis-full tablet:basis-1/2 shrink-0 mr-10 tablet:mr-0 tablet:pr-10 _desktop:pr-[140px] p-[30px_20px] desktop:p-[60px_40px]"
  >
    <div
      v-if="$slots.message"
      class="prose mb-4 leading-7 text-sm tablet:text-base desktop:text-lg"
    >
      <ContentSlot :use="$slots.message" />
    </div>

    <div class="relative flex flex-row gap-5 items-center">
      <div
        class="w-[50px] h-[50px] desktop:w-[70px] desktop:h-[70px] rounded-full overflow-hidden"
      >
        <nuxt-picture
          :src="'/img/icons/person.png'"
          class="block w-full h-full object-contain p-0.5 desktop:p-1 overflow-hidden rounded-[5px] bg-gray-light"
          :imgAttrs="{ class: 'h-full w-full object-contain ' }"
        />
      </div>
      <div class="relative flex flex-col min-h-[82px] pb-5">
        <div
          v-if="$slots.author"
          class="prose text-xl desktop:text-2xl font-semibold mb-[5px]"
        >
          <ContentSlot :use="$slots.author" />
        </div>
        <div v-if="$slots.title" class="prose leading-5 text-xs uppercase">
          <ContentSlot :use="$slots.title" />
        </div>

        <div class="flex gap-[6px] mt-4 w-max">
          <div v-for="index in 5" :key="index" class="relative overflow-hidden">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              xmlns="http://www.w3.org/2000/svg"
              fill="#F3CC00"
            >
              <path
                d="M20.2117 7.04256L13.9503 6.1301L11.1512 0.440169C11.0748 0.284382 10.949 0.158269 10.7936 0.0816118C10.404 -0.111267 9.93051 0.0494653 9.73568 0.440169L6.93665 6.1301L0.675183 7.04256C0.502555 7.06729 0.344724 7.14889 0.223885 7.27253C0.0777962 7.4231 -0.0027051 7.62565 6.9411e-05 7.8357C0.00284392 8.04574 0.0886673 8.24609 0.238681 8.39272L4.76893 12.8215L3.69864 19.0752C3.67354 19.2207 3.68959 19.3703 3.74498 19.5071C3.80037 19.6439 3.89287 19.7624 4.012 19.8492C4.13113 19.9359 4.27213 19.9875 4.41899 19.998C4.56585 20.0085 4.71271 19.9775 4.84292 19.9086L10.4435 16.956L16.044 19.9086C16.1969 19.9902 16.3745 20.0174 16.5446 19.9877C16.9737 19.9135 17.2623 19.5055 17.1883 19.0752L16.118 12.8215L20.6482 8.39272C20.7715 8.27155 20.8529 8.11329 20.8776 7.94019C20.9442 7.50745 20.6433 7.10686 20.2117 7.04256Z"
              />
            </svg>
            <div
              class="absolute top-0 left-full h-6 w-full backdrop-grayscale"
              :style="{
                transform:
                  'translateX(' +
                  ((rating - index) * 100 < -100
                    ? -100
                    : (rating - index) * 100) +
                  '%)',
              }"
            ></div>
          </div>
        </div>
      </div>
      <!-- message was here -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Opinion",
  props: {
    rating: Number,
  },
};
</script>

<style></style>
