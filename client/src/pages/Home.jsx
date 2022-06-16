import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
const Input = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  mt: 3,
  width: "70%",
  color: theme.palette.text.secondary,
}));
const Home = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#7b1fa2",
          color: "#ffffff",
          width: "100px",
          height: "100px",
          borderRadius: "55%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 2,
          ml:1
        }}
      >
        {" "}
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ fontWeight: "bold", mt: 2, fontSize: 32 }}
        >
          23{" "}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Input>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "#000000",
              fontWeight: "bold",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            explicabo dolor ut soluta laboriosam rem, sapiente maiores sit alias
            ipsum!
          </Typography>
        </Input>
      </Box>
    </>
  );
};

export default Home;
