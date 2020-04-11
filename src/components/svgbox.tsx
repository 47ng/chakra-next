import React, { SVGAttributes } from 'react'
import PseudoBox, { PseudoBoxProps } from '@chakra-ui/core/dist/PseudoBox'

export type SvgBoxProps = PseudoBoxProps &
  Pick<
    SVGAttributes<HTMLOrSVGElement>,
    'xmlns' | 'viewBox' | 'preserveAspectRatio'
  >

export const SvgBox: React.FC<SvgBoxProps> = ({ children, ...props }) => (
  <PseudoBox as="svg" xmlns="http://www.w3.org/2000/svg" role="img" {...props}>
    {children}
  </PseudoBox>
)
