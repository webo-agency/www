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

provide('pageData', pageData)

const siteConfig = useSiteConfig()

const hrefLangs = computed(() => getPageLangs(pageData?.value?.hreflangs));
const hrefLangsState = useState("hrefLangs" + route.fullPath.split('#')[0], () => hrefLangs.value);
const canonical = computed(()=>
  siteConfig.url + (route.path.endsWith('/') ? route.path : route.path + '/')
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
  
  const headGlobalData = props.globalSettings.head;
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

// Sections that have their own listing page and appear as the middle breadcrumb level
const breadcrumbSections = {
  blog: 'Blog',
  realizacje: 'Realizacje',
  'case-studies': 'Case Studies',
};

const isPL = props.globalSettings?.general?.lang === 'PL';

function buildBreadcrumb() {
  const segments = routeClean.split('/').filter(Boolean);
  if (segments.length === 0) return null;

  const items = [
    { name: isPL ? 'Strona główna' : 'Home', item: siteConfig.url + '/' },
  ];

  if (segments.length > 1 && breadcrumbSections[segments[0]]) {
    items.push({
      name: breadcrumbSections[segments[0]],
      item: siteConfig.url + '/' + segments[0] + '/',
    });
  }

  const pageName = pageData.value.breadcrumb
    || headData.value.title.replace(/\s+[|-]\s+Webo(\.pl)?\s*$/i, '');
  items.push({ name: pageName, item: canonical.value });

  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: entry.name,
      item: entry.item,
    })),
  };
}

const schemaLd = computed(() => {
  if (!pageData.value) return null;

  const sRaw = pageData.value.schemaOrg ?? null;
  const graph = normalizeSchema(sRaw);

  const isBlog = routeClean.startsWith('/blog/') && routeClean !== '/blog/';

  if (isBlog) {
    const hasArticle = graph.some(item => ['NewsArticle', 'BlogPosting'].includes(item?.['@type']));
    if (!hasArticle) {
      graph.push({
        '@type': 'BlogPosting',
        mainEntityOfPage: canonical.value,
        headline: pageData.value.introduction?.title || headData.value.title,
        description: headData.value.description,
        image: pageData.value.image?.url ? siteConfig.url + pageData.value.image.url : '',
        url: canonical.value,
        datePublished: pageData.value.updatedAt || '',
        dateModified: pageData.value.dateModified || pageData.value.updatedAt || '',
        inLanguage: isPL ? 'pl-PL' : 'en-US',
        author: {
          '@type': 'Person',
          name: pageData.value.author || 'Webo',
          url: pageData.value.authorUrl || siteConfig.url || '',
        },
        publisher: {
          '@type': 'Organization',
          '@id': siteConfig.url + '/#organization',
          name: 'Webo',
          url: siteConfig.url + '/',
          logo: siteConfig.url + '/symbol.png',
        },
      });
    }
  }

  const hasBreadcrumb = graph.some(item => item?.['@type'] === 'BreadcrumbList');
  const breadcrumb = hasBreadcrumb ? null : buildBreadcrumb();
  if (breadcrumb) graph.push(breadcrumb);

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