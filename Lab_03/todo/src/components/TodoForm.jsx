import React, { useState, useMemo, useCallback } from 'react';
import SubmitButton from './SubmitButton';

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = useCallback(() => {
    // e.preventDefault();
    // if (!title || !description) return;
    addTodo({
      title: title,
      description: description,
    });
    setTitle('');
    setDescription('');
  }, []);



  return (
    <form>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <SubmitButton onClick={handleSubmit} />
    </form>
  );
};

export default TodoForm;
