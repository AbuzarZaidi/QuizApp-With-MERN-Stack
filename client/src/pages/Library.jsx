import SingleQuizpart from "../components/library/SingleQuizpart";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Typography,
  Divider
//   Checkbox,
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
        await deleteQuiz(id);
         const result= await readUserQuizes(userId);
     setUserQuizArr(result)
    setShow(true);
  }
  return (
    <>
    <Box sx={{ display: "flex", justifyContent: "center",color:"#3668CE"}}>
    <Typography variant="h2" gutterBottom component="div">
       Library
      </Typography>
      
    </Box>
    <Divider />
    {!show&&  <Box sx={{display: "flex", justifyContent: "center",}}>
            <CircularProgress />
          </Box>}
    {show&&userQuizArr.map((ques, i) => {
 return < SingleQuizpart key={ques._id} id={ques._id} deleteHandler={quizDeleteHandler} title={ques.quizDetail.title.slice(0, 30)} creator={ques.quizDetail.creator}/>
    })}
    </>
  );
};

export default Library;
