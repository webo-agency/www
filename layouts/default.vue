<template>
  <div class="h-full font-body">
    <LayoutNavbar
      :menu="navItems"
      :socials="generalData.socials"
      :clutchLink="generalData.clutchLink"
    />
    <div
      class="relative flex flex-col justify-between h-full mt-[60px] desktop:mt-[94px]"
    >
      <main>
        <NuxtPage />
      </main>
      <button-scroll-up class="shrink-0" />
      <FbChat
        :id="238379120057786"
        :locale="generalData.lang == 'PL' ? 'pl_PL' : 'en_US'"
      />
      <LayoutFooter
        :mail="generalData.mail"
        :tel="generalData.tel"
        :privacyPolicyLink="footerData.privacyPolicyLink"
        :privacyPolicyTitle="footerData.privacyPolicyTitle"
        :servicesTitle="footerData.servicesTitle"
        :services="footerData.servicesMenu"
        :brandTitle="footerData.brandTitle"
        :brand="footerData.brandMenu"
        :brandName="generalData.brandName"
        :location="generalData.address"
        :socials="generalData.socials"
        :clutchLink="generalData.clutchLink"
        :googleRating="generalData.googleRating"
        :googleRatingLink="generalData.googleRatingLink"
        :googleRatingText="generalData.googleRatingText"
        :showContributions="true"
      />
    </div>
  </div>
</template>

<script setup>
const { data: settings } = await useAsyncData(() =>
  queryContent().where({ _file: "_settings.md" }).findOne()
);
const { data: navItemsRaw } = await useAsyncData(() =>
  queryContent().where({ showInNav: true }).find()
);

const footerData = settings.value.footer;
const generalData = settings.value.general;
const headData = settings.value.head;

const navItems = formatNavItems(navItemsRaw.value, 0);
const currLang = useState("lang", () => generalData.lang ?? "EN");

useServerSeoMeta({
  title: headData.title,
  description: headData.description,
  ogDescription: headData.description,
});

useHead({
  meta: [
    { name: "msapplication-TileColor", content: "#da532c" },
    { name: "msapplication-TileImage", content: "/mstile-150x150.png" },
    { name: "theme-color", content: "#06CEAF" },
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

.no-link-style a {
  @apply no-underline hover:text-current;
}
</style>
