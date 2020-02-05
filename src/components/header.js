import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Navigation from './navigation';
import DarkModeToggle from './dark-mode';

import styles from './header.module.scss';

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`${styles.header}`}>
      <div className={styles.bar}>
        <Link to="/" className={styles.logo}>{data.site.siteMetadata.title}</Link>
        <button className={`${styles.navToggle} ${menuOpen ? styles.navToggleMenuOpen : ''} d-lg-none`} onClick={() => setMenuOpen(!menuOpen)}>
          <span>{menuOpen ? 'Sulje' : 'Valikko'}</span>
          <div className={styles.navToggle__burger}>
            <div className={styles.navToggle__bars}>
              <div className={styles.navToggle__bar}></div>
              <div className={styles.navToggle__bar}></div>
              <div className={styles.navToggle__bar}></div>
            </div>
          </div>
        </button>
      </div>

      <div className={`${styles.sections} ${menuOpen ? styles.sectionsMenuOpen : ''}`}>
        <div className={styles.section}>
          <Navigation />
        </div>
        
        <div className={styles.section}>
          <DarkModeToggle />
        </div>

        {data.site.siteMetadata.description && (
          <div className={`${styles.section} d-lg-block`}>
            <strong>{data.site.siteMetadata.title}?</strong>
            <p>{data.site.siteMetadata.description}</p>
          </div>
        )}
      </div>

    </header>
  );
}
