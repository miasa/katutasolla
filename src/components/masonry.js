import React from 'react';
import Masonry from 'react-masonry-css';

import PostPreview from './post-preview';

import styles from './masonry.module.scss';

const breakpointColumnsObj = {
  default: 4,
  1600: 3,
  1300: 2,
  1199: 3, //Sidebar shown at 1200
  900: 2,
  600: 1
};

export default ({ posts }) => {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.masonry}
      columnClassName={styles.column}>
      {posts.map(({ node }) => (
        <div className={styles.item} key={node.slug}>
          <PostPreview post={node} />
        </div>
      ))}
    </Masonry>
  );
};