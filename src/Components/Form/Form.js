import React from 'react';

import './Form.css';

const Form = () => (
    <form>
        <div className='form-group'>
            <label>Nome</label>
            <input/>
        </div>
        <div className='form-group'>
            <label>Descrição</label>
            <textarea/>
        </div>
        <div className='form-group'>
            <label>Data</label>
            <input type='date'/>
        </div>
        <div className='form-group'>
            <button className='btn-salvar'>Salvar</button>
        </div>
    </form>
)

export default Form;
