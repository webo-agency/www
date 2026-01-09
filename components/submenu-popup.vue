<template>
  <div class="transition-all duration-300 overflow-hidden px-20" :class="active
    ? 'shadow-2xl shadow-black/10 max-h-[590px]'
    : 'pointer-events-none'
    " :style="submenuStyles">
    <div ref="innerContainer"
      class="relative text-black mx-auto max-w-screen-desktop-wide transition-all duration-200 py-[50px]">
      <svg class="absolute -z-10 bottom-8 -right-16" width="118" height="150" viewBox="0 0 118 150" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M24.3371 0.0120019L24.3265 0.0183393H24.3164L24.3044 0.0246768C24.2081 0.0436932 24.1165 0.0880367 24.0376 0.157764L24.0283 0.164137L24.0156 0.176812L24.0029 0.183149L0.195915 22.7621L0.184529 22.7684L0.17118 22.781L0.161135 22.7937L0.150448 22.8063L0.144406 22.8127C0.0889164 22.8824 0.0494745 22.9522 0.0260754 23.0346L0.023432 23.041L0.0194291 23.0536L0.0180696 23.0664C0.0147269 23.079 0.0120506 23.0852 0.010045 23.0979C0.00402804 23.1359 0 23.1741 0 23.2058V125.616C0 125.876 0.165836 126.104 0.418547 126.205L56.1293 147.548C66.6362 151.567 76.149 150.477 83.0417 145.513C88.4035 141.659 92.1874 135.434 93.5913 127.397C107.818 126.788 118 115.474 118 97.6488V36.2067C118 35.9468 117.833 35.7122 117.579 35.6171L24.7343 0.0500625C24.7068 0.0373848 24.6782 0.0310156 24.6494 0.0246768L24.6353 0.0183393H24.628L24.6159 0.0120019C24.5237 -0.00701459 24.4287 -0.000675775 24.3371 0.0120019ZM24.1099 32.8725L1.33711 24.1502V125.191L56.6307 146.369C66.6235 150.198 75.6809 149.228 82.2327 144.505C88.8179 139.77 92.8559 131.289 92.8559 120.221V59.2039L24.3512 32.9612C24.2636 32.9485 24.1821 32.9168 24.1099 32.8725ZM116.663 37.747L94.1931 59.0391V120.221C94.1931 122.275 94.0527 124.246 93.7919 126.123C107.223 125.406 116.663 114.535 116.663 97.6488V37.747ZM25.1448 31.9026L93.364 58.0312L116.155 36.4348L25.1448 1.57131V31.9026ZM1.8559 22.9775L23.8077 31.3891V2.16728L1.8559 22.9775Z"
          fill="#07E7C4" />
      </svg>
      <Transition name="fade" mode="out-in">
        <div v-if="data && data.length > 0" :key="name" class="overflow-hidden">
          <div class="w-full flex flex-row gap-10 xl:gap-20">
            <div v-for="column in columns" class="first:border-r border-r-black/10"
              :class="column.some(item => item.type == 'section') ? 'grow' : 'max-w-[410px]'">
              <div v-for="item in column" :key="item.title">
                <div v-if="item.type == 'section'" class="h-full">
                  <SubmenuSectionTiles :data="item"/>
                </div>
                <div v-else class="pr-10 xl:pr-20 pt-10">
                  <CustomLink :url="item.link" :activeClass="item.link === 'https://webo.agency/'
                    ? 'text-green-main'
                    : 'text-gray-darker'
                    "
                    class="block py-2.5 uppercase text-xl font-semibold hover:text-green-main transition duration-200 mb-10"
                    @click="emitLinkClick()">
                    <span class="inline-block w-[30px] h-[15px] rounded-full bg-green-main mr-4">
                    </span>
                    {{ $formatText(item.title) }}
                  </CustomLink>
                  <ul v-if="item.items" class="pl-[50px] mb-14">
                    <li v-for="item in item.items" :key="item.title" class="block mb-5">
                      <CustomLink :url="item.link" :activeClass="item.link === 'https://webo.agency/'
                        ? 'text-green-main'
                        : 'text-gray-darker'
                        " class="py-1 text-base font-semibold hover:text-green-main transition duration-200"
                        @click="emitLinkClick()">
                        {{ $formatText(item.title) }}
                      </CustomLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script>
import CustomLink from "./custom-link.vue";
export default {
  name: "subMenuPopup",
  props: {
    name: String,
    data: Object,
    active: Boolean,
  },
  components: { CustomLink },
  data() {
    return {
      innerHeight: 0,
    };
  },
  methods: {
    emitLinkClick() {
      this.$emit('link-clicked')
    },
    updateInnerContainerHeight() {
      this.$nextTick(() => {
        if (this.$refs.innerContainer) {
          this.innerHeight = this.$refs.innerContainer.scrollHeight
        }
      })
    }
  },
  watch: {
    active(newVal) {
      if (newVal) {
        this.updateInnerContainerHeight()
      }
    }
  },
  computed: {
    submenuStyles() {
      return {
        height: this.active ? this.innerHeight + "px" : "0px",
      };
    },
    columns() {
      if (!this.$props.data || !this.$props.data.length) {
        return [];
      }

      return this.$props.data.reduce((acc, item) => {
        const hasManyChildren = item.items && item.items.length >= 4;
        const isSection = item.type === 'section';
        if (hasManyChildren || isSection) {
          acc.push([item]);
        } else {
          acc[acc.length - 1].push(item);
        }

        return acc;
      }, []);
    }
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.link-active-line .line {
  @apply after:translate-x-full;
}
</style>
