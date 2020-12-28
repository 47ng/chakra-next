# @47ng/chakra-next

[![NPM](https://img.shields.io/npm/v/@47ng/chakra-next?color=red)](https://www.npmjs.com/package/@47ng/chakra-next)
[![MIT License](https://img.shields.io/github/license/47ng/chakra-next.svg?color=blue)](https://github.com/47ng/chakra-next/blob/next/LICENSE)
[![Continuous Integration](https://github.com/47ng/chakra-next/workflows/Continuous%20Integration/badge.svg?branch=next)](https://github.com/47ng/chakra-next/actions)
[![Coverage Status](https://coveralls.io/repos/github/47ng/chakra-next/badge.svg?branch=next)](https://coveralls.io/github/47ng/chakra-next?branch=next)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=47ng/chakra-next)](https://dependabot.com)

Opinionated design system for React, based on Chakra UI + Next.js.

## Features

- Low-boilerplate `_app.tsx`
- Batteries included but replaceable (theme, colors, fonts)
- 100% TypeScript
- Components:
  - 🔗 [Links](#links)
  - 🗜 [Containers](#containers)
  - ◻️ [Cards](#cards)
  - 🎨 [SvgBox](#svgbox)
  - ➡️ [Redirect](#redirect)
  - 🚧 [NoSSR](#nossr)
  - 🧪 _More to come_

## Installation

In your Next.js app:

```shell
$ npm install @47ng/chakra-next @chakra-ui/core @emotion/core @emotion/styled emotion-theming next-transpile-modules
```

## Usage

This package is intentionnaly not transpiled, to let Next.js do its thing
according to its own Webpack settings. Because Next does not normally transpile
dependencies, you will have to tell it to, using
[`next-transpile-modules`](https://github.com/martpie/next-transpile-modules):

Create a `next.config.js` file at the root of your application:

```js
// next.config.js
const withTranspilation = require('next-transpile-modules')([
  '@47ng/chakra-next',
])

module.exports = withTranspilation()
```

### Creating `_app.tsx`

To simplify boilerplate, we've wrapped the necessary steps to integrate
Chakra UI in the \_app page:

```ts
import { createChakraNextApp } from '@47ng/chakra-next'

export default createChakraNextApp()
```

This will give you:

- A default theme with:
  - System font stacks
  - TailwindCSS color palettes
- CSS Reset from Chakra UI

### Custom theme

```tsx
import { createChakraNextApp, defaultTheme } from '@47ng/chakra-next'

export default createChakraNextApp({
  theme: {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      // your colors here
    },
  },
})
```

### Custom global CSS

```tsx
import { createChakraNextApp } from '@47ng/chakra-next'
import { css } from '@emotion/core'

export default createChakraNextApp({
  globalCss: css`
    html,
    body {
      color: #333;
    }
  `,
})
```

### Custom root-level providers

If you want to inject other providers or wrapper elements at the root level,
for example with Redux and Apollo GraphQL:

```tsx
import { createChakraNextApp } from '@47ng/chakra-next'
import { Provider as ReduxProvider } from 'react-redux'
import { ApolloProvider } from '@apollo/react-hooks'

export default createChakraNextApp({
  Providers: ({ children }) => (
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </ApolloProvider>
  ),
})
```

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

If you want to [redirect to an external link](https://github.com/zeit/next.js/blob/master/errors/invalid-href-passed.md)
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

### Containers

```tsx
import { Container, FlexContainer, StackContainer } from '@47ng/chakra-next'

export default () => (
  <>
    {/* Container as Box */}
    <Container>I am centred and width-limited</Container>

    {/* Container + Flex */}
    <FlexContainer>
      <Box>Direction is column by default</Box>
      <Box>Foo</Box>
      <Box>Bar</Box>
      <Box>Egg</Box>
    </FlexContainer>

    {/* Container + Stack */}
    <StackContainer spacing={8}>
      <Box>Foo</Box>
      <Box>Bar</Box>
      <Box>Egg</Box>
    </StackContainer>
  </>

  {/* All containers can be wider */}
  <Container wide>I am centred and width-limited</Container>
)
```

### Cards

```tsx
import { Card, FlexCard, StackCard } from '@47ng/chakra-next'

export default () => (
  <>
    {/* Card as Box */}
    <Card>I'm in a card</Card>

    {/* Card + Flex */}
    <FlexCard>
      <Box>Direction is column by default</Box>
      <Box>Foo</Box>
      <Box>Bar</Box>
      <Box>Egg</Box>
    </FlexCard>

    {/* Card + Stack */}
    <StackCard spacing={8}>
      <Box>Foo</Box>
      <Box>Bar</Box>
      <Box>Egg</Box>
    </StackCard>
  </>
)
```

### SvgBox

Composes [Box](https://chakra-ui.com/pseudobox) with an SVG tag, with:

- SVG namespace pre-filled
- `role="img"`

```tsx
import { SvgBox } from '@47ng/chakra-next'

export default () => (
  <SvgBox
    aria-labelledby="svgbox-demo-title svgbox-demo-desc"
    viewBox="0 0 24 24"
    display="block"
    my={4}
    mx="auto"
  >
    <title id="svgbox-demo-title">A red circle</title>
    <desc id="svgbox-demo-desc">
      SvgBox lets you style SVG container tags with Chakra UI style props.
    </desc>
    <circle fill="red" cx="12" cy="12" r="10">
  </SvgBox>
)
```

> **Note:** For now, we can't use theme color shorthands like `red.200` for fills & strokes, it might come in a later update.

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
import { Box, Stack } from '@chakra-ui/react'
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

Using this package at work ? [Sponsor me](https://github.com/sponsors/franky47) to help with support and maintenance.
