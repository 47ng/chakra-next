import withMDX from '@next/mdx'
import withPlugins from 'next-compose-plugins'

const nextConfig = {
  pageExtensions: ['tsx', 'mdx'],
}

export default withPlugins(
  [
    withMDX({
      extension: /\.mdx?$/,
    }),
  ],
  nextConfig
)
