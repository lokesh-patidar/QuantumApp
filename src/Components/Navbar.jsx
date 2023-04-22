import React, { useState } from "react";
import "../Styles//Navbar.css";
import { Link } from "react-scroll";
import Quantum_Logo from "../assets/Quantum_Logo.avif";
import { Box } from "@chakra-ui/react";
import { MenuDrawer } from "../Drawers/MenuDrawer";
import {HiMoon} from "react-icons/hi";
import {FaSun} from "react-icons/fa";
import SignUpLogin from "../Modals/SignUpLogin";

const Navbar = ({toggleTheme, theme}) => {

  const [isLogo, setIsLogo] = useState(true);

  const handleToggleLogo = () => {
    setIsLogo(prev => !prev);
  };

  const handleToggle = () => {
    toggleTheme();
  }

  return (
    <>
      <Box className="navbarContainer" bg={theme ? "white" : "#1a0114"}>
        <Box className="logo">
          {isLogo? <img width="80%" src={Quantum_Logo} alt="logo" /> : <></>}
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
              {theme ? <FaSun/> : <HiMoon/> }
          </Box>
        </Box>
        <Box className="nav2" >
          <MenuDrawer onclickevent={handleToggleLogo}/>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
