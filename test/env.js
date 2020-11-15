process.env = {
  ...process.env,
  __NEXT_IMAGE_OPTS: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [],
    domains: ['images.unsplash.com'],
    path: '/_next/image',
    loader: 'default',
  },
}
