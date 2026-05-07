export default defineNuxtPlugin(() => {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return

  // Unregister all service workers
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (const reg of registrations) {
      try {
        reg.unregister()
      } catch (e) {
        // ignore
      }
    }
  }).catch(() => {})

  // Clear caches created by service workers (optional but recommended)
  if (typeof caches !== 'undefined') {
    caches.keys().then((names) => {
      return Promise.all(names.map((name) => caches.delete(name)))
    }).catch(() => {})
  }
})
