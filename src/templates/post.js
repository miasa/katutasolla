import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import get from 'lodash/get';

import SEO from '../components/SEO';
import PostMeta from '../components/post-meta';

import styles from './post.module.scss';

class PostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulPost');

    return (
      <article className={styles.post}>
        <SEO title={`${post.title} ${post.date}`} canonical={this.props.location.href} />
        <Img fluid={post.image.fluid} alt="" style={{maxWidth: post.image.file.details.image.width + 'px', margin: "0 auto"}}/>
        <div className={styles.content}>
          <h1 className={styles.title}>{post.title}</h1>
          {post.description && <p className={styles.description}>{post.description.description}</p>}
          <PostMeta post={post} />
        </div>
      </article>
    );
  }
}

export default PostTemplate;

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      ...postFields
    }
  }
`;
