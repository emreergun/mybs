/** @type {import('next').NextConfig} */
const nextConfig = {images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.uno.edu',
        port: '',
        pathname: '/sites/default/files/2022-11/**',
      },
    ],
  },};

export default nextConfig;