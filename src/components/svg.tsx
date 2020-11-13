import React, { SVGAttributes } from 'react'
import { chakra, ChakraProps } from '@chakra-ui/react'

export type SvgProps = ChakraProps &
  Pick<
    SVGAttributes<HTMLOrSVGElement>,
    'xmlns' | 'viewBox' | 'preserveAspectRatio'
  >

export const Svg: React.FC<SvgProps> = ({ children, ...props }) => (
  <chakra.svg xmlns="http://www.w3.org/2000/svg" role="img" {...props}>
    {children}
  </chakra.svg>
)
