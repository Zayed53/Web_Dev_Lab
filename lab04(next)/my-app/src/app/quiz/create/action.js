'use server'
import dbConnect from "../../../../lib/dbconnect.js";
import Quiz from "../../../../models/quiz.js";


export async function Create(quiz) {
    try {
      await dbConnect();
      const newQuiz = new Quiz(quiz);
      await newQuiz.save();
  
      return {
        message: "New Quiz created",
        status: 200
      };
    } catch (error) {
      console.log(error);
      return error;
    }
  }