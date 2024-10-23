<template>
  <div class="max-w-[820px] text-gray-darker">
    <form name="contactForm" class="flex flex-col" data-static-form-name="contact">
      <ul class="flex flex-wrap mb-8 desktop:mb-16">
        <li
          v-for="(item, index) in select"
          :key="index"
          :class="'basis-full phoneWide:basis-1/2 desktop:basis-1/3'"
        >
          <div class="flex mb-2 desktop:mb-4 mr-5 desktop:mr-[30px]">
            <input
              type="radio"
              :id="index"
              name="service"
              :value="item"
              class="shrink-0"
            />
            <label
              :for="index"
              class="pl-2.5 desktop:pl-[15px] text-gray-darker text-base desktop:text-lg font-semibold"
              >{{ item }}</label
            >
          </div>
        </li>
      </ul>
      <legend
        class="text-lg desktop:text-xl font-semibold"
        v-html="formTitle"
      ></legend>
      <div class="formText mt-2.5">
        <input class="textInput" type="text" name="name" placeholder=" " />
        <span v-html="namePlaceholder"></span>
      </div>
      <div class="formText">
        <input class="textInput" type="text" name="company" placeholder=" " />
        <span v-html="companyPlaceholder"></span>
      </div>
      <div class="formText" :class="{ invalid: emailInput && !isEmailValid }">
        <input
          class="textInput"
          type="email"
          name="mail"
          v-model="emailInput"
          placeholder=" "
        />
        <span v-html="mailPlaceholder"></span>
      </div>
      <div class="formText">
        <input class="textInput" type="tel" name="phone" placeholder=" " />
        <span v-html="phonePlaceholder"></span>
      </div>
      <div class="formText">
        <textarea
          class="textInput min-h-[60px] max-h-[500px]"
          name="description"
          placeholder=" "
        ></textarea>
        <span v-html="descriptionPlaceholder"></span>
      </div>
      <!-- div
        class="relative group flex items-center max-w-fit p-5 mt-4 mb-5 desktop:mb-10 rounded-[5px] transition duration-200 bg-gray-lighter border border-solid"
        :class="isOverDropZone ? 'border-green-main' : 'border-transparent'"
        @dragenter="setDropZoneState(true)"
        @dragleave="setDropZoneState(false)"
        @drop="setDropZoneState(false)"
      >
        <input
          class="absolute inset-0 appearance-none opacity-0 cursor-pointer"
          type="file"
          name="attachment"
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
          <div
            class="text-gray-dark text-base desktop:text-lg font-semibold"
            v-html="'Dodaj załącznik'"
          ></div>
          <div
            class="text-gray-dark/50 text-sm desktop:text-base"
            v-html="'(Jeśli posiadasz np. specyfikację projektu)'"
          ></div>
        </div>
      </div -->
      <input type="hidden" name="static-form-name" value="contact" />
    </form>
    <div class="flex flex-col mt-5 desktop:mb-10">
      <ButtonMain
        :tagButton="true"
        :title="sendButtonText"
        class="mb-2.5 desktop:mb-6 text-white"
        @click.native="sendForm()"
      />
      <div
        class="prose text-xs desktop:text-sm text-gray-dark/50 max-w-[250px]"
        v-html="$formatText(privacyText)"
      ></div>
    </div>
  </div>
</template>

<script>
import ButtonMain from "./button-main.vue";
export default {
  name: "BlockForm",
  data() {
    return {
      emailInput: "",
      isOverDropZone: false,
    };
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
  props: {
    select: Array,
    formTitle: {
      type: String,
      default: "Wypełnij formularz",
    },
    namePlaceholder: {
      type: String,
      default: "Twoje imię i nazwisko",
    },
    companyPlaceholder: {
      type: String,
      default: "Nazwa firmy",
    },
    mailPlaceholder: {
      type: String,
      default: "Twój adres e-mail",
    },
    phonePlaceholder: {
      type: String,
      default: "Nr. telefonu",
    },
    descriptionPlaceholder: {
      type: String,
      default: "Opisz projekt",
    },
    sendButtonText: {
      type: String,
      default: "Wyślij wiadomość",
    },
    privacyText: {
      type: String,
      default:
        "Twoje dane przetważamy zgodnie z naszą **<a>polityką prywatności.</a>**",
    },
  },
  methods: {
    setDropZoneState(value) {
      this.isOverDropZone = value;
    },
    async formRequest(data) {
     return await $fetch( '/api/contact',
      {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        method: 'POST',
        body: data
      });
    },
    sendForm() {
      if (this.isEmailValid) {
        const formData = new FormData(document.forms.contactForm);
        const data = {
          name: "",
          company: "",
          mail: "",
          phone: "",
          description: "",
        };

        formData.forEach((value, key) => {
          data[key] = value;
        });

        this.formRequest(data).then( (result) => {
            console.log(result)
        }).catch( (error) => {
            console.error('Contact form could not be send', error)
        });
      }
    },
  },
  components: { ButtonMain },
};
</script>

<style  lang="postcss" scoped>
input[type="radio"] {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDExIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMC40MDQ3IDEuNTE4ODNDMTAuNTcxNiAxLjM1MTk4IDEwLjY2NTMgMS4xMjU2OCAxMC42NjUzIDAuODg5NzFDMTAuNjY1MyAwLjY1Mzc0NSAxMC41NzE2IDAuNDI3NDQzIDEwLjQwNDcgMC4yNjA1OUMxMC4yMzc5IDAuMDkzNzM3MyAxMC4wMTE2IDYuMDkwMThlLTA5IDkuNzc1NTkgMEM5LjUzOTYyIC02LjA5MDE4ZS0wOSA5LjMxMzMyIDAuMDkzNzM3MyA5LjE0NjQ3IDAuMjYwNTlMMy41NTU0NyA1Ljg1MzM2TDEuNTE4ODMgMy44MTQ5NEMxLjM1MTk4IDMuNjQ4MDkgMS4xMjU2OCAzLjU1NDM1IDAuODg5NzExIDMuNTU0MzVDMC42NTM3NDUgMy41NTQzNSAwLjQyNzQ0MyAzLjY0ODA5IDAuMjYwNTkgMy44MTQ5NEMwLjA5MzczNzMgMy45ODE3OSAwIDQuMjA4MSAwIDQuNDQ0MDZDMCA0LjY4MDAzIDAuMDkzNzM3MyA0LjkwNjMzIDAuMjYwNTkgNS4wNzMxOEwyLjkyNjM1IDcuNzM4OTRDMy4wMDg5IDcuODIxNyAzLjEwNjk1IDcuODg3MzUgMy4yMTQ5MSA3LjkzMjE1QzMuMzIyODYgNy45NzY5NCAzLjQzODU5IDggMy41NTU0NyA4QzMuNjcyMzUgOCAzLjc4ODA5IDcuOTc2OTQgMy44OTYwNCA3LjkzMjE1QzQuMDAzOTkgNy44ODczNSA0LjEwMjA1IDcuODIxNyA0LjE4NDU5IDcuNzM4OTRMMTAuNDA0NyAxLjUxODgzWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==);
  @apply w-5 h-5 mt-1 rounded-[5px] appearance-none border border-green-main border-solid transition-all duration-200 bg-no-repeat bg-top checked:bg-center checked:bg-green-main;
}

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
  @apply top-[35px] text-base desktop:text-lg;
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
