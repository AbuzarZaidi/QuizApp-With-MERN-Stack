import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { quesHandler } from "../../store/quizMcq";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Quiz from "./Quiz/Quiz";
import { MDBContainer } from "mdbreact";
import "./Quiz/style.css";

const NewQuiz = () => {
  const dispatch = useDispatch();
  const quizArray = useSelector((state) => state.mcq.quizQna);
  const [quizes, setQuizes] = useState(quizArray);
  useEffect(() => {
    setQuizes(quizArray);
  }, [quizArray, quizes]);
  const questionHandler = (text, i) => {
    dispatch(quesHandler({ text, i }));
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
