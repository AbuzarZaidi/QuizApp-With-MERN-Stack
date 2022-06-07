import React from "react";
import { pink } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import {Box,Grid,Checkbox,TextField,Paper } from "../../../utlis/materialComponents"



const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  fontColor: "white",
}));
const QuizAnswers = (props) => {
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
                backgroundColor: props.color,
                borderRadius: 1,
              }}
            ></Box>
          </Item>
          <Item>
            {" "}
            <TextField
              // fullWidth
              placeholder={`Add Answer ${props.count}`}
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
