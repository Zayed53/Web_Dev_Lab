import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
