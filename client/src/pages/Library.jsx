import SingleQuizpart from "../components/library/SingleQuizpart";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Typography,
  Divider
} from "../utlis/materialComponents";
import CircularProgress from "@mui/material/CircularProgress";
const { readUserQuizes,deleteQuiz } = require("../functions/readQuiz");
const Library = () => {
  const userId = useSelector((state) => state.authData.id);
  document.title = "Library-QuizWorld";
  const [userQuizArr, setUserQuizArr] = useState(null);
   const [show, setShow] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const result = await readUserQuizes(userId);
      setShow(true);
      setUserQuizArr(result);
    };
    fetchData();
  }, [setUserQuizArr,userId,]);

  
  const quizDeleteHandler=async(id)=>{
    setShow(false);
    const result=  await deleteQuiz(userId,id);
 setUserQuizArr(result)
setShow(true);
  }
  return (
    <>
    <Box sx={{ display: "flex", justifyContent: "center",color:"#3668CE"}}>
    <Typography variant="h2"  component="div">
       Library
      </Typography>
      
    </Box>
    <Divider />
   
    {!show&&  <Box sx={{display: "flex", justifyContent: "center",}}>
            <CircularProgress />
          </Box>}
         
    {show&&userQuizArr.map((ques, i) => {
 return < SingleQuizpart key={ques._id} quiz={ques} id={ques._id} deleteHandler={quizDeleteHandler} title={ques.quizDetail.title.slice(0, 30)} creator={ques.quizDetail.creator} img={ques.image}/>
    })}
    {show&&userQuizArr.length===0?<Box sx={{display: "flex", justifyContent: "center"}}> <Typography variant="h6" >
       Nothing to show
      </Typography></Box>:""}
    </>
  );
};

export default Library;
