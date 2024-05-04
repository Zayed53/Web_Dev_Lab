import { NextResponse } from "next/server.js";
import dbConnect from "../../../../lib/dbconnect.js";
import Quiz from "../../../../models/quiz.js";

export async function GET(Request) { //request:
    try{
        await dbConnect();

        const AllQuiz= await Quiz.find()


        return NextResponse.json({Quizes:AllQuiz},{status:200} )


    }catch(error){
        console.log(error)
        return NextResponse.error({message:error})

    }
   

  }