import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import SEO from '../components/SEO';
import Masonry from '../components/masonry';
import Pagination from '../components/pagination';

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allContentfulPost.edges');
    const context = get(this, 'props.pageContext');

    return (
      <>
        <SEO pageNumber={context.humanPageNumber} canonical={this.props.location.href} />
        <Masonry posts={posts} />
        <Pagination context={context} />
      </>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPost(
      sort: { fields: [date], order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          ...postListFields
        }
      }
    }
  }
`;
