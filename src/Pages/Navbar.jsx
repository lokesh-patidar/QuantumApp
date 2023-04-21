import React, { useState } from "react";
import "../Styles//Navbar.css";
import { Link } from "react-scroll";
import Quantum_Logo from "../assets/Quantum_Logo.avif";
import { Box } from "@chakra-ui/react";
import { TfiMenu } from "react-icons/tfi";

const Navbar = () => {

  return (
    <>
      <Box className="navbarContainer">
        <Box className="logo">
          <img width="80%" src={Quantum_Logo} alt="" />
        </Box>
        <Box display={{ base: "none", sm: "none", md: "flex", lg: "flex", xl: "flex" }} className="nav">
          <Box>
            <a>
              <Link>Home </Link>
            </a>
          </Box>
          <Box>
            <a>
              <Link>
                About Us
              </Link>
            </a>
          </Box>
          <Box>
            <a>
              <Link>Our Projects</Link>
            </a>
          </Box>
          <Box>
            <a>
              <Link>Customers</Link>
            </a>
          </Box>
          <Box>
            <a>
              <Link>Contact </Link>
            </a>
          </Box>
        </Box>
        <Box display={{ base: "flex", sm: "flex", md: "none", lg: "none", xl: "none" }}>
          <TfiMenu />
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
