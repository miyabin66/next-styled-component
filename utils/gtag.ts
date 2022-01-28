declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

type SendPageViewProps = {
  path: string
  title?: string
  location?: string
}

type SendGAEventProps = {
  action: string
  category: string
  label: string
  value: number
}

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export const sendGTMPageView = ({
  path,
  title = '',
  location = '',
}: SendPageViewProps) => {
  window.dataLayer.push({
    page_path: path,
    page_title: title,
    page_location: location,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const sendGAPageView = ({
  path,
  title = '',
  location = '',
}: SendPageViewProps) => {
  if (!GA_ID) return

  window.gtag('config', GA_ID, {
    page_path: path,
    page_title: title,
    page_location: location,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const sendGAEvent = ({
  action,
  category,
  label,
  value,
}: SendGAEventProps) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
