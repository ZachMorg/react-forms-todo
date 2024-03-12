import React from 'react';

const Todo = function({
    id,
    text,
    handleRemove
}){
    const remove = function(){
        handleRemove(id);
    }

    return (
        <div>
            <b>{text}</b>
        </div>
    );
}

export default Todo;