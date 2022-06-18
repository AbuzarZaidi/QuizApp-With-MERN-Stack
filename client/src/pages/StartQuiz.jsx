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
const Question = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  mt: 3,
  width: "70%",
  color: theme.palette.text.secondary,
}));
// const Answer = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#E22D3B",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   mt: 3,
//   width: "40%",
//   color: theme.palette.text.secondary,
// }));

window.onbeforeunload = function () {
  if (true) {
    return "If you reload this page, your previous action will be repeated";
  } else {
  }
};
const StartQuiz = () => {
    const[clicked,setClicked]=useState(false);
    const[correct,setCorrect]=useState(0);
    const [userSelected,setUserSelected]=useState("");
    const quizArray = useSelector((state) => state.set.quiz);
  const [show, setShow] = useState(false);
  const [timer, setTimer] = useState(quizArray.quizDetail.timeLimit);
  
  const [count, setCount] = useState(1);
  const [currVal, setCurrVal] = useState(quizArray.quizQNA[0]);
  const [timerSet,setTimerSet]=useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 500);
  }, []);
 
  const nextQuestionHandler = () => {
    setTimer(quizArray.quizDetail.timeLimit);
    // setTimer(0);
    // handler(timer);
    setTimerSet(true)
    if(userSelected==currVal.correctOpt){
   
      setCorrect(correct+1)
     }
    setCount(count + 1);
    if (count < quizArray.quizQNA.length) {
      setCurrVal(quizArray.quizQNA[count]);
     
      setClicked(true)}

  };

  
const handler=()=>{
  if (count <= quizArray.quizQNA.length) {
  
    setTimeout(() => {
     if(timer>0&&timerSet){
      setTimer(quizArray.quizDetail.timeLimit);
      setTimeout(() => {
        setTimerSet(false)
      }, 200);
      
     }
     else if (timer > 0&&timerSet===false) {
        setTimer(timer-1);
         console.log(timer)
      }
      
      else if (count < quizArray.quizQNA.length) {
        setCount(count + 1);
        setCurrVal(quizArray.quizQNA[count]);
     setTimer(quizArray.quizDetail.timeLimit);
       
        setClicked(true)
        if(userSelected==currVal.correctOpt){
          setCorrect(correct+1)
          
         }
      }
    }, 1000);
  }
}
handler(timer);
 
  const checkHandler=(ind)=>{
    // console.log(ind);
    setUserSelected(ind)
    // if(ind===currVal.correctOpt){
    //     setCorrect(correct+1)
        
    //    }
  // if(val===true){
  //   setClicked(true)
  // }
  // else if(val===false){
  //   setClicked(false)
  // }
  
  }
  return (
    <>
      {show === false ? (
        <Box
          sx={{ display: "flex", justifyContent: "center", height: "100vh" }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          {" "}
          <Timer timer={timerSet===true?quizArray.quizDetail.timeLimit:timer}/>
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
                  />
                );
              })}
            </Grid>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Button variant="contained" onClick={nextQuestionHandler}>
              Next
            </Button>
            Result:{correct}
          </Box>
        </>
      )}
    </>
  );
};

export default StartQuiz;
