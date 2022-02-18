import {
  BoxProps,
  Button,
  ButtonProps,
  chakra,
  IconButton,
  IconButtonProps,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react'
import type { Merge } from '@chakra-ui/utils'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { NextRouter, useRouter } from 'next/router'
import type React from 'react'

export interface RouteLinkProps
  extends Omit<NextLinkProps, 'as' | 'href'>,
    Omit<ChakraLinkProps, 'as' | 'href'> {
  to: string
  as?: string
}

export const RouteLink: React.FC<RouteLinkProps> = ({
  to,
  as = to,
  children,
  replace,
  scroll,
  shallow,
  prefetch,
  locale,
  ...props
}) => {
  return (
    <NextLink
      passHref
      href={to}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      prefetch={prefetch}
      locale={locale}
    >
      <ChakraLink {...props}>{children}</ChakraLink>
    </NextLink>
  )
}

// --

export interface OutgoingLinkProps extends ChakraLinkProps {
  externalIcon?: React.FC
}

export const OutgoingLink: React.FC<OutgoingLinkProps> = ({
  children,
  isExternal = true,
  externalIcon = null,
  ...props
}) => {
  const Icon = externalIcon && chakra(externalIcon)
  return (
    <ChakraLink isExternal={isExternal} {...props}>
      {children}
      {Icon && (
        <Icon
          display="inline-block"
          mx="0.2em"
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
    Omit<ButtonProps, 'as'> {
  to: string
  as?: string
}

export const ButtonRouteLink: React.FC<ButtonRouteLinkProps> = ({
  to,
  as = to,
  replace,
  scroll,
  shallow,
  prefetch,
  locale,
  children,
  ...props
}) => (
  <NextLink
    passHref
    href={to}
    as={as}
    replace={replace}
    scroll={scroll}
    shallow={shallow}
    prefetch={prefetch}
    locale={locale}
  >
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
  extends Merge<Omit<OutgoingLinkProps, 'externalIcon'>, IconButtonProps> {}

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
  active?: Omit<Partial<BoxProps>, 'as'>
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
      {...props}
    />
  )
}
