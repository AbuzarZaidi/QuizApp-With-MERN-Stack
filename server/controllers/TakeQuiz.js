const mongoose =require('mongoose');
const Quiz=require('../models/quiz')


const readQuiz =async(req,res)=>{
    try {
        const quiz=await Quiz.find();
        res.status(200).json(quiz);
    } catch (error) {
        res.status(404).json({error:error.message})
    }
    }

    exports.readQuiz = readQuiz;