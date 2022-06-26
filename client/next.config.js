/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: "/send",
        destination: "/send/paste",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
