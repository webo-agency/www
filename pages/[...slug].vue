<template>
  <div>
    <ContentRenderer v-if="pageData" :value="pageData" />
    <PageSection v-else>
      <div class="my-[150px]">
        <h1 class="text-2xl mb-5">Document is empty</h1>
        <ButtonMain class="text-white" :link="'/'" :title="'Back to home'"></ButtonMain>
      </div>
    </PageSection>
    <PageSection classes="mb-20 tablet:mb-[130px]">
      <template #full>
        <BlockBrandsSlider :logos="[
          {
            link: 'https://is-wireless.com/',
            imgUrl: '/img/logos/isw.svg',
          },
          { link: 'https://feeby.pl/', imgUrl: '/img/logos/Feeby.png' },
          {
            link: 'https://5gmadetogether.com/',
            imgUrl: '/img/logos/5G.svg',
          },
          {
            link: 'https://www.swistak-krakow.pl/',
            imgUrl: '/img/logos/Swistak.svg',
          },
          {
            link: 'https://shop-mancraft.com/pl/',
            imgUrl: '/img/logos/Mancraft.svg',
          },
          {
            link: 'https://oravio.pl/',
            imgUrl: '/img/logos/Oravio.svg',
          },
          {
            link: 'https://eurostal-garage.it/',
            imgUrl: '/img/logos/Eurostal.png',
          },
          {
            link: 'https://www.przemijanie.pl/',
            imgUrl: '/img/logos/Przemijanie.png',
          },
          {
            link: 'https://www.caffewasyl.pl/',
            imgUrl: '/img/logos/CaffeWasyl.svg',
          },
        ]" />
      </template>
    </PageSection>
  </div>
</template>
  
<script async setup>
const route = useRoute()
const { data: pageData } = await useAsyncData('page-data-' + route.fullPath.split('#')[0].split('?')[0], () => queryContent(route.path).findOne(), {
  server: true,
})
const hrefLangs = computed(() => getPageLangs(pageData.value.hreflangs));
const hrefLangsState = useState("hrefLangs" + route.fullPath.split('#')[0], () => hrefLangs.value);

const alternateLinks = computed(() => {
  return hrefLangs.value.map(lang => {
    return {
      rel: 'alternate',
      href: lang.href,
      hreflang: lang.hreflang,
    }
  })
})
const img = useImage()
const headData = computed(() => {
  if (!pageData.value) return

  let data = {}

  if (pageData.value.introduction?.title) {
    data.title = pageData.value.introduction.title
    data.ogTitle = pageData.value.introduction.title
  }
  if (pageData.value.introduction?.description) {
    data.description = pageData.value.introduction.description
    data.ogDescription = pageData.value.introduction.description
  }
  if (pageData.value.image?.url) data.ogImage = img(pageData.value.image.url)

  return data

})

useSeoMeta(headData.value);

useHead({
  link: alternateLinks,
})

</script>