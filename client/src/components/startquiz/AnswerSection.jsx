import React,{useState,useEffect,forwardRef, useImperativeHandle,} from 'react'
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
    '&:hover': {
      // cursor: pointer ,
      width: "92%",
      cursor: 'pointer'
   },
   
  }));
const AnswerSection = (props)=> {
  const [selectedColor,setSelectedColor]=useState(props.color)
const[a,setA]=useState(props.index);
  
  // useImperativeHandle(ref, () => ({
    
  //   childFunction1(i) {
  //     console.log(i)
  //     console.log(props.index)
  //     if(props.index===i){
  //       setSelectedColor('#0317fc')
  //     }
     
    //   console.log('click')
    //   console.log(props.color)
    //   console.log(props.index)
    //   if(props.checkClick===false){
    //     setSelectedColor('#E7AB79')
    //     // props.checkClickHandler(props.index)
    //  }
    //  else if(props.checkClick===true){
    //     // props.checkClickHandler(props.index)
      
    //     setSelectedColor('#0317fc')
    //  }
//}


  // }));

const selectHandler=()=>{

console.log(props.checkClick)
  // if(props.checkClick===true){
  //     setSelectedColor('#E7AB79')
     props.checkClickHandler(props.index)
  // }
  // else if(props.checkClick===false){
  //    props.checkClickHandler(props.index)
  //     setSelectedColor(props.color)
  // }
  props.checkClickHandler(props.index)
}
  return (
    <Grid item xs={6}  onClick={selectHandler} >
      {/* <Item> */}
    <Box>
    <Answer sx={ props.clickOpt===props.index?{backgroundColor:'#E7AB79'}:{backgroundColor:props.color}} >
    {/* <Answer sx={{backgroundColor:selectedColor}}  > */}
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