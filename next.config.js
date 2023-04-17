/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,

  },
  images:{
    domains: ['api.pizzahut.io','www.havmor.com',"cdn.grofers.com"]
  },
  reactStrictMode:true,
  
}

module.exports = nextConfig
