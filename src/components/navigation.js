import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import styles from './navigation.module.scss';

export default () => {

  const data = useStaticQuery(
    graphql`
      query {
        allContentfulPostCategory(sort: { fields: [name], order: ASC }) {
          edges {
            node {
              name
              slug
            }
          }
        }
      }
    `
  );

  const categories = data.allContentfulPostCategory.edges;

  return (
    <nav role="navigation">
      <ul className={styles.navigationList}>
        {categories.map(category => (
          <li className={styles.navigationItem} key={category.node.slug}>
            <Link to={`/kategoria/${category.node.slug}`} partiallyActive={true} className={styles.navigationLink} activeClassName={styles.navigationLinkActive}>{category.node.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
