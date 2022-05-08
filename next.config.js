/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:["api.lorem.space", "store.storeimages.cdn-apple.com"],
  },
  
}

module.exports = nextConfig;
