/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/cv',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
