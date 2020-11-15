import { createChakraNextApp } from '../src'

export default createChakraNextApp({
  Providers: ({ children }) => {
    console.log('Render root')
    return children
  },
})
