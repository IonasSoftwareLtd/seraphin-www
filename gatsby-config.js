module.exports = {
  siteMetadata: {
    siteUrl: "https://seraphin.cloud/",
    title: "Seraphin",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "test-id",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./static",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Roboto"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Seraphin",
        short_name: "Seraphin",
        start_url: "/",
        background_color: "#eeeeef",
        theme_color: "#b41625",
        display: "standalone",
        icon: "static/icon.svg",
      },
    },
  ],
};
