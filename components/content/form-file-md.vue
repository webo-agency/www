<template>
  <div
    class="relative group flex items-start max-w-fit p-5 mt-4 mb-5 desktop:mb-10 rounded-[5px] transition duration-200 bg-gray-lighter border border-solid tablet:min-w-[480px] overflow-hidden"
    :class="isOverDropZone ? 'border-green-main' : 'border-transparent'"
    @dragenter="setDropZoneState(true)"
    @dragleave="setDropZoneState(false)"
    @drop="setDropZoneState(false)"
  >
    <input
      class="absolute inset-0 appearance-none opacity-0 cursor-pointer"
      type="file"
      name="attachment"
      @change="onFileChange"
    />
    <div
      class="rounded-[5px] p-3 text-gray-dark group-hover:text-green-main transition duration-200 border border-solid border-gray-dark mr-5"
    >
      <svg
        class="fill-current"
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 25.1554V27.1943C0 28.9987 0.715639 30.7317 1.99196 32.008C3.26829 33.2844 5.00132 34 6.80571 34H27.1943C28.9987 34 30.7317 33.2844 32.008 32.008C33.2844 30.7317 34 28.9987 34 27.1943V25.1554C34 24.7742 33.6921 24.4663 33.3109 24.4663C32.9296 24.4663 32.6217 24.7742 32.6217 25.1554V27.1943C32.6217 28.6337 32.0488 30.014 31.0314 31.0314C30.014 32.0488 28.6337 32.6217 27.1943 32.6217H6.80571C5.36628 32.6217 3.98597 32.0488 2.96858 31.0314C1.95119 30.014 1.37827 28.6337 1.37827 27.1943V25.1554C1.37827 24.7742 1.0704 24.4663 0.689134 24.4663C0.307868 24.4663 0 24.7742 0 25.1554ZM16.8369 0.0183499L16.8267 0.0203886L16.7941 0.0305831L16.7635 0.0407771L16.7309 0.0530104L16.7003 0.0672823L16.6799 0.0774768L16.6493 0.0937875L16.6208 0.112137L16.5922 0.132526L16.5637 0.152914L16.5372 0.177381L16.5127 0.201847L8.35728 8.35728C8.08815 8.62641 8.08815 9.06273 8.35728 9.33186C8.62641 9.60099 9.06273 9.60099 9.33186 9.33186L16.3109 2.35488V25.1554C16.3109 25.5367 16.6187 25.8446 17 25.8446C17.3813 25.8446 17.6891 25.5367 17.6891 25.1554V2.35488L24.6681 9.33186C24.9373 9.60099 25.3736 9.60099 25.6427 9.33186C25.9119 9.06273 25.9119 8.62641 25.6427 8.35728L17.4873 0.201847C17.4486 0.16107 17.4057 0.128448 17.3588 0.0999041L17.3507 0.0937875L17.3201 0.0774768L17.2916 0.0632049L17.2589 0.0489329L17.2284 0.0387384L17.2059 0.0305831L17.1733 0.0203886L17.1631 0.0183499C17.1101 0.0061167 17.0551 0 17 0C16.945 0 16.8899 0.0061167 16.8369 0.0183499Z"
        />
      </svg>
    </div>
    <div>
      <Transition>
        <div v-if="!fileUploaded">
          <div
            v-if="$slots.title"
            class="text-gray-dark text-base desktop:text-lg font-semibold"
          >
            <ContentSlot :use="$slots.title" />
          </div>
          <div
            v-if="$slots.description"
            class="text-gray-dark/50 text-sm desktop:text-base"
          >
            <ContentSlot :use="$slots.description" />
          </div>
        </div>
      </Transition>
      <Transition>
        <ul v-if="fileUploaded">
          <li v-for="(file, index) in fileUploaded" :key="index">
            <span class="text-gray-dark font-semibold mb-2">
              {{ file.name }}
            </span>
          </li>
        </ul>
      </Transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOverDropZone: false,
      fileUploaded: false,
    };
  },
  methods: {
    setDropZoneState(value) {
      this.isOverDropZone = value;
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      }
      this.fileUploaded = files;
    },
  },
};
</script>

<style>
.v-enter-active,
.v-leave-active {
  position: absolute;
  transition: all 0.4s ease-in-out;
}
.v-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
