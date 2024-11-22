<template>
  <div class="flex flex-col tablet:flex-row">
    <div class="relative max-w-[820px] basis-2/3 desktop-wide:shrink-0"
      :class="[darkContainer ? 'text-white p-5 tablet:p-10 desktop:p-[60px] bg-gray-darkest' : 'text-gray-darker']">
      <div v-if="$slots.header" class="mb-5 tablet:mb-7">
        <ContentSlot :use="$slots.header" />
      </div>
      <div class="w-full relative"
        :class="[darkContainer ? 'text-white [&_.textInput]:bg-gray-darker' : 'text-gray-darker']">
        <form name="contactForm" method="post" enctype="multipart/form-data" class="flex flex-col"
          @submit.prevent="sendForm()">
          <ul v-if="$slots.radio" class="flex flex-wrap mb-8 desktop:mb-16">
            <slot name="radio"></slot>
          </ul>
          <legend v-if="$slots.formtitle" class="text-lg desktop:text-xl font-semibold mb-2.5">
            <ContentSlot :use="$slots.formtitle" />
          </legend>
          <slot name="fields"></slot>
          <div class="flex flex-col mt-5 desktop:mt-10 transition" :class="{ 'opacity-0': mailSent }">
            <div class="prose font-normal text-xs desktop:text-sm max-w-[270px] mb-6 desktop:mb-10"
              :class="[darkContainer ? 'text-white' : 'text-gray-dark/50']">
              <label class="flex gap-2.5 items-start">
                <input type="checkbox" name="acceptance" required>
                <ContentSlot :use="$slots.policytext" />
              </label>
            </div>
            <ButtonMain :tagButton="true" :isWide=true ref="sendButton"
              :class="[darkContainer ? 'text-gray-darker' : 'text-white']">
              <ContentSlot :use="$slots.buttontext" />
            </ButtonMain>
          </div>
          <input type="hidden" name="static-form-name" value="contact" />
        </form>
        <Transition name="confirmShow" @after-enter="onConfirmTransitionAfter()">
          <div v-show="mailSent" class="absolute inset-0 flex flex-col justify-center items-center"
            :class="[darkContainer ? 'bg-gray-darkest' : 'bg-white']">
            <div
              class=" w-24 desktop:w-[175px] aspect-square flex justify-center items-center rounded-full border-4 border-green-main mb-7 desktop:mb-[50px]">
              <svg class=" w-12 h-12 desktop:w-auto desktop:h-auto" width="74" height="51" viewBox="0 0 74 51" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path ref="svgPath" class="svg-check" d="M4 25.5L26 47L70 4" stroke="#07E7C4" stroke-width="8"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div v-if="$slots.thanksMessage"
              class="text-3xl tablet:text-4xl desktop:text-5xl mb-5 desktop:mb-10 text-center font-semibold">
              <ContentSlot :use="$slots.thanksMessage" />
            </div>
            <div v-if="$slots.thanksDescription"
              class="text-lg desktop:text-xl mb-7 desktop:mb-[50px] text-center font-semibold">
              <ContentSlot :use="$slots.thanksDescription" />
            </div>
            <div v-if="$slots.buttonBackText">
              <ButtonMain class="mb-2.5 desktop:mb-6 !w-auto" :class="[darkContainer ? 'text-gray-darker' : 'text-white']"
                :link="'https://www.webo.agency/'">
                <ContentSlot :use="$slots.buttonBackText" />
              </ButtonMain>
            </div>
          </div>
        </Transition>
        <div v-if="decoration" class="hidden tablet:block absolute bottom-0 right-[-170px] ">
          <svg xmlns="http://www.w3.org/2000/svg" width="158" height="200" viewBox="0 0 158 200" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M32.4495 0.0160025L32.4353 0.0244524H32.4219L32.4059 0.0329024C32.2775 0.0582577 32.1554 0.117382 32.0502 0.210352L32.0378 0.218849L32.0208 0.235749L32.0039 0.244199L0.26122 30.3494L0.246039 30.3579L0.22824 30.3747L0.214846 30.3916L0.200597 30.4085L0.192541 30.417C0.118555 30.5099 0.0659661 30.603 0.0347672 30.7128L0.0312426 30.7213L0.0259054 30.7382L0.0240928 30.7551C0.0196358 30.772 0.0160675 30.7803 0.0133933 30.7972C0.00537072 30.8479 0 30.8988 0 30.941V167.488C0 167.834 0.221114 168.138 0.558062 168.274L74.8391 196.731C88.8483 202.089 101.532 200.635 110.722 194.018C117.871 188.879 122.917 180.579 124.788 169.862C143.757 169.051 157.333 153.965 157.333 130.198V48.2756C157.333 47.9291 157.111 47.6162 156.772 47.4895L32.979 0.06675C32.9425 0.0498465 32.9042 0.0413542 32.8659 0.0329024L32.8471 0.0244524H32.8373L32.8213 0.0160025C32.6982 -0.00935279 32.5716 -0.000901034 32.4495 0.0160025ZM32.1465 43.83L1.78282 32.2003V166.921L75.5076 195.159C88.8314 200.264 100.908 198.97 109.644 192.674C118.424 186.36 123.808 175.052 123.808 160.295V78.9386L32.4683 43.9482C32.3515 43.9313 32.2428 43.8891 32.1465 43.83ZM155.551 50.3293L125.591 78.7188V160.295C125.591 163.034 125.404 165.662 125.056 168.164C142.964 167.209 155.551 152.714 155.551 130.198V50.3293ZM33.5264 42.5368L124.485 77.375L154.873 48.5797L33.5264 2.09507V42.5368ZM2.47454 30.6367L31.7436 41.8522V2.8897L2.47454 30.6367Z"
              fill="#07E7C4" />
          </svg>
        </div>
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
    darkContainer: {
      type: Boolean,
      default: false
    },
    decoration: Boolean
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
      const isValid = document.forms.contactForm.checkValidity();
      const sendBtn = this.$refs['sendButton']?.$el
      if (formData.get('mail') && this.isEmailValid(formData.get('mail'))) {
        sendBtn?.setAttribute("disabled", "");
        const vm = this;
        this.formRequest(formData).then((result) => {
          console.log(result);
          vm.mailSent = true;
        }).catch((error) => {
          console.error('Contact form could not be send', error)
          sendBtn?.removeAttribute("disabled");
        });
      }

    },
    async formRequest(data) {
      return await $fetch('/api/contact',
        {
          method: 'POST',
          body: data
        });
    },
    onConfirmTransitionAfter() {
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

.svg-check {
  transition: all 0.4s ease-in-out;
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
}

.svg-check.svg-check-animation {
  stroke-dashoffset: 0;
}

button[disabled] {
  @apply opacity-30 pointer-events-none
}

input[type="checkbox"] {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDExIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMC40MDQ3IDEuNTE4ODNDMTAuNTcxNiAxLjM1MTk4IDEwLjY2NTMgMS4xMjU2OCAxMC42NjUzIDAuODg5NzFDMTAuNjY1MyAwLjY1Mzc0NSAxMC41NzE2IDAuNDI3NDQzIDEwLjQwNDcgMC4yNjA1OUMxMC4yMzc5IDAuMDkzNzM3MyAxMC4wMTE2IDYuMDkwMThlLTA5IDkuNzc1NTkgMEM5LjUzOTYyIC02LjA5MDE4ZS0wOSA5LjMxMzMyIDAuMDkzNzM3MyA5LjE0NjQ3IDAuMjYwNTlMMy41NTU0NyA1Ljg1MzM2TDEuNTE4ODMgMy44MTQ5NEMxLjM1MTk4IDMuNjQ4MDkgMS4xMjU2OCAzLjU1NDM1IDAuODg5NzExIDMuNTU0MzVDMC42NTM3NDUgMy41NTQzNSAwLjQyNzQ0MyAzLjY0ODA5IDAuMjYwNTkgMy44MTQ5NEMwLjA5MzczNzMgMy45ODE3OSAwIDQuMjA4MSAwIDQuNDQ0MDZDMCA0LjY4MDAzIDAuMDkzNzM3MyA0LjkwNjMzIDAuMjYwNTkgNS4wNzMxOEwyLjkyNjM1IDcuNzM4OTRDMy4wMDg5IDcuODIxNyAzLjEwNjk1IDcuODg3MzUgMy4yMTQ5MSA3LjkzMjE1QzMuMzIyODYgNy45NzY5NCAzLjQzODU5IDggMy41NTU0NyA4QzMuNjcyMzUgOCAzLjc4ODA5IDcuOTc2OTQgMy44OTYwNCA3LjkzMjE1QzQuMDAzOTkgNy44ODczNSA0LjEwMjA1IDcuODIxNyA0LjE4NDU5IDcuNzM4OTRMMTAuNDA0NyAxLjUxODgzWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==);
  @apply shrink-0 w-5 h-5 mt-1 rounded-[5px] appearance-none border border-green-main border-solid transition-all duration-200 bg-no-repeat bg-top checked:bg-center checked:bg-green-main;
}

</style>
