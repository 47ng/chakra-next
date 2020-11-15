import React from 'react'
import App from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { defaultTheme, ChakraNextTheme } from '../ui/theme'

// --

export interface AppTraits {
  theme?: ChakraNextTheme
  Providers?: React.FunctionComponent<any>
}

const defaults: AppTraits = {
  theme: defaultTheme,
  Providers: React.Fragment,
}

export function createChakraNextApp({
  theme = defaultTheme,
  Providers = React.Fragment,
}: AppTraits = defaults) {
  return class ChakraNextApp extends App {
    render() {
      const { Component, pageProps } = this.props
      return (
        <ChakraProvider theme={theme} resetCSS>
          <Providers>
            <Component {...pageProps} />
          </Providers>
        </ChakraProvider>
      )
    }
  }
}
