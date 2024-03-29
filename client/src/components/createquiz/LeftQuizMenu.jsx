import * as React from "react";
import  { useContext } from "react";
import { Link } from "react-router-dom";
import QuizSummaryModal from "./Quiz/QuizSummaryModal";
import ImageContext from '../../contextapi/ImageContext'
import PropTypes from "prop-types";
import { Box, Button, ButtonGroup } from "../../utlis/materialComponents";
import { useSelector, useDispatch } from "react-redux";
import { addNewQuestion, resetQuizHandler } from "../../store/quizMcq";
import { resetDetailHandlers } from "../../store/quizSummary";
import { tfAddNewQuestion, tfResetHandler } from "../../store/truefalse";
import { setLocationHandler } from "../../store/auth";
import { styled } from "@mui/material/styles";
import SubmitModel from "./SubmitModel";
const { createNewQuiz, updateQuiz } = require("../../functions/createQuiz");

const ButtonHover = styled("div")(({ theme }) => ({
  backgroundColor: "#40890F",
  "&:hover": {
    backgroundColor: "#6b530f",
  },
}));
const Container = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    gridAutoRows: "2px",
  },
}));
const OuterContainer = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    height: 260,
  },
}));
function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        borderRadius: 2,
        textAlign: "center",
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

const LeftQuizMenu = () => {
  const context = useContext(ImageContext);
  const { image } = context;
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authData.token);
  const id = useSelector((state) => state.authData.id);
  const quizType = useSelector((state) => state.detail.quizType);
  const timeLimit = useSelector((state) => state.detail.timeLimit);
  // const imgSrc = useSelector((state) => state.detail.imgSrc);
  const title = useSelector((state) => state.detail.title);
  const quizId = useSelector((state) => state.detail.quizId);
  const description = useSelector((state) => state.detail.description);
  const visibility = useSelector((state) => state.detail.visibility);
  const creator = useSelector((state) => state.detail.creator);
  const category = useSelector((state) => state.detail.category);
  const quizArray = useSelector((state) => state.mcq.quizQna);
  const truefalseArray = useSelector((state) => state.trueFalse.quizQna);
  const saveInfoHandler = async () => {
    dispatch(setLocationHandler(0));
    let quiz = [];
    if (quizType === "quiz") {
      quiz = quizArray;
    } else {
      quiz = truefalseArray;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("quizQNA", JSON.stringify(quiz));
    formData.append("timeLimit", timeLimit);
    formData.append("quizType", quizType);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("visibility", visibility);
    formData.append("category", category);
    formData.append("creator", creator);
    formData.append("id", id);
    if (quizId === "") {
      await createNewQuiz(formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: token,
        },
      });

      dispatch(tfResetHandler());
      dispatch(resetDetailHandlers(""));
      dispatch(resetQuizHandler());
    } else {
      await updateQuiz(quizId, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: token,
        },
      });
      dispatch(tfResetHandler());
      dispatch(resetDetailHandlers(""));
      dispatch(resetQuizHandler());
    }
  };
  const addQuestionHandler = () => {
    if (quizType === "quiz") {
      dispatch(addNewQuestion());
    } else {
      dispatch(tfAddNewQuestion());
    }
  };
  const exitHandler = () => {
    dispatch(setLocationHandler(0));
    dispatch(tfResetHandler());
    dispatch(resetDetailHandlers(""));
    dispatch(resetQuizHandler());
  };
  return (
    <>
      <OuterContainer style={{ width: "100%", height: 360 }}>
        <Container
          sx={{
            display: "grid",
            gridAutoRows: "90px",
            gap: 7,
            mt: 2,
          }}
        >
          <Item sx={{ gridColumn: "1", gridRow: "span 3" }}>
            <QuizSummaryModal />
            <Button
              onClick={addQuestionHandler}
              variant="contained"
              sx={{
                fontWeight: "bold",
                textTransform: "capitalize",
                px: 5,
                py: 2,
                mt: 2,
              }}
            >
              Add Question
            </Button>
          </Item>

          <Item sx={{ gridColumn: "1", gridRow: "4/ 5" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                "& > *": {
                  m: 1,
                },
              }}
            >
              <ButtonGroup variant="outlined">
                <Button
                  to="/"
                  component={Link}
                  variant="outlined"
                  sx={{
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    px: 3,
                    mr: 1,
                    color: "#A13333 ",
                    backgroundColor: "#F2F2F2",
                  }}
                  onClick={exitHandler}
                >
                  Exit
                </Button>
                <SubmitModel
                  saveHandler={saveInfoHandler}
                  newQuiz={quizArray}
                  newTrueFalse={truefalseArray}
                  detail={{
                    quizType,
                    timeLimit,
                    title,
                    description,
                    visibility,
                    category,
                    creator,
                    image,
                  }}
                />
                <ButtonHover></ButtonHover>
              </ButtonGroup>
            </Box>
          </Item>
        </Container>
      </OuterContainer>
    </>
  );
};

export default LeftQuizMenu;
