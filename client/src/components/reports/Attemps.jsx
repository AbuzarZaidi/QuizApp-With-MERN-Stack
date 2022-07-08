import React from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
const Attemps = ({data,reset,show}) => {
  // console.log(data[0].Date)
   
  
  return (
    <>
    <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <TableContainer component={Paper} sx={{ width: "95%" }}>
          <Table sx={{ minWidth: 850 }} size="small" aria-label="a dense table">
            {show&&<TableHead >
           


              <TableRow>
                <TableCell >
                  <Typography sx={{ fontWeight: "bold", }} >
                   
                    Name
                  </Typography>
                </TableCell>
                <TableCell align="right" >
                  <Typography  sx={{ fontWeight: "bold" }} >Date</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography sx={{ fontWeight: "bold" }}>Correct </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography sx={{ fontWeight: "bold" }}>
                   Total Question
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>}
            <TableBody>
              {data.map((val,ind) =>{
                
             
           return (<TableRow
            key={ind}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
             
              {val.userName}
            </TableCell>
            
            <TableCell align="right">{val.Date}</TableCell>
            <TableCell align="right" sx={{textTransform: "capitalize"}}>{val.CorrectAnswer}</TableCell>
            <TableCell align="right">{val.TotalQuestion}</TableCell>
           
            
          </TableRow>
           )} )}
            </TableBody>
            </Table>
            </TableContainer>
           
            </Box>
            {show&&<Box  sx={{display: "flex", justifyContent: "center",mt:3,}}>
            <Button variant="contained" sx={{width:"25%"}} onClick={()=>reset()}>Back</Button>
            </Box>}
    </>
  )
}

export default Attemps