import type { ConsentParams } from 'nuxt-gtag'


const GRANTED_ALL: ConsentParams = {
  ad_user_data: 'granted',
  ad_personalization: 'granted',
  ad_storage: 'granted',
  analytics_storage: 'granted',
}

const DENIED_ALL: ConsentParams = {
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  ad_storage: 'denied',
  analytics_storage: 'denied',
}

export default function useAnalytics() {
  const consent = useCookie<ConsentParams | null>('cookieConsent', {
    default: () => null,
    maxAge: 60 * 60 * 24 * 365,
  })

  const { gtag, initialize } = useGtag()

  const clarity = useRuntimeConfig().public.clarityId ? useScriptClarity() : null

  const hasConsent = computed(() => consent.value !== null)
  const isGranted = computed(() => consent.value?.analytics_storage === 'granted')


  function acceptAll() {
    consent.value = GRANTED_ALL
    initialize()
    gtag('consent', 'update', GRANTED_ALL)
    clarity?.proxy.clarity('consent', true)
  }

  function rejectAll() {
    consent.value = DENIED_ALL
    gtag('consent', 'update', DENIED_ALL)
    clarity?.proxy.clarity('consent', false)
  }

  function trackEvent(eventName: string, params?: Record<string, any>) {
    if (!isGranted.value) return
    gtag('event', eventName, params)
    clarity?.proxy.clarity('event', eventName)
  }

  return {
    consent,
    hasConsent,
    isGranted,
    acceptAll,
    rejectAll,
    trackEvent,
  }
}
