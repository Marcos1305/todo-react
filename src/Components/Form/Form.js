import React, {Component} from 'react';

import './Form.css';

class Form extends Component {
    constructor(props) {
        super();
        this.state = {
            name: '',
            description: '',
            date: '',
        }
    }
    limparForm() {
        this.setState({
            name: '',
            description: '',
            date: '',
            completed: false,
        });
    }
    render() {
        return (
            <form>
            <div className='form-group'>
                <label>Nome</label>
                <input value={this.state.name} onChange={(e) => {
                    this.setState({name: e.target.value})
                }}/>
            </div>
            <div className='form-group'>
                <label>Descrição</label>
                <textarea onChange={(e) => {
                    this.setState({description: e.target.value})
                }} value={this.state.description}/>
            </div>
            <div className='form-group'>
                <label>Data</label>
                <input type='date' value={this.state.date} onChange={(e) => {
                    this.setState({date: e.target.value})
                }}/>
            </div>
            <div className='form-group'>
                <button className='btn-salvar' onClick={(e) => {
                    e.preventDefault();
                    this.props.addTodo(this.state);
                    this.limparForm();
                }}>Salvar</button>
            </div>
        </form>
        );
    }
}

export default Form;
