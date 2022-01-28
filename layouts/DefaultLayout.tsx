import Head from 'next/head'
import { ReactNode } from 'react'
import styled from 'styled-components'
import Script from 'next/script'
import meta from '~/services/meta'
import useViewport from '~/hooks/useViewport'
import useAnalytics from '~/hooks/useAnalytics'

type Prop = {
  children: ReactNode
  ogImage?: string
  ogUrl?: string
  ogDescription?: string
}

const LayoutContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const DefaultLayout = ({ children, ogImage, ogUrl, ogDescription }: Prop) => {
  useViewport()
  useAnalytics()

  return (
    <>
      <Head>
        <title>{meta.title}</title>

        <meta
          name="description"
          content={ogDescription ? ogDescription : meta.description}
        />
        <meta name="viewport" content={meta.viewport} />
        <meta name="keywords" content={meta.keywords} />
        {meta.applicationName && (
          <>
            <meta name="application-name" content={meta.applicationName} />
            <meta
              name="apple-mobile-web-app-title"
              content={meta.applicationName}
            />
          </>
        )}

        <link rel="icon" type={meta.faviconType} href={meta.faviconPath} />
        <link rel="canonical" href={meta.url} />
        {meta.appleTouchIconPath && (
          <link rel="apple-touch-icon" href={meta.appleTouchIconPath} />
        )}

        <meta property="og:url" content={ogUrl ? meta.url + ogUrl : meta.url} />
        <meta
          property="og:image"
          content={ogImage ? meta.url + ogImage : meta.ogImage}
        />
        <meta property="og:title" content={meta.title} />
        <meta
          property="og:description"
          content={ogDescription ? ogDescription : meta.description}
        />
        <meta property="twitter:title" content={meta.title} />
        <meta
          property="twitter:description"
          content={ogDescription ? ogDescription : meta.description}
        />
        <meta
          property="twitter:image"
          content={ogImage ? meta.url + ogImage : meta.image}
        />
        <meta property="twitter:card" content={meta.card} />
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <Script id="google-tagmanager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
            `}
          </Script>
        )}
      </Head>
      <LayoutContainer>{children}</LayoutContainer>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                window.dataLayer.push(arguments);
              }
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `}
          </Script>
        </>
      )}
    </>
  )
}

export default DefaultLayout
