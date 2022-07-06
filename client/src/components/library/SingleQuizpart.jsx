import * as React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { updateQuizType,updateTimeLimit,updateTitle,updateDescription,updateVisibility,updateImgSrc,updateCategory,updateCreator,updateQuizId } from "../../store/quizSummary";
import {updateHandler} from '../../store/quizMcq'
import {updatetfHandler} from '../../store/truefalse'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
  Box,
  IconButton,
  Typography,
  Paper,
  Button,
  Grid,
} from "../../utlis/materialComponents";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
// const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Container = styled("div")(({ theme }) => ({
  // padding: theme.spacing(1),

  [theme.breakpoints.down("md")]: {
    width: "137%",
    justifyContent: 'flex-start',
  },
}));
const Text = styled("div")(({ theme }) => ({
  // padding: theme.spacing(1),

  [theme.breakpoints.down("md")]: {
    fontSize: '1rem',
    mb: 1,
  },
}));
const Images= styled("img")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width:"85px",
  },
  [theme.breakpoints.down("sm")]: {
    width:"75px",
    // display:"none"
  },

}));
const Buttons = styled("div")(({ theme }) => ({
  // padding: theme.spacing(1),

  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "center",
    // mt: 3,
    // mb: 3,
    // flexWrap: "wrap",
    // flexDirection: "column",
    // textAlign: "center",
  },
}));
const SingleQuizpart = (props) => {
  const dispatch = useDispatch();
  const handleEdit=()=>{
  console.log(props.quiz.image)
  
    dispatch(updateQuizType(props.quiz.quizDetail.quizType));
    dispatch(updateTimeLimit(props.quiz.quizDetail.timeLimit));
    dispatch(updateTitle(props.quiz.quizDetail.title));
    dispatch(updateDescription(props.quiz.quizDetail.description));
    dispatch(updateVisibility(props.quiz.quizDetail.visibility));
    dispatch(updateImgSrc(null));
    // dispatch(updateImgSrc(props.quiz.image));
    dispatch(updateCategory(props.quiz.quizDetail.category));
    dispatch(updateCreator(props.quiz.quizDetail.creator));
    dispatch(updateQuizId(props.quiz._id));
    if(props.quiz.quizDetail.quizType==="quiz"){
      dispatch(updateHandler(props.quiz.quizQNA));
    }
   else{
    dispatch(updatetfHandler(props.quiz.quizQNA));
   }
    

  }
  return (
    <>
      {/* <Box></Box> */}
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
           justifyContent: "center",
          "& > :not(style)": {
            m: 1,
            width: "70%",
            height: 128,
          },
        }}
      >
        <Paper elevation={2}>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              {/* <Checkbox {...label} /> */}
              
              <Images
                src={`http://localhost:5000/${props.img}`}
                // src={"images/Header1Img.jpg"}
                alt=""
                height="125px"
                width="150px"
              />
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <Text 
                // variant="h6"
                gutterBottom
                component="div"
                sx={{
                  mb: 3,
                  mt: 1,
                  ml:3,
                  fontSize: '1rem',
                  // fontWeight: "bold",
                  textTransform: "capitalize",
                  fontWeight:"bold",
                }}
              >
                
               {/* {props.title.slice(0, 30)} */}
               {props.title.slice(0, 50)}
              </Text >
              <Text 
                // variant="h6"
                gutterBottom
                component="div"
                sx={{ mt: 3,ml:3,fontSize: '1rem' }}
              >
              <AccountCircleIcon/> {props.creator} 
              </Text >
            </Grid>
            <Grid
              item
              xs={4}
              sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}
            >
              <Buttons sx={{ display: "flex", justifyContent: "center" }}>
                <Button  component={Link} to="/createquiz">
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  // aria-controls={menuId}
                  aria-haspopup="true"
                   onClick={handleEdit}
                  sx={{ color: "#fffff" }}
                 
                >
                  
                  <ModeEditIcon />
                </IconButton>
                </Button>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  // aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={()=>{props.deleteHandler(props.id)}}
                  sx={{ color: "red" }}
                >
                  <DeleteIcon />
                </IconButton>
              </Buttons>
              <Box></Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default SingleQuizpart;
