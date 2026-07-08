export default defineNuxtPlugin(() => {
  const { hasConsent, isGranted, acceptAll, rejectAll } = useAnalytics()

  if (!hasConsent.value) return

  if (isGranted.value) {
    acceptAll()
  } else {
    rejectAll()
  }
})
