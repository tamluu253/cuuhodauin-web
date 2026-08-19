/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/tin-tuc.html',
        destination: '/kien-thuc',
        permanent: true,
      },
      {
        source: '/dich-vu.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/quy-trinh.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/vat-tu.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/chinh-sach.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/sitemap.html',
        destination: '/sitemap.xml',
        permanent: true,
      },
      {
        source: '/:slug.html',
        destination: '/kien-thuc/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
