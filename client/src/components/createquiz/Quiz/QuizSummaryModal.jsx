import * as React from "react";
import {Box,Button,Typography,Modal,SettingsOutlinedIcon, Grid,TextField ,Radio,RadioGroup,FormControlLabel,
  FormControl, ButtonGroup,Paper
} from "../../../utlis/materialComponents"
import { styled } from "@mui/material/styles";


const ButtonHover = styled("div")(({ theme }) => ({
  backgroundColor: "#40890F",
  "&:hover": {
    backgroundColor: "#6b530f",
  },
}));


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
const styles = {
    paperContainer: {
        backgroundImage: `url(images/background.jpg)`,
        height:194,
        display:"flex",
                      flexDirection: 'column',
                justifyContent:"center",
                alignItems:"center"
    }
};
const QuizSummaryModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleOpen}
        sx={{
          fontWeight: "bold",
          textTransform: "capitalize",
          px: 3,
          py: 2,
          mt: 2,
          color: "black",
          backgroundColor: "#F2F2F2",
        }}
      >
        <SettingsOutlinedIcon /> Quiz Summary
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h4">
            Quiz Summary
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={7}>
                {/* <Item> */}
                <Box sx={{ mt: 3 }}>
                  <Typography variant="h6" component="div" gutterBottom>
                    Title
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    label="Enter Quiz Title Here"
                    variant="outlined"
                    sx={{ width: 300 }}
                  />
                </Box>
                <Box sx={{ mt: 3 }}>
                  <Typography variant="h6" component="div" gutterBottom>
                    Description (optional)
                  </Typography>
                  <TextField
                    id="outlined-multiline-static"
                    label="Quiz Description"
                    multiline
                    rows={4}
                    sx={{ width: 300 }}
                  />
                </Box>
                {/* </Item> */}
              </Grid>
              <Grid item xs={5}>
                <Box sx={{ mt: 3 }}>
                  <Typography variant="h6" component="div" gutterBottom>
                    Cover Image
                  </Typography>
                 
                  <Paper style={styles.paperContainer}>
                      <Box >
                  <Button
              variant="contained"
              sx={{
                fontWeight: "bold",
                textTransform: "capitalize",
                px: 2,
                py: 1,
                
              }}
            >
              Change
            </Button> 
            </Box>
            </Paper>
                  <Typography variant="h6" component="div" gutterBottom sx={{mt:2}}>
                    Visibility
                  </Typography>
                  <FormControl>
      
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="private" control={<Radio />} label="Private" />
        <FormControlLabel value="public" control={<Radio />} label="Public" />
       
      </RadioGroup>
    </FormControl>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box
              sx={{
                display: "flex",
                // flexDirection: "column",
                justifyContent:"center",
                alignItems: "center",
                "& > *": {
                  m: 1,
                },
              }}
            >
              <ButtonGroup variant="outlined">
                <Button
                  variant="outlined"
                  sx={{
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    px: 3,
                    mr: 1,
                    color: "#A13333 ",
                    backgroundColor: "#F2F2F2",
                  }}
                >
                  Exit
                </Button>
                <ButtonHover>
                  <Button
                    sx={{
                      fontWeight: "bold",
                      textTransform: "capitalize",
                      px: 3,

                      backgroundColor: "#40890F",
                      color: "white",
                    }}
                  >
                    Save
                  </Button>
                </ButtonHover>
              </ButtonGroup>
            </Box>
        </Box>
      </Modal>
    </div>
  );
};
export default QuizSummaryModal;
