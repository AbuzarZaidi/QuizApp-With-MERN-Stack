import React,{useState} from "react";
import QuizAnswers from "./QuizAnswers";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";
const Quiz = () => {
const [moreOption,setMoreOption]=useState(false);
const [moreOptionText,setMoreOptionText]=useState("Add more answers");
const moreOptionHandler=()=>{
  if(moreOption===false)
  {
    setMoreOption(true)
    setMoreOptionText("Remove addition answers")
  }
  else{
    setMoreOption(false)
    setMoreOptionText("Add more answers")
  }
  
}
  return (
    <>
      <Box
        component="form"
        sx={{
          // width: 500,
          maxWidth: "98%",
          bgcolor: "#fff",
          mt: 6,

          borderRadius: 2,
        }}
        noValidate
        autoComplete="off"
      >
        <Typography>
          <TextField
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
        </Typography>
      </Box>

      <Box sx={{ flexGrow: 1, mt: 6, mr: 2 }}>
        <Grid container spacing={1}>
          <QuizAnswers color="#E22D3B" count="1" />
          <QuizAnswers color="#3668CE" count="2" />
          <QuizAnswers color="#D89E14" count="3" />
          <QuizAnswers color="#40890F" count="4" />
          {moreOption&&<QuizAnswers color="#50A4A4" count="5" />}
          {moreOption&&<QuizAnswers color="#864CBF" count="6" />}
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
