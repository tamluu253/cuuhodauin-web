/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/products/cij-printers',
        destination: '/products/cij-ink',
        permanent: true,
      },
      {
        source: '/products/tij-printers',
        destination: '/products/tij-ink',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
