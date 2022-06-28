import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
const Home = () => {
  return (
    <>
    <Box ><img src={'/images/HeaderImg.png'} alt="" height='400px' width="100%" /> </Box>
 <Box sx={{display: 'flex',justifyContent: 'space-around',mt:3,mb:3}}>
 <Card sx={{ minWidth: 275 }}>
  <Box sx={{display: 'flex',justifyContent: 'center',mt:2}}>
 <img src={'/icons/writing.png'} alt="" height='50px' width="50px" />
 </Box>
      <CardContent>
        
        <Typography variant="h5" component="div" sx={{display: 'flex',justifyContent: 'center',color:"#3668CE"}}>
          Easy Quiz Creation
        </Typography>
       
        <Typography variant="body2">
        Here You can create free gamified quizzes
        </Typography>
        <Typography variant="body2">
        for your students to check their knowledge
        </Typography>
      </CardContent>
    </Card>

    <Card sx={{ minWidth: 275,backgroundColor:"#3668CE",color:"white", }}>
  <Box sx={{display: 'flex',justifyContent: 'center',mt:2}}>
 <img src={'/icons/goal.png'} alt="" height='50px' width="50px" />
 </Box>
      <CardContent >
        
        <Typography variant="h5" component="div" sx={{display: 'flex',justifyContent: 'center',}}>
          Easy Quiz Creation
        </Typography>
       
        <Typography variant="body2">
        Here You can find different type of
        </Typography>
        <Typography variant="body2">
        quizes according to your taste.
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ minWidth: 275 }}>
  <Box sx={{display: 'flex',justifyContent: 'center',mt:2}}>
 <img src={'/icons/clipboard.png'} alt="" height='50px' width="50px" />
 </Box>
      <CardContent>
        
        <Typography variant="h5" component="div" sx={{display: 'flex',justifyContent: 'center',color:"#3668CE"}}>
          Mange with the results
        </Typography>
       
        <Typography variant="body2">
        You can also Track record of your Quiz
        </Typography>
        <Typography variant="body2">
        Like how much students takes your
        </Typography>
        <Typography variant="body2">
        quizes and how scores the most
        </Typography>
      </CardContent>
    </Card>
 </Box></>
  )
}

export default Home
