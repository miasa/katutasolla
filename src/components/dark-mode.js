import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import styles from './dark-mode.module.scss';

class darkMode extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => {
          const checked = theme === 'dark';

          return (
            <label className={`${styles.toggle} ${checked ? styles.toggleChecked : ''}`}>
              <input
                className={`${styles.input} sr-only`}
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                checked={checked}
                aria-label="Vaihda tumman ja vaalean teeman välillä"
              />
              <div className={styles.track}>
                <div className={styles.moon} aria-hidden="true">🌙</div>
                <div className={styles.sun} aria-hidden="true">☀️</div>
              </div>
              <div className={styles.slider}></div>
            </label>
          );
        }}
      </ThemeToggler>
    )
  }
}

export default darkMode;