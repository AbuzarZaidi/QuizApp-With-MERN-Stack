import * as React from "react";
import { useDispatch } from "react-redux";
import { setnHandler } from "../../store/startQuiz";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Modal,
  Divider,
} from "../../utlis/materialComponents";
import { CardActionArea } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
const Center = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),

  [theme.breakpoints.down("md")]: {
    width: 350,
  },
}));
export default function QuizCard(props) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const startQuizHandler = () => {
    dispatch(setnHandler(props.quiz));
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Center sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            sx={{
              display: "flex",
              justifyContent: "center",
              textTransform: "capitalize",
            }}
          >
            Title:{props.title}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, textTransform: "capitalize" }}
          >
            <b> Description:</b> {props.description}
          </Typography>
          <Divider light />
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, textTransform: "capitalize" }}
          >
            <b> Type:</b> {props.quizType}
          </Typography>
          <Divider light />
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, textTransform: "capitalize" }}
          >
            <b> TimeLimit:</b> {props.timeLimit}sec
          </Typography>
          <Divider light />
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, textTransform: "capitalize" }}
          >
            <b> Visibility:</b> {props.visibility}
          </Typography>
          <Divider light />
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, textTransform: "capitalize" }}
          >
            <b> Category:</b> {props.category}
          </Typography>
          <Divider light />
          <Button
            variant="contained"
            to="/startquiz"
            component={Link}
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 3,
              "&:hover": {
                color: "#ffffff",
              },
            }}
            onClick={startQuizHandler}
          >
            Start Quiz
          </Button>
        </Center>
      </Modal>
      <Card sx={{ maxWidth: 345, mb: 3 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={`http://localhost:5000/${props.img}`}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {props.title.slice(0, 30)}...
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.description.slice(0, 50)}...
            </Typography>
          </CardContent>
        </CardActionArea>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            onClick={handleOpen}
            sx={{ width: "100%" }}
          >
            Start Quiz
          </Button>
        </Box>
      </Card>
    </>
  );
}
