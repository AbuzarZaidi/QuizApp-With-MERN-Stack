import React from "react";
import TopPicks from "../components/home/TopPicks";
import { styled } from "@mui/material/styles";
import {
  Box,
  Paper,
  Card,
  CardContent,
  Typography,
  Button,
  Divider,
} from "../utlis/materialComponents";
const Cards = styled("Box")(({ theme }) => ({
  padding: theme.spacing(1),

  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "center",
    mt: 3,
    mb: 3,
    flexWrap: "wrap",
    flexDirection: "column",
    textAlign: "center",
  },
}));
const Image = styled("Box")(({ theme }) => ({
  padding: theme.spacing(1),

  [theme.breakpoints.down("md")]: {
   display:"none",
  },
}));
const HeroSection = styled("Box")(({ theme }) => ({
  padding: theme.spacing(1),

  [theme.breakpoints.down("md")]: {
    textAlign:"center"
  },
}));
const Home = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <HeroSection>
        <Box>
          <Typography
            variant="h4"
            gutterBottom
            component="div"
            sx={{ color: "#3771A5" }}
          >
            Create A Free
          </Typography>

          <Typography
            variant="h3"
            gutterBottom
            component="div"
            sx={{ color: "#3771A5" }}
          >
            Quiz Now
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            component="div"
            sx={{ color: "#3771A5", mb: 3 }}
          >
            Create your first course and assign it to learners. <br />
            Track progress with detailed reports, send reminders, <br />
            and edit content to match learners' needs.
          </Typography>
          <Button
            variant="contained"
            sx={{
              mr: 2,
              width: "40%",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            SignUp
          </Button>
          <Button
            variant="outlined"
            sx={{
              width: "40%",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            Discover
          </Button>
        </Box>
        </HeroSection>
        <Image>
        <img
          src={"/images/Header2Img.png"}
          alt=""
          // height="100px"
          style={{ filter: "drop-shadow(15px 5px 1px #bee0ec)" }}
        />
       </Image>
      </Box>

      <Box>
        <Cards
          sx={{ display: "flex", justifyContent: "space-around", mt: 3, mb: 3 }}
        >
          <Card sx={{ minWidth: 275,mb:2 }}>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <img
                src={"/icons/writing.png"}
                alt=""
                height="50px"
                width="50px"
              />
            </Box>
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  color: "#3668CE",
                }}
              >
                Easy Quiz Creation
              </Typography>

              <Typography variant="body2">
                Here You can create free gamified quizzes
              </Typography>
              <Typography variant="body2">
                for your students to check their knowledge
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{ minWidth: 275, backgroundColor: "#3668CE", color: "white" }}
          >
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <img src={"/icons/goal.png"} alt="" height="50px" width="50px" />
            </Box>
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{ display: "flex", justifyContent: "center" }}
              >
                Easy Quiz Creation
              </Typography>

              <Typography variant="body2">
                Here You can find different type of
              </Typography>
              <Typography variant="body2">
                quizes according to your taste.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 275 }}>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <img
                src={"/icons/clipboard.png"}
                alt=""
                height="50px"
                width="50px"
              />
            </Box>
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  color: "#3668CE",
                }}
              >
                Mange with the results
              </Typography>

              <Typography variant="body2">
                You can also Track record of your Quiz
              </Typography>
              <Typography variant="body2">
                Like how much students takes your
              </Typography>
              <Typography variant="body2">
                quizes and how scores the most
              </Typography>
            </CardContent>
          </Card>
        </Cards>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          mb: 4,
          "& > :not(style)": {
            m: 1,
            width: 632,
            height: 480,
          },
        }}
      >
        <Paper elevation={3}>
          <Typography
            variant="h6"
            gutterBottom
            component="div"
            sx={{ ml: 3, mt: 1, fontWeight: "bold" }}
          >
            Top picks
          </Typography>
          <Divider />
          <TopPicks
            title={"World History"}
            creator={"william wordsworth"}
            play={1.5}
          />
          <TopPicks title={"Science Knowledge"} creator={"James"} play={1.2} />
          <TopPicks title={"future Technology"} creator={"Harry"} play={1.1} />

          <Typography
            variant="body1"
            gutterBottom
            component="div"
            sx={{
              ml: 3,
              mt: 1,
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
            }}
          >
            More awesomeness awaits! Search millions of quizes on any topic
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Button
              variant="contained"
              sx={{ fontWeight: "bold", textTransform: "capitalize" }}
            >
              Discover Now
            </Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Home;
