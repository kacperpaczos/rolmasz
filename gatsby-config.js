module.exports = {
  siteMetadata: {
    siteUrl: "https://rolmasz.pl",
    title: "Rolmasz",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-remark-line-breaks",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "static",
        path: "./static/",
      },
      __key: "static",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `merriweather\:400,700b` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
  ],
};