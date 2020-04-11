import React from 'react'
import Box, { BoxProps } from '@chakra-ui/core/dist/Box'
import Flex, { FlexProps } from '@chakra-ui/core/dist/Flex'
import Stack, { StackProps } from '@chakra-ui/core/dist/Stack'

// --

const baseProps: BoxProps = {
  p: 4,
  borderRadius: 4,
  bg: 'white',
  shadow: 'md',
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
