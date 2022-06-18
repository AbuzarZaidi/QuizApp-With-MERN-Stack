import React,{useState,useEffect} from 'react'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Timer = (props) => {
 
  
  return (
    <Box
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
      ml: 1,
    }}
  >
    {" "}
    <Typography
      variant="h5"
      gutterBottom
      component="div"
      sx={{ fontWeight: "bold", mt: 2, fontSize: 32 }}
    >
      {props.timer}{" "}
    </Typography>
  </Box>
  )
}

export default Timer