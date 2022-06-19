import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import AnswerSection from "../components/startquiz/AnswerSection";
import Timer from "../components/startquiz/Timer";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Modal from '@mui/material/Modal';
import { Link } from "react-router-dom";
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
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
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
  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const [clicked, setClicked] = useState(true);
  const [correct, setCorrect] = useState(0);
  const [userSelected, setUserSelected] = useState(undefined);
  const quizArray = useSelector((state) => state.set.quiz);
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
      }
      else{
        setOpen(true)
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
    console.log(ind);
    setClickOption(ind);
  };
  return (
    <>
 <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h2" component="h2">
            Result
          </Typography> 
          <Typography id="modal-modal-description"variant="h4" sx={{ mt: 2 }}>
          {correct}/{quizArray.quizQNA.length}
          </Typography>
          <Box sx={{display: "flex", justifyContent: "center",}}>
          <Button variant="contained" to="/discover"
              component={Link}>Back</Button>
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
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Button variant="contained" onClick={nextQuestionHandler}>
              Next
            </Button>
          
          </Box>
        </>
      )}
    </>
  );
};

export default StartQuiz;
