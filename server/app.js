const fs = require('fs');
const path = require('path');
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
app.use('/uploads/images', express.static(path.join('uploads', 'images')));
app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin,X-Requested-With,Content-Type,Accept,Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods','GET','POST','PATCH','DELETE')
  next();
})
 app.use('/creator',createsQuizRoutes);
 app.use('/read',readQuiz);
 app.use('/users', usersRoutes);
app.use('/',(req,res,next)=>{
  res.json({message:"hello wolrd"})
})
app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
