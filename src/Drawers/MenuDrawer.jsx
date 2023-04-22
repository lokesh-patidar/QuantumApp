import { Box,Button, Drawer, DrawerBody, Image, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from "@chakra-ui/react"
import React from "react";
import { TfiMenu } from "react-icons/tfi";
import { Link } from "react-scroll";
import { RxCross2 } from "react-icons/rx";
import Quantum_Logo from "../assets/Quantum_Logo.avif";
import { userlogout } from "../Redux/AuthReducer/action";
import { useDispatch } from "react-redux";
import useAuth from "../useAuth";

const MenuDrawer = ({ onclickevent, theme }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const dispatch = useDispatch();
    const currentUser = useAuth();

    const openDrawer = () => {
        onclickevent();
        onOpen();
    }

    const closeDrawer = () => {
        onclickevent();
        onClose();
    }

    const logout = () => {
        if (currentUser) {
          dispatch(userlogout());
        }
    }

    return (
        <Box>
            <Box>
                {
                    !isOpen ? (
                        <Box ref={btnRef} onClick={() => openDrawer()}><TfiMenu className={theme ? "darkColor" : "lightColor"} /></Box>
                    ) : (
                        <Box onClick={() => closeDrawer()}><RxCross2 className={theme ? "darkColor" : "lightColor"} fontSize="150%" /></Box>
                    )
                }
            </Box>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                size={"xl"}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent bg={theme ? "white" : "black"}>
                    <DrawerHeader pt="4%" pl="4%" display="flex" justifyContent={"space-between"}>
                        <Image width="20%" src={Quantum_Logo} alt="logo" />
                        <Box onClick={() => closeDrawer()}><RxCross2 className={theme ? "darkColor" : "lightColor"} fontSize="200%" /></Box>
                    </DrawerHeader>
                    <DrawerBody bg={theme ? "white" : "black"}>
                        <Box width="100%" bg={theme ? "white" : "black"} color={theme ? "black" : "white"} display="flex" pl="4%" pt="3%">
                            <Box display="flex" flexDirection="column">
                                <Box pt="2%" className="childItem">
                                    <Link onClick={() => closeDrawer()} smooth spy to="home">Home </Link>
                                </Box>
                                <Box pt="7%" className="childItem">
                                    <Link onClick={() => closeDrawer()} smooth spy to="aboutus">About</Link>
                                </Box>
                                <Box pt="7%" className="childItem">
                                    <Link onClick={() => closeDrawer()} smooth spy to="project">Our Projects</Link>
                                </Box>
                                
                                <Box pt="7%" className="childItem">
                                    <Link onClick={() => closeDrawer()} smooth spy to="contact">Contact</Link>
                                </Box>
                                <Box className="childItem">
                                    <Button mt={5} colorScheme="teal" onClick={logout}>Logout</Button>
                                </Box>
                            </Box>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

export { MenuDrawer };