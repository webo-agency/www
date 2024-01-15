<template>
  <div>
    <ContentRenderer v-if="pageData" :value="pageData" />
    <PageSection v-else>
      <div class="my-[150px]">
        <h1 class="text-2xl mb-5">Document is empty</h1>
        <ButtonMain class="text-white" :link="'/'" :title="'Back to home'"></ButtonMain>
      </div>
    </PageSection>
  </div>
</template>
  
<script async setup>
const route = useRoute()
const { data: pageData } = await useAsyncData('page-data-' + route.fullPath.split('#')[0].split('?')[0], () => queryContent(route.path).findOne())

const pageHasForm = computed(() => {
  if (!pageData.value) return false


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