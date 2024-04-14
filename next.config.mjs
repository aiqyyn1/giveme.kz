/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  images: {
    domains: ['s3.eu-central-1.amazonaws.com'],
  },
  env: {
    baseURL: process.env.baseURL,
  },
};

export default nextConfig;
