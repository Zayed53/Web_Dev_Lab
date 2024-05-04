'use client'
import React, { useEffect, useState } from "react";




const QuizId = ({ params }) => {
  const id = params.id;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuiz, setCurrentQuiz] = useState('');

  useEffect(()=>{
    async function GetQuiz(id){
      try {
        const res = await fetch('/api/GetQuiz/'+id); // Adjust the API route path accordingly
        const data = await res.json();
        setCurrentQuiz(data.Quizes)
        console.log(data.Quizes)
      } catch (error) {
        console.error("Error fetching quizzes:", error);
    
      }
    }
      GetQuiz(id)
  }, [id])


  if (!currentQuiz) {
    
    return <div>Quiz not found</div>;
  }
  var currentQuestion
  if(currentQuiz){
    currentQuestion = currentQuiz.questions[currentQuestionIndex];
  }


  const handleAnswerOptionClick = (selectedAnswer) => {
    if (selectedAnswer === currentQuestion.answer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < currentQuiz.questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz">
      <h1>{currentQuiz.name} Quiz</h1>
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {currentQuiz.questions.length}
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestionIndex + 1}</span>/{currentQuiz.questions.length}
            </div>
            <div className="question-text">
              {currentQuestion.question}
            </div>
          </div>
          <div className="answer-section">
            {currentQuestion.options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default QuizId;
