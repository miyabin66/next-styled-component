declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

type SendPageViewProps = {
  path: string
}

type SendGAEventProps = {
  action: string
  category: string
  label: string
  value: number
}

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export const sendGTMPageView = ({ path }: SendPageViewProps) => {
  window.dataLayer.push({
    page_path: path,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const sendGAPageView = ({ path }: SendPageViewProps) => {
  if (!GA_ID) return

  window.gtag('config', GA_ID, {
    page_path: path,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const sendGAEvent = ({
  action,
  category,
  label,
  value,
}: SendGAEventProps) => {
  if (!GA_ID) return

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
