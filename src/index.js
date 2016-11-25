import React, { Component } from 'react'
import R from 'react-dom'

class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        )
    }
} 

const root = document.getElementById('root');

R.render(<App />, root);