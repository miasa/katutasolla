require('dotenv').config({
  path : `.env.${process.env.NODE_ENV}`
});

const contentfulConfig = {
  spaceId     : process.env.CONTENTFUL_SPACE_ID,
  accessToken : process.env.CONTENTFUL_ACCESS_TOKEN,
  host        : process.env.CONTENTFUL_HOST
};

const { spaceId, accessToken } = contentfulConfig;

if(!spaceId || !accessToken) {
  throw new Error('Contentful spaceId and the access token need to be provided.');
};

module.exports = {
  siteMetadata : {
    title        : 'Katutasolla',
    description  : 'Kuvablogi, jonka aiheena on katutaide. Valitsen tänne teoksia, jotka jollain tasolla puhuttelevat minua.',
    siteUrl      : 'https://katutasolla.galak.si',
    postsPerPage : 20
  },
  plugins : [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve : 'gatsby-plugin-sass',
      options : {
        data : `@import "./src/styles/settings";`, // Imports variables into every scss file
      }
    },
    {
      resolve : 'gatsby-source-contentful',
      options : contentfulConfig,
    },
    {
      resolve : `gatsby-plugin-layout`, // Layout does not re-render on every page view
      options : {
        component : require.resolve('./src/components/layout.js'),
      },
    },
    'gatsby-plugin-dark-mode'
  ],
};