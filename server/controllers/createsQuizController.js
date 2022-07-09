const CreateQuiz=require('../models/quiz')
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
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let currDate=`${date}-${month}-${year}`
    var quizArr = JSON.parse(quizQNA);
    const Quiz = {
      quizDetail: newquiz,
      quizQNA: quizArr,
      creatorId: id,
      image:req.file.path,
      creationDate:currDate
    };
  const newQuiz=new CreateQuiz(Quiz);
  try{
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
  const playerAttempt=async(req,res)=>{
const _id = req.params.uid;
const attemptArray=req.body;
    try {

      const data = await CreateQuiz.findByIdAndUpdate(_id, {attempts:attemptArray})
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
exports.playerAttempt = playerAttempt;