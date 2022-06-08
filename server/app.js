const express=require('express');
const bodyParser=require('body-parser')
const createsQuizRoutes =require('./routes/createsQuizRoutes')
const app=express();
const port = 5000
app.use(bodyParser.json())
 app.use('/creator',createsQuizRoutes);
app.use('/',(req,res,next)=>{
  res.json({message:"hello wolrd"})
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
