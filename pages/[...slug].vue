<template>
  <div>
    <ContentRenderer v-if="pageData" :value="pageData" />
    <PageSection v-else>
      <div class="my-[150px]">
        <h1 class="text-2xl mb-5">Page not found</h1>
        <ButtonMain class="text-white" :link="'/'" :title="'Back to home'"></ButtonMain>
      </div>
    </PageSection>
  </div>
</template>
  
<script async setup>
const props = defineProps({
  globalSettings: Object
})
const route = useRoute()
const routeClean = route.fullPath.split('#')[0].split('?')[0]
const { data: pageData } = await useAsyncData('page-data-' + routeClean, () => queryContent(route.path).findOne())

const { data: siteHreflangs } = await useAsyncData('hreflangs-site', () => queryContent().only('hreflangs').find())

onMounted(()=>{
  if (!pageData.value) {
    const domains = {
      PL: "https://webo.pl",
      EN: "https://webo.agency",
    };

    const foundRedirect = siteHreflangs.value.find(
      (page) => page.hreflangs && Object.values(page.hreflangs).includes(routeClean)
    );

    if (foundRedirect){
      const langKey = Object.keys(foundRedirect.hreflangs).find(
        (key) => foundRedirect.hreflangs[key] === routeClean
      );
    
      if (langKey) {
        window.location.href = domains[langKey] + routeClean;
      }
    }
  }
})

const siteConfig = useSiteConfig()

const hrefLangs = computed(() => getPageLangs(pageData?.value?.hreflangs));
const hrefLangsState = useState("hrefLangs" + route.fullPath.split('#')[0], () => hrefLangs.value);
const canonical = computed(()=>
  siteConfig.url + route.path
)

const headLinks = computed(() => {
  const canonicalLink = {
    hid: 'canonical',
    rel: 'canonical',
    href: canonical.value
  }
  const hrefs =  hrefLangs.value.map(lang => {
    return {
      rel: 'alternate',
      href: lang.href,
      hreflang: lang.hreflang,
    }
  })

  return [canonicalLink,...hrefs]
})

const img = useImage()
const headData = computed(() => {
  if (!pageData.value) return {}
  
  let data = {}
  
  const headGlobalData = props.globalSettings.head;
  const introduction = pageData.value.introduction;
  const meta = pageData.value.meta;

  data.title = introduction?.title || meta?.title || headGlobalData.title;
  data.ogTitle = data.title;

  data.description = introduction?.description || meta?.description || headGlobalData.description;
  data.ogDescription = data.description;

  if (pageData.value.image?.url) data.ogImage = img(pageData.value.image.url)

  return data

})

useSeoMeta(headData.value);

useHead({
  link: headLinks,
})

</script>