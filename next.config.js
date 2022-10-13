/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL:
      process.env.NEXT_PUBLIC_API_URL,
  },
  images: {
    domains: [
      's3.tradingview.com','static.tradingview.com','localhost'
    ],
    formats: ["image/webp"],
  }
}

module.exports = nextConfig
