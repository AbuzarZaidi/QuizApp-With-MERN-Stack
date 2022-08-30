const mongoose=require( 'mongoose');
const DB=process.env.DATABASE
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.mocixuc.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => {
    console.log("Connection Successfull");
  })
  .catch((err) => {
    console.log(`${err}`);
  });

  