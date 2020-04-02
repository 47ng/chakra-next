import React from 'react'
import {
  Box,
  Flex,
  Stack,
  BoxProps,
  FlexProps,
  StackProps
} from '@chakra-ui/core'

// --

const baseProps: BoxProps = {
  p: 4,
  borderRadius: 4,
  bg: 'white',
  shadow: 'md'
}

export interface CardProps extends BoxProps {}

export const Card: React.FC<CardProps> = ({ ...props }) => {
  return <Box {...baseProps} {...props} />
}

// --

export interface FlexCardProps extends FlexProps {}

export const FlexCard: React.FC<FlexCardProps> = ({ ...props }) => {
  return <Flex {...baseProps} {...props} />
}

// --

export interface StackCardProps extends StackProps {}

export const StackCard: React.FC<StackCardProps> = ({ ...props }) => {
  return <Stack {...baseProps} {...props} />
}
