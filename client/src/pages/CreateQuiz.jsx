import React from "react";
import NewQuiz from "../components/createquiz/NewQuiz";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",

  color: theme.palette.text.secondary,
}));
const CreateQuiz = () => {
  return (
    <Box sx={{ flexGrow: 1, mt: 0.5, height: "100vh", bgcolor: "#F2F2F1" }}>
      <Grid container spacing={0.1}>
        <Grid item xs={2}>
          <Item sx={{ height: "100vh" }}>xs=2</Item>
        </Grid>
        <Grid item xs={8}>
          {/* <Item sx={{ height: "100vh" }}> */}
          <Item sx={{bgcolor: "#F2F2F1"}}>
             
<NewQuiz/>

          </Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx={{ height: "100vh" }}>xs=2</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CreateQuiz;
