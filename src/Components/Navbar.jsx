import React, { useEffect, useState } from "react";
import "../Styles//Navbar.css";
import { Link } from "react-scroll";
import Quantum_Logo from "../assets/Quantum_Logo.avif";
import { Box, Button } from "@chakra-ui/react";
import { MenuDrawer } from "../Drawers/MenuDrawer";
import { HiMoon } from "react-icons/hi";
import { FaSun } from "react-icons/fa";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import useAuth from "../useAuth";
import { userlogout } from "../Redux/AuthReducer/action";
import { useDispatch } from "react-redux";


const Navbar = ({ toggleTheme, theme }) => {

  const [isLogo, setIsLogo] = useState(true);
  const dispatch = useDispatch();
  const currentUser = useAuth();

  const handleToggleLogo = () => {
    setIsLogo(prev => !prev);
  };

  const handleToggle = () => {
    toggleTheme();
  }

  const logout=() =>{
    if(currentUser){
        dispatch(userlogout());
    }
}

  console.log(currentUser?.email);

  return (
    <>
      <Box className="navbarContainer" bg={theme ? "white" : "#1a0114"}>
        <Box className="logo">
          {isLogo ? <img width="80%" src={Quantum_Logo} alt="logo" /> : <></>}
        </Box>
        <Box className="nav" color={theme ? "black" : "white"}>
          <Box className="childItem">
            <Link smooth spy to="home">Home </Link>
          </Box>
          <Box className="childItem">
            <Link smooth spy to="home">
              About Us
            </Link>
          </Box>
          <Box className="childItem">
            <Link smooth spy to="home">Our Projects</Link>
          </Box>
          <Box className="childItem">
            <Link smooth spy to="home">Customers</Link>
          </Box>
          <Box className="childItem">
            <Link smooth spy to="contact">Contact </Link>
          </Box>
          <Box className="childItem" onClick={() => handleToggle()}>
            {theme ? <FaSun /> : <HiMoon />}
          </Box>
          <Box fontWeight="bold">{currentUser?.email.substring(0,currentUser.email.indexOf("@"))}</Box>
          <Button onClick={logout}>Logout</Button>
        </Box>
        <Box className="nav2" >
          <Box className="childItem" onClick={() => handleToggle()} marginRight={5}>
            {theme ? <FaSun className={theme ? "darkColor" : "lightColor"} fontSize="70%"/> : <HiMoon className={theme ? "darkColor" : "lightColor"} fontSize="70%"/>}
          </Box>
          <MenuDrawer onclickevent={handleToggleLogo} theme={theme}/>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
