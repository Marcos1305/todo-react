import React,  { Component } from 'react';
import moment from 'moment';

import './TodoItem.css';

class TodoItem extends Component {
    constructor({todo}) {
        super();
        this.state =  {
            name: todo.name,
            date: todo.date,
            completed: todo.completed,
            description: todo.description,
            showDescription: false,
        }
    }

    render() {
        return !this.state.showDescription ?
            (
                <div className={`todo-item ${this.state.completed ? 'completed' : ''}` } >
                    <input type='checkbox' className='todo-check' checked={this.state.completed} onChange={() => {
                        this.setState({completed: !this.state.completed })
                    }}/>
                    <span onClick={() => this.setState({showDescription: true})} >{ this.state.name }</span>
                    <span>{
                        this.state.date.length === 10 
                        ? moment(this.state.date, 'YYYY-MM-DD').format('DD/MM/YYYY')
                        : this.state.date
                    }</span>
                </div>
            )    
            : (
                <div className='description-box'>
                    <div>
                        <button className='btn-back' onClick={() => this.setState({showDescription: false})}>
                            Voltar
                        </button>
                    </div>
                    <div className='todo-description'>
                        {this.state.description}
                    </div>
                </div>
            )
    }
}

export default TodoItem;