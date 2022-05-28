import React from 'react'
import Box from '@mui/material/Box';
 import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
const newQuiz = () => {
  return (
    <Container fixed>
    <Box sx={{  height: '100vh' }}>
    <Box
      component="form"
      sx={{
        // width: 500,
        maxWidth: '100%',
        bgcolor:"#fff",
        mt:5,
      }}
      noValidate
      autoComplete="off"
    >
        <Typography >
      {/* <TextField variant="outlined"  id="outlined-basic"   /> */}
      <TextField  fullWidth id="outlined-basic" placeholder='start typing your question' variant="outlined" sx={{input: {textAlign: "center",fontSize:"20px",}}} />
      </Typography>
     
    </Box>
        </Box> 
   </Container>
  )
}

export default newQuiz