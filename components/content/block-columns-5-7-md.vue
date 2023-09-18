<template>
  <div class="flex flex-col tablet:flex-row">
    <div class="basis-full tablet:basis-5/12 left">
      <slot name="left"></slot>
    </div>
    <div class="basis-full tablet:basis-7/12 right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
