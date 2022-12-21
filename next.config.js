/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '***',
        port: '*',
      },
    ],
  },
  experimental: {
    headers() {
      return [
        {
          source: "/.well-known/apple-app-site-association",
          headers: [{ key: "content-type", value: "application/json" }]
        }
      ];
    }
  }
}

module.exports = nextConfig
