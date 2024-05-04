'use client'
import React from "react";
import { Create } from "./action.js";

const CreateNewQuiz = () => {
  const [quizName, setQuizName] = React.useState("");
  const [questions, setQuestions] = React.useState([]);
  const [newQuestion, setNewQuestion] = React.useState("");
  const [options, setOptions] = React.useState([]);
  const [newOption, setNewOption] = React.useState("");
  const [answer, setAnswer] = React.useState("");

  const handleAddQuestion = () => {
    const newQuestionObj = {
      question: newQuestion,
      options: [...options],
      answer: answer,
    };
    setQuestions([...questions, newQuestionObj]);
    setNewQuestion("");
    setOptions([]);
    setNewOption("");
    setAnswer("");
  };

  const handleAddOption = () => {
    if (newOption.trim() === "") {
      return;
    }
    setOptions([...options, newOption]);
    setNewOption("");
  };

  const handleCreateQuiz = async() => {
    
    if (quizName.trim() === "" || questions.length === 0) {
      alert("Please fill out quiz name and add questions.");
      return;
    }
    try{
      const newQuiz = {
        id: `quiz${Date.now()}`,
        tittle: quizName,
        questions: [...questions],
      };
    //   const res = await fetch('/api/create', {
    //   method: 'POST',
    //   headers: {
    //   'Content-Type': 'application/json',
    //   'API-Key': process.env.DATA_API_KEY,
    //   },
    //   body: JSON.stringify({quiz:newQuiz})
    // } )
    const res=Create(newQuiz);
    console.log(res)
    alert("Quiz created successfully!");
    }catch(error){
      console.log(error)
      alert("Something went wrong!");
    }
    


    setQuizName("");
    setQuestions([]);
    setNewQuestion("");
    setOptions([]);
    setNewOption("");
    setAnswer("");
  };

  return (
    <div className="create-quiz">
      <h1>Create New Quiz</h1>
      <label>
        Quiz Name:
        <input
          type="text"
          value={quizName}
          onChange={(e) => setQuizName(e.target.value)}
        />
      </label>
      <hr />
      <h2>Add Questions</h2>
      <label>
        Question:
        <input
          type="text"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />
      </label>
      <br />
      <label>
        Options:
        <input
          type="text"
          value={newOption}
          onChange={(e) => setNewOption(e.target.value)}
        />
        <button onClick={handleAddOption}>Add Option</button>
      </label>
      <ul>
        {options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
      <label>
        Answer:
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </label>
      <button onClick={handleAddQuestion}>Add Question</button>
      <hr />
      <button onClick={handleCreateQuiz}>Create Quiz</button>
    </div>
  );
};

export default CreateNewQuiz;
