import { useColorModeValue, useToken } from '@chakra-ui/react'

/**
 * Resolve two design tokens based on color mode.
 *
 * Defaults to resolving colors (useful for SVGs & external components),
 * but can be used to resolve other values, like shadows:
 *
 * ```
 * const shadowCSS = useColorModeToken('md', 'dark-lg', 'shadows')
 * ```
 *
 * @param light the token in light mode
 * @param dark the token in dark mode
 * @param scale the token type to resolve (defaults to `colors`)
 * @returns a resolved CSS value
 */
export function useColorModeToken<T extends string | string[]>(
  light: T,
  dark: T,
  scale = 'colors'
): T extends string[] ? string[] : string {
  return useToken(scale, useColorModeValue(light, dark))
}

export const indigo = {
  50: '#f9fbff',
  100: '#ebf4ff',
  200: '#c3dafe',
  300: '#a3bffa',
  400: '#7f9cf5',
  500: '#667eea',
  600: '#5a67d8',
  700: '#4c51bf',
  800: '#434190',
  900: '#3c366b',
}
