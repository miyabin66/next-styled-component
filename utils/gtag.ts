type GTagMethod = {
  event: [
    string,
    {
      event_category: string
      event_label?: string
      event_value?: number | string
    },
  ]
  config: [
    string,
    {
      page_title?: string
      page_location?: string
      page_path?: string
    },
  ]
}

declare global {
  interface Window {
    gtag: <K extends keyof GTagMethod>(
      type: K,
      payload1: GTagMethod[K][0],
      payload2: GTagMethod[K][1],
    ) => void
  }
}

type SendEventProps = {
  action: string
  category: string
  label?: string
  value?: number | string
}

export const sendGAEvent = ({
  action,
  category,
  label,
  value,
}: SendEventProps) => {
  try {
    if (window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        event_value: value,
      })
    }
  } catch (error) {
    return error
  }
}

export type SendPageViewProps = {
  id: string
  pageTitle?: string
  pageLocation?: string
  pagePath?: string
}

export const sendPageView = ({
  id,
  pageTitle,
  pageLocation,
  pagePath,
}: SendPageViewProps) => {
  try {
    if (window.gtag) {
      window.gtag('config', id, {
        page_title: pageTitle,
        page_location: pageLocation,
        page_path: pagePath,
      })
    }
  } catch (error) {
    return error
  }
}
