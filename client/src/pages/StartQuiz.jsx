import React,{useState} from "react";
import { useSelector} from "react-redux";
import AnswerSection from "../components/startquiz/AnswerSection";
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
const Question = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  mt: 3,
  width: "70%",
  color: theme.palette.text.secondary,
}));
const Answer = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#E22D3B",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  mt: 3,
  width: "40%",
  color: theme.palette.text.secondary,
}));


const StartQuiz = () => {
    const [show,setShow]=useState(false);
     const quizArray = useSelector((state) => state.set.quiz);
     
//   const [quizQna, setQuizQna] = useState(quizArray.quizQna);
setTimeout(() => {
       setShow(true)
}, 500);

//   console.log(quizArray)
//  console.log(quizes)
// console.log(1)
    // const quizQna=[
    //     {
    //       question:"1+1",
    //       correctOpt:0,
    //       options:[{option:"2",color:"#E22D3B"},{option:"4",color:"#3668CE"},{option:"6",color:"#D89E14"},{option:"1",color:"#40890F"}]
    //     },
    //     {
    //       question:"3+1",
    //       correctOpt:1,
    //       options:[{option:"2",color:"#E22D3B"},{option:"4",color:"#3668CE"},{option:"6",color:"#D89E14"},{option:"1",color:"#40890F"}]
    //     },
    
    //     {
    //       question:"5+1",
    //       correctOpt:2,
    //       options:[{option:"2",color:"#E22D3B"},{option:"4",color:"#3668CE"},{option:"6",color:"#D89E14"},{option:"1",color:"#40890F"}]
    //     }
    //   ]
      const [count,setCount]=useState(1);
      const[currVal,setCurrVal]=useState(quizArray.quizQNA[0])
      const [timer,setTimer]=useState(5);
      const nextQuestionHandler=()=>{
        // console.log('before')
        // console.log(count)
        setCount(count + 1)
        setTimeout(() => {
        setCurrVal(quizArray.quizQNA[count])
        }, 100);
        // console.log('after')
        // console.log(count)
        
      }
      if(count<=quizArray.quizQNA.length){
      setTimeout(() => {
       
        if(timer>0){
          setTimer(timer-1)
        }
       else if(count<quizArray.quizQNA.length){
        
        setCount(count + 1)
        setCurrVal(quizArray.quizQNA[count])
        setTimer(5)
       }
     
        }, 1000);
      }
      return (
      
     <>
     {show===false?<Box sx={{display: 'flex',justifyContent: 'center',height: '100vh'}}>
     <CircularProgress />
     </Box>:
         <> <Box
            sx={{
              backgroundColor: "#7b1fa2",
              color: "#ffffff",
              width: "100px",
              height: "100px",
              borderRadius: "55%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 2,
              ml:1
            }}
          >
            {" "}
            <Typography
              variant="h5"
              gutterBottom
              component="div"
              sx={{ fontWeight: "bold", mt: 2, fontSize: 32 }}
            >
              {timer}{" "}
            </Typography>
          </Box>
    
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Question>
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  color: "#000000",
                  fontWeight: "bold",
                }}
              >
                {currVal.question}
              </Typography>
            </Question>
          </Box>
          <Box sx={{ flexGrow: 1,mt:4}}>
          <Grid container spacing={2} sx={{ml:2,mt:4}} >
           {currVal.options.map((value)=>{ 
             return <AnswerSection option={value.option} color={value.color}/>
            })} 
            
              
          </Grid>
       
        </Box>
        <Box sx={{display: "flex", justifyContent: "center", mt: 3 }}>
        <Button variant="contained" onClick={nextQuestionHandler}>Next</Button>
        </Box></>}
        </>
        
        
      );
}

export default StartQuiz