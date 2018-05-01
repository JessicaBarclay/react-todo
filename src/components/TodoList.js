import React from 'react';

const TodoList = ({todos}) => {
    var counter = 0

    const todoItems = todos.map(todo => <li key={counter =+ 1}> 
                {todo.title}
                {todo.description}
            </li>);

    return <ul className="col-md-4 list-group">
        { todoItems }
    </ul>;
};

export default TodoList;