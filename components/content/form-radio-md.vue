<template>
  <li class="basis-full phoneWide:basis-1/2 desktop:basis-1/3">
    <div class="flex mb-2 desktop:mb-4 mr-5 desktop:mr-[30px]">
      <input
        type="radio"
        :id="value"
        name="service"
        :value="value"
        class="shrink-0 cursor-pointer"
      />
      <label
        :for="value"
        class="pl-2.5 desktop:pl-[15px] text-gray-darker text-base desktop:text-lg font-semibold cursor-pointer"
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
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDExIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMC40MDQ3IDEuNTE4ODNDMTAuNTcxNiAxLjM1MTk4IDEwLjY2NTMgMS4xMjU2OCAxMC42NjUzIDAuODg5NzFDMTAuNjY1MyAwLjY1Mzc0NSAxMC41NzE2IDAuNDI3NDQzIDEwLjQwNDcgMC4yNjA1OUMxMC4yMzc5IDAuMDkzNzM3MyAxMC4wMTE2IDYuMDkwMThlLTA5IDkuNzc1NTkgMEM5LjUzOTYyIC02LjA5MDE4ZS0wOSA5LjMxMzMyIDAuMDkzNzM3MyA5LjE0NjQ3IDAuMjYwNTlMMy41NTU0NyA1Ljg1MzM2TDEuNTE4ODMgMy44MTQ5NEMxLjM1MTk4IDMuNjQ4MDkgMS4xMjU2OCAzLjU1NDM1IDAuODg5NzExIDMuNTU0MzVDMC42NTM3NDUgMy41NTQzNSAwLjQyNzQ0MyAzLjY0ODA5IDAuMjYwNTkgMy44MTQ5NEMwLjA5MzczNzMgMy45ODE3OSAwIDQuMjA4MSAwIDQuNDQ0MDZDMCA0LjY4MDAzIDAuMDkzNzM3MyA0LjkwNjMzIDAuMjYwNTkgNS4wNzMxOEwyLjkyNjM1IDcuNzM4OTRDMy4wMDg5IDcuODIxNyAzLjEwNjk1IDcuODg3MzUgMy4yMTQ5MSA3LjkzMjE1QzMuMzIyODYgNy45NzY5NCAzLjQzODU5IDggMy41NTU0NyA4QzMuNjcyMzUgOCAzLjc4ODA5IDcuOTc2OTQgMy44OTYwNCA3LjkzMjE1QzQuMDAzOTkgNy44ODczNSA0LjEwMjA1IDcuODIxNyA0LjE4NDU5IDcuNzM4OTRMMTAuNDA0NyAxLjUxODgzWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==);
  @apply w-5 h-5 mt-1 rounded-[5px] appearance-none border border-green-main border-solid transition-all duration-200 bg-no-repeat bg-top checked:bg-center checked:bg-green-main;
}
</style>
