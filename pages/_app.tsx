import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'
import { DeviceContextProvider } from '~/context/DeviceContext'

const GlobalStyle = createGlobalStyle`
  ${reset}
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
