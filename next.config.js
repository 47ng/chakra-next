const withPlugins = require('next-compose-plugins')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

const nextConfig = {
  pageExtensions: ['tsx', 'mdx'],
  experimental: {
    reactRefresh: true,
  },
}

module.exports = withPlugins([withMDX], nextConfig)
