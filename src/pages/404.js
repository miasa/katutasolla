import React from 'react';
import get from 'lodash/get';

import SEO from '../components/SEO';
import Photosphere from '../components/photosphere';

class NotFound extends React.Component {
  render() {
    const context = get(this, 'props.pageContext');

    return (
      <>
        <SEO />
        <h1>404 - Sivua ei löytynyt</h1>
        <Photosphere src="404.jpg" />
      </>
    );
  }
}

export default NotFound;