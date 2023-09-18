<template>
  <div
    class="basis-1/3 desktop-wide:basis-auto tablet:ml-10 desktop:ml-20 relative w-full h-fit px-5 desktop:pl-20 py-10 desktop:pt-[100px] desktop:pb-20 rounded-[5px] bg-gray-lighter tablet:bg-none"
  >
    <div
      class="hidden tablet:block absolute top-0 left-0 h-full w-screen bg-gray-lighter rounded-l-[5px]"
    ></div>
    <div class="relative">
      <div
        class="border-b-2 border-solid border-gray-default mb-10 desktop:mb-20"
      >
        <ul class="max-w-[350px] pb-10 desktop:pb-[100px]">
          <slot name="icons"></slot>
        </ul>
      </div>
      <div
        v-if="$slots.contacttext"
        class="text-lg desktop:text-xl font-semibold mb-5 desktop:mb-10"
      >
        <ContentSlot :use="$slots.contacttext" />
      </div>
      <div
        v-if="mail"
        class="mb-3 tablet:mb-5 text-lg desktop:text-2xl whitespace-nowrap"
      >
        <span
          class="inline-block text-green-main w-5 tablet:w-8 font-semibold mr-2.5"
          >M/</span
        >
        <CustomLink
          class="inline-block underline font-normal"
          :url="'mailto:' + mail"
          :title="mail"
        >
        </CustomLink>
      </div>
      <div
        v-if="tel"
        class="mb-3 tablet:mb-5 text-lg desktop:text-2xl whitespace-nowrap"
      >
        <span
          class="inline-block text-green-main w-5 tablet:w-8 font-semibold mr-2.5"
          >T/</span
        >
        <CustomLink
          class="inline-block underline font-normal"
          :url="'tel:' + tel"
          :title="$addTelSpaces(tel)"
        >
        </CustomLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlockContactInfo",
  props: {
    mail: String,
    tel: String,
  },
};
</script>

<style></style>
