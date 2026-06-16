<template>
  <li>
    <effect-appear :toggleOpacity="false">
      <div class="ordered-item">
        <div class="li-faded flex flex-col tablet:flex-row pb-10 tablet:pb-16">
          <div class="tablet:ml-5">
            <div v-if="$slots.title" class="mt-2 mb-5 text-xl font-semibold">
              <ContentSlot :use="$slots.title" />
            </div>
            <div v-if="$slots.description" class="mb-5">
              <ContentSlot :use="$slots.description" />
            </div>
            <div
          class="line relative w-[135px] h-0.5 rounded-full bg-gray-light overflow-hidden after:content-[''] after:absolute after:-top-0.5 after:right-full after:w-full after:h-2 after:bg-green-main tablet-small:after:translate-x-0 tablet-small:group-hover:after:translate-x-full after:transition after:duration-300"
        ></div>
          </div>
        </div>
      </div>
    </effect-appear>
    </li>
</template>

<script>
export default {
};
</script>

<style>
.effect .li-faded{
 @apply opacity-25 transition duration-300
}

.effect.active .li-faded{
 @apply opacity-100
}

.effect.active .line{
  @apply after:translate-x-full;
}
</style>
