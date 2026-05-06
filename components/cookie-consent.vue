<template>
  <Transition name="consent">
    <div
      v-if="!hasConsent"
      class="fixed inset-0 z-[100] flex justify-end items-end p-4 tablet:p-6 bg-black/30 backdrop-blur-sm"
    >
      <div
        class="relative bg-[#1f1f1f] text-white border border-white/10 rounded shadow-2xl w-full max-w-[500px] p-6 flex flex-col gap-4"
      >
        <h3 class="text-xl font-normal tracking-wide">
          {{ title }}
        </h3>
        
        <hr class="border-white/20" />
        
        <label class="flex gap-3 cursor-pointer">
          <input 
            type="checkbox" 
            v-model="analyticsEnabled"
            class="w-5 h-5 shrink-0 mt-0.5 cursor-pointer accent-green-main"
          />
          <div class="flex flex-col gap-1">
            <span class="font-bold text-[15px] tracking-wide">{{ checkboxTitle }}</span>
            <p class="text-[14px] leading-relaxed text-white/90">
              {{ description }}
            </p>
          </div>
        </label>

        <hr class="border-white/20" />

        <div class="flex items-center justify-between tablet:justify-end gap-4 w-full flex-wrap tablet:flex-nowrap">
          <button class="text-sm font-medium hover:text-green-main transition-colors p-2" @click="handleRejectAll">
            {{ rejectBtn }}
          </button>
          <button class="text-sm font-medium hover:text-green-main transition-colors p-2" @click="handleConfirm">
            {{ confirmBtn }}
          </button>
          <button 
            class="w-full tablet:w-auto px-6 py-2 bg-green-main text-[#1f1f1f] hover:bg-green-mainHover font-medium rounded transition-colors text-[15px]"
            @click="handleAcceptAll"
          >
            {{ acceptBtn }}
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: { type: String, default: 'Cookie settings' },
  checkboxTitle: { type: String, default: 'Analytics' },
  description: { type: String, default: 'We analyze user interaction and flow for our internal needs' },
  acceptBtn: { type: String, default: 'Accept all' },
  rejectBtn: { type: String, default: 'Reject all' },
  confirmBtn: { type: String, default: 'Confirm current settings' },
})

const { hasConsent, acceptAll, rejectAll } = useAnalytics()
const analyticsEnabled = ref(false)

function handleAcceptAll() {
  analyticsEnabled.value = true
  acceptAll()
}

function handleRejectAll() {
  analyticsEnabled.value = false
  rejectAll()
}

function handleConfirm() {
  if (analyticsEnabled.value) {
    handleAcceptAll()
  } else {
    handleRejectAll()
  }
}
</script>

<style scoped>
.consent-enter-active {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
}
.consent-leave-active {
  transition: transform 0.3s cubic-bezier(0.7, 0, 0.84, 0), opacity 0.2s ease;
}
.consent-enter-from,
.consent-leave-to {
  opacity: 0;
}
</style>
