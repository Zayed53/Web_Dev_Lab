import React from 'react';

const SubmitButton = ({ onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };
  console.log("re-rendering")

  return <button onClick={handleClick}>Submit</button>;
};

export default SubmitButton;
