import mongoose from 'mongoose';

const QuizSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  tittle: {
    type: String,
   
  },
  questions: [
    {
      
      question: {
        type: String,
        required: true,
      },
      options: {
        type: [String],
        required: true,
      },
      answer: {
        type: String,
        required: true,
      },
    },
  ],
});

const Quiz= mongoose.models.Quiz || mongoose.model('Quiz', QuizSchema);
export default Quiz
