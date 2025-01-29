module.exports = {
    reactStrictMode: true,
    async redirects() {
      return [
        {
          source: '/old-url',
          destination: '/new-url',
          permanent: true,
        },
      ];
    },
  };
  