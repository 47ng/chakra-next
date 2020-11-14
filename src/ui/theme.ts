import { extendTheme, Theme } from '@chakra-ui/react'
import { Dict } from '@chakra-ui/utils'
import { mode } from '@chakra-ui/theme-tools'
import { tailwindColors } from './colors'
import { systemFontStack, systemMonoFontStack } from './fonts'

export interface ChakraNextTheme extends Theme {
  colors: Theme['colors'] & {
    // Custom colors hues
    indigo: {
      50: string
      100: string
      200: string
      300: string
      400: string
      500: string
      600: string
      700: string
      800: string
      900: string
    }
  }
}

export const defaultTheme: ChakraNextTheme = extendTheme({
  styles: {
    global: (props: Dict) => ({
      body: {
        color: mode('gray.700', 'gray.400')(props),
        borderColor: mode('gray.600', 'gray.800')(props),
        bg: mode('gray.200', '#0f141c')(props),
      },
      _placeholder: {
        color: 'gray.600',
      },
    }),
  },
  colors: tailwindColors,
  fonts: {
    body: systemFontStack,
    heading: systemFontStack,
    mono: systemMonoFontStack,
  },
  shadows: {
    sm: '0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.06)',
    md: '0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06)',
    lg: '0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05)',
    xl: '0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04)',
    '2xl': '0 25px 50px -12px rgba(0,0,0,0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
    outline: '0 0 0 3px rgba(66,153,225,0.5)',
    none: 'none',
  },
})
