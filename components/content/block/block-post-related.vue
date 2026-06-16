<template>
    <div class="overflow-hidden mt-5">
        <div
        ref="swiper"
            class="swiper swiper-container !overflow-visible">
            <div
            class="swiper-wrapper items-center"
            >
                <ContentList :path="archivePathWithTrailing" :query="{ where: { _path: { $in: postsLinksFormatted} }}" v-slot="{list}">
                    <PostTileMd v-for="case_page in list" :key="case_page._path" :data="case_page" class="swiper-slide shrink-0 flex-grow-0"/>
                </ContentList>                 
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import { Swiper, Autoplay } from "swiper";
  import "swiper/css/bundle";
  
  export default {
    props: {
      archivePathWithTrailing:{
        type: String,
        default: '/blog/'
      },
      relatedPostsLinks: Array,
    },
    data() {
      return {
        swiper: null,
        swiperOptionsObject: {
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
          breakpoints:{
            768:{
                slidesPerView: 2
            },
            1024:{
                slidesPerView: 3
            }
          }
        },
      };
    },
    computed:{
        postsLinksFormatted(){
            if (this.relatedPostsLinks) {                
                return this.relatedPostsLinks.map(link => this.archivePathWithTrailing + link )
            }
        }
    },
    mounted() {
      this.swiper = new Swiper(this.$refs.swiper, this.swiperOptionsObject);
    },
  };
  </script>
  
  <style></style>
  