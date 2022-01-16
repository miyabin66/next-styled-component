import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'
import { DeviceContextProvider } from '~/context/DeviceContext'

const GlobalStyle = createGlobalStyle`
  /* ${reset} */

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
  return (
    <DeviceContextProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </DeviceContextProvider>
  )
}

export default MyApp
