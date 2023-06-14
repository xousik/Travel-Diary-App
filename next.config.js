/** @type {import('next').NextConfig} */
const nextConfig = {
  // Without this styles are not loading before page render
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
    },
  },
};

module.exports = nextConfig;
