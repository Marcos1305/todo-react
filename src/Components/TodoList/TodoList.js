import React from 'react';
import './TodoList.css';

import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({todos, limparTodos}) => (
    <div className='listaTodos'>
        <h6 className='card-title'>Lista de Todos</h6>
        <button className='btn-limpar-todos' onClick={
            limparTodos
        }>Limpar Todos</button>
        { todos.map((todo, index) => {
            return <TodoItem key={index} todo={todo}/>
        })}
    </div>
);

export default TodoList;