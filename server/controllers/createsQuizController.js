


const createQuiz=(req,res,next)=>{
   const {title,description}=req.body;
//    const newQuiz={
//        title,
//        description
//    }
    //  console.log("HEllo world");
      res.status(201).json(req.body);
}

exports.createQuiz = createQuiz;