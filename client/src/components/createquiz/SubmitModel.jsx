import * as React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const SubmitModel = (props) => {
        const [open, setOpen] = React.useState(false);
        const [error,setError]=React.useState(false);
        const [errorMessage,setErrorMessage]=React.useState("");
        const theme = useTheme();
        const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
      
        const handleClickOpen = () => {
            if(props.newQuiz[0].question===""&&props.newTrueFalse[0].question===""){
                    setError(true)
                    setErrorMessage("All questions need to be completed before you can createQuiz.")
            }
          else if(props.newTrueFalse[0].correctOpt===""&&props.newQuiz[0].correctOpt===""){
              setError(true)
              setErrorMessage("Please select a option.to create a quiz.")
      }
          else  if(props.detail.quizType===""||props.detail.timeLimit===""||props.detail.title===""||props.detail.description===""||props.detail.visibility===""||props.detail.category===""||props.detail.creator===""){
                setError(true)
                setErrorMessage("Please add full detail before you can createQuiz.")
            }
else{
 
  setError(false)
}
          setOpen(true);
        };
      
        const handleClose = () => {
          setOpen(false);
        };
      const clickHandler=()=>{
        if(error===true){
            setOpen(false);
        }
        else{
            props.saveHandler();
            setOpen(false);
        }
      }
        return (
          <div>
            <Button variant="outlined" onClick={handleClickOpen} sx={{
                      fontWeight: "bold",
                      textTransform: "capitalize",
                      px: 3,

                      backgroundColor: "#40890F",
                      color: "white",
                      '&:hover': {
                        backgroundColor: '#669900',
                        color:'#ffffff',
                    }
                    }}>
              Save
            </Button>
            <Dialog
              fullScreen={fullScreen}
              open={open}
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">
              {error===true? "This Quiz can't be Create.":"Are you sure to create this quiz."}
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
               {error===true?errorMessage:"Your Quiz is completly filled now you can create this quiz"}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
              {!error&&<Button autoFocus onClick={handleClose} sx={{color:"black", fontWeight: 500,mr:1}}>
                Back to Edit
                </Button>}
               {!error&& <Button onClick={clickHandler} autoFocus variant="contained" sx={{mr:1, fontWeight: "bold",'&:hover': {
                        // backgroundColor: '#669900',
                        color:'#ffffff',
                    }}}  
                 component={Link} to="/">Yes
                </Button>}
                {error&& <Button onClick={clickHandler} autoFocus variant="contained" sx={{ fontWeight: "bold",}}  
                >Ok
                </Button>}
                
              </DialogActions>
            </Dialog>
          </div>
        );
      }

export default SubmitModel