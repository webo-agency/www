<template>
  <div v-if="type == 'text'" class="formText">
    <input class="textInput" type="text" :name="name ? name : 'text_field'" :id="name ? name : 'text_field'" placeholder=" " :required="required" />
    <label v-if="$slots.placeholder" :for="name ? name : 'unknown'">
      <slot name="placeholder" mdc-unwrap="p" />
      {{ required ? '*' : null }}
    </label>
  </div>

  <div v-else-if="type == 'email'" class="formText" :class="{ invalid: emailInput && !isEmailValid }">
    <input class="textInput" type="email" name="mail" id="mail" v-model="emailInput" placeholder=" " :required="required" />
    <label v-if="$slots.placeholder" for="mail">
      <slot name="placeholder" mdc-unwrap="p" />
      {{ required ? '*' : null }}
    </label>
  </div>

  <div v-else-if="type == 'textarea'" class="formText col-span-full">
    <textarea class="textInput min-h-50 max-h-125" :name="name ? name : 'description'" :id="name ? name : 'description'" placeholder=" "
      :required="required"></textarea>
    <label v-if="$slots.placeholder" :for="name ? name : 'unknown'">
      <slot name="placeholder" mdc-unwrap="p" />
      {{ required ? '*' : null }}
    </label>
  </div>

  <div v-else class="formText">
    <input class="textInput" :type="type" :name="name ? name : 'unknown'" :id="name ? name : 'unknown'" placeholder=" " :required="required" />
    <label v-if="$slots.placeholder" :for="name ? name : 'unknown'">
      <slot name="placeholder" mdc-unwrap="p" />
      {{ required ? '*' : null }}
    </label>
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
    required: Boolean
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

<style scoped>
@reference "~/assets/css/main.css";

.formText {
  @apply relative pt-2 max-w-175;
}

.formText .textInput {
  @apply w-full border border-solid border-gray-darker px-5 py-3.75 text-base desktop:text-lg transition duration-200 focus-visible:border-green-main focus-visible:outline-none;
}

.formText label {
  @apply inline-flex absolute left-5 top-2.5 text-[10px] text-current pointer-events-none transition-all duration-200;
}

.formText label > p {
  @apply m-0 inline;
}

.formText .textInput:placeholder-shown~label {
  @apply top-6.75 desktop:top-6.25 text-sm desktop:text-base;
}

.formText .textInput:focus~label {
  @apply top-2.5 text-[10px] leading-3 text-green-main font-semibold;
}

.formText.invalid label {
  @apply text-red-500 font-semibold;
}

.formText.invalid input {
  @apply border-red-500;
}
</style>
