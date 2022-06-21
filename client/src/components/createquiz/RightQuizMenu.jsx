import React from "react";
import { useDispatch } from 'react-redux';
import {updateQuizType,updateTimeLimit,} from 
'../../store/quizSummary'
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Typography,
  Divider,
  TimerOutlinedIcon,
  CategoryIcon,
} from "../../utlis/materialComponents";

const RightQuizMenu = () => {
  const dispatch = useDispatch();
  const [quiz, setQuiz] = React.useState("");
  const [timer, setTimer] = React.useState("");
  const handleChangeQuiz = (event) => {
    setQuiz(event.target.value);
    dispatch(updateQuizType(event.target.value)); 
  };
  const handleChangeTimer = (event) => {
    setTimer(event.target.value);
    dispatch(updateTimeLimit(event.target.value)); 
  };

  return (
    <>
      <Typography
        component="div"
        gutterBottom
        sx={{ fontWeight: "bold", textTransform: "capitalize", px: 3, mt: 6 }}
      >
        <CategoryIcon /> Question Type
      </Typography>
      <Box sx={{ minWidth: 120, mb: 2 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Quiz</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={quiz}
            label="Quiz"
            onChange={handleChangeQuiz}
          >
            <MenuItem value={"quiz"}>Quiz</MenuItem>
            <MenuItem value={"trueFalse"}>True False</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Divider />
      <Typography
        component="div"
        gutterBottom
        sx={{ fontWeight: "bold", textTransform: "capitalize", px: 5, mt: 4 }}
      >
        <TimerOutlinedIcon /> Time Limit
      </Typography>
      <Box sx={{ minWidth: 120, mb: 2 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Timer</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={timer}
            label="Quiz"
            onChange={handleChangeTimer}
          >
            <MenuItem value={5}>5 seconds</MenuItem>
            <MenuItem value={10}>10 seconds</MenuItem>
            <MenuItem value={20}>20 seconds</MenuItem>
            <MenuItem value={30}>30 seconds</MenuItem>
            <MenuItem value={60}>60 seconds</MenuItem>
            <MenuItem value={90}>90 seconds</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Divider />
    </>
  );
};

export default RightQuizMenu;
