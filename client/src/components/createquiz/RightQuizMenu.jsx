import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import CategoryIcon from "@mui/icons-material/Category";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import Button from "@mui/material/Button";
const RightQuizMenu = () => {
  const [quiz, setQuiz] = React.useState("");
  const [timer, setTimer] = React.useState("");
  const handleChangeQuiz = (event) => {
    setQuiz(event.target.value);
  };
  const handleChangeTimer = (event) => {
    setTimer(event.target.value);
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
      <Button
        variant="outlined"
        sx={{
          fontWeight: "bold",
          textTransform: "capitalize",
          px: 3,
          mt: 5,
          color: "#A13333 ",
        }}
      >
        {" "}
        <DeleteOutlineOutlinedIcon />
        Delete Question
      </Button>
    </>
  );
};

export default RightQuizMenu;
