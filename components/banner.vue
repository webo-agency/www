<template>
  <div
    class="relative h-[90vh] min-h-[650px] desktop:h-[860px] px-5 tablet:px-10 desktop:px-20 bg-center bg-cover bg-no-repeat ultraHd:bg-contain bg-gray-darker"
  >
    <nuxt-picture
      src="/img/banner_bg.png"
      class="absolute inset-0 z-0 w-full h-full object-cover"
    />
    <div
      class="flex items-center h-full mx-auto max-w-screen-desktop-wide relative z-10"
    >
      <div class="mt-10 desktop:mt-0 max-w-[850px] transition duration-300">
        <p class="text-lg text-white">
          <em class="font-semibold text-green-main not-italic">-/</em>
          <span v-html="subtitle"></span>
        </p>
        <div
          ref="titleContainer"
          class="prose mb-10 text-4xl tablet:text-5xl desktop:text-[70px] desktop:leading-[85px] font-semibold text-white"
          v-html="$formatText(titleChange)"
        ></div>
        <div
          class="prose max-w-sm mb-14 text-xl desktop:text-2xl font-normal text-white"
          v-html="$formatText(description)"
        ></div>
        <ButtonMain
          class="text-gray-darker"
          :link="button.link"
          :title="button.title"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonMain from "./button-main.vue";
export default {
  name: "HomeBanner",
  components: { ButtonMain },
  props: {
    subtitle: { type: String, required: false },
    title: { type: String, required: true, default: "Title" },
    description: { type: String, required: false },
    button: {
      type: Object,
      required: false,
      default: { link: "/", title: "Click here" },
    },
  },
  computed: {
    titleChange: function () {
      const textContainer = this.title.match(/\*(.*)\*/);
      if (textContainer.length) {
        this.animateTitle = textContainer.pop();
        return this.title.replace(this.animateTitle, "...");
      }
      return this.title;
    },
  },
  data() {
    return {
      visible: false,
      animateTitle: "",
      staticTitle: "",
    };
  },
  methods: {
    typeEffect() {
      if (this.$refs.titleContainer) {
        const textContainer = this.$refs.titleContainer.querySelector("em");

        if (textContainer !== undefined) {
          textContainer.insertAdjacentHTML(
            "afterend",
            '<span class="font-normal text-green-main animate-[pulse_0.8s_cubic-bezier(0.4,_0,_0.6,_1)_infinite]">|</span>'
          );
          const textStore = textContainer.innerText;
          textContainer.innerText = "";
          setTimeout(() => {
            this.insertLetters(textContainer, this.animateTitle, 0);
          }, 400);
        }
      }
    },
    insertLetters(element, text, index) {
      let typeSpeed = Math.random() * 200;
      setTimeout(() => {
        if (index < text.length) {
          element.insertAdjacentHTML("beforeend", text[index]);
          this.insertLetters(element, text, index + 1);
        }
      }, typeSpeed);
    },
  },
  mounted() {
    this.visible = true;
    // this.typeEffect();
  },
};
</script>

<style></style>
