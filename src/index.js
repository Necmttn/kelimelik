import React, { Component } from 'react'
import R from 'react-dom'

import Link from './components/Link'

class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <Link to="http://google.com">Google</Link>
            </div>
        )
    }
} 

const root = document.getElementById('root');

R.render(<App />, root);