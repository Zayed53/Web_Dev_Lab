'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Quiz = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    async function fetchQuizzes() {
      try {
        const res = await fetch('/api/GetQuiz'); // Adjust the API route path accordingly
        const data = await res.json();
        setQuizzes(data.Quizes);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      }
    }

    fetchQuizzes();
  }, []);

  return (
    <div className="quiz-list">
      <h1>Available Quizzes</h1>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.id}>
            <Link href={`/quiz/${quiz.id}`}>
              {quiz.tittle}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
