import React,{useState} from 'react'
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
  const Answer = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#E22D3B",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    mt: 3,
    width: "90%",
    color: theme.palette.text.secondary,
  }));
const AnswerSection = (props) => {
  const [selectedColor,setSelectedColor]=useState(props.color)
const selectHandler=()=>{
  if(props.checkClick===false){
    setSelectedColor('#E7AB79')
  props.checkClickHandler(true,props.index)
  }
  
 
}
  return (
    <Grid item xs={6}  onClick={selectHandler} >
      {/* <Item> */}
    <Box>
    <Answer sx={{backgroundColor:selectedColor,}}>
    <Typography
          variant="h6"
          gutterBottom
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            color: "#ffffff",
            fontWeight: "500",
          }}
          
        >
         {props.option} 
        </Typography>
    </Answer>
   
    </Box>
    {/* </Item> */}
    </Grid>
  )
}

export default AnswerSection