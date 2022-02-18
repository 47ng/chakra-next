import { Box, BoxProps, chakra } from '@chakra-ui/react'

// Semantic tokens defined in ui/theme.ts
export const cardProps: BoxProps = {
  backgroundColor: 'card.bg',
  padding: 4,
  rounded: 'md',
  shadow: 'card.shadow',
}

export const Card = chakra(Box, {
  baseStyle: cardProps,
})
