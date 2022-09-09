import * as React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SignUp from "./authpages/SignUp";
import Login from "./authpages/Login";
import { Link } from "react-router-dom";
import { setlogoutHandler,setSignupHandler } from "../store/auth";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Menu,
  MenuIcon,
  // AccountCircle,
  Button,
  HomeOutlinedIcon,
  ExploreOutlinedIcon,
  ListOutlinedIcon,
  LeaderboardOutlinedIcon,
  QuizOutlinedIcon,
} from "../utlis/materialComponents";
import { styled, alpha } from "@mui/material/styles";
import Logo from "../logo1.png";

const pages = ["Home", "Discover", "Library", "Reports"];
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("md")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
const Navbar = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.authData.isLogin);
  const signupOpen = useSelector((state) => state.authData.signupOpen);
  const active = useSelector((state) => state.authData.active);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [signUpOpen, setSignUpOpen] = React.useState(signupOpen);
  const [loginOpen, setLoginOpen] = React.useState(false);
  const [isActive, setIsActive] = useState(active);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  useEffect(() => {
    setIsActive(active);
    setSignUpOpen(signupOpen);
  }, [active,signupOpen]);

  const handleSignUpOpen = () => {
    setSignUpOpen(true);
    setIsActive("");
  };
  const handleSignUpClose = () => {
    setSignUpOpen(false);
    setIsActive("");
    dispatch(setSignupHandler(false));
  };
  const handleLoginOpen = () => {
    setLoginOpen(true);
    setIsActive("");
  };
  const handleLoginClose = () => {
    setLoginOpen(false);
    setIsActive(0);
  };
  const handleLogout = () => {
    localStorage.removeItem("userData");
    dispatch(setlogoutHandler());
    setIsActive(0);
  };
  // const handleProfileMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {isLogin && (
        <MenuItem onClick={handleMenuClose} to="/createquiz" component={Link}>
          <Button variant="contained">CreateQuiz</Button>
        </MenuItem>
      )}
      {isLogin && (
        <MenuItem onClick={handleMenuClose} to="/" component={Link}>
          Home
        </MenuItem>
      )}
      {isLogin && (
        <MenuItem onClick={handleMenuClose} to="/Discover" component={Link}>
          Discover
        </MenuItem>
      )}
      {isLogin && (
        <MenuItem onClick={handleMenuClose} to="/Library" component={Link}>
          Library
        </MenuItem>
      )}
      {isLogin && (
        <MenuItem onClick={handleMenuClose} to="/Reports" component={Link}>
          Reports
        </MenuItem>
      )}

      {isLogin && (
        <MenuItem
          onClick={() => {
            handleMenuClose();
            handleLogout();
          }}
          to="/"
          component={Link}
        >
          Login Out
        </MenuItem>
      )}
      {!isLogin && (
        <MenuItem
          onClick={() => {
            handleMenuClose();
            handleLoginOpen();
          }}
          to="/"
          component={Link}
        >
          Login
        </MenuItem>
      )}
      {!isLogin && (
        <MenuItem
          onClick={() => {
            handleMenuClose();
            handleSignUpOpen();
          }}
          to="/"
          component={Link}
        >
          SignUp
        </MenuItem>
      )}
    </Menu>
  );
  const handleCloseNavMenu = (ind) => {
    setIsActive(ind);
  };
  return (
    <>
      <div>
        <SignUp
          openLogin={handleLoginOpen}
          closeSignup={handleSignUpClose}
          openSignup={signUpOpen}
          handleClose={handleSignUpClose}
        />

        <Login
          openSignup={handleSignUpOpen}
          closeLogin={handleLoginClose}
          openLogin={loginOpen}
          handleClose={handleLoginClose}
        />
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ bgcolor: "background.paper", color: "#46178F" }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2, display: { xs: "flex", md: "none" } }}
              onClick={handleMobileMenuOpen}
            >
              <MenuIcon />
            </IconButton>

            <Search>
              <Typography
                variant="h6"
                noWrap
                // component="div"
                sx={{ fontWeight: "bold", textTransform: "capitalize" }}
                to="/"
                component={Link}
              >
                <img
                  src={Logo}
                  alt="Logo.png"
                  style={{ height: "70px", width: "100px" }}
                />
                {/* Quiz World */}
              </Typography>
            </Search>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              {isLogin &&
                pages.map((page, ind) => (
                  <Button
                    key={ind}
                    onClick={() => handleCloseNavMenu(ind)}
                    sx={{
                      my: 2,

                      mr: 2,
                      color: "#004d40",
                      fontWeight: "bold",
                      borderBottom: "3 ",
                      textTransform: "capitalize",

                      ...(ind === isActive && {
                        color: "#3C76D2",
                        borderBottom: 3,
                      }),
                    }}
                    to={`/${page === "Home" ? "" : page}`}
                    component={Link}
                  >
                    {page === "Home" && <HomeOutlinedIcon sx={{ mr: 1 }} />}
                    {page === "Discover" && (
                      <ExploreOutlinedIcon sx={{ mr: 1 }} />
                    )}
                    {page === "Library" && <ListOutlinedIcon sx={{ mr: 1 }} />}
                    {page === "Reports" && (
                      <LeaderboardOutlinedIcon sx={{ mr: 1 }} />
                    )}
                    {page}
                  </Button>
                ))}
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {!isLogin && (
                <Button
                  sx={{
                    my: 2,

                    mr: 2,

                    fontWeight: "bold",

                    textTransform: "capitalize",

                    color: "#3C76D2",
                    borderBottom: 3,
                  }}
                  to={"/"}
                  component={Link}
                >
                  <HomeOutlinedIcon sx={{ mr: 1 }} />
                  Home
                </Button>
              )}
              {isLogin && (
                <Button
                  onClick={() => setIsActive(9)}
                  variant="contained"
                  sx={{
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    px: 5,
                    height: "40px",
                    mt: 2,

                    "&:hover": {
                      color: "#ffffff",
                    },
                  }}
                  to="/createquiz"
                  component={Link}
                >
                  <QuizOutlinedIcon />
                  Create
                </Button>
              )}
              {!isLogin && (
                <Button
                  onClick={handleSignUpOpen}
                  variant="contained"
                  sx={{
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    px: 5,
                    height: "40px",
                    mt: 2,
                    "&:hover": {
                      color: "#ffffff",
                    },
                  }}
                >
                  Sign up
                </Button>
              )}
              {!isLogin && (
                <Button
                  onClick={handleLoginOpen}
                  sx={{
                    my: 2,
                    mr: 2,
                    color: "#004d40",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                  to="/"
                  component={Link}
                >
                  Login
                </Button>
              )}
              {isLogin && (
                <Button
                  onClick={handleLogout}
                  sx={{
                    my: 2,
                    mr: 2,
                    color: "#004d40",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                  to="/"
                  component={Link}
                >
                  Logout
                </Button>
              )}
              {/* <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                sx={{ color: "#EFA51C" }}
              >
                <AccountCircle sx={{ fontSize: "30px" }} />
              </IconButton> */}
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </>
  );
};

export default Navbar;
