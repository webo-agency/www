<template>
    <div class="overflow-hidden mt-5">
        <div
        ref="swiper"
            class="swiper swiper-container !overflow-visible">
            <div
            class="swiper-wrapper items-center"
            >
              <PostTileMd
                v-for="case_page in (relatedPosts || [])"
                :key="case_page.path"
                :data="case_page"
                class="swiper-slide shrink-0 flex-grow-0"
              />
            </div>
        </div>
    </div>
  </template>

  <script setup>
  import { computed } from 'vue'
  import { Swiper } from "swiper";
  import { Autoplay } from "swiper/modules";
  import "swiper/css/bundle";
  const props = defineProps({
    archivePathWithTrailing: {
      type: String,
      default: '/blog/'
    },
    relatedPostsLinks: {
      type: Array,
      default: () => []
    }
  })

  const swiper = ref(null)

  const swiperOptionsObject = {
    modules: [Autoplay],
    slidesPerView: 1.5,
    spaceBetween: 20,
    direction: "horizontal",
    speed: 1500,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    preloadImages: false,
    lazy: {
      loadPrevNext: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  }

  const postsLinksFormatted = computed(() => {
    if (!props.relatedPostsLinks || props.relatedPostsLinks.length === 0) {
      return []
    }

    const basePath = props.archivePathWithTrailing.endsWith('/')
      ? props.archivePathWithTrailing
      : `${props.archivePathWithTrailing}/`

    return props.relatedPostsLinks.map((link) => `${basePath}${link}`)
  })

  const { data: relatedPosts } = await useAsyncData(
    () => `related-posts-${postsLinksFormatted.value.join('|')}`,
    async () => {
      if (!postsLinksFormatted.value.length) {
        return []
      }

      return await queryCollection('content')
        .where('path', 'IN', postsLinksFormatted.value)
        .all()
    },
    { watch: [postsLinksFormatted] }
  )

  onMounted(() => {
    if (swiper.value) {
      new Swiper(swiper.value, swiperOptionsObject)
    }
  })
  </script>
  
  <style></style>
  