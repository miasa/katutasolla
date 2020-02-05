import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import PostMeta from './post-meta';

import styles from './post-preview.module.scss';

export default ({ post }) => {
  const postLink = `/${post.slug}`;

  return (
    <div className={styles.preview}>
      <Link className={styles.link} to={postLink}>
        <Img className={styles.image} fluid={post.image.fluid} alt="" />
      </Link>
      <h2 className={styles.title}>
        <Link className={styles.title__link} to={postLink}>{post.title}</Link>
      </h2>
      <PostMeta post={post} />
    </div>
  );
};
