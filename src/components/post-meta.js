import React from 'react';
import { Link } from 'gatsby';

import styles from './post-meta.module.scss';

export default ({ post }) => {
  return (
    <ul className={styles.meta}>
      <li>
        {post.coordinates 
          ? (<a href={`https://maps.google.com/maps?q=${post.coordinates.lat},${post.coordinates.lon}`} target="_blank" rel="noopener">{post.location}</a>) 
          : (<span>{post.location}</span>)
        }
      </li>
      <li>{post.date}</li>
      <li><Link to={`/kategoria/${post.category.slug}`}>{post.category.name}</Link></li>
      {post.tags
        ?
        <li>
          {post.tags.map(tag => <Link key={tag.slug} to={`/avainsana/${tag.slug}`}>#{tag.name}</Link>)}
        </li>
        : null
      }
    </ul>
  );
};
