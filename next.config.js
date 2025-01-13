/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        pathname: '**',
      },
     
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ['nodemailer']
  }
}

module.exports = nextConfig 