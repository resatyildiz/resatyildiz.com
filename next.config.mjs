import withNextIntl from 'next-intl/plugin';

const withNextIntlConfig = withNextIntl('./src/libs/i18n.ts');

export default withNextIntlConfig({
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    // Related to Pino error with RSC: https://github.com/orgs/vercel/discussions/3150
    serverComponentsExternalPackages: ['pino'],
  },
  webpack: (config) => {
    // config.externals is needed to resolve the following errors:
    // Module not found: Can't resolve 'bufferutil'
    // Module not found: Can't resolve 'utf-8-validate'
    config.externals.push({
      bufferutil: 'bufferutil',
      'utf-8-validate': 'utf-8-validate',
    });

    return config;
  },
});
