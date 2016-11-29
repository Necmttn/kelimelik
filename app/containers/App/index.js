/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/sanitize.css';
import styles from './styles.css';

import Link from '../../components/Link'
function App(props) {
  return (
    <div className={styles.wrapper}>
      <Helmet
        titleTemplate="%s - Kelimelik"
        defaultTitle="Kelimelik"
        meta={[
          { name: 'description', content: 'Comunitty Driven Dictionary' },
        ]}
      />
      <header>
        <h1>Header</h1>
        <Link />
      </header>
      {React.Children.toArray(props.children)}
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
