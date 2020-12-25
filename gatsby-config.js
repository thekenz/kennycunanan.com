/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['Millik'],
          urls: ['/css/webfonts/millik.css']
        }
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        icon: 'src/assets/favicon.ico'
      },
    }
  ]
}