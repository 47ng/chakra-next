<h1 align="center"><code>@47ng/chakra-next</code></h1>

<div align="center">

[![NPM](https://img.shields.io/npm/v/@47ng/chakra-next?color=red)](https://www.npmjs.com/package/@47ng/chakra-next)
[![MIT License](https://img.shields.io/github/license/47ng/chakra-next.svg?color=blue)](https://github.com/47ng/chakra-next/blob/next/LICENSE)
[![Continuous Integration](https://github.com/47ng/chakra-next/workflows/Continuous%20Integration/badge.svg?branch=next)](https://github.com/47ng/chakra-next/actions)
[![Coverage Status](https://coveralls.io/repos/github/47ng/chakra-next/badge.svg?branch=next)](https://coveralls.io/github/47ng/chakra-next?branch=next)

</div>

<p align="center">
  Opinionated design system for React, based on <a href="https://chakra-ui.com/">Chakra UI</a> + <a href="https://nextjs.org/">Next.js</a>.
</p>

## Features

- Default theme with semantic tokens
- 100% TypeScript, transpiled to ESM (requires Next.js 12+)
- Components:
  - 🔗 [Links](#links)
  - ◻️ [Cards](#cards)
  - 🎨 [Svg](#svg)
  - ➡️ [Redirect](#redirect)
  - 🚧 [NoSSR](#nossr)
  - 🧪 _More to come_

## Installation

In your Next.js app:

```shell
$ npm install @47ng/chakra-next
```

## Theme tools

To resolve theme tokens across color modes, use `useColorModeToken`:

```ts
import { useColorModeToken } from '@47ng/chakra-next'

const fill = useColorModeToken('red.500', 'blue.500')
const shadow = useColorModeToken('md', 'dark-lg', 'shadows')
```

The following semantic tokens are provided:

- colors:
  - `body` (follows the html/body/\_\_next background color)
  - `text.dim`
  - `text.dimmer`
  - `text.dimmest`
  - `card.bg`
- shadows:
  - `card.shadow` _(make card shadow darker in dark mode to stand out)_

## Components

### Links

```tsx
import { RouteLink, OutgoingLink, ButtonRouteLink } from '@47ng/chakra-next'

export default () => (
  <>
    {/* Integrate Next.js routes with Chakra styles */}
    <RouteLink to="/login">Login</RouteLink>

    {/* Use `as` for dynamic routes */}
    <RouteLink to="/posts/[slug]" as="/posts/foo">Login</RouteLink>

    {/* Make external links stand out */}
    <OutgoingLink href="https://github.com" showExternalIcon>
      GitHub
    </RouteLink>

    {/* For when a button looks better, still outputs an <a> tag */}
    <ButtonRouteLink to="/logout">Logout</ButtonRouteLink>
  </>
)
```

#### NavLinks

Use `NavLink` when you want a link to have special styling depending on
the current page.

By default, NavLinks:

- <span style="text-decoration:underline">Underline</span> their text when active
- Are active when the current path starts with the link path

Example:

```tsx
import { NavLink } from '@47ng/chakra-next'

export default () => (
  <>
    <NavLink to="/blog">Blog</NavLink>
  </>
)
```

The link will be active for the following paths:

| Path        | Active  |
| ----------- | ------- |
| `/home`     | `false` |
| `/blog`     | `true`  |
| `/blog/`    | `true`  |
| `/blog/foo` | `true`  |

##### Custom active styles

```tsx
import { NavLink } from '@47ng/chakra-next'

export default () => (
  <>
    <NavLink
      to="/blog"
      borderBottomWidth="3px"
      borderBottomColor="transparent"
      active={{ color: 'blue.500', borderBottomColor: 'blue.500' }}
    >
      Blog
    </NavLink>
  </>
)
```

##### Exact paths

Sometimes, you want the NavLink to be active only on exact route
matches:

```tsx
import { NavLink, navLinkMatch } from '@47ng/chakra-next'

export default () => (
  <>
    <NavLink to="/home" shouldBeActive={navLinkMatch.exact}>
      Home
    </NavLink>
  </>
)
```

You can also have custom logic to determine whether a NavLink should
be active:

```tsx
import { NavLink, navLinkMatch } from '@47ng/chakra-next'

export default () => (
  <>
    <NavLink
      to="/blog/[post]"
      as="/blog/another-blog-post?active=true"
      shouldBeActive={({ to, as, router }) =>
        navLinkMatch.exact({ to, as, router }) &&
        router?.query.active === 'true'
      }
    >
      Another Blog Post
    </NavLink>
  </>
)
```

### Redirect

`Redirect` will change the current URL to the one given, when mounted.

```tsx
import { Redirect } from '@47ng/chakra-next'

export default ({ loggedIn }) => (
  <>{loggedIn ? <Text>Hello !</Text> : <Redirect to="/login" />}</>
)
```

By default, the redirection will be pushed onto the navigation history stack.
You can replace the history stack instead with the `replace` prop:

```tsx
import { Redirect } from '@47ng/chakra-next'

export default () => (
  <>
    <Redirect to="/home" replace />
  </>
)
```

Next.js dynamic paths are also supported:

```tsx
import { Redirect } from '@47ng/chakra-next'

export default () => (
  <>
    <Redirect to="/blog/[slug]" as="/blog/foo-bar" />
  </>
)
```

If you want to [redirect to an external link](https://github.com/vercel/next.js/blob/main/errors/invalid-href-passed.md)
(not an internal route), you will have to set the `external` prop:

```tsx
import { Redirect } from '@47ng/chakra-next'

export default () => (
  <>
    <Redirect to="https://example.com" external />

    {/* You can also have the history replaced with external URLs: */}
    <Redirect to="https://example.com" external replace />
  </>
)
```

You can also pass transition options:

```tsx
<Redirect to="/home" shallow scroll={false} />
```

### Cards

```tsx
import { Card, cardProps } from '@47ng/chakra-next'

export default () => (
  <>
    {/* Card as Box */}
    <Card>I'm in a card</Card>

    {/* Apply Card styles to a custom component */}
    <MyChakraComponent {...cardProps} />
  </>
)
```

### Svg

Extends `chakra.svg` with with:

- SVG namespace pre-filled
- `role="img"`

```tsx
import { Svg } from '@47ng/chakra-next'

export default () => (
  <Svg
    aria-labelledby="svg-demo-title svg-demo-desc"
    viewBox="0 0 24 24"
    display="block"
    my={4}
    mx="auto"
  >
    <title id="svg-demo-title">A red circle</title>
    <desc id="svg-demo-desc">
      Svg lets you style SVG container tags with Chakra UI style props.
    </desc>
    <circle fill="red" cx="12" cy="12" r="10">
  </Svg>
)
```

Note: to use theme tokens for fills, strokes and other SVG properties, you must
resolve them first:

```tsx
import { useToken } from '@chakra-ui/react'

export default () => (
  <Svg
    aria-labelledby="svg-demo-title svg-demo-desc"
    viewBox="0 0 24 24"
    display="block"
    my={4}
    mx="auto"
    fill={useToken('colors', 'red.500')} // Resolve theme tokens with `useToken`
  >
    <title id="svg-demo-title">A red circle</title>
    <desc id="svg-demo-desc">
      Svg lets you style SVG container tags with Chakra UI style props.
    </desc>
    <circle
      // You can also use the CSS prop names directly:
      fill="var(--chakra-colors-red.500)"
      cx="12"
      cy="12"
      r="10"
    >
  </Svg>
)
```

### NoSSR

Sometimes you want to render a component only on the client, and have a skeleton
or fallback component rendered on the server, whether for SSR or static output.

```tsx
import { NoSSR } from '@47ng/chakra-next'

export default () => (
  <>
    <NoSSR>This is only rendered on the client</NoSSR>

    {/* Skeleton is rendered on SSR/SSG, TheRealThing is rendered on the client.*/}
    <NoSSR fallback={<Skeleton />}>
      <TheRealThing />
    </NoSSR>
  </>
)
```

## Examples

Header with navigation links:

```tsx
import { Box, Stack } from '@chakra-ui/core'
import { NavLink } from '@47ng/chakra-next'

export default () => (
  <Box as="header">
    <Stack as="nav" isInline>
      <NavLink to="/features">Features</NavLink>
      <NavLink to="/pricing">Pricing</NavLink>
      <NavLink to="/docs">Documentation</NavLink>
    </Stack>
  </Box>
)
```

## License

[MIT](https://github.com/47ng/chakra-next/blob/next/LICENSE) - Made with ❤️ by [François Best](https://francoisbest.com).
