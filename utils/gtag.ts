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
