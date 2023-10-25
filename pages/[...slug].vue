<template>
    <div>
      <ContentRenderer v-if="pageData" :value="pageData" />
      <PageSection v-else >
        <div class="my-[150px]">
          <h1 class="text-2xl mb-5">Document is empty</h1>
          <ButtonMain
            class="text-white"
            :link="'/'"
            :title="'Back to home'"
          ></ButtonMain>
        </div>
      </PageSection>
      <PageSection classes="mb-20 tablet:mb-[130px]">
        <template #full>
          <BlockBrandsSlider
            :logos="[
              {
                link: 'https://is-wireless.com/',
                imgUrl: '/img/logos/isw.png',
              },
              { link: 'https://feeby.pl/', imgUrl: '/img/logos/Feeby.png' },
              {
                link: 'https://5gmadetogether.com/',
                imgUrl: '/img/logos/5G.png',
              },
              {
                link: 'https://www.swistak-krakow.pl/',
                imgUrl: '/img/logos/Swistak.png',
              },
              {
                link: 'https://shop-mancraft.com/pl/',
                imgUrl: '/img/logos/Mancraft.png',
              },
              {
                link: 'https://oravio.pl/',
                imgUrl: '/img/logos/Oravio.png',
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
                imgUrl: '/img/logos/CaffeWasyl.png',
              },
            ]"
          />
        </template>
      </PageSection>
    </div>
</template>
  
<script async setup>
const route = useRoute()
const { data: pageData } = await useAsyncData('page-data-'+route.fullPath.split('#')[0],() => queryContent(route.path).findOne(),{
  server: true,
})
const hrefLangs = computed(()=> getPageLangs(pageData.value.hreflangs));
const hrefLangsState = useState("hrefLangs"+route.fullPath.split('#')[0],() => hrefLangs.value);

const alternateLinks = computed(()=>{
  return hrefLangs.value.map(lang=>{
    return {
      rel:'alternate',
      href: lang.href,
      hreflang: lang.hreflang,
    }
  })
})

useHead({
  link: alternateLinks
})

</script>