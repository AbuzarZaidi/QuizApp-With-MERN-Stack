import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { quesHandler } from "../../store/quizMcq";
import { tfQuesHandler } from "../../store/truefalse";
import { styled } from "@mui/material/styles";
import {
  Box,
  Container
} from "../../utlis/materialComponents";
import Quiz from "./Quiz/Quiz";

import { MDBContainer } from "mdbreact";
import "./Quiz/style.css";
const BoxContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "320px"
  },
}));
const NewQuiz = () => {
  const dispatch = useDispatch();
  const quizArray = useSelector((state) => state.mcq.quizQna);
  const truefalseArray = useSelector((state) => state.trueFalse.quizQna);
  const quizType = useSelector((state) => state.detail.quizType);
  const [quizes, setQuizes] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (quizType === "quiz") {
      setQuizes(quizArray);
    } else {
      setQuizes(truefalseArray);
    }
    setShow(true)
  }, [quizArray, quizes, quizType, truefalseArray]);
  const questionHandler = (text, i) => {
    if (quizType === "quiz") {
      dispatch(quesHandler({ text, i }));
    } else {
      dispatch(tfQuesHandler({ text, i }));
    }
  };
  return (
    <>
      <MDBContainer>
        <Container fixed>
          <BoxContainer
            sx={{ height: "95vh",width: "820px", maxHeight: "82vh"  }}
            className="scrollbar scrollbar-primary"
           
          >
            {show&&quizes.map((ques, i) => {
              return (
                <Quiz
                  key={i}
                  ques={ques}
                  index={i}
                  questionHandler={questionHandler}
                />
              );
            })}
          </BoxContainer>
        </Container>
      </MDBContainer>
    </>
  );
};

export default NewQuiz;