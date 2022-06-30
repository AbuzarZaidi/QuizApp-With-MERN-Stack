import * as React from "react";
import {
  Box,
  IconButton,
  Typography,
  Paper,
  Grid,
//   Checkbox,
} from "../../utlis/materialComponents";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const SingleQuizpart = () => {
  return (
    <>
    <Box>
        
    </Box>
    <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      "& > :not(style)": {
        m: 1,
        width: "80%",
        height: 128,
      
      },
    }}
  >
    <Paper elevation={3}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          {/* <Checkbox {...label} /> */}
          <img
            src={"/images/quiz.jpg"}
            alt=""
            height="125px"
            width="150px"
          />
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            component="div"
            sx={{
              mb: 3,
              mt: 1,
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            title: My first quiz
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            component="div"
            sx={{ mt: 3 }}
          >
           <b> creator:</b> Syed Abuzar Zaidi
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              // aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              sx={{ color: "#fffff" }}
            >
              <ModeEditIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              // aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              sx={{ color: "red" }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
         <Box>
            
         </Box>
        </Grid>
      </Grid>
    </Paper>
  </Box>
  </>)
}

export default SingleQuizpart