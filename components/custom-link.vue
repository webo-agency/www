<template>
  <span v-if="!title && disabled">
    <slot></slot>
  </span>
  <span v-else-if="title && disabled"
  v-html="title">    
  </span>
  <nuxt-link
    v-else-if="!title && !isExternalCheck"
    :to="urlFormatted"
    :active-class="activeClass ? activeClass : 'nuxt-link-active'"
  >
    <slot></slot>
  </nuxt-link>
  <nuxt-link
    v-else-if="title && !isExternalCheck"
    :to="urlFormatted"
    :active-class="activeClass ? activeClass : 'nuxt-link-active'"
    v-html="title"
  >
  </nuxt-link>

  <a
    v-else-if="
      (isExternalCheck && !title) || (isExternalCheck && hasDefaultSlot)
    "
    :href="url"
    :target="targetSet"
    :class="{ 'pointer-events-none': url === '' }"
  >
    <slot></slot>
  </a>
  <a
    v-else
    :href="url"
    v-html="title"
    :target="targetSet"
    :class="{ 'pointer-events-none': url === '' }"
  >
  </a>
</template>

<script>
export default {
  name: "CustomLink",
  props: {
    disabled:{
      type: Boolean,
      default: false,
    },
    url: {
      type: String,
      required: true,
      default: "/",
    },
    title: {
      type: String,
      required: false,
    },
    isExternal: {
      type: Boolean,
      default: false,
    },
    activeClass: String,
  },
  computed: {
    hasDefaultSlot() {
      return !!this.$slots.default;
    },
    urlFormatted() {
      let formattedUrl = this.url
        .replace(this.$config.API_URL, "")
        .replace("https://www.webo.agency", "");
        if (this.$route.path == '/kontakt' && formattedUrl == '/kontakt') {
          formattedUrl = "/kontakt#formularz"
        }
      return formattedUrl;
    },
    isExternalCheck() {
      var r = new RegExp("^(?:[a-z+]+:)?//", "i");
      if (!this.url.includes("https://www.webo.agency")) {
        return true;
      }
      var urlCheck = this.url
        .replace(this.$config.API_URL, "")
        .replace("https://www.webo.agency", "");
      if (r.test(urlCheck)) {
        console.log(this.url);
        return true;
      }
      return this.isExternal;
    },
    targetSet() {
      return !this.url.includes("tel:") && !this.url.includes("mailto:")
        ? "_blank"
        : "";
    },
  },
};
</script>
