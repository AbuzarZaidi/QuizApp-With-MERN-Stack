import * as React from "react";
import { useDispatch } from 'react-redux';
import { setnHandler} from 
'../../store/startQuiz'
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function QuizCard(props) {
  const dispatch = useDispatch();
  const startQuizHandler=()=>{
    console.log("quiz start")
    dispatch( setnHandler(props.quiz));
  }
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="images/quiz.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Button variant="contained" to="/startquiz" component={Link} sx={{display: 'flex',justifyContent: 'center',}}onClick={startQuizHandler}>
          Start Quiz
        </Button>
      </Card>
    </>
  );
}
