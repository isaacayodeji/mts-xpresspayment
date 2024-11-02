/** @type {import('next').NextConfig} */
const withImages = require("next-images");
//const nextConfig = {};
const nextConfig = {
  trailingSlash: true,
  output: "export",
};
module.exports = withImages({
  fileExtensions: ["jpg", "jpeg", "png", "gif", "svg", "webp", "tiff"],
  images: {
    disableStaticImages: true,
  },
});
module.exports = {
  async rewrites() {
    const { withSitemap } = await import("next-sitemap");
    const sitemapOptions = {
      siteUrl: "https://xpressmts.com", // Replace with your site's URL
      generateRobotsTxt: true,
      sitemapSize: 5000,
      exclude: ["/private"],
    };

    return withSitemap(sitemapOptions);
  },
  // Other Next.js configuration options here...
};

module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://yourdomain.com/", // Replace with your actual domain
        permanent: true, // This makes it a permanent (301) redirect
      },
    ];
  },
};

module.exports = nextConfig;
