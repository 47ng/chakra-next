import { createChakraNextApp } from '../src'

export default createChakraNextApp({
  enableColorMode: 'dark',
  Providers: ({ children }) => {
    console.log('Render root')
    return children
  },
})
