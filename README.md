# @47ng/chakra-next

[![NPM](https://img.shields.io/npm/v/@47ng/chakra-next?color=red)](https://www.npmjs.com/package/@47ng/chakra-next)
[![MIT License](https://img.shields.io/github/license/47ng/chakra-next.svg?color=blue)](https://github.com/47ng/chakra-next/blob/next/LICENSE)
[![Continuous Integration](https://github.com/47ng/chakra-next/workflows/Continuous%20Integration/badge.svg?branch=next)](https://github.com/47ng/chakra-next/actions)
[![Coverage Status](https://coveralls.io/repos/github/47ng/chakra-next/badge.svg?branch=next)](https://coveralls.io/github/47ng/chakra-next?branch=next)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=47ng/chakra-next)](https://dependabot.com)

Design System for React, based on Chakra UI + Next.js, written in TypeScript.

## Usage

This package is intentionnaly not transpiled, to let Next.js do its thing
according to its own Webpack settings. Because Next does not normally transpile
dependencies, you will have to tell it to, using
[`next-transpile-modules`](https://github.com/martpie/next-transpile-modules):

```js
// next.config.js
const withTM = require('next-transpile-modules')(['@47ng/chakra-next'])

module.exports = withTM()
```

## License

[MIT](https://github.com/47ng/chakra-next/blob/next/LICENSE) - Made with ❤️ by [François Best](https://francoisbest.com).
