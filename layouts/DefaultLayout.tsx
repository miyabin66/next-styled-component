import Head from 'next/head'
import { ReactNode } from 'react'
import styled from 'styled-components'
import meta from '~/services/meta'
import useViewport from '~/hooks/useViewport'
import { GTagSnippet } from '~/utils/gtag'

type Prop = {
  children: ReactNode
  ogImage?: string
  ogUrl?: string
  description?: string
}

const LayoutContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const DefaultLayout = ({ children, ogImage, ogUrl, description }: Prop) => {
  useViewport()

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta
          name="description"
          content={description ? description : meta.description}
        />
        <meta name="viewport" content={meta.viewport} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="application-name" content={meta.applicationName} />
        <meta
          name="apple-mobile-web-app-title"
          content={meta.applicationName}
        />
        <link rel="icon" type="image/png" href={meta.faviconPath} />
        <link rel="canonical" href={meta.url} />
        <link rel="apple-touch-icon" href={meta.appleTouchIconPath} />

        <meta property="og:url" content={ogUrl ? meta.url + ogUrl : meta.url} />
        <meta
          property="og:image"
          content={ogImage ? meta.url + ogImage : meta.ogImage}
        />
        <meta property="og:title" content={meta.title} />
        <meta
          property="og:description"
          content={description ? description : meta.description}
        />
        <meta property="twitter:title" content={meta.title} />
        <meta
          property="twitter:description"
          content={description ? description : meta.description}
        />
        <meta
          property="twitter:image"
          content={ogImage ? meta.url + ogImage : meta.image}
        />
        <meta property="twitter:card" content={meta.card} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Old+Mincho:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <LayoutContainer>{children}</LayoutContainer>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GTagSnippet trackingId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </>
  )
}

export default DefaultLayout
