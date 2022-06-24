/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports ={
  env:{
    MONGO_URI: "mongodb+srv://test:123qwe@cluster0.ok666.mongodb.net/?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig
