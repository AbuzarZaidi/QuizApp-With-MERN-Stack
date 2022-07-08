import React from "react";
import { Box, Typography, Grid } from "../../utlis/materialComponents";
import { styled } from "@mui/material/styles";
const Title = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));
const Images = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "85px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "75px",
  },
}));

const Creator = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    justifyContent: "space-around",
    backgroundColor: "#ffffff",
  },
}));
const TopPicks = (props) => {
  return (
    <Box sx={{ border: 1, mt: 2, mx: 2, borderColor: "#CCCCCC" }}>
      <Grid container>
        <Grid item xs={2}>
          <Images
            src={"/images/quiz.jpg"}
            alt=""
            // height="80px"
            sx={{
              width: "122px",
              height: "100%",
              padding: 0,
              margin: 0,
            }}
          />
        </Grid>
        <Grid item xs={10}>
          <Title>
            <Typography
              variant="body1"
              gutterBottom
              component="div"
              sx={{ ml: 3, fontWeight: "bold" }}
            >
              {props.title}
            </Typography>
          </Title>
          <Creator
            sx={{
              backgroundColor: "#CCCCCC",
              ml: 3,
              mt: 3,
              height: "32px",
              display: "flex",

              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="body1"
              gutterBottom
              component="div"
              sx={{ mt: 1, ml: 1 }}
            >
              {props.creator}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              component="div"
              sx={{ mr: 1, mt: 1, fontWeight: "bold" }}
            >
              {props.play} plays
            </Typography>
          </Creator>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopPicks;
