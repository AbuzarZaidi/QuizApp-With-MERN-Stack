const mongoose=require( 'mongoose');
const DB=process.env.DATABASE

mongoose.connect("mongodb://localhost:27017/QuizWorld")
  .then(() => {
    console.log("Connection Successfull");
  })
  .catch((err) => {
    console.log(`${err}`);
  });