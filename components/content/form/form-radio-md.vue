<template>
  <li class="basis-auto w-fit bg-[#20202080] p-3">
    <div class="flex">
      <input
        type="radio"
        :id="value"
        name="service"
        :value="value"
        class="shrink-0 cursor-pointer"
      />
      <label
        :for="value"
        class="pl-2.5 desktop:pl-[15px] text-white text-base font-semibold cursor-pointer"
      >
        <ContentSlot :use="$slots.label" />
      </label>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    value: String,
  },
};
</script>

<style  lang="postcss" scoped>
input[type="radio"] {
  background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2211%22%20height%3D%228%22%20fill%3D%22none%22%20viewBox%3D%220%200%2011%208%22%3E%3Cpath%20fill%3D%22%23000%22%20d%3D%22M10.405%201.519A.89.89%200%201%200%209.146.26l-5.59%205.592-2.037-2.038A.89.89%200%201%200%20.26%205.073L2.926%207.74a.89.89%200%200%200%201.259%200z%22/%3E%3C/svg%3E");
  @apply w-5 h-5 mt-1 rounded-[5px] appearance-none border border-green-main border-solid transition-all duration-200 bg-no-repeat bg-top checked:bg-center checked:bg-green-main;
}
</style>
