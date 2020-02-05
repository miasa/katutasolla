import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import SEO from '../components/SEO';
import Masonry from '../components/masonry';
import Pagination from '../components/pagination';

class CategoryTemplate extends React.Component {
  render() {
    const posts = get(this, 'props.data.posts.edges');
    const category = get(this, 'props.data.category');
    const context = get(this, 'props.pageContext');

    return (
      <>
        <SEO title={`Kategoria: ${category.name}`} pageNumber={context.humanPageNumber} canonical={this.props.location.href} />
        <h1 className="list-title">Kategoria: {category.name}</h1>
        <Masonry posts={posts} />
        <Pagination context={context} />
      </>
    );
  }
}

export default CategoryTemplate;

export const pageQuery = graphql`
  query Category($slug: String, $skip: Int!, $limit: Int!) {
    category: contentfulPostCategory(slug: {eq: $slug}) {
      name
    }
    posts: allContentfulPost(
      filter: {category: {slug: {eq: $slug}}}
      sort: {fields: date, order: DESC}
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