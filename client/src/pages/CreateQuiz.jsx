import React from "react";
import NewQuiz from "../components/createquiz/NewQuiz";
import LeftQuizMenu from "../components/createquiz/LeftQuizMenu";
import RightQuizMenu from "../components/createquiz/RightQuizMenu";
import { styled } from "@mui/material/styles";
import { Box, Paper, Grid } from "../utlis/materialComponents";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",

  color: theme.palette.text.secondary,
}));
const ItemContainer = styled(Item)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    height: "32vh",
    bgcolor: "#F2F2F1",
  },
}));
const CreateQuiz = () => {
  document.title = "Creator-QuizWorld";
  return (
    <Box sx={{ flexGrow: 1, mt: 0.5, height: "95vh", bgcolor: "#ffffff" }}>
      <Grid container spacing={0.1}>
        <Grid item xs={12} md={2}>
          <ItemContainer sx={{ height: "95vh",bgcolor: "#ffffff", }}>
            <RightQuizMenu />
          </ItemContainer>
        </Grid>
        <Grid item xs={12} md={8}>
          <Item sx={{ bgcolor: "#F2F2F1", height: "95vh" }}>
            <NewQuiz />
          </Item>
        </Grid>
        <Grid item xs={12} md={2}>
          <ItemContainer sx={{ height: "95vh" }}>
            <LeftQuizMenu />
          </ItemContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CreateQuiz;
