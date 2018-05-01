import React from 'react';

const TodoList = ({ todos, onSubmitHandler }) => {

    const onClickHandler = (index) => {
        onSubmitHandler(index)
    }

    const todoItems = todos.map((todo, index) =>
        <li key={index}>
            <div> {todo.title} </div>
            <div>{todo.description}</div>
            <div> <button onClick={() => onClickHandler(index)}>-</button></div>
        </li>
    );
    return <ul className="col-md-4 list-group">
        {todoItems}
    </ul>;
};

export default TodoList;