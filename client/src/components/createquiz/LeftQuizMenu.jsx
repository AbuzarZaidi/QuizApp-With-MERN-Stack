import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from "@mui/material/styles";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        borderRadius: 2,
        textAlign: 'center',
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

const LeftQuizMenu = () => {
  return (
    <>
    
      <div style={{ width: '100%', height: 360 }}>
      <Box
        sx={{
          display: 'grid',
          gridAutoRows: '90px',
          gap: 7,
        }}
      >
        <Item sx={{ gridColumn: '1', gridRow: 'span 2' }}> 
        <Button variant="outlined" sx={{ fontWeight: 'bold', textTransform: 'capitalize',px:4,py:2,mt:3,color:"black",backgroundColor:"#F2F2F2"}}>Quiz Summary</Button>
        <Button variant="contained" sx={{ fontWeight: 'bold', textTransform: 'capitalize',px:5,mt:3}}>Add Question</Button>
        </Item>
        {/* The second non-visible row has height of 40px */}
        <Item sx={{ gridColumn: '1', gridRow: '4 / 5' }}>
        <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
        <ButtonGroup variant="outlined" >
 
  <Button variant="outlined" sx={{ fontWeight: 'bold', textTransform: 'capitalize',px:3 ,mr:1,color: "#A13333 ",backgroundColor:"#F2F2F2"}}>Exit</Button>
  <Button variant="contained" sx={{ fontWeight: 'bold', textTransform: 'capitalize',px:3,backgroundColor:"#40890F",}}>Save</Button>
</ButtonGroup>
</Box>
        </Item>
      </Box>
    </div> 
    </>
  )
}

export default LeftQuizMenu