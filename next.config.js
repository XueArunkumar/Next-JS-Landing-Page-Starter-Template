// eslint-disable import/no-extraneous-dependencies
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = {
  // Enable static export for optimized deployment
  output: 'export',

  // Other configuration options
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  reactStrictMode: true,
};

// Conditionally apply bundle analyzer if enabled
module.exports = process.env.ANALYZE === 'true'
  ? withBundleAnalyzer(module.exports)
  : module.exports;
