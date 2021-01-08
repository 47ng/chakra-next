import React from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { useRouter, NextRouter } from 'next/router'
import {
  BoxProps,
  Button,
  ButtonProps,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  IconButton,
  IconButtonProps,
  Box,
} from '@chakra-ui/react'
import type { Merge } from '@chakra-ui/utils'
import { FiExternalLink } from 'react-icons/fi'

export interface RouteLinkProps
  extends Omit<NextLinkProps, 'as' | 'href'>,
    Omit<ChakraLinkProps, 'as' | 'href'> {
  as?: string
  to: string
}

export const RouteLink: React.FC<RouteLinkProps> = ({
  to,
  as = to,
  children,
  ...props
}) => {
  return (
    <NextLink href={to} passHref as={as}>
      <ChakraLink {...props}>{children}</ChakraLink>
    </NextLink>
  )
}

// --

export interface OutgoingLinkProps extends ChakraLinkProps {
  showExternalIcon?: boolean
  noreferrer?: boolean
  noopener?: boolean
  rel?: string
}

export const OutgoingLink: React.FC<OutgoingLinkProps> = ({
  children,
  isExternal = true,
  showExternalIcon = false,
  noreferrer = true,
  noopener = true,
  rel = '',
  ...props
}) => {
  const _rel = [
    ...rel.split(' '),
    noopener && 'noopener',
    noreferrer && 'noreferrer',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <ChakraLink isExternal={isExternal} rel={_rel} {...props}>
      {children}
      {showExternalIcon && (
        <Box
          as={FiExternalLink}
          display="inline-block"
          mx="0.2em"
          mt="-0.25em"
          fontSize="0.8em"
          aria-label="(external link)"
        />
      )}
    </ChakraLink>
  )
}

// --

export interface ButtonRouteLinkProps
  extends Omit<NextLinkProps, 'as' | 'href'>,
    ButtonProps {
  to: string
}

export const ButtonRouteLink: React.FC<ButtonRouteLinkProps> = ({
  to,
  children,
  ...props
}) => (
  <NextLink href={to} passHref>
    <Button as="a" {...props}>
      {children}
    </Button>
  </NextLink>
)

// --

export interface IconButtonRouteLinkProps
  extends Merge<RouteLinkProps, IconButtonProps> {}

export const IconButtonRouteLink: React.FC<IconButtonRouteLinkProps> = ({
  ...props
}) => {
  return <IconButton as={RouteLink} {...props} />
}

// --

export interface IconButtonOutgoingLinkProps
  extends Merge<Omit<OutgoingLinkProps, 'showExternalIcon'>, IconButtonProps> {}

export const IconButtonOutgoingLink: React.FC<IconButtonOutgoingLinkProps> = ({
  ...props
}) => {
  return <IconButton as={OutgoingLink} {...props} />
}

// --

export interface ShouldBeActiveArgs {
  to: string
  as: string
  router?: NextRouter
}

export type ShouldBeActivePredicate = (args: ShouldBeActiveArgs) => boolean

export interface NavLinkActivePredicates {
  exact: ShouldBeActivePredicate
  startsWith: ShouldBeActivePredicate
}

export const navLinkMatch: NavLinkActivePredicates = {
  exact: ({ as, router }) => router?.asPath === as,
  startsWith: ({ as, router }) => router?.asPath?.startsWith(as) || false,
}

export interface NavLinkProps extends RouteLinkProps {
  active?: Partial<Omit<BoxProps, 'as'>>
  shouldBeActive?: (args: ShouldBeActiveArgs) => boolean
}

export const NavLink: React.FC<NavLinkProps> = ({
  active: activeProps = {
    textDecoration: 'underline',
  },
  shouldBeActive = navLinkMatch.startsWith,
  to,
  as = to,
  ...props
}) => {
  const router = useRouter()
  const active = shouldBeActive({ to, as, router })
  return (
    <RouteLink
      {...(active ? (activeProps as any) : {})}
      as={as}
      to={to}
      aria-current={active ? 'page' : undefined}
      {...props}
    />
  )
}
