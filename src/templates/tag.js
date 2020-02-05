import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import SEO from '../components/SEO';
import Masonry from '../components/masonry';
import Pagination from '../components/pagination';

class TagTemplate extends React.Component {
  render() {
    const posts = get(this, 'props.data.posts.edges');
    const context = get(this, 'props.pageContext');
    const tag = get(this, 'props.data.tag');

    return (
      <>
        <SEO title={`Avainsana: ${tag.name}`} pageNumber={context.humanPageNumber} canonical={this.props.location.href} />
        <h1 className="list-title">Avainsana: {tag.name}</h1>
        {tag.description ? <div className="list-description" dangerouslySetInnerHTML={{ __html: tag.description.childMarkdownRemark.html }} /> : ''}
        <Masonry posts={posts} />
        <Pagination context={context} />
      </>
    );
  }
}

export default TagTemplate;

export const pageQuery = graphql`
  query Tag($slug: String) {
    tag: contentfulPostTag(slug: {eq: $slug}) {
      name
      description {
        childMarkdownRemark {
          html
        }
      }
    }
    posts: allContentfulPost(filter: {tags: {elemMatch: {slug: {eq: $slug}}}}, sort: {fields: date, order: DESC}) {
      edges {
        node {
          ...postListFields
        }
      }
    }
  }
`;