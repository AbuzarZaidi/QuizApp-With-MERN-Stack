import React, { useState } from "react";
 import { useDispatch  } from 'react-redux';
import QuizAnswers from "./QuizAnswers";
import {addMoreOptionHandler,removeMoreOptionHandler } from "../../../store/quizMcq";
import {
  TextField,
  Box,
  Grid,
  DeleteOutlineOutlinedIcon,
  Button,
  Divider,
  StarsRoundedIcon,
} from "../../../utlis/materialComponents";

const Quiz = ({ ques, index, questionHandler }) => {
  const dispatch = useDispatch();
  const [moreOption, setMoreOption] = useState(false);
  const [moreOptionText, setMoreOptionText] = useState("Add more answers");
  const [quesValue, setQuesValue] = useState(ques.question);
  const moreOptionHandler = () => {
    if (moreOption === false) {
      setMoreOption(true);
      dispatch(addMoreOptionHandler ({ index}));
      setMoreOptionText("Remove addition answers");
      // console.log(ques)
    } else {
      setMoreOption(false);
      dispatch(removeMoreOptionHandler({ index}));
      
      setMoreOptionText("Add more answers");
    }
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          // width: 500,
          maxWidth: "98%",
          bgcolor: "#fff",
          mt: 6,
          boxShadow: 3,
          borderRadius: 2,
        }}
        noValidate
        autoComplete="off"
      >
        {/* <Typography> */}
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
        {/* </Typography> */}
      </Box>

      <Box sx={{ flexGrow: 1, mt: 6, mr: 2 }}>
        <Grid container spacing={1}>
        {ques.options.map((op, j) => {
         
        return  <QuizAnswers key={j}  indexj={j} opt={op} index={index}/>
        })}
          {/* {moreOption && <QuizAnswers color="#50A4A4" count="5" key="5" />} */}
          {/* {moreOption && <QuizAnswers color="#864CBF" count="6" key="6" />} */}
        </Grid>

        <Button
          variant="outlined"
          onClick={moreOptionHandler}
          sx={{
            fontWeight: "bold",
            textTransform: "capitalize",
            px: 3,
            mt: 5,
            mb: 2,
            mr: 3,
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
        <Divider />
      </Box>
    </>
  );
};

export default Quiz;
