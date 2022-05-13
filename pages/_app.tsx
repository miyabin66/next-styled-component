import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { useCallback, useEffect } from 'react'
import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'
import { DeviceContextProvider } from '~/context/DeviceContext'
import { GA_ID, GTM_ID, sendGAPageView, sendGTMPageView } from '~/utils/gtag'

const GlobalStyle = createGlobalStyle`
  ${reset}

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const handleRouteChange = useCallback((path: string) => {
    if (GTM_ID) {
      sendGTMPageView({ path })
    } else {
      sendGAPageView({ path })
    }
  }, [])

  useEffect(() => {
    if (!GA_ID || !GTM_ID) return

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <DeviceContextProvider>
      <GlobalStyle />
      {GTM_ID && (
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
      )}
      {GA_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}
      <Component {...pageProps} />
    </DeviceContextProvider>
  )
}

export default MyApp
