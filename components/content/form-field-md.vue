<template>
  <div v-if="type == 'text'" class="formText">
    <input
      class="textInput"
      type="text"
      :name="name ? name : 'text_field'"
      placeholder=" "
    />
    <span v-if="$slots.placeholder">
      <ContentSlot :use="$slots.placeholder" unwrap="p" />
    </span>
  </div>

  <div
    v-else-if="type == 'email'"
    class="formText"
    :class="{ invalid: emailInput && !isEmailValid }"
  >
    <input
      class="textInput"
      type="email"
      name="mail"
      v-model="emailInput"
      placeholder=" "
    />
    <span v-if="$slots.placeholder">
      <ContentSlot :use="$slots.placeholder" unwrap="p" />
    </span>
  </div>

  <div v-else-if="type == 'textarea'" class="formText">
    <textarea
      class="textInput min-h-[60px] max-h-[500px]"
      :name="name ? name : 'description'"
      placeholder=" "
    ></textarea>
    <span v-if="$slots.placeholder">
      <ContentSlot :use="$slots.placeholder" unwrap="p" />
    </span>
  </div>

  <div v-else class="formText">
    <input
      class="textInput"
      :type="type"
      :name="name ? name : 'unknown'"
      placeholder=" "
    />
    <span v-if="$slots.placeholder">
      <ContentSlot :use="$slots.placeholder" unwrap="p" />
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emailInput: "",
    };
  },
  props: {
    type: String,
    name: String,
  },
  computed: {
    isEmailValid() {
      return String(this.emailInput)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
        ? true
        : false;
    },
  },
};
</script>

<style  lang="postcss" scoped>

.formText {
  @apply relative pt-5 max-w-[700px];
}

.formText .textInput {
  @apply w-full border border-solid border-gray-default rounded-[5px] px-5 py-[15px] text-base desktop:text-lg transition duration-200  focus-visible:border-green-main focus-visible:outline-none;
}

.formText span {
  @apply absolute left-5 top-[6px] leading-3 text-[10px] text-gray-dark/50 italic pointer-events-none transition-all duration-200;
}

.formText .textInput:placeholder-shown ~ span {
  @apply top-[35px] text-sm desktop:text-base;
}

.formText .textInput:focus ~ span {
  @apply top-[6px] text-[10px] leading-3 text-green-main font-semibold;
}

.formText.invalid span {
  @apply text-red-500 font-semibold;
}
.formText.invalid input {
  @apply border-red-500;
}
</style>
