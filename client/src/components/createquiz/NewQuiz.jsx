import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { quesHandler } from "../../store/quizMcq";
import { tfQuesHandler } from "../../store/truefalse";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Quiz from "./Quiz/Quiz";

import { MDBContainer } from "mdbreact";
import "./Quiz/style.css";

const NewQuiz = () => {
  const dispatch = useDispatch();
  const quizArray = useSelector((state) => state.mcq.quizQna);
  const truefalseArray = useSelector((state) => state.trueFalse.quizQna);
  const quizType = useSelector((state) => state.detail.quizType);
  const [quizes, setQuizes] = useState(quizArray);
  useEffect(() => {
    if (quizType === "quiz") {
      setQuizes(quizArray);
    } else {
      setQuizes(truefalseArray);
    }
  }, [quizArray, quizes, quizType, truefalseArray]);
  const questionHandler = (text, i) => {
    if (quizType === "quiz") {
      dispatch(quesHandler({ text, i }));
    } else {
      dispatch(tfQuesHandler({ text, i }));
    }
  };

  const scrollContainerStyle = { width: "820px", maxHeight: "92vh" };
  return (
    <>
      <MDBContainer>
        <Container fixed>
          <Box
            sx={{ height: "95vh" }}
            className="scrollbar scrollbar-primary"
            style={scrollContainerStyle}
          >
            {quizes.map((ques, i) => {
              return (
                <Quiz
                  key={i}
                  ques={ques}
                  index={i}
                  questionHandler={questionHandler}
                />
              );
            })}
          </Box>
        </Container>
      </MDBContainer>
    </>
  );
};

export default NewQuiz;
