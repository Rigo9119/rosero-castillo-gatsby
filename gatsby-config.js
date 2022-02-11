module.exports = {
  siteMetadata: {
      title: `rosero-castillo-gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
  {
    resolve: 'gatsby-source-datocms',
    options: {
      apiToken: "7ae4f8e0c8443a162d34abc9e078be",
      preview: false,
      disableLiveReload: false,
    }
  }, 
  "gatsby-plugin-styled-components",
  "gatsby-plugin-layout",
  // {
  //   resolve: 'gatsby-plugin-google-analytics',
  //   options: {
  //     "trackingId": ""
  //   }
  // }, 
  "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, 
  "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};
