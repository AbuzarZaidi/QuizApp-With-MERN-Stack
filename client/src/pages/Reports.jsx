import * as React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import SingleQuizRow from "../components/reports/SingleQuizRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import Checkbox from "@mui/material/Checkbox";
const { readUserQuizes } = require("../functions/readQuiz");
// const label = { inputProps: { "aria-label": "Checkbox demo" } };



const Reports = () => {
  document.title = "Reports-QuizWorld";
  const userId = useSelector((state) => state.authData.id);
  const [checked, setChecked] = React.useState(true);
  const [userQuizArr, setUserQuizArr] = useState(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const result = await readUserQuizes(userId);
      setShow(true);
      setUserQuizArr(result);
    };
    fetchData();
  },[setUserQuizArr,userId,]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Stack spacing={1} sx={{ width: 300, mr: 3, mt: 3 }}>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search input"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
          />
        </Stack>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <TableContainer component={Paper} sx={{ width: "95%" }}>
          <Table sx={{ minWidth: 850 }} size="small" aria-label="a dense table">
            <TableHead >
           


              <TableRow>
                <TableCell >
                  <Typography SX={{ fontWeight: "bold", }} >
                    <Checkbox
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ "aria-label": "controlled" }}
                    />{" "}
                   <b> Name</b>
                  </Typography>
                </TableCell>
                <TableCell align="right" >
                  <Typography  SX={{ fontWeight: "bold",fontSize: '2.4rem', }} ><b> Date</b></Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography SX={{ fontWeight: "bold" }}><b>Game Mode</b></Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography SX={{ fontWeight: "bold" }}>
                  <b> No. of Player</b>
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {!show&&  <Box sx={{display: "flex", justifyContent: "center",}}>
            <CircularProgress />
          </Box>}
            {show&&userQuizArr.map((ques) => 
            { 
              return  <SingleQuizRow name={ques.quizDetail.title} mode={ques.quizDetail.quizType} players={ques.attempts.length} 
              date={ques.creationDate}/>
})}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Reports;
