import { NextResponse } from "next/server.js";
import dbConnect from "../../../../../lib/dbconnect.js";
import Quiz from "../../../../../models/quiz.js";

export async function GET(Request, {params}) { //request:
    try{
        await dbConnect();
        const Id=params.id;
        const OneQuiz= await Quiz.findOne({id:Id})


        return NextResponse.json({Quizes:OneQuiz},{status:200} )


    }catch(error){
        console.log(error)
        return NextResponse.error({message:error})

    }
   

  }