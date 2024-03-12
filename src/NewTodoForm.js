import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';

const NewTodoForm = function({createTodo}){
    const [text, setText] = useState('');

    const handleChange = function(evt){
        setText(evt.target.value);
    };

    const handleSubmit = function(evt){
        evt.preventDefault();
        createTodo({text, id: uuid()});
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="text">Todo:</label>
            <input
                id="text"
                name="text"
                onChange={handleChange}
                value={text}
            />
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodoForm;