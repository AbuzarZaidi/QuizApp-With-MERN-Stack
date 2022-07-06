import * as React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateQuizType,updateTimeLimit,updateTitle,updateDescription,updateVisibility,updateImgSrc,updateCategory,updateCreator,updateQuizId } from "../../store/quizSummary";
import {updateHandler} from '../../store/quizMcq'
import {updatetfHandler} from '../../store/truefalse'
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

const SingleQuizpart = (props) => {
  const dispatch = useDispatch();
  const handleEdit=()=>{
    console.log("single Quiz Part")
    console.log(props.quiz._id)
  
    dispatch(updateQuizType(props.quiz.quizDetail.quizType));
    dispatch(updateTimeLimit(props.quiz.quizDetail.timeLimit));
    dispatch(updateTitle(props.quiz.quizDetail.title));
    dispatch(updateDescription(props.quiz.quizDetail.description));
    dispatch(updateVisibility(props.quiz.quizDetail.visibility));
    dispatch(updateImgSrc(props.quiz.quizDetail.imgSrc));
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
      <Box></Box>
      <Box
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
              
              <img
                src={`http://localhost:5000/${props.img}`}
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
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                sx={{
                  mb: 3,
                  mt: 1,
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
              >
               {props.title}
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                sx={{ mt: 3 }}
              >
                <b> creator:</b> {props.creator}
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}
            >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
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
              </Box>
              <Box></Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default SingleQuizpart;
