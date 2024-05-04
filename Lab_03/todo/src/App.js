import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import SubmitButton from './components/SubmitButton';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
