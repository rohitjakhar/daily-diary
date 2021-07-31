const redirects = require("./config/redirects");
module.exports = {
  
  async redirects() {
    return [
      {
        source: "/github",
        destination: redirects.github,
        permanent: true,
      },
      {
        source: "/twitter",
        destination: redirects.twitter,
        permanent: true,
      },
      {
        source: "/devto",
        destination: redirects.devto,
        permanent: true,
      },
      {
        source: "/blog",
        destination: redirects.blog,
        permanent: true,
      },
      {
        source: "/instagram",
        destination: redirects.instagram,
        permanent: true,
      },
    ];
  },
  env: {
    CLERK_API: process.env.CLERK_API
  }
};
