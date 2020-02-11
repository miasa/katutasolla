const isGeneratorTag = (type, name) => type === 'meta' && name === 'generator';

/**
 *
 * @param apiContext Context provided by Gatsby
 * @see https://www.gatsbyjs.org/docs/ssr-apis/#onPreRenderHTML
 */
exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  let headComponents = getHeadComponents();

  // Remove generator meta tag
  headComponents = headComponents.filter(({ type, props: { name } = {} }) => !isGeneratorTag(type, name));

  replaceHeadComponents(headComponents);
};