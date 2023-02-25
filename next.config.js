const withPWA = require('next-pwa')({
  dest: 'public',
});

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

module.exports = withPWA(nextConfig);
