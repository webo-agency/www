<template>
  <div class="h-full font-body">
    <LayoutNavbar
      :menu="[
        {
          name: 'Usługi',
          link: 'https://www.webo.agency/#uslugi',
          menu: {
            title: 'Wybierz usługę, którą jesteś zainteresowany',
            links: [
              {
                link: 'https://www.webo.agency/uslugi/sklepy-internetowe',
                name: 'Sklepy internetowe',
                description:
                  'Łatwe w obsłudze sklepy internetowe z płynnym procesem sprzedaży.',
              },
              {
                link: 'https://www.webo.agency/uslugi/strony-internetowe',
                name: 'Strony www',
                description:
                  'Strony na których Twój klient szybko znajdzie to czego szuka.',
              },
              {
                link: '',
                name: 'Aplikacje internetowe',
                description:
                  'Dedykowane do specjalnych zastosowań w Twojej firmie.',
              },
              {
                link: 'https://www.webo.agency/uslugi/strony-headless-pwa',
                name: 'Strony HeadlessPWA',
                description:
                  'Nowa technologia -  maksimum wydajności i bezpieczeństwa.',
              },
              {
                link: 'https://www.webo.agency/uslugi/wsparcie-i-rozwoj',
                name: 'Wsparcie i rozwój',
                description:
                  'Wsparcie techniczne i rozwój Twojej strony / sklepu internetowego.',
              },
              {
                link: '',
                name: 'Projektowanie UX/UI',
                description:
                  'Projektowanie stron i sklepów skoncentrowane na użytkowniku.',
              },
            ],
          },
        },
        { name: 'O nas', link: 'https://www.webo.agency/o-nas' },
        { name: 'Realizacje', link: 'https://www.webo.agency/realizacje' },
        {
          name: 'Napisz do nas',
          link: 'https://www.webo.agency/kontakt',
          button: true,
        },
      ]"
      :socials="[
        { type: 'facebook', link: 'https://facebook.com/meet.webo/' },
        { type: 'instagram', link: 'https://www.instagram.com/weboagency/' },
        {
          type: 'linkedin',
          link: 'https://www.linkedin.com/company/webo-agency/',
        },
        { type: 'behance', link: 'https://www.behance.net/webo_agency' },
      ]"
      :clutchLink="'https://clutch.co/profile/webo'"
    />
    <div class="relative flex flex-col justify-between h-full mt-[100px]">
      <NuxtPage />
      <button-scroll-up class="shrink-0" />
      <LayoutFooter
        :mail="'info@webo.agency'"
        :tel="'+48721733397'"
        :privacyPolicyLink="'https://www.webo.agency/polityka-prywatnosci'"
        :privacyPolicyTitle="'Polityka prywatności'"
        :servicesTitle="'Usługi'"
        :services="[
          { title: 'E-commerce', link: 'https://www.webo.agency/uslugi/sklepy-internetowe' },
          { title: 'Strony www', link: 'https://www.webo.agency/uslugi/strony-internetowe' },
          { title: 'Aplikacje webowe', link: '' },
          { title: 'MVP', link: '' },
          {
            title: 'Wsparcie i rozwój sklepów',
            link: '',
          },
          { title: 'Projektowanie UX/UI', link: '' },
        ]"
        :brandTitle="'Firma'"
        :brand="[
          { title: 'O nas', link: 'https://www.webo.agency/o-nas' },
          { title: 'Realizacje', link: 'https://www.webo.agency/realizacje' },
          { title: 'Opinie', link: 'https://www.webo.agency/#opinie' },
          { title: 'Kontakt', link: 'https://www.webo.agency/kontakt' },
        ]"
        :brandName="'Webo agency'"
        :location="'ul. Lipowa 58C, 44-100 Gliwice'"
        :socials="[
          { type: 'facebook', link: 'https://facebook.com/meet.webo/' },
          {
            type: 'linkedin',
            link: 'https://www.linkedin.com/company/webo-agency/',
          },
          { type: 'behance', link: 'https://www.behance.net/webo_agency' },
          { type: 'github', link: 'https://github.com/webo-agency' },
        ]"
        :clutchLink="'https://clutch.co/profile/webo'"
        :showContributions="true"
      />
    </div>
  </div>
</template>

<script>
import LayoutNavbar from "../components/layout-navbar.vue";
import LayoutFooter from "~/components/layout-footer.vue";

export default {
  setup() {
    const nuxtApp = useNuxtApp();

    // const [{ data: settings }] = await Promise.all([
    //   this.$content('settings').fetch()
    // ])

    useHead({
      title: "Webo - Cyfrowy partner",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Rozwiązania cyfrowe takie jak strony web czy projektowanie budowane w myśl procesu agile",
        },
        { name: "msapplication-TileColor", content: "#da532c" },
        { name: "msapplication-TileImage", content: "/mstile-150x150.png" },
        { name: "theme-color", content: "#ffffff" },
        { name: "robots", content: "INDEX,FOLLOW" },
      ],
      script: [
        // { src: `https://polyfill.io/v3/polyfill.min.js?features=${features}&flags=gated`, body: true, async: true, defer: true  },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/img/favicon/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/img/favicon/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/img/favicon/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/img/favicon/favicon-16x16.png",
        },
        {
          rel: "mask-icon",
          href: "/favicon/safari-pinned-tab.svg",
          color: "#07e7c4",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: true,
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800&subset=latin,latin-ext&display=swap",
        },
      ],
    });

    // return {
    //     settings
    // }
  },
  components: { LayoutNavbar, LayoutFooter },
};
</script>

<style>
  .page-enter-active,
  .page-leave-active {
    transition: all 0.15s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
  }
  
.prose em {
  @apply text-green-main not-italic;
}

.prose a {
  @apply underline transition duration-200 hover:text-green-main cursor-pointer;
}

.no-link-style a{
  @apply no-underline hover:text-current
}
</style>
