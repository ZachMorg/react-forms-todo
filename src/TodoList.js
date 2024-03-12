import React, {useState} from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

const TodoList = function(){
    const [todos, setTodos] = useState([]);

    const addTodo = function(todoObj){
        setTodos(todos => [...todos, todoObj]);
    };

    const removeTodo = function(id){
        setTodos(todos => todos.filter(todo => todo.id !== id))
    };

    const todoComponents = todos.map(todo => (
        <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            handleRemove={removeTodo}
        />
    ));

    return (
        <div>
            <NewTodoForm createTodo={addTodo}/>
            {todoComponents}
        </div>
    );
}

export default TodoList;