import { chakra, ChakraProps, forwardRef } from '@chakra-ui/react'
import type React from 'react'
import type { SVGAttributes } from 'react'

export type SvgProps = ChakraProps & SVGAttributes<HTMLOrSVGElement>

export const Svg = forwardRef<SvgProps, 'svg'>((props, ref) => (
  <chakra.svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    ref={ref}
    {...props}
  />
))
