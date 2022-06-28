import * as React from "react";
import { Link } from "react-router-dom";
import QuizSummaryModal from "./Quiz/QuizSummaryModal";
import PropTypes from "prop-types";
import { Box, Button, ButtonGroup } from "../../utlis/materialComponents";
import { useSelector, useDispatch } from "react-redux";
import { addNewQuestion,resetQuizHandler } from "../../store/quizMcq";
import { resetDetailHandlers} from "../../store/quizSummary";
import { tfAddNewQuestion,tfResetHandler } from "../../store/truefalse";
import { styled } from "@mui/material/styles";
const { createNewQuiz } = require("../../functions/createQuiz");
const ButtonHover = styled("div")(({ theme }) => ({
  backgroundColor: "#40890F",
  "&:hover": {
    backgroundColor: "#6b530f",
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
  const dispatch = useDispatch();
  const quizType = useSelector((state) => state.detail.quizType);
  const timeLimit = useSelector((state) => state.detail.timeLimit);
  const title = useSelector((state) => state.detail.title);
  const description = useSelector((state) => state.detail.description);
  const visibility = useSelector((state) => state.detail.visibility);
  const category = useSelector((state) => state.detail.category);
  const quizArray = useSelector((state) => state.mcq.quizQna);
  const truefalseArray = useSelector((state) => state.trueFalse.quizQna);
  const saveInfoHandler = async () => {
    let quiz = [];
    if (quizType === "quiz") {
      quiz = quizArray;
    } else {
      quiz = truefalseArray;
    }
    const newQuiz = {
      quizType,
      timeLimit,
      title,
      description,
      visibility,
      category,
    };
    const Quiz = {
      quizDetail: newQuiz,
      quizQNA: quiz,
    };
    dispatch(tfResetHandler());
    dispatch(resetDetailHandlers());
    dispatch(resetQuizHandler());
    const result = await createNewQuiz(Quiz);
    console.log(result);
   
  };
  const addQuestionHandler = () => {
    if (quizType === "quiz") {
      dispatch(addNewQuestion());
    } else {
      dispatch(tfAddNewQuestion());
    }
  };

  return (
    <>
      <div style={{ width: "100%", height: 360 }}>
        <Box
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
                  variant="outlined"
                  sx={{
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    px: 3,
                    mr: 1,
                    color: "#A13333 ",
                    backgroundColor: "#F2F2F2",
                  }}
                >
                  Exit
                </Button>
                <ButtonHover>
                  <Button
                    onClick={saveInfoHandler}
                    to="/"
              component={Link}
                    sx={{
                      fontWeight: "bold",
                      textTransform: "capitalize",
                      px: 3,

                      backgroundColor: "#40890F",
                      color: "white",
                      '&:hover': {
                        backgroundColor: '#669900',
                        color:'#ffffff',
                    }
                    }}
                  >
                    Save
                  </Button>
                </ButtonHover>
              </ButtonGroup>
            </Box>
          </Item>
        </Box>
      </div>
    </>
  );
};

export default LeftQuizMenu;
