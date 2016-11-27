


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

import Link from './components/Link'

class App extends Component {
    render() {
        return (
            <div>
                <h1>Hey hoba</h1>
                <Link to="http://google.com">Google</Link>
            </div>
        )
    }
} 

const root = document.getElementById('root');

R.render(<App />, root);