import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';

import styles from './pagination.module.scss';

const Pagination = ({ context }) => {
  return (
    <div className={styles.pagination}>
      {context.previousPagePath && <Link className={styles.pagination__prev} to={context.previousPagePath}>Uudemmat kuvat</Link>}
      {context.nextPagePath && <Link className={styles.pagination__next} to={context.nextPagePath}>Vanhemmat kuvat</Link>}
    </div>
  );
}

export default Pagination;