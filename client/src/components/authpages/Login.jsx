import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setTokenHandler, setIdHandler } from "../../store/auth";
import {
  Box,
  Typography,
  TextField,
  Button,
  Modal,
} from "../../utlis/materialComponents";
const { login } = require("../../functions/users");
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
const Login = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userLoginHandler = async () => {
    const user = {
      email,
      password,
    };
    console.log("page");
    console.log(user);
    const result = await login(user);
    dispatch(setTokenHandler(result.token));
    dispatch(setIdHandler(result.userId));
    const tokenExpirationDate = new Date(new Date().getTime() + 1000 * 60 * 60);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        token: result.token,
        userId: result.userId,
        expiration: tokenExpirationDate.toISOString(),
      })
    );
    props.closeLogin();
  };
  return (
    <Modal
      open={props.openLogin}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h4"
          component="h4"
          sx={{ display: "flex", justifyContent: "center", mb: 4 }}
        >
          Log In
        </Typography>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h6"
          sx={{ fontWeight: 500 }}
        >
          Email
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
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h6"
          sx={{ fontWeight: 500, mt: 2 }}
        >
          Password
        </Typography>

        <TextField
          id="outlined-basic"
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
          onClick={userLoginHandler}
        >
          Login
        </Button>
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
            Already Have Account?
          </Typography>
          <Button
            variant="text"
            sx={{ textTransform: "capitalize" }}
            onClick={() => {
              props.openSignup();
              props.closeLogin();
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default Login;
