import React from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    // padding: theme.spacing(1),
    textAlign: "center",
    fontColor: "white",
  
    // color: theme.palette.text.secondary,
  }));
const Quiz = () => {
  return (
   <>
    <Box
            component="form"
            sx={{
              // width: 500,
              maxWidth: "98%",
              bgcolor: "#fff",
              mt: 6,

              borderRadius: 2,
            }}
            noValidate
            autoComplete="off"
          >
            <Typography>
              <TextField
                fullWidth
                id="outlined-basic"
                placeholder="start typing your question"
                InputProps={{
                  disableUnderline: true,
                }}
                variant="standard"
                sx={{
                  p: 1,
                  borderRadius: "40px",
                  input: { textAlign: "center", fontSize: "20px" },
                }}
              />
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, mt: 6,mr:5 }}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Item>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Item>
                      {" "}
                      <Box
                        sx={{
                          width: "40px",
                          height: "109px",
                          backgroundColor: "#E22D3B",
                        }}
                      ></Box>
                    </Item>
                    <Item>
                      {" "}
                      <TextField
                        // fullWidth
                        placeholder="Add answer 1"
                        id="fullWidth"
                        variant="standard"
                        // multiline
                        sx={{
                          // p: 1.5,
                          input: { width: "356px", height: "100px" },

                          display: "flex",

                          pl: 2,
                          justifyContent: "center",
                        }}
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                    </Item>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Item>
                      {" "}
                      <Box
                        sx={{
                          width: "40px",
                          height: "109px",
                          backgroundColor: "#3668CE",
                        }}
                      ></Box>
                    </Item>
                    <Item>
                      {" "}
                      <TextField
                        // fullWidth
                        placeholder="Add answer 2"
                        id="fullWidth"
                        variant="standard"
                        sx={{
                          input: { width: "356px", height: "100px" },
                          pl: 2,
                          display: "flex",

                          justifyContent: "center",
                        }}
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                    </Item>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Item>
                      {" "}
                      <Box
                        sx={{
                          width: "40px",
                          height: "109px",
                          backgroundColor: "#D89E14",
                        }}
                      ></Box>
                    </Item>
                    <Item>
                      {" "}
                      <TextField
                        // fullWidth
                        placeholder="Add answer 3"
                        id="fullWidth"
                        variant="standard"
                        sx={{
                          input: { width: "356px", height: "100px" },
                          pl: 2,
                          display: "flex",

                          justifyContent: "center",
                        }}
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                    </Item>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Item>
                      {" "}
                      <Box
                        sx={{
                          width: "40px",
                          height: "109px",
                          backgroundColor: "#40890F",
                        }}
                      ></Box>
                    </Item>
                    <Item>
                      {" "}
                      <TextField
                        // fullWidth
                        placeholder="Add answer 4"
                        id="fullWidth"
                        variant="standard"
                        sx={{
                          input: { width: "356px", height: "100px" },
                          pl: 2,
                          display: "flex",

                          justifyContent: "center",
                        }}
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                    </Item>
                  </Box>
                </Item>
              </Grid>
            </Grid>
          </Box>
 
   </>
  )
}

export default Quiz