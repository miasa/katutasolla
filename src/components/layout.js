import React from 'react';
import Helmet from 'react-helmet';

import Header from './header';

import base from './base.scss';
import styles from './layout.module.scss';

const Template = (props) => {
  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" rel="stylesheet" />
      </Helmet>
      <Header />
      <main className={styles.content}>
        {props.children}
      </main>
    </>
  );
};

export default Template;