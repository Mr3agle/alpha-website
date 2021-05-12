module.exports = {
  siteMetadata: {
    title: `Alpha Technologies`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/a-favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        // implementation: require("node-sass"),
        cssLoaderOptions: {
          modules: {
            exportLocalsConvention: 'camelCaseOnly'
          }
        },
        additionalData: `@use 'variables' as *;`,
        sassOptions:{
          includePaths:[`${__dirname}/src/styles`]
        }
        // data: `@import "${__dirname}/src/styles/_variables"`,
      }
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
