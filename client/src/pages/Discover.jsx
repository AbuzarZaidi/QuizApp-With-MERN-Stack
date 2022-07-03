import React, { useEffect, useState } from "react";
import QuizCard from "../components/Discover/QuizCard";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, Grid, Typography, Divider } from "../utlis/materialComponents";
import CircularProgress from "@mui/material/CircularProgress";
const { readQuiz } = require("../functions/readQuiz");

const Discover = () => {
  document.title = "Discover-QuizWorld";
  const [type, setType] = useState("");
  const [checkcategory, setCheckCategory] = useState(false);
  const [quizArr, setQuizArr] = useState(null);
  const [show, setShow] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = async (value) => {
    setCheckCategory(true);
    setShow(false);
    setTimeout(() => {
      setType(value);
      setShow(true);
    }, 1000);

    //  setValue(evalue)
    // console.log(value)
    // console.log(quizArr)
    // setShow(false);
    // const result= await quizArr.filter(ques => ques.quizDetail.category===value)
    // if(result.length<1){
    //   setFound("none")
    // }
    // else{
    //   setQuizArr(result);
    //   setTimeout(() => {
    //     setShow(true);
    //   }, 1000);
    // }

    setAnchorEl(null);
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await readQuiz();
      setShow(true);

      setQuizArr(result);
    };
    fetchData();
  }, [setQuizArr]);
  return (
    <>
      {/* <Box sx={{ display: "flex", justifyContent: "center",color:"#3668CE"}}>
    <Typography variant="h2" gutterBottom component="div">
       Discover
      </Typography>
    </Box> */}
      <Box sx={{ display: "flex", justifyContent: "flex-start", ml: 3, mt: 3 }}>
        <Button
          id="demo-positioned-button"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <img src={"/icons/filter.png"} alt="" height="25px" width="25px" />
          <Typography
            variant="button"
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "#000000",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            Filters
          </Typography>
        </Button>
       
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem
            onClick={() => {
              handleClose("education");
            }}
          >
            Education
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose("entertainment");
            }}
          >
            Entertainment
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose("sports");
            }}
          >
            Sports
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose("technical");
            }}
          >
            Technical
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose("programming");
            }}
          >
            Programming
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose("generalknowledge");
            }}
          >
            General Knowledge
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose("interviewquestions");
            }}
          >
            Interview Questions
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose("other");
            }}
          >
            other
          </MenuItem>
        </Menu>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-start",ml:3,mt:1}}>
      {checkcategory&&<Typography
            variant="h6"
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "#000000",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
          Category: {type}
          </Typography>}
          </Box>
      <Divider />
      <Box sx={{ display: "flex", justifyContent: "center", height: "100vh" }}>
        
      
        {!show ? (
          <Box>
            <CircularProgress />
          </Box>
        ) : (
          <Box sx={{ flexGrow: 1, mt: 3, ml: 5 }}>
            <Grid container spacing={2}>
              {/* {quizArr.map((ques, i) => { */}
              {checkcategory&&quizArr
                .filter((val) => val.quizDetail.category === type)
                .map((ques) => {
                  return (
                    <Grid item xs={4} key={ques}>
                      <QuizCard
                        quizType={ques.quizDetail.quizType}
                        timeLimit={ques.quizDetail.timeLimit}
                        title={ques.quizDetail.title}
                        description={ques.quizDetail.description}
                        quiz={ques}
                        id={ques._id}
                        visibility={ques.quizDetail.visibility}
                        category={ques.quizDetail.category}
                      />
                    </Grid>
                  );
                })}
              {!checkcategory&&quizArr.map((ques, i) => {
                return (
                  <Grid item xs={4} key={i}>
                    <QuizCard
                      quizType={ques.quizDetail.quizType}
                      timeLimit={ques.quizDetail.timeLimit}
                      title={ques.quizDetail.title}
                      description={ques.quizDetail.description}
                      quiz={ques}
                      id={ques._id}
                      visibility={ques.quizDetail.visibility}
                      category={ques.quizDetail.category}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Discover;
