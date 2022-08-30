import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import AnswerSection from "../components/startquiz/AnswerSection";
import Timer from "../components/startquiz/Timer";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

import {
  Grid,
  Typography,
  Divider,
  Box,
  Paper,
  Button,
  Modal,
} from "../utlis/materialComponents";
const { newPlayer } = require("../functions/createQuiz");
const Question = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  mt: 3,
  width: "70%",
  color: theme.palette.text.secondary,
}));
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};
window.onbeforeunload = function () {
  if (true) {
    return "If you reload this page, your previous action will be repeated";
  } else {
  }
};
const StartQuiz = () => {
  document.title = "StartQuiz-QuizWorld";
  const [open, setOpen] = React.useState(false);
  const [clicked, setClicked] = useState(true);
  const [correct, setCorrect] = useState(0);
  const [userSelected, setUserSelected] = useState(undefined);
  const quizArray = useSelector((state) => state.set.quiz);
  const userData=JSON.parse(localStorage.getItem('userData'))
  const [show, setShow] = useState(false);
  const [timer, setTimer] = useState(quizArray.quizDetail.timeLimit);
  const [count, setCount] = useState(1);
  const [currVal, setCurrVal] = useState(quizArray.quizQNA[0]);
  const [timerSet, setTimerSet] = useState(false);
  const [clickOption, setClickOption] = useState(5);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 500);
  }, []);

  const nextQuestionHandler = () => {
    setTimeout(() => {
      setTimer(quizArray.quizDetail.timeLimit);

      setTimerSet(true);
      if (userSelected === currVal.correctOpt) {
        setCorrect(correct + 1);
      }
      setCount(count + 1);
      if (count < quizArray.quizQNA.length) {
        setCurrVal(quizArray.quizQNA[count]);

        setClicked(true);
      } else {
        setOpen(true);
      }
      setClickOption(5);
    }, 500);
  };

  const handler = () => {
    if (count <= quizArray.quizQNA.length) {
      setTimeout(() => {
        if (timer > 0 && timerSet) {
          setTimer(quizArray.quizDetail.timeLimit);
          setTimeout(() => {
            setTimerSet(false);
          }, 200);
        } else if (timer > 0 && timerSet === false) {
          setTimer(timer - 1);
        } else if (count < quizArray.quizQNA.length) {
          setClickOption(5);
          setCount(count + 1);
          setCurrVal(quizArray.quizQNA[count]);
          setTimer(quizArray.quizDetail.timeLimit);

          setClicked(true);
          if (userSelected === currVal.correctOpt) {
            setCorrect(correct + 1);
          }
        }
      }, 1000);
    }
  };
  handler(timer);

  const checkHandler = (ind) => {
    setUserSelected(ind);
    setClickOption(ind);
  };
  const attemptHandler=async()=>{
    const date=Date().slice(0, 15);
    
    let attempts=quizArray.attempts;
    const attempArr=[...attempts,{
      userName:userData.userName,
     CorrectAnswer: correct,
     Date: date,
     TotalQuestion: quizArray.quizQNA.length,
    }]  
   await newPlayer(quizArray._id,attempArr);
    
  }
  return (
    <>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h2" component="h2">
            Result:
          </Typography>
          <Typography id="modal-modal-description" variant="h4" sx={{ mt: 2 }}>
             You have Scored {correct} out of{" "}
            {quizArray.quizQNA.length}.
          </Typography>
          <Divider />
          <Box sx={{ display: "flex", justifyContent: "center" ,}}>
            <Button
              variant="contained"
              to="/discover"
              component={Link}
              onClick={attemptHandler}
              sx={{ mt: 4 ,'&:hover': { 
                color:'#ffffff',
            }}}
            >
              Back
            </Button>
          </Box>
        </Box>
      </Modal>
      {show === false ? (
        <Box
          sx={{ display: "flex", justifyContent: "center", height: "100vh" }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          {" "}
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", mt: 3, mr: 2 }}
          >
            <Button
              variant="contained"
              onClick={nextQuestionHandler}
              sx={{ fontWeight: "bold", textTransform: "capitalize", px: 5 }}
            >
              {clickOption === 5 ? "skip" : "Next"}
            </Button>
          </Box>
          <Timer
            timer={timerSet === true ? quizArray.quizDetail.timeLimit : timer}
          />
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Question>
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  color: "#000000",
                  fontWeight: "bold",
                }}
              >
                {currVal.question}
              </Typography>
            </Question>
          </Box>
          <Box sx={{ flexGrow: 1, mt: 4 }}>
            <Grid container spacing={2} sx={{ ml: 2, mt: 4 }}>
              {currVal.options.map((value, ind) => {
                return (
                  <AnswerSection
                    option={value.option}
                    color={value.color}
                    index={ind}
                    key={ind}
                    checkClick={clicked}
                    checkClickHandler={checkHandler}
                    clickOpt={clickOption}
                  />
                );
              })}
            </Grid>
          </Box>
        </>
      )}
    </>
  );
};

export default StartQuiz;
