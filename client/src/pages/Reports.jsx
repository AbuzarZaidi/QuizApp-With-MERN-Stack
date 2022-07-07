import * as React from "react";
import Attemps from "../components/reports/Attemps";
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
// import Autocomplete from "@mui/material/Autocomplete";
import Checkbox from "@mui/material/Checkbox";
const { readUserQuizes } = require("../functions/readQuiz");
// const label = { inputProps: { "aria-label": "Checkbox demo" } };



const Reports = () => {
  document.title = "Reports-QuizWorld";
  const userId = useSelector((state) => state.authData.id);
  const [checked, setChecked] = React.useState(true);
  const [userQuizArr, setUserQuizArr] = useState(null);
  const [show, setShow] = useState(false);
  const [attemptsShow, setAttemptsShow] = useState(false);
  const [attempts,setAttempts]=useState([]);
  const setIndexHandler=(index)=>{
    setAttempts(userQuizArr[index].attempts)
    setShow(false);
    setAttemptsShow(true)
  }
  const resetIndexHandler=(val)=>{
    setAttempts([])
    setShow(true);
    setAttemptsShow(false)
  }
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
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
        />
        </Stack>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <TableContainer component={Paper} sx={{ width: "95%" }}>
          <Table sx={{ minWidth: 850 }} size="small" aria-label="a dense table">
            {show&&!attemptsShow&&<TableHead >
           


              <TableRow>
                <TableCell >
                  <Typography sx={{ fontWeight: "bold", }} >
                    <Checkbox
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ "aria-label": "controlled" }}
                    />{" "}
                    Name
                  </Typography>
                </TableCell>
                <TableCell align="right" >
                  <Typography  sx={{ fontWeight: "bold" }} >Date</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography sx={{ fontWeight: "bold" }}>Game Mode</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography sx={{ fontWeight: "bold" }}>
                   No. of Player
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
          }
            <TableBody>
           
            {show&&!attemptsShow&&userQuizArr.map((ques,ind) => 
            { 
              return  <SingleQuizRow key={ind} no={ind} openQuizAttempts={setIndexHandler} name={ques.quizDetail.title} mode={ques.quizDetail.quizType} players={ques.attempts.length} 
              date={ques.creationDate}/>
})}

            </TableBody>
          </Table>
        
        </TableContainer>
       
       
      </Box>
      {!show&&!attemptsShow?  <Box sx={{display: "flex", justifyContent: "center",}}>
            <CircularProgress />
          </Box>:""}
      {show&&!attempts&&userQuizArr.length===0? <Box sx={{display:"flex",justifyContent:"center",}}><Typography
        
        sx={{  textTransform: "capitalize",}}
      >
       It looks very empty in here, go ahead and create a kahoot.
      </Typography></Box>:""}

      {!show&&attempts&&<Attemps  data={attempts} reset={resetIndexHandler}/>}
    </>
  );
};

export default Reports;
