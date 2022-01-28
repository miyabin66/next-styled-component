import Head from 'next/head'
import { ReactNode } from 'react'
import styled from 'styled-components'
import meta from '~/services/meta'
import useViewport from '~/hooks/useViewport'

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
      </Head>
      <LayoutContainer>{children}</LayoutContainer>
    </>
  )
}

export default DefaultLayout
