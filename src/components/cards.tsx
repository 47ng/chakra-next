import React from 'react'
import {
  Box,
  BoxProps,
  Flex,
  FlexProps,
  Stack,
  StackProps,
  useColorMode,
} from '@chakra-ui/react'

// --

export const cardBackgroundColors = {
  light: 'white',
  dark: 'gray.900',
}

export const cardProps: BoxProps = {
  p: 4,
  borderRadius: 4,
  shadow: 'md',
}

export interface CardProps extends BoxProps {}

export const Card: React.FC<CardProps> = ({ ...props }) => {
  const { colorMode } = useColorMode()
  return <Box {...cardProps} bg={cardBackgroundColors[colorMode]} {...props} />
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
