import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // i18n configuration is handled differently in App Router
  async redirects() {
    return [
      // Redirect non-www to www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'tankinspectionservices.com',
          },
        ],
        destination: 'https://www.tankinspectionservices.com/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;