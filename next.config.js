/** @type {import('next').NextConfig} */


module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'picsum.photos',
          port: '',
          pathname: 'picsum.photos',
        },
      ],
    },
  }