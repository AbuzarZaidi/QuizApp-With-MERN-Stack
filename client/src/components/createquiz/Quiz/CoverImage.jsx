import React, { useRef, useState, useEffect,useContext } from "react";
import { useDispatch } from "react-redux";
// import { updateImgSrc } from "../../../store/quizSummary";
import ImageContext from '../../../contextapi/ImageContext'
import { Box, Button, Paper } from "../../../utlis/materialComponents";
const styles = {
  paperContainer: {
    height: 194,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};
const CoverImage = (props) => {
  // const dispatch = useDispatch();
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);
  const context = useContext(ImageContext);
  const { image,setImage } = context;
  const filePickerRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);
  const pickedHandler = (event) => {
    let pickedFile;
    let fileIsValid = isValid;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setImage(pickedFile)
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
      console.log(fileIsValid);
    }
  };

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };
  return (
    <Paper
      style={styles.paperContainer}
      sx={{
        backgroundImage: `url(${previewUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "297px 209px",
      }}
    >
      <Box>
        <input
          id={props.id}
          ref={filePickerRef}
          style={{ display: "none" }}
          type="file"
          accept=".jpg,.png,.jpeg"
          onChange={pickedHandler}
        />
        <Button
          variant="contained"
          sx={{
            fontWeight: "bold",
            textTransform: "capitalize",
            px: 2,
            py: 1,
          }}
          onClick={pickImageHandler}
        >
          Change
        </Button>
      </Box>
    </Paper>
  );
};

export default CoverImage;
