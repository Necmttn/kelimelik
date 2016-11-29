


/* eslint-disable import/no-unresolved */
// Load the favicon, the manifest.json file and the .htaccess file 
import 'file?name=[name].[ext]!./favicon.ico';
import '!file?name=[name].[ext]!./manifest.json';
import 'file?name=[name].[ext]!./.htaccess';
/* eslint-enable import/no-unresolved */

// we are keeping our global styles in here
import styles from './containers/App/styles.css';

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import App from './containers/App';

const root = document.getElementById('root');

ReactDOM.render(<App />, root);