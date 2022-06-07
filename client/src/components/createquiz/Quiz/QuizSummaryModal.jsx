import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
// import Card from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
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
              <Grid item xs={6}>
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
              <Grid item xs={6}>
                <Box sx={{ mt: 3 }}>
                  <Typography variant="h6" component="div" gutterBottom>
                    Cover Image
                  </Typography>
                  {/* <Card  sx={{ maxWidth: 345}}>
                  
                    <CardMedia
                      component="img"
                      height="184"
                      image="images/background.jpg"
                      alt="Paella dish"
                    /> 
                  <CardContent>  <Button
              variant="contained"
              sx={{
                fontWeight: "bold",
                textTransform: "capitalize",
                px: 2,
                py: 1,
                
              }}
            >
              Change
            </Button> </CardContent>
                      
                  </Card> */}
                  <Paper style={styles.paperContainer}>
                      <Box sx={{}}>
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
                  <Typography variant="h6" component="div" gutterBottom>
                    Visibility
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
export default QuizSummaryModal;
