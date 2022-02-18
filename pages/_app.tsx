import {
  ChakraProvider,
  IconButton,
  IconButtonProps,
  useColorMode,
} from '@chakra-ui/react'
import { AppProps } from 'next/app'
import React from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import { chakraNextTheme } from '../'

export default function App({
  Component,
  pageProps,
  err,
}: AppProps & { err?: any }) {
  // Workaround for https://github.com/vercel/next.js/issues/8592
  return (
    <ChakraProvider theme={chakraNextTheme}>
      <ColorModeSwitch />
      {<Component {...pageProps} err={err} />}
    </ChakraProvider>
  )
}

// --

interface ColorModeSwitchProps extends Omit<IconButtonProps, 'aria-label'> {}

const ColorModeSwitch: React.FC<ColorModeSwitchProps> = ({ ...props }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton
      variant="ghost"
      aria-label={colorMode === 'dark' ? 'Dark Mode' : 'Light Mode'}
      icon={colorMode === 'dark' ? <FiMoon /> : <FiSun />}
      isRound
      onMouseDown={toggleColorMode}
      sx={{
        mixBlendMode: colorMode === 'light' ? 'multiply' : 'normal',
      }}
      {...props}
    />
  )
}
