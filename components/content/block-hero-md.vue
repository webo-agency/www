<template>
  <div
    @mousemove="mouseMove"
    ref="container"
    class="relative h-[90vh] min-h-[650px] desktop:h-[860px] px-5 tablet:px-10 desktop:px-20 bg-center bg-cover bg-no-repeat ultraHd:bg-contain bg-gray-darker -mt-[100px]"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      class="hidden desktop:block absolute top-[22%] left-[42%] z-[2]"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M-0.00069046 14.7187C-0.00069046 17.6311 2.36471 20 5.27775 20L9.9977 19.9968L14.7173 20C17.6307 20 19.9961 17.6311 19.9961 14.7187V5.27815C19.9961 2.36894 17.6307 0 14.7176 0H5.27775C2.36471 0 -0.00069046 2.36894 -0.00069046 5.27815V14.7187ZM1.11599 14.7187V5.27815C1.11599 2.98275 2.98108 1.11892 5.27775 1.11892H14.7176C17.0143 1.11892 18.8791 2.98275 18.8791 5.27815V14.7187C18.8791 17.0173 17.0143 18.8811 14.7176 18.8811L9.9977 18.8779C9.99738 18.8779 5.27775 18.8811 5.27775 18.8811C2.98108 18.8811 1.11599 17.0173 1.11599 14.7187Z"
        fill="#07E7C4"
      />
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      class="hidden desktop:block absolute bottom-[21%] right-[45%] z-[2]"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M-0.00069046 14.7187C-0.00069046 17.6311 2.36471 20 5.27775 20L9.9977 19.9968L14.7173 20C17.6307 20 19.9961 17.6311 19.9961 14.7187V5.27815C19.9961 2.36894 17.6307 0 14.7176 0H5.27775C2.36471 0 -0.00069046 2.36894 -0.00069046 5.27815V14.7187ZM1.11599 14.7187V5.27815C1.11599 2.98275 2.98108 1.11892 5.27775 1.11892H14.7176C17.0143 1.11892 18.8791 2.98275 18.8791 5.27815V14.7187C18.8791 17.0173 17.0143 18.8811 14.7176 18.8811L9.9977 18.8779C9.99738 18.8779 5.27775 18.8811 5.27775 18.8811C2.98108 18.8811 1.11599 17.0173 1.11599 14.7187Z"
        fill="#07E7C4"
      />
    </svg>

    <div
      ref="shapeParallax"
      class="tech_icons_shape hidden desktop:flex items-center absolute desktop-wide:top-[250px] right-[40px] fullHd:right-[260px] z-[2] desktop-wide:scale-[0.8] fullHd:scale-100"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="354"
        height="450"
        viewBox="0 0 354 450"
        fill="none"
        class=""
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M73.0114 0.0360056L72.9794 0.055018H72.9492L72.9132 0.0740304C72.6244 0.13108 72.3496 0.26411 72.1129 0.473291L72.0849 0.492411L72.0469 0.530436L72.0087 0.549448L0.587744 68.2863L0.553587 68.3053L0.513539 68.343L0.483405 68.381L0.451344 68.419L0.433217 68.4381C0.266749 68.6473 0.148424 68.8567 0.0782261 69.1039L0.0702959 69.1229L0.0582872 69.1609L0.0542088 69.1991C0.0441806 69.2371 0.0361518 69.2557 0.0301349 69.2937C0.0120841 69.4078 0 69.5223 0 69.6173V376.847C0 377.627 0.497507 378.311 1.25564 378.616L168.388 442.644C199.909 454.7 228.447 451.43 249.125 436.54C265.21 424.978 276.562 406.303 280.774 382.19C323.454 380.365 354 346.421 354 292.946V108.62C354 107.84 353.499 107.137 352.736 106.851L74.2028 0.150187C74.1205 0.112155 74.0345 0.0930468 73.9482 0.0740304L73.906 0.055018H73.884L73.8478 0.0360056C73.5711 -0.0210438 73.2862 -0.00202733 73.0114 0.0360056ZM72.3297 98.6174L4.01134 72.4507V375.573L169.892 439.107C199.871 450.593 227.043 447.683 246.698 433.516C266.454 419.311 278.568 393.867 278.568 360.664V177.612L73.0536 98.8835C72.7908 98.8454 72.5463 98.7505 72.3297 98.6174ZM349.989 113.241L282.579 177.117V360.664C282.579 366.826 282.158 372.739 281.376 378.368C321.669 376.219 349.989 343.606 349.989 292.946V113.241ZM75.4343 95.7078L280.092 174.094L348.464 109.304L75.4343 4.71392V95.7078ZM5.56771 68.9326L71.423 94.1674V6.50184L5.56771 68.9326Z"
          fill="#07E7C4"
        />
      </svg>
    </div>

    <nuxt-picture
      src="/img/banner_bg.png"
      class="absolute inset-0 z-0 w-full h-full object-cover max-h-[900px]"
      format="webp"
      loading="eager"
      :imgAttrs="{ class: 'w-full h-full object-cover' }"
    />

    <div
      class="desktop:flex items-center h-full mx-auto max-w-screen-desktop-wide relative z-10"
    >
      <EffectAppearMdc>
        <div
          class="pt-32 desktop:pt-0 mt-0 desktop:mt-[60px] max-w-[940px] transition duration-300"
        >
          <p class="text-[14px] desktop:text-lg text-white">
            <em class="font-semibold text-green-main not-italic mr-1">-/</em>
            <ContentSlot :use="$slots.subtitle" unwrap="p" />
          </p>

          <div
            ref="titleContainer"
            class="inline-block mb-6 desktop:mb-10 text-[28px] tablet:text-5xl desktop:text-[60px] leading-[40px] desktop:leading-[73px] font-semibold text-white"
          >
            <ContentSlot :use="$slots.title" />
          </div>

          <div
            class="separator h-[3px] desktop:h-[4px] mb-10 desktop:mb-16 w-[200px] border-b-[#07E7C4] border-b-[4px]"
          ></div>
          <div
            class="max-w-[420px] mb-8 desktop:mb-14 text-[18px] desktop:text-2xl font-normal text-white"
          >
            <ContentSlot :use="$slots.description" />
          </div>
          <ButtonMain
            class="text-gray-darker mb-[65px]"
            :link="button.link"
            :title="button.title"
            :isWide="true"
          />
        </div>
      </EffectAppearMdc>
      <div
        class="z-[2] flex gap-[20px] desktop:absolute desktop:bottom-[14%] desktop:right-[6%]"
      >
        <WidgetRatingClutch />
        <WidgetRatingGoogle
          :rating="5"
          :link="'https://www.google.com/search?q=webo+gliwice&sca_esv=581867933&ei=avdRZdPPHbCVxc8PqvGHwAM&ved=0ahUKEwjTrJKs38CCAxWwSvEDHar4ATgQ4dUDCBA&uact=5&oq=webo+gliwice&gs_lp=Egxnd3Mtd2l6LXNlcnAiDHdlYm8gZ2xpd2ljZTICECZIsdsJUPXHCVj1xwlwAngAkAEAmAFXoAFXqgEBMbgBA8gBAPgBAeIDBBgBIEGIBgE&sclient=gws-wiz-serp#lrd=0x471131b61b903edb:0xe16af5e90276dac,1,,,,'"
          :text="'See all our reviews'"
        />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="340"
        height="80"
        viewBox="0 0 340 80"
        fill="none"
        class="hidden desktop:block desktop-wide:scale-[0.8] fullHd:scale-100 absolute top-[54%] desktop:right-[10px] fullHd:right-[70px] z-[2]"
      >
        <rect width="100" height="80" rx="40" fill="#08DBBA" />
        <path
          d="M24.2375 40C24.2375 50.2188 30.1062 59.0219 38.675 63.1525L26.5212 29.5656C25.1094 32.8263 24.2375 36.3062 24.2375 40ZM67.3906 38.695C67.3906 35.545 66.1944 33.2575 65.2156 31.63C63.9106 29.455 62.7162 27.7169 62.7162 25.5437C62.7162 23.1531 64.565 20.9781 67.0662 20.9781H67.3925C62.825 16.7387 56.7388 14.2375 50 14.2375C45.7365 14.2752 41.5469 15.3547 37.7959 17.3818C34.0449 19.4089 30.8464 22.3222 28.4787 25.8681H30.11C32.8288 25.8681 36.9575 25.5419 36.9575 25.5419C38.3713 25.4331 38.48 27.4975 37.175 27.7169C37.175 27.7169 35.7612 27.9344 34.2406 27.9344L43.5894 55.7594L49.2406 38.9106L45.2188 27.9325L42.5 27.7188C41.0863 27.61 41.3037 25.5437 42.6087 25.5437C42.6087 25.5437 46.8463 25.87 49.3475 25.87C52.0662 25.87 56.195 25.5437 56.195 25.5437C57.6088 25.435 57.7175 27.4994 56.4125 27.7188C56.4125 27.7188 54.9987 27.9363 53.4781 27.9363L62.825 55.6562L65.45 47.0688C66.5375 43.4819 67.4056 40.9825 67.4056 38.6987L67.3906 38.695ZM50.435 42.2819L42.7175 64.675C44.9994 65.3275 47.4988 65.7625 50 65.7625C53.0431 65.7625 55.8688 65.2 58.5875 64.3488C58.4787 64.24 58.4788 64.1313 58.37 64.0225L50.435 42.2819ZM72.6087 27.7188L72.8262 30.3438C72.8262 32.9688 72.3913 35.8881 70.8706 39.5837L63.0444 62.3012C70.6531 57.8444 75.8694 49.5831 75.8694 40.0188C75.7606 35.5619 74.5644 31.4312 72.6069 27.7375L72.6087 27.7188ZM50 10C33.4775 10 20 23.4775 20 40C20 56.5225 33.4775 70 50 70C66.5225 70 80 56.5225 80 40C80 23.4775 66.5225 10 50 10ZM50 68.695C34.2387 68.695 21.4138 55.87 21.4138 40C21.4257 32.4221 24.4412 25.158 29.7996 19.7996C35.158 14.4412 42.4221 11.4257 50 11.4138C57.5779 11.4257 64.842 14.4412 70.2004 19.7996C75.5588 25.158 78.5743 32.4221 78.5863 40C78.5863 55.87 65.7612 68.695 50 68.695Z"
          fill="#202020"
        />
        <rect x="120" width="100" height="80" rx="40" fill="#08DBBA" />
        <path
          d="M179.139 22.7935C174.928 18.583 170.88 14.5344 169.705 10C168.491 14.5344 164.483 18.5425 160.272 22.7935C153.956 29.1093 146.75 36.2753 146.75 47.0445C146.75 59.7166 157.033 70 169.705 70C182.378 70 192.661 59.7166 192.661 47.0445C192.661 36.2753 185.454 29.1093 179.139 22.7935ZM156.507 52.3887C155.09 52.3482 149.908 43.4008 159.544 33.8462L165.94 40.8097C166.143 41.0121 166.143 41.3765 165.94 41.5789L165.9 41.6194C164.361 43.1984 157.884 49.6761 157.074 51.9433C156.871 52.3887 156.629 52.3887 156.507 52.3887ZM169.705 64.17C165.333 64.17 161.811 60.6478 161.811 56.2753C161.851 54.3725 162.539 52.5101 163.795 51.0526C165.212 49.3117 169.705 44.413 169.705 44.413C169.705 44.413 174.159 49.3927 175.616 51.0526C176.912 52.4696 177.6 54.3725 177.6 56.2753C177.6 60.6478 174.037 64.17 169.705 64.17ZM184.807 51.3765C184.645 51.7409 184.24 52.3887 183.714 52.3887C182.782 52.4291 182.701 51.9433 182.013 50.9312C180.515 48.7045 167.357 34.9393 164.888 32.3077C162.742 29.9595 164.564 28.3401 165.454 27.4494C166.548 26.3563 169.705 23.1984 169.705 23.1984C169.705 23.1984 179.139 32.1457 183.025 38.2186C186.912 44.2915 185.616 49.6356 184.807 51.3765Z"
          fill="#202020"
        />
        <rect x="240" width="100" height="80" rx="40" fill="#08DBBA" />
        <path
          d="M286.478 21.9218C284.797 19.0261 280.594 19.0261 278.913 21.9218L260.592 53.4805C258.911 56.3763 261.012 59.9958 264.374 59.9958H278.677C277.24 58.738 276.708 56.562 277.795 54.695L291.671 30.867L286.478 21.9218Z"
          fill="#202020"
        />
        <path
          d="M298.088 28.8433C299.479 26.4741 302.957 26.4741 304.349 28.8433L319.511 54.664C320.902 57.0332 319.163 59.9948 316.381 59.9948H286.056C283.273 59.9948 281.534 57.0332 282.925 54.664L298.088 28.8433Z"
          fill="#202020"
        />
      </svg>
    </div>

    <div
      class="absolute bottom-0 left-0 right-0 hidden desktop:flex justify-center z-10 py-4 desktop:pt-0 desktop:pb-2"
    >
      <button-scroll-down :getContainerRef="() => $refs.container" />
    </div>
  </div>
</template>

<script>
import ButtonMain from "../button-main.vue";
import EffectAppearMdc from "./effect-appear-md.vue";

export default {
  components: { ButtonMain, EffectAppearMdc },
  props: {
    subtitle: { type: String, required: false },
    title: { type: String, required: false, default: "Title" },
    description: { type: String, required: false },
    button: {
      type: Object,
      required: false,
      default: { link: "/", title: "Click here" },
    },
    googleRating: Number,
    googleRatingLink: String,
    googleRatingText: String,
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
          console.log(textContainer);
          this.$refs.titleContainer
            .querySelector("h1")
            .insertAdjacentHTML(
              "afterend",
              '<span class="font-normal text-green-main animate-pulse !animate-[pulse_0.8s_cubic-bezier(0.4,_0,_0.6,_1)_infinite]">|</span>'
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
    mouseMove(event) {
      let shapeParallax = this.$refs.shapeParallax;
      let desktop;

      if (!shapeParallax) return;

      window.innerWidth > 1600 ? (desktop = false) : (desktop = true);
      shapeParallax.style.top = 250 + event.clientY / 50 + "px";
      shapeParallax.style.right =
        (desktop ? 40 : 250) + event.clientX / 50 + "px";
    },
  },
  mounted() {
    this.visible = true;
    // this.typeEffect();
  },
};
</script>

<style></style>
