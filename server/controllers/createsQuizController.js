const mongoose =require('mongoose');
const CreateQuiz=require('../models/createQuiz')

const createQuiz=async(req,res,next)=>{
  const newQuiz=new CreateQuiz(req.body);
  console.log(req.body)
  try{
    console.log("Inside Controllers")
     await  newQuiz.save();
     res.status(201).json(newQuiz);
  }catch(error){
   res.status(409).json({error:error.message})
  }
}

exports.createQuiz = createQuiz;