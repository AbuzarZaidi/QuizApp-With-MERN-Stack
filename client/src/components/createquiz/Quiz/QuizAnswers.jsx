import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pink } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

import {
  Box,
  Grid,
  Checkbox,
  TextField,
  Paper,
} from "../../../utlis/materialComponents";

import { optionHandler, correctOptionHandler } from "../../../store/quizMcq";
import { tfCorrectOptionHandler } from "../../../store/truefalse";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  fontColor: "white",
}));
const Answers = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  [theme.breakpoints.down("md")]: {
    // input: { width: "194px", height: "100px" },
    width: "220px",
    backgroundColor:"#ffffff"
  },
}));
const QuizAnswers = ({ indexj, opt, index,correct }) => {
  const dispatch = useDispatch();
  const quizType = useSelector((state) => state.detail.quizType);
  const [optionValue, setOptionValue] = useState(opt.option);
  const optionValHandler = (value, i, j) => {
    dispatch(optionHandler({ value, i, j }));
  };
  const correctOptHandler = (i, j) => {
    if (quizType === "quiz") {
      dispatch(correctOptionHandler({ i, j }));
    } else {
      dispatch(tfCorrectOptionHandler({ i, j }));
    }
  };
  return (
    <Grid item xs={7} md={6} >
      {/* <Item> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",

          }}
        >
          <Item>
            {" "}
            <Box
              sx={{
                width: "40px",
                height: "109px",
                backgroundColor: opt.color,
                borderRadius: 1,
              }}
            ></Box>
          </Item>
          <Answers>
            {" "}
            {quizType === "quiz" && (
              <TextField
              onChange={(e) => {
                setOptionValue(e.target.value);
              }}
              onBlur={(e) => {
                optionValHandler(e.target.value, index, indexj);
              }}
              value={optionValue}
              placeholder={`Add Answer ${indexj + 1}`}
              id="fullWidth"
              variant="standard"
              sx={{
                input: { width: "294px", height: "100px" },
                pl: 2,
                display: "flex",

                justifyContent: "center",
              }}
              InputProps={{
                disableUnderline: true,
              }}
            />
            )}
            {quizType === "trueFalse" && (
              <TextField
                value={opt.color === "#3668CE" ? "True" : "False"}
                id="fullWidth"
                variant="standard"
                sx={{
                  input: { width: "294px", height: "100px" },
                  pl: 2,
                  display: "flex",

                  justifyContent: "center",
                }}
                InputProps={{
                  disableUnderline: true,
                }}
              />
            )}
          </Answers>
          <Item
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Checkbox

              onClick={(e) => {
                correctOptHandler(index, indexj);
              }}
              {...label}
              checked=  {correct===indexj?true:false}
              
              sx={{
                color: pink[800],
                "&.Mui-checked": {
                  color: pink[600],
                },
              }}
            />
          </Item>
        </Box>
      {/* </Item> */}
    </Grid>
  );
};

export default QuizAnswers;
