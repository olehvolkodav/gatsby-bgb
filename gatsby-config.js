/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
	  `gatsby-plugin-react-helmet`,
  {
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: "GTM-NM23HN7",

      // Include GTM in development.
      //
      // Defaults to false meaning GTM will only be loaded in production.
      includeInDevelopment: false,

      // datalayer to be set before GTM is loaded
      // should be an object or a function that is executed in the browser
      //
      // Defaults to null
      defaultDataLayer: { platform: "gatsby" },

      // Specify optional GTM environment details.
      gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
      gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
      dataLayerName: "YOUR_DATA_LAYER_NAME",

      // Name of the event that is triggered
      // on every Gatsby route change.
      //
      // Defaults to gatsby-route-change
      routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
      // Defaults to false
      enableWebVitalsTracking: true,
      // Defaults to https://www.googletagmanager.com
      selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",
    },
  },
]
}
