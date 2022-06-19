import React,{useEffect,useState} from "react";
import QuizCard from "../components/Discover/QuizCard";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CircularProgress from '@mui/material/CircularProgress';
const {readQuiz} =require( "../functions/readQuiz")

const Discover = () => {
  const [quizArr,setQuizArr]=useState(null);
  const [show,setShow]=useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const result = await readQuiz();
      setShow(true)
     
      setQuizArr(result);
    };
    fetchData();
  }, [setQuizArr]);
  return (
    <>
     
    <Box sx={{display: 'flex',justifyContent: 'center',height: '100vh'}}>
    {show===false? <Box >
     <CircularProgress />
     </Box>:
    <Box sx={{ flexGrow: 1 ,mt:3,ml:5 }}>
    <Grid container spacing={2}>
      
      {quizArr.map((ques,i) => {
           return(
            <Grid item xs={4} key={i}>
             <QuizCard title={ques.quizDetail.title} description={ques.quizDetail.description} quiz={ques} id={ques._id}/>
             </Grid>
            )
           })}
    
    </Grid>
  </Box>}

  </Box>
  </>
 
    
  );
};

export default Discover;
