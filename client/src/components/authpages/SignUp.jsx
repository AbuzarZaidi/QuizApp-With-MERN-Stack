import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  TextField,
  Button,
  Modal,
} from "../../utlis/materialComponents";
const { signup } = require("../../functions/users");

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
const Container = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {

    width: 450,

  },
  [theme.breakpoints.down("md")]: {

    width: "90%",

  },
}));
const SignUp = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const registerUserHandler = async () => {
    if (name && email && password) {
      const user = {
        name,
        email,
        password,
      };
      const data = await signup(user);

      if (data.response) {
        if (data.response.status === 422) {
          setShowError(true);
          setErrorMessage(data.response.data.error);
          setTimeout(() => {
            setShowError(false);
          }, 2000);
        }
      } else {
        props.closeSignup();
        props.openLogin();
      }
    } else {
      setShowError(true);
      setErrorMessage("Please Fill The Form.");
      setTimeout(() => {
        setShowError(false);
      }, 2000);
    }
  };
  return (
    <Modal
      open={props.openSignup}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h4"
          component="h4"
          sx={{ display: "flex", justifyContent: "center", mb: 4 }}
        >
          Create an account
        </Typography>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h6"
          sx={{ fontWeight: 500, mt: 2 }}
        >
          Username
        </Typography>

        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          sx={{ width: "95%" }}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h6"
          sx={{ fontWeight: 500, mt: 2 }}
        >
          Email
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{ fontWeight: "regular", color: "#686868", fontSize: 12 }}
        >
          Emails are collected only for password resets and are one-way hashed
          at time of collection
        </Typography>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          sx={{ width: "95%" }}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Typography id="outlined-basic" variant="h6" component="h6" sx={{ fontWeight: 500, mt: 2 }}>
          Password
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{ fontWeight: "regular", color: "#686868", fontSize: 12 }}
        >
          Password should contain atleast 6 character
        </Typography>
        <TextField
          id="outlined-password-input"
          type="password"
          autoComplete="current-password"
          label="Password"
          variant="outlined"
          sx={{ width: "95%" }}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          variant="contained"
          sx={{ mt: 3, width: "95%" }}
          onClick={registerUserHandler}
        >
          Signup
        </Button>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {showError && (
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                fontWeight: "regular",
                color: "#EB4747",
                fontSize: 16,
                mt: 1,
              }}
            >
              {errorMessage}
            </Typography>
          )}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontWeight: "regular",
              color: "#686868",
              fontSize: 16,
              mt: 1,
            }}
          >
            Don't Have an account?
          </Typography>
          <Button
            variant="text"
            sx={{ textTransform: "capitalize" }}
            onClick={() => {
              props.openLogin();
              props.closeSignup();
            }}
          >
            Login
          </Button>
        </Box>
      </Container>
    </Modal>
  );
};

export default SignUp;
