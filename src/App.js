import React,  { Component } from 'react';

import Form from './Components/Form/Form';
import TodoList from './Components/TodoList/TodoList';

import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
                {
                    name: 'Limpar Computador',
                    description: 'Não esquecer de limpar o cooler',
                    date: '20/01/2019'
                }
            ]
        }
    }
    addTodo(todo) {
        this.setState({todos: [...this.state.todos, todo]})
    }
    render() {
        return (
            <div className='container'>
                <Form addTodo={(todoProps) => this.addTodo(todoProps)}/>
                {!!this.state.todos.length && <TodoList todos={this.state.todos}/>}
            </div>
        )
    }
}

export default App;