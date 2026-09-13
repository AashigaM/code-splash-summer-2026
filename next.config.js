import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/code-splash-summer-2026',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
