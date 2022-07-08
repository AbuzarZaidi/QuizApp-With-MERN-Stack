import * as React from "react";
import { useState } from "react";
import {useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import {
  updateTitle,
  updateDescription,
  updateVisibility,
  updateCategory,
  updateCreator,
} from "../../../store/quizSummary";
import CoverImage from "./CoverImage";
import {
  Box,
  Button,
  Typography,
  Modal,
  SettingsOutlinedIcon,
  Grid,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  ButtonGroup,
  Select,
  InputLabel,
  MenuItem,
} from "../../../utlis/materialComponents";

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
  // transform: "translate(-100%, -50%)",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
const Container = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: 400,
    left: "45%",
    transform: "translate(-100%, -50%)",
  },
}));
const QuizSummaryModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //handle data
  
  // const imgSrc = useSelector((state) => state.detail.imgSrc);
  const Title = useSelector((state) => state.detail.title);
  const Description = useSelector((state) => state.detail.description);
  const Visibility = useSelector((state) => state.detail.visibility);
  const Creator = useSelector((state) => state.detail.creator);
  const Category = useSelector((state) => state.detail.category);

  const [title, setTitle] = useState(Title);
  const [creator, setCreator] = useState(Creator);
  const [category, setCategory] = useState(Category );
  const [description, setDescription] = useState(Description);
  const [visibility, setVisibility] = useState(Visibility);
  const dispatch = useDispatch();
  const saveInfoHandler = () => {
    dispatch(updateTitle(title));
    dispatch(updateDescription(description));
    dispatch(updateVisibility(visibility));
    dispatch(updateCategory(category));
    dispatch(updateCreator(creator));

    handleClose();
  };
  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };
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
        <Container sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h4">
            Quiz Summary
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={7}>
                <Box sx={{ mt: 3 }}>
                  <Typography variant="h6" component="h6" gutterBottom>
                    Title
                  </Typography>
                  <TextField
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    id="outlined-basic"
                    label="Enter Quiz Title Here"
                    variant="outlined"
                    sx={{ width: 300 }}
                  />
                </Box>
                <Box sx={{ mt: 3 }}>
                  <Typography variant="h6" component="h6" gutterBottom>
                    Description (optional)
                  </Typography>
                  <TextField
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    id="outlined-multiline-static"
                    label="Quiz Description"
                    multiline
                    rows={4}
                    sx={{ width: 300 }}
                  />
                </Box>
                <Box sx={{ mt: 3 }}>
                  <Typography variant="h6" component="h6" gutterBottom>
                    Creator
                  </Typography>
                  <TextField
                    value={creator}
                    onChange={(e) => setCreator(e.target.value)}
                    id="outlined-basic"
                    label="Enter Creator Name Here."
                    variant="outlined"
                    sx={{ width: 300 }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box sx={{ mt: 3 }}>
                  <Typography variant="h6" component="h6" gutterBottom>
                    Cover Image
                  </Typography>
                  <CoverImage id="image" errorText="Please provide an image."/>
                  <Typography
                    variant="h6"
                    component="h6"
                    gutterBottom
                    sx={{ mt: 2 }}
                  >
                    Visibility
                  </Typography>
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                       value={visibility}
                    >
                      <FormControlLabel
                         value="private"
                        control={<Radio />}
                        label="Private"
                        onClick={() => {
                          setVisibility("private");
                        }}
                      />
                      <FormControlLabel
                        onClick={() => {
                          setVisibility("public");
                        }}
                        value="public"
                        control={<Radio />}
                        label="Public"
                      />
                    </RadioGroup>
                  </FormControl>
                  <Box sx={{ minWidth: 120, mb: 2 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Category
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        label="Category"
                        onChange={handleChangeCategory}
                      >
                        <MenuItem value={"education"}>Education</MenuItem>
                        <MenuItem value={"entertainment"}>
                          Entertainment
                        </MenuItem>
                        <MenuItem value={"sports"}>Sports</MenuItem>
                        <MenuItem value={"technical"}>Technival</MenuItem>
                        <MenuItem value={"programming"}>Programming</MenuItem>
                        <MenuItem value={"generalknowledge"}>
                          General Knowledge
                        </MenuItem>
                        <MenuItem value={"interviewquestions"}>
                          Interview Questions
                        </MenuItem>
                        <MenuItem value={"other"}>other</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              display: "flex",

              justifyContent: "center",
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
                onClick={handleClose}
              >
                Cancel
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
                  onClick={saveInfoHandler}
                >
                  Done
                </Button>
              </ButtonHover>
            </ButtonGroup>
          </Box>
        </Container>
      </Modal>
    </div>
  );
};
export default QuizSummaryModal;
