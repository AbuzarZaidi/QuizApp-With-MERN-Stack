import React, { useRef, useState, useEffect } from 'react';
import {
    Box,
    Button,
    Paper,
  } from "../../../utlis/materialComponents";
  const styles = {
    paperContainer: {
    //   backgroundImage: `url(images/background.jpg)`,
      height: 194,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  };
const CoverImage = (props) => {
    const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);

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
  const pickedHandler = event => {
    let pickedFile;
    let fileIsValid = isValid;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    props.onInput(props.id, pickedFile, fileIsValid);
  };

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };
  return (
    <Paper style={styles.paperContainer} sx={{backgroundImage:`url(${previewUrl})`,backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    // backgroundSize: 'auto',
    backgroundSize: '297px 209px',
    }}>
    <Box>
    {/* <img src={previewUrl} alt="Preview" /> */}
    <input
        id={props.id}
        ref={filePickerRef}
        style={{ display: 'none' }}
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
  )
}

export default CoverImage