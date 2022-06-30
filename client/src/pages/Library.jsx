import SingleQuizpart from "../components/library/SingleQuizpart";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {
  Box,
  Typography,
  Divider
//   Checkbox,
} from "../utlis/materialComponents";
const Library = () => {
  return (
    <>
    <Box sx={{ display: "flex", justifyContent: "center",color:"#3668CE"}}>
    <Typography variant="h2" gutterBottom component="div">
       Library
      </Typography>
      
    </Box>
    <Divider />
   < SingleQuizpart/>
   < SingleQuizpart/>
   < SingleQuizpart/>
   < SingleQuizpart/>
    </>
  );
};

export default Library;
