const express=require('express');
const bodyParser=require('body-parser')
const createsQuizRoutes =require('./routes/createQuizRoutes')
const readQuiz =require("./routes/readQuiz")
const usersRoutes =require("./routes/usersRoutes")
require("./db/index.js");
const cors = require('cors');
const app=express();
app.use(cors());
const port=process.env.PORT||5000;
app.use(bodyParser.json())
 app.use('/creator',createsQuizRoutes);
 app.use('/read',readQuiz);
 app.use('/users', usersRoutes);
app.use('/',(req,res,next)=>{
  res.json({message:"hello wolrd"})
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
