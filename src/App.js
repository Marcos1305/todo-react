import React,  { Component } from 'react';

import Form from './Components/Form/Form';

import styles from './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: []
        }
    }
    
    render() {
        return (
            <div className='container'>
                <Form/>
            </div>
        )
    }
}

export default App;