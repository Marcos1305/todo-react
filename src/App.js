import React,  { Component } from 'react';

import Form from './Components/Form/Form';
import TodoList from './Components/TodoList/TodoList';

import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []
        }
        
        this.limparTodos = this.limparTodos.bind(this);
    }
    addTodo(todo) {
        this.setState({todos: [...this.state.todos, todo]}, () => {
            localStorage.setItem('todos', JSON.stringify(this.state.todos));
        });
    }

    componentWillMount() {
        localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }

    limparTodos() {
        if(window.confirm("Tem certeza que deseja realizar essa ação?")){
            this.setState({todos: []}, () => {
                localStorage.setItem('todos', []);
            });
        }
    }

    render() {
        return (
            <div className='container'>
                <Form addTodo={(todoProps) => this.addTodo(todoProps)}/>
                {!!this.state.todos.length && <TodoList todos={this.state.todos} limparTodos={this.limparTodos}/>}
            </div>
        )
    }
}

export default App;