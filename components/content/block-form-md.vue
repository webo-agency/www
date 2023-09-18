<template>
  <div class="flex flex-col tablet:flex-row">
    <div
      class="max-w-[820px] text-gray-darker mb-20 tablet:mb-0 basis-2/3 desktop-wide:basis-auto desktop-wide:shrink-0"
    >
    <div class="w-full relative">
      <form name="contactForm" method="post" enctype="multipart/form-data" class="flex flex-col">
        <ul class="flex flex-wrap mb-8 desktop:mb-16">
          <slot name="radio"></slot>
        </ul>
        <legend class="text-lg desktop:text-xl font-semibold mb-2.5">
          <ContentSlot :use="$slots.formtitle" />
        </legend>
        <slot name="fields"></slot>
      </form>
      <div class="flex flex-col mt-5 desktop:mt-10 transition"
      :class="{'opacity-0':mailSent}">
        <ButtonMain
          :tagButton="true"
          class="mb-2.5 desktop:mb-6 text-white"
          ref="sendButton"
          @click="sendForm()"
        >
          <ContentSlot :use="$slots.buttontext" />
        </ButtonMain>
        <div
          class="prose text-xs desktop:text-sm text-gray-dark/50 max-w-[250px]"
        >
          <ContentSlot :use="$slots.policytext" />
        </div>
      </div>
      <Transition name="confirmShow" @after-enter="onConfirmTransitionAfter()">
        <div v-show="mailSent" class="absolute inset-0 flex flex-col justify-center items-center bg-white">
          <div class=" w-24 desktop:w-[175px] aspect-square flex justify-center items-center rounded-full border-4 border-green-main mb-7 desktop:mb-[50px]" >
            <svg class=" w-12 h-12 desktop:w-auto desktop:h-auto" width="74" height="51" viewBox="0 0 74 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path ref="svgPath" class="svg-check" d="M4 25.5L26 47L70 4" stroke="#07E7C4" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" 
              />
            </svg>
          </div>
          <div v-if="$slots.thanksMessage" class="text-3xl tablet:text-4xl desktop:text-5xl mb-5 desktop:mb-10 text-center font-semibold">
            <ContentSlot :use="$slots.thanksMessage" />
          </div>
          <div v-if="$slots.thanksDescription" class="text-lg desktop:text-xl mb-7 desktop:mb-[50px] text-center font-semibold">
            <ContentSlot :use="$slots.thanksDescription" />
          </div>
          <div v-if="$slots.buttonBackText">
            <ButtonMain
                class="mb-2.5 desktop:mb-6 text-white !w-auto"
                :link="'https://www.webo.agency/'"
              >
                <ContentSlot :use="$slots.buttonBackText" />
              </ButtonMain>
          </div>
        </div>
      </Transition>
    </div>
    </div>

    <slot name="side"></slot>
  </div>
</template>

<script>
import ButtonMain from "../button-main.vue";
export default {
  name: "BlockFormMdc",
  data() {
    return {
      isOverDropZone: false,
      mailSent: false,
    };
  },
  props: {
    privacyText: {
      type: String,
      default:
        "Twoje dane przetważamy zgodnie z naszą **<a>polityką prywatności.</a>**",
    },
  },
  methods: {
    isEmailValid(email) {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
        ? true
        : false;
    },
    sendForm() {
      const formData = new FormData(document.forms.contactForm);
      const sendBtn = this.$refs['sendButton']?.$el
      if (formData.get('mail') && this.isEmailValid(formData.get('mail'))) {
        sendBtn?.setAttribute("disabled","");
        const vm = this;
        this.formRequest(formData).then( (result) => {
          console.log(result);
          vm.mailSent = true;
        }).catch( (error) => {
            console.error('Contact form could not be send', error)
            sendBtn?.removeAttribute("disabled");
          });
      }
      
    },
    async formRequest(data) {
     return await $fetch( '/api/contact', 
      { 
        method: 'POST',
        body: data
      });
    },
    onConfirmTransitionAfter(){
      this.$refs['svgPath'].classList.add('svg-check-animation')
    }
  },
  components: { ButtonMain },
};
</script>

<style scoped>
.confirmShow-enter-active,
.confirmShow-leave-active {
  transition: opacity 0.2s ease;
}

.confirmShow-enter-from,
.confirmShow-leave-to {
  opacity: 0;
}

.svg-check{
  transition: all 0.4s ease-in-out;
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
}

.svg-check.svg-check-animation{
  stroke-dashoffset: 0;
}

button[disabled]{
  @apply opacity-30 pointer-events-none
}

</style>
