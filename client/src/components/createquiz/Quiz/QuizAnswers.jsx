import React,{useState} from "react";
import { useDispatch  } from 'react-redux';
import { pink } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import {Box,Grid,Checkbox,TextField,Paper } from "../../../utlis/materialComponents"

 import { optionHandler,correctOptionHandler} from "../../../store/quizMcq";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  fontColor: "white",
}));
const QuizAnswers = ({indexj,opt,index}) => {
  const dispatch = useDispatch();
  const [optionValue,setOptionValue]=useState(opt.option);
  const optionValHandler=(value,i,j)=>{
    // console.log(value)
    // console.log(i)
    // console.log(j)
     dispatch(optionHandler({ value, i,j }));
  }
  const correctOptHandler=(i,j)=>{
     dispatch(correctOptionHandler({ i,j }));
    // console.log("click")
  }
  return (
    <Grid item xs={6}>
      <Item>
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
          <Item>
            {" "}
            <TextField
             onChange={(e) => {
              setOptionValue(e.target.value);
            }}
            onBlur={(e) => {
              optionValHandler(e.target.value, index,indexj);
            }}
            value={optionValue}
              // fullWidth
              placeholder={`Add Answer ${indexj+1}`}
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
          </Item>
          <Item
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Checkbox
            onClick={(e) => {
              correctOptHandler( index,indexj);
            }}
            
              {...label}
              sx={{
                color: pink[800],
                "&.Mui-checked": {
                  color: pink[600],
                },
              }}
            />
          </Item>
        </Box>
      </Item>
    </Grid>
  );
};

export default QuizAnswers;
