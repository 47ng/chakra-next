import React from 'react'
import App from 'next/app'
import ThemeProvider from '@chakra-ui/core/dist/ThemeProvider'
import CSSReset, { CSSResetProps } from '@chakra-ui/core/dist/CSSReset'
import { Global, css, SerializedStyles } from '@emotion/core'
import { defaultTheme, Theme } from '../ui/theme'

type GetGlobalConfig = Required<CSSResetProps>['config']

const defaultGetGlobalConfig: GetGlobalConfig = (theme) => ({
  light: {
    color: theme.colors.gray[700],
    bg: theme.colors.gray[200],
    borderColor: theme.colors.gray[400],
    placeholderColor: theme.colors.gray[600],
  },
  dark: {
    color: theme.colors.gray[400],
    bg: theme.colors.gray[800],
    borderColor: theme.colors.whiteAlpha[300],
    placeholderColor: theme.colors.gray[600],
  },
})

const defaultGlobalCss = css`
  html {
    font-family: ${defaultTheme.fonts['body']};
  }
`

// --

export interface AppTraits {
  theme?: Theme
  getGlobalConfig?: CSSResetProps['config']
  globalCss?: SerializedStyles
  Providers?: React.FunctionComponent<any>
}

export function createChakraNextApp(
  {
    theme = defaultTheme,
    getGlobalConfig = defaultGetGlobalConfig,
    globalCss = defaultGlobalCss,
    Providers = React.Fragment,
  }: AppTraits = {
    theme: defaultTheme,
    getGlobalConfig: defaultGetGlobalConfig,
    globalCss: defaultGlobalCss,
    Providers: React.Fragment,
  }
) {
  return class ChakraNextApp extends App {
    render() {
      const { Component, pageProps } = this.props
      return (
        <ThemeProvider theme={theme}>
          <CSSReset config={getGlobalConfig} />
          <Global styles={[globalCss]} />
          <Providers>
            <Component {...pageProps} />
          </Providers>
        </ThemeProvider>
      )
    }
  }
}
