import * as React from "react";
import  {useState} from "react";
import { useSelector,useDispatch} from "react-redux";
import SignUp from "./authpages/SignUp";
import Login from "./authpages/Login";
import { NavLink ,Link} from "react-router-dom";
import {
  setlogoutHandler
} from "../store/auth";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Menu,
  MenuIcon,
  AccountCircle,
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

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }));
// export default function PrimarySearchAppBar() {

const Navbar = () => {
  const dispatch = useDispatch();
  const isLogin= useSelector((state) => state.authData.isLogin);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [signUpOpen, setSignUpOpen] = React.useState(false);
  const [loginOpen, setLoginOpen] = React.useState(false);
  const [isActive,setIsActive]=useState(0);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
  const handleSignUpOpen = () => setSignUpOpen(true);
  const handleSignUpClose = () => setSignUpOpen(false);
  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);
  const handleLogout=()=>{
  localStorage.removeItem('userData')
  dispatch(setlogoutHandler());
  }
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

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
      {/* <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Message</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem> */}
       <MenuItem onClick={handleMenuClose}>Home</MenuItem>
      <MenuItem onClick={handleMenuClose}>Discover</MenuItem>
      <MenuItem onClick={handleMenuClose}>Library</MenuItem>
      <MenuItem onClick={handleMenuClose}>Reports</MenuItem>
    </Menu>
  );
  const handleCloseNavMenu=(ind)=>{
    setIsActive(ind);
  }
  return (
    <>
    <div>
      {/* <Button onClick={handleSignUpOpen}>Open modal</Button> */}
     
       <SignUp openLogin={handleLoginOpen } closeSignup={handleSignUpClose} openSignup={signUpOpen} handleClose={handleSignUpClose}/>
      
     
       <Login openSignup={handleSignUpOpen} closeLogin={handleLoginClose}  openLogin={loginOpen} handleClose={handleLoginClose}/>
    
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
            <MenuIcon  />
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
        
            {pages.map((page,ind) => (
              
               <Button
                  key={ind}
                   onClick={()=>handleCloseNavMenu(ind)}
                  sx={{
                    my: 2,
                   
                    mr: 2,
                    color: "#004d40",
                    fontWeight: "bold",
                    borderBottom: "3 ",
                    textTransform: "capitalize",
                    
                    ...(ind=== isActive && {
                      color:'#ffffff',
                      backgroundColor:'#3C76D2',
                      // color:"#3C76D2",
                      // borderBottom: 3
                    }),
                  
                  }}
                  to={`/${page === "Home" ? "" : page}`}
                  component={Link}
                >
                  {page === "Home" && <HomeOutlinedIcon sx={{ mr: 1 }}  />}
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
          {isLogin&&  <Button
              variant="contained"
              sx={{ fontWeight: "bold", textTransform: "capitalize", px: 5,height:"40px",mt:2 ,
                
                 '&:hover': {
                
                color:'#ffffff',
            },
          }}
              to="/createquiz"
              component={Link}
            >
              <QuizOutlinedIcon />
              Create
            </Button>}
            {!isLogin&&  <Button
            onClick={handleSignUpOpen}
              variant="contained"
            
              sx={{ fontWeight: "bold", textTransform: "capitalize", px: 5,height:"40px",mt:2, 
              '&:hover': {
                color:'#ffffff',
                
               
            },
          }}
              
            >
              Sign up
            </Button>}
            {!isLogin&& <Button
                       onClick={handleLoginOpen }
                 
                  sx={{
                    my: 2,
                    mr: 2,
                    color: "#004d40",
                    fontWeight: "bold",
                    textTransform: "capitalize",
               
                  }}
                  to='/'
                  component={Link}
                >Login</Button>}
                {isLogin&& <Button
                       onClick={handleLogout}
                 
                  sx={{
                    my: 2,
                    mr: 2,
                    color: "#004d40",
                    fontWeight: "bold",
                    textTransform: "capitalize",
               
                  }}
                  to='/'
                  component={Link}
                >Logout</Button>}
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              sx={{ color: "#EFA51C" }}
            >
              <AccountCircle sx={{ fontSize: "30px" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
    </>
  );
}

export default Navbar
