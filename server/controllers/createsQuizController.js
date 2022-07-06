const mongoose =require('mongoose');
const CreateQuiz=require('../models/quiz')
// const fileUpload =require('../middlewares/file-upload')
const createQuiz=async(req,res,next)=>{
  const {  quizQNA, quizType,
    timeLimit,
    title,
    description,
    visibility,
    category,
    creator,id } = req.body;
    const newquiz = {
      quizType,
      timeLimit,
      title,
      description,
      visibility,
      category,
      creator,
      
    };
    var quizArr = JSON.parse(quizQNA);
    const Quiz = {
      quizDetail: newquiz,
      quizQNA: quizArr,
      creatorId: id,
      image:req.file.path,
    };
  const newQuiz=new CreateQuiz(Quiz);
  try{
    console.log(newQuiz)
     await  newQuiz.save();
     res.status(201).json(newQuiz);
  }catch(error){
   res.status(409).json({error:error.message})
  }
}
const updateQuizById =async(req,res)=>{
  const _id = req.params.id;
  const {  quizQNA, quizType,
    timeLimit,
    title,
    description,
    visibility,
    category,
    creator,id } = req.body;
    const newquiz = {
      quizType,
      timeLimit,
      title,
      description,
      visibility,
      category,
      creator,
      
    };
    var quizArr = JSON.parse(quizQNA);
    const Quiz = {
      quizDetail: newquiz,
      quizQNA: quizArr,
      creatorId: id,
      image:req.file.path,
    };
  try {

    const data = await CreateQuiz.findByIdAndUpdate(_id, Quiz)
    if (!_id) {
      return res.status(400).send();
    } else {
      res.status(200).send(data);
    }
  }
   catch (error) {
    res.status(500).send(error);
   }
  }
exports.createQuiz = createQuiz;
exports.updateQuizById = updateQuizById;