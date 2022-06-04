import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Quiz from './Quiz/Quiz'
import { MDBContainer } from "mdbreact";
import './Quiz/style.css'
const newQuiz = () => {
  const scrollContainerStyle = { width: "820px", maxHeight: "92vh" };
  return (
    <>
      <MDBContainer>
      <Container fixed>
        
        <Box sx={{ height: "95vh" }} className="scrollbar scrollbar-primary" style={scrollContainerStyle}>
      
         <Quiz/>
         <Quiz/>
         <Quiz/>
      
     
                </Box>
      </Container>
      </MDBContainer>
    </>
  );
};

export default newQuiz;
