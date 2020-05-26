import React from 'react'
import App from 'next/app'
import ThemeProvider from '@chakra-ui/core/dist/ThemeProvider'
import ColorModeProvider from '@chakra-ui/core/dist/ColorModeProvider'
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
    bg: '#0f141c', // theme.colors.gray[900],
    borderColor: theme.colors.gray[800],
    placeholderColor: theme.colors.gray[600],
  },
})

const defaultGlobalCss = css`
  html {
    font-family: ${defaultTheme.fonts['body']};
  }
`

const DummyColorModeProvider: React.FC<any> = ({ children }) => children

// --

export interface AppTraits {
  theme?: Theme
  getGlobalConfig?: CSSResetProps['config']
  globalCss?: SerializedStyles
  Providers?: React.FunctionComponent<any>
  enableColorMode?: true | 'light' | 'dark'
}

export function createChakraNextApp(
  {
    theme = defaultTheme,
    getGlobalConfig = defaultGetGlobalConfig,
    globalCss = defaultGlobalCss,
    Providers = React.Fragment,
    enableColorMode,
  }: AppTraits = {
    theme: defaultTheme,
    getGlobalConfig: defaultGetGlobalConfig,
    globalCss: defaultGlobalCss,
    Providers: React.Fragment,
  }
) {
  const ColorMode = enableColorMode ? ColorModeProvider : DummyColorModeProvider
  return class ChakraNextApp extends App {
    render() {
      const { Component, pageProps } = this.props
      return (
        <ThemeProvider theme={theme}>
          <ColorMode
            value={enableColorMode === true ? undefined : enableColorMode}
          >
            <CSSReset config={getGlobalConfig} />
            <Global styles={[globalCss]} />
            <Providers>
              <Component {...pageProps} />
            </Providers>
          </ColorMode>
        </ThemeProvider>
      )
    }
  }
}
