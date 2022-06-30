const mongoose = require("mongoose");
const { Schema } = mongoose;
const createQuizSchema = new Schema({
    quizDetail:{type:Object,required:true},
    quizQNA:{type:Array,required:true},
    creatorId:{type:String,required:true},
});

const CreateQuizModel = mongoose.model('CreateQuiz', createQuizSchema );
module.exports=CreateQuizModel;