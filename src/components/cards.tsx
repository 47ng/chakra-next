import React from 'react'
import PseudoBox, { PseudoBoxProps } from '@chakra-ui/core/dist/PseudoBox'
import Flex, { FlexProps } from '@chakra-ui/core/dist/Flex'
import Stack, { StackProps } from '@chakra-ui/core/dist/Stack'
import { useColorMode } from '@chakra-ui/core/dist/ColorModeProvider'

// --

export const cardBackgroundColors = {
  light: 'white',
  dark: 'gray.900',
}

export const cardProps: PseudoBoxProps = {
  p: 4,
  borderRadius: 4,
  shadow: 'md',
}

export interface CardProps extends PseudoBoxProps {}

export const Card: React.FC<CardProps> = ({ ...props }) => {
  const { colorMode } = useColorMode()
  return (
    <PseudoBox {...cardProps} bg={cardBackgroundColors[colorMode]} {...props} />
  )
}

// --

export interface FlexCardProps extends FlexProps {}

export const FlexCard: React.FC<FlexCardProps> = ({ ...props }) => {
  const { colorMode } = useColorMode()
  return <Flex {...cardProps} bg={cardBackgroundColors[colorMode]} {...props} />
}

// --

export interface StackCardProps extends StackProps {}

export const StackCard: React.FC<StackCardProps> = ({ ...props }) => {
  const { colorMode } = useColorMode()
  return (
    <Stack {...cardProps} bg={cardBackgroundColors[colorMode]} {...props} />
  )
}
