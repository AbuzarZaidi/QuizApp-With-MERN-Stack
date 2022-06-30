import React, { useEffect, useState } from "react";
import QuizCard from "../components/Discover/QuizCard";
import { Box, Grid,Typography,Divider } from "../utlis/materialComponents";
import CircularProgress from "@mui/material/CircularProgress";
const { readQuiz } = require("../functions/readQuiz");

const Discover = () => {
  document.title = "Discover-QuizWorld";
  const [quizArr, setQuizArr] = useState(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const result = await readQuiz();
      setShow(true);

      setQuizArr(result);
    };
    fetchData();
  }, [setQuizArr]);
  return (
    <>
     <Box sx={{ display: "flex", justifyContent: "center",color:"#3668CE"}}>
    <Typography variant="h2" gutterBottom component="div">
       Discover
      </Typography>
      
    </Box>
    <Divider />
      <Box sx={{ display: "flex", justifyContent: "center", height: "100vh" }}>
        {show === false ? (
          <Box>
            <CircularProgress />
          </Box>
        ) : (
          <Box sx={{ flexGrow: 1, mt: 3, ml: 5 }}>
            <Grid container spacing={2}>
              {quizArr.map((ques, i) => {
                return (
                  <Grid item xs={4} key={i}>
                    <QuizCard
                      quizType={ques.quizDetail.quizType}
                      timeLimit={ques.quizDetail.timeLimit}
                      title={ques.quizDetail.title}
                      description={ques.quizDetail.description}
                      quiz={ques}
                      id={ques._id}
                      visibility={ques.quizDetail.visibility}
                      category={ques.quizDetail.category}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Discover;
