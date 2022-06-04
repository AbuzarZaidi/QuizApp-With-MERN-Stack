import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { styled ,alpha} from '@mui/material/styles';



const ButtonHover = styled('div')(({ theme }) => ({
    backgroundColor: "#40890F",
    '&:hover': {
        backgroundColor: "#6b530f"
    },
   
  }));



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
    
      <div style={{ width: '100%', height: 360}}>
      <Box
        sx={{
          display: 'grid',
          gridAutoRows: '90px',
          gap: 7,
          mt:2
        }}
      >
        <Item sx={{ gridColumn: '1', gridRow: 'span 3' }}> 
        <Button variant="outlined" sx={{ fontWeight: 'bold', textTransform: 'capitalize',px:3,py:2,mt:2,color:"black",backgroundColor:"#F2F2F2"}}><SettingsOutlinedIcon/>Quiz Summary</Button>
        <Button variant="contained" sx={{ fontWeight: 'bold', textTransform: 'capitalize',px:5,py:2,mt:2}}>Add Question</Button>
        </Item>
        {/* The second non-visible row has height of 40px */}
        <Item sx={{ gridColumn: '1', gridRow: '4/ 5' }}>
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
  <ButtonHover>
  <Button  sx={{ fontWeight: 'bold', textTransform: 'capitalize',px:3,backgroundColor:"#40890F",color:"white"}}>Save</Button>
  </ButtonHover>
</ButtonGroup>
</Box>
        </Item>
      </Box>
    </div> 
    </>
  )
}

export default LeftQuizMenu