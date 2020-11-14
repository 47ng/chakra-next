import React from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import { defaultTheme } from '../src/ui/theme'

const Providers: React.FC = ({ children }) => {
  return <ChakraProvider theme={defaultTheme}>{children}</ChakraProvider>
}

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
