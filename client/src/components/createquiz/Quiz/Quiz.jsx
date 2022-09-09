import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import QuizAnswers from "./QuizAnswers";
import { styled } from "@mui/material/styles";
import {
  addMoreOptionHandler,
  removeMoreOptionHandler,
} from "../../../store/quizMcq";
import {
  TextField,
  Box,
  Grid,
  DeleteOutlineOutlinedIcon,
  Button,
  Divider,
  StarsRoundedIcon,
} from "../../../utlis/materialComponents";
const Question = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    maxWidth: "95%",
  },
}));
const Buttons = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "100%",
    // ml:5
  },
}));
const Quiz = ({ ques, index, questionHandler }) => {
  const dispatch = useDispatch();
  const quizType = useSelector((state) => state.detail.quizType);
  const [moreOption, setMoreOption] = useState(false);
  const [moreOptionText, setMoreOptionText] = useState("Add more answers");
  const [quesValue, setQuesValue] = useState(ques.question);
  const moreOptionHandler = () => {
    if (moreOption === false) {
      setMoreOption(true);
      dispatch(addMoreOptionHandler({ index }));
      setMoreOptionText("Remove addition answers");
    } else {
      setMoreOption(false);
      dispatch(removeMoreOptionHandler({ index }));

      setMoreOptionText("Add more answers");
    }
  };

  return (
    <>
      <Question
        component="form"
        sx={{
          maxWidth: "98%",
          bgcolor: "#fff",
          mt: 6,
          boxShadow: 3,
          borderRadius: 2,
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={quesValue}
          onBlur={(e) => {
            questionHandler(e.target.value, index);
          }}
          onChange={(e) => {
            setQuesValue(e.target.value);
          }}
          fullWidth
          id="outlined-basic"
          placeholder="start typing your question"
          InputProps={{
            disableUnderline: true,
          }}
          variant="standard"
          sx={{
            p: 1,
            borderRadius: "40px",

            input: { textAlign: "center", fontSize: "20px" },
          }}
        />
      </Question>

      <Box sx={{ flexGrow: 1, mt: 6, mr: 2 }}>
        <Grid container spacing={1} sx={{ mb: 5 }}>
          {ques.options.map((op, j) => {
            return (
              <QuizAnswers
                correct={ques.correctOpt}
                key={j}
                indexj={j}
                opt={op}
                index={index}
              />
            );
          })}
        </Grid>

        {quizType === "quiz" && (
          <Buttons sx={{ width: "100%" }}>
            <Button
              variant="outlined"
              onClick={moreOptionHandler}
              sx={{
                fontWeight: "bold",
                textTransform: "capitalize",
                px: 3,
                mt: 5,
                mb: 2,
                mr: 2,
                color: "#3E8282 ",
              }}
            >
              {" "}
              <StarsRoundedIcon />
              {moreOptionText}
            </Button>

            <Button
              variant="outlined"
              sx={{
                fontWeight: "bold",
                textTransform: "capitalize",
                px: 3,
                mt: 5,
                mb: 2,
                color: "#A13333 ",
              }}
            >
              {" "}
              <DeleteOutlineOutlinedIcon />
              Delete
            </Button>
          </Buttons>
        )}
        <Divider />
      </Box>
    </>
  );
};

export default Quiz;
