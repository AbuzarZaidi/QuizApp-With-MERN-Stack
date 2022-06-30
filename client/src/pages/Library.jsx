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
const { readUserQuizes } = require("../functions/readQuiz");
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
  }, [setUserQuizArr,userId]);
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
 return < SingleQuizpart title={ques.quizDetail.title.slice(0, 30)} creator={ques.quizDetail.creator}/>
    })}
    </>
  );
};

export default Library;
