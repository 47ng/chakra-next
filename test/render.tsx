import React from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from '@chakra-ui/core'

const Providers: React.FC = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
