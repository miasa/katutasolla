import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const query = graphql`
  query GetSiteMetadata {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`;

function SEO(props) {

  return (
    <StaticQuery
      query={query}
      render={data => {
        const { siteMetadata } = data.site;
        const metaDescription = props.description || siteMetadata.description;
        const metaImage = props.image ? `${siteMetadata.siteUrl}/${props.image}` : null;
        const pageNro = (props.pageNumber && props.pageNumber > 1) ? `, sivu ${props.pageNumber}` : '';
        const links = [];

        if(props.canonical) {
          links.push({
            rel  : 'canonical',
            href : props.canonical
          });
        }

        return (
          <Helmet
            htmlAttributes={ props.lang }
            {...(props.title
              ? {
                  titleTemplate: `%s${pageNro} — ${siteMetadata.title}`,
                  title: props.title,
                }
              : {
                  title: `${siteMetadata.title}${pageNro}`,
                })}
            meta={[
              {
                name: 'description',
                content: metaDescription,
              },
              {
                property: 'og:title',
                content: props.title || siteMetadata.title,
              },
              {
                property: 'og:description',
                content: metaDescription,
              },
            ]
              .concat(
                metaImage
                  ? [
                      {
                        property: 'og:image',
                        content: metaImage,
                      },
                    ]
                  : []
              )
              .concat(props.meta)}
            link={links}
          />
        );
      }}
    />
  );
}

SEO.defaultProps = {
  meta  : [],
  title : '',
  slug  : '',
};

export default SEO;