/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Other configuration options
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
}

module.exports = nextConfig

