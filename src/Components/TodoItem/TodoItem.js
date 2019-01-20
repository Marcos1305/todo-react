import React from 'react';

import './TodoItem.css';

const TodoItem = ({todo}) => (
    <div className='todo-item'>
        <input type='checkbox' className='todo-check'/>
        <span>{ todo.name }</span>
        <span>{ todo.date }</span>
    </div>
)

export default TodoItem;