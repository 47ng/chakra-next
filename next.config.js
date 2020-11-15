const withPlugins = require('next-compose-plugins')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

const nextConfig = {
  pageExtensions: ['tsx', 'mdx'],
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    iconSizes: [],
    domains: ['images.unsplash.com'],
    loader: 'default',
  },
}

module.exports = withPlugins([withMDX], nextConfig)
