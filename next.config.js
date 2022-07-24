/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['frontend-test-assignment-api.abz.agency'],
  },
}

module.exports = nextConfig
