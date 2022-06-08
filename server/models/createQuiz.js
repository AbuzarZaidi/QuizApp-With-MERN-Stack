const mongoose = require("mongoose");
const { Schema } = mongoose;
const createQuizSchema = new Schema({
    quizDetail:{},
    quizQNA:[]
  
 
});

const CreateQuizModel = mongoose.model('CreateQuiz', createQuizSchema );
module.exports=CreateQuizModel;