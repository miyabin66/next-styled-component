import { useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'
import { sendPageView, SendPageViewProps } from '~/utils/gtag'

const useAnalytics = () => {
  const router = useRouter()

  const handleRouteChange = useCallback(() => {
    if (!process.env.NEXT_PUBLIC_GA_ID) return

    const sendData: SendPageViewProps = {
      id: process.env.NEXT_PUBLIC_GA_ID,
      pagePath: router.pathname,
    }
    sendPageView(sendData)
  }, [router.pathname])

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_GA_ID) return

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [handleRouteChange, router.events])
}

export default useAnalytics
