/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // redirects: async () => {
  //   return [
  //     {
  //       source: '/culinary/:id',
  //       destination: '/blog/:id',
  //       permanent: true
  //     },
  //     {
  //       source: '/city/:id',
  //       destination: '/blog/:id',
  //       permanent: true
  //     },
  //     {
  //       source: '/nature/:id',
  //       destination: '/blog/:id',
  //       permanent: true
  //     },
  //     {
  //       source: '/culinary',
  //       destination: '/[blogCategory]',
  //       permanent: true
  //     },
  //     {
  //       source: '/nature',
  //       destination: '/[blogCategory]',
  //       permanent: true
  //     },
  //     {
  //       source: '/city',
  //       destination: '/[blogCategory]',
  //       permanent: true
  //     },
  //   ]
  // },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/culinary/:id',
  //       destination: '/blog/:id',
  //     },
  //     {
  //       source: '/nature/:id',
  //       destination: '/blog/:id',
  //     },
  //     {
  //       source: '/city/:id',
  //       destination: '/blog/:id',
  //     },
  //       {
  //         source: '/culinary',
  //         destination: '/[blogCategory]',
  //       },
  //       {
  //         source: '/nature',
  //         destination: '/[blogCategory]',
  //       },
  //       {
  //         source: '/city',
  //         destination: '/[blogCategory]',
  //       },
  //   ]
  // }
}

module.exports = nextConfig
