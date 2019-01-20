import React from 'react';
import './TodoList.css';

import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({todos}) => (
    <div className='listaTodos'>
        <h6 className='card-title'>Lista de Todos</h6>
        { todos.map((todo, index) => {
            return <TodoItem key={index} todo={todo}/>
        })}
    </div>
);

export default TodoList;