const path = require('path');
const { paginate } = require('gatsby-awesome-pagination');

const config = require('./gatsby-config');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      posts: allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
      categories: allContentfulPostCategory {
        edges {
          node {
            slug
            post {
              slug
            }
          }
        }
      }
      tags: allContentfulPostTag {
        edges {
          node {
            slug
            post {
              slug
            }
          }
        }
      }
    }
  `).then(res => res.data);

  const posts = result.posts.edges;
  const categories = result.categories.edges;
  const tags = result.tags.edges;

  // Create a page for each post
  posts.forEach((post, index) => {
    createPage({
      path      : `/${post.node.slug}`,
      component : path.resolve(`./src/templates/post.js`),
      context   : {
        slug : post.node.slug,
        // prev : index === 0 ? null : posts[index - 1].node,
        // next : index === (posts.length - 1) ? null : posts[index + 1].node
      }
    });
  });

  // Paginated index page
  paginate({
    createPage,
    component         : path.resolve(`./src/templates/index.js`),
    items             : posts,
    itemsPerPage      : config.siteMetadata.postsPerPage,
    pathPrefix        : '/',
    context           : {
      paginationPrefix : '/',
    },
  })

  // Category pages
  categories.forEach(category => {
    paginate({
      createPage,
      items        : category.node.post || [],
      itemsPerPage : config.siteMetadata.postsPerPage,
      pathPrefix   : `/kategoria/${category.node.slug}`,
      component    : path.resolve(`./src/templates/category.js`),
      context      : {
        slug             : category.node.slug,
        paginationPrefix : `/kategoria/${category.node.slug}`,
      }
    });
  });

  // Tag pages
  tags.forEach(tag => {
    paginate({
      createPage,
      items        : tag.node.post || [],
      itemsPerPage : config.siteMetadata.postsPerPage,
      pathPrefix   : `/avainsana/${tag.node.slug}`,
      component    : path.resolve(`./src/templates/tag.js`),
      context      : {
        slug             : tag.node.slug,
        paginationPrefix : `/avainsana/${tag.node.slug}`,
      }
    });
  });
};

// Get rid of annoying console warning
// React-Hot-Loader: react-🔥-dom patch is not detected. React 16.6+ features may not work. 
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if(stage.startsWith("develop")) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "react-dom": "@hot-loader/react-dom",
        },
      },
    })
  }
}