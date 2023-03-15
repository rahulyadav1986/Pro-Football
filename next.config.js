/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images:{
    domains: ['www.scorebat.com', 'avatars.githubusercontent.com'],
  },
  enviourment : {
    MYFOOTBALLAPIKEY : ['9e21a3cee8mshf98cb345da11a90p17846bjsnff4266b5ca3e'],
    host: 'free-football-soccer-videos.p.rapidapi.com',
    url: 'https://free-football-soccer-videos.p.rapidapi.com'
  }
}

module.exports = nextConfig
