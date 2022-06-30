import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
const TopPicks = (props) => {
  return (
    <Box sx={{border:1,mt:2 ,mx:2 ,borderColor:"#CCCCCC"}}>



<Grid container >
  <Grid item xs={2}>
    <Box sx={{}}>
    <img
            src={"/images/quiz.jpg"}
            alt=""
            height="80px"
            // width="110px"
          />
    </Box>
 
  </Grid>
  <Grid item xs={10} >
    <Box sx={{  }}>
    <Typography variant="body1" gutterBottom component="div" sx={{ml:3, fontWeight: "bold",}}>
    {props.title}
      </Typography>
      <Box sx={{backgroundColor:"#CCCCCC",ml:3,mt:3,height:'30px',display: 'flex',justifyContent: 'space-between' }}>
      <Typography variant="body1" gutterBottom component="div" sx={{mt:1,ml:1}}>
   {props.creator}
      </Typography>
      <Typography variant="body1" gutterBottom component="div" sx={{mr:1,mt:1,fontWeight: "bold"}}>
   {props.play} plays
      </Typography>
      </Box>
    </Box>
 
  </Grid>
  
</Grid>
</Box>
  )
}

export default TopPicks