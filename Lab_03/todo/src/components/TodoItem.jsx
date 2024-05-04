import React from 'react';

const TodoItem = ({ todo }) => {
  return (
    <div className="todo-item">
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
    </div>
  );
};

export default TodoItem;
