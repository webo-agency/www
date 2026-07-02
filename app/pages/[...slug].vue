<template>
  <div>
    <ContentRenderer v-if="pageData" :value="pageData" />
    <UiContainer v-else>
      <div class="my-[150px]">
        <h1 class="text-2xl mb-5">Page not found</h1>
        <UiButtonMain class="text-white" :link="'/'" :title="'Back to home'"></UiButtonMain>
      </div>
    </UiContainer>
  </div>
</template>
  
<script async setup>
const route = useRoute()
const globalSettings = useState("globalSettings")
const routeClean = route.fullPath.split('#')[0].split('?')[0]
const { data: pageData } = await useAsyncData('page-data-' + routeClean, () => queryCollection('content').path(route.path).first())

provide('pageData', pageData)

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

const headData = computed(() => {
  if (!pageData.value) return {}
  
  let data = {}
  
  const headGlobalData = globalSettings.value?.head ?? {};
  const introduction = pageData.value.introduction;
  const meta = pageData.value.meta;

  data.title = meta?.title || introduction?.title || headGlobalData.title;
  data.ogTitle = data.title;

  data.description = meta?.description || introduction?.description || headGlobalData.description;
  data.ogDescription = data.description;

  const imageUrl = pageData.value.image?.url || headGlobalData?.image?.url || headGlobalData?.['image.url']
  if (imageUrl) data.ogImage = 'https://webo.pl' + imageUrl

  return data

})

useSeoMeta(headData.value);

useHead({
  link: headLinks,
})

function normalizeSchema(input) {
  if (!input) return [];

  const arr = Array.isArray(input) ? input : [input];

  return arr.filter(Boolean);
}

const schemaLd = computed(() => {
  if (!pageData.value) return null;

  const sRaw = pageData.value.schemaOrg ?? null;
  const graph = normalizeSchema(sRaw);

  const isBlog = routeClean.startsWith('/blog/') && routeClean !== '/blog/';

  if (isBlog) {
    const hasNewsArticle = graph.some(item => item?.['@type'] === 'NewsArticle');
    if (!hasNewsArticle) {
      graph.push({
        '@type': 'NewsArticle',
        headline: headData.value.title,
        description: headData.value.description,
        image: pageData.value.image?.url || '',
        url: routeClean,
        datePublished: pageData.value.updatedAt || '',
        author: {
          '@type': 'Person',
          name: pageData.value.author || 'Webo',
          url: pageData.value.authorUrl || siteConfig.url || '',
        }
      });
    }
  }

  if (graph.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@graph': graph
  };
});

useHead({
  script: computed(() => {
    if (!schemaLd.value) return [];
    return [
      {
        type: 'application/ld+json',
        children: JSON.stringify(schemaLd.value)
      }
    ];
  })
});

</script>