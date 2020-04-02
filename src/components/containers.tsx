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

export interface CommonContainerProps {
  wide?: boolean
}

// --

export interface ContainerProps extends BoxProps, CommonContainerProps {}

export const Container: React.FC<ContainerProps> = ({
  wide = false,
  ...props
}) => {
  return <Box maxW={wide ? '3xl' : 'xl'} mx="auto" px={2} {...props} />
}

// --

export interface FlexContainerProps extends FlexProps, CommonContainerProps {}

export const FlexContainer: React.FC<FlexContainerProps> = ({
  wide = false,
  ...props
}) => {
  return <Flex maxW={wide ? '3xl' : 'xl'} mx="auto" px={2} {...props} />
}

// --

export interface StackContainerProps extends StackProps, CommonContainerProps {}

export const StackContainer: React.FC<StackContainerProps> = ({
  wide = false,
  ...props
}) => {
  return <Stack maxW={wide ? '3xl' : 'xl'} mx="auto" px={2} {...props} />
}
