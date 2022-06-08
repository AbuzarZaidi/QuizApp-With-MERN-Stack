const mongoose =require('mongoose');
const CreateQuiz=require('../models/createQuiz')
exports.createExpense =async(req,res)=>{
   const  expenses=new  Expenses(req.body);
   try {
       await expenses.save();
       res.status(201).json(expenses);
   } catch (error) {
       res.status(409).json({error:error.message})
   }
   }

const createQuiz=async(req,res,next)=>{
  const newQuiz=new CreateQuiz(req.body);
  try{
     await  newQuiz.save();
     res.status(201).json(newQuiz);
  }catch(error){
   res.status(409).json({error:error.message})
  }
}

exports.createQuiz = createQuiz;