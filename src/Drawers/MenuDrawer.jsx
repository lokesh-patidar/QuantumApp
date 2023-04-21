import { Box, Drawer, DrawerBody, Image, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from "@chakra-ui/react"
import React, { useEffect } from "react";
import { TfiMenu } from "react-icons/tfi";
import { Link } from "react-scroll";
import { RxCross2 } from "react-icons/rx";
import Quantum_Logo from "../assets/Quantum_Logo.avif";

const MenuDrawer = ({ onclickevent }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const openDrawer = () => {
        onclickevent();
        onOpen();
    }

    const closeDrawer = () => {
        onclickevent();
        onClose();
    }

    useEffect(() => {
        if (window.innerWidth > 800) {
            onClose();
            console.log(window.innerWidth);
        }
    },[window.innerWidth]);

    return (
        <Box>
            <Box>
                {
                    !isOpen ? (
                        <Box ref={btnRef} onClick={() => openDrawer()}><TfiMenu /></Box>
                    ) : (
                        <Box onClick={() => closeDrawer()}><RxCross2 fontSize="150%" /></Box>
                    )
                }
            </Box>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader pt="4%" pl="4%">
                        <Image width="20%" src={Quantum_Logo} alt="logo" />
                    </DrawerHeader>
                    <DrawerBody>
                        <Box width="100%" bg="white" display="flex" pl="4%" pt="3%">
                            <Box display="flex" flexDirection="column">
                                <Box pt="2%" className="childItem">
                                    <Link onClick={() => closeDrawer()} smooth spy to="home">Home </Link>
                                </Box>
                                <Box pt="7%" className="childItem">
                                    <Link onClick={() => closeDrawer()} smooth spy to="home">About</Link>
                                </Box>
                                <Box pt="7%" className="childItem">
                                    <Link onClick={() => closeDrawer()} smooth spy to="home">Our Projects</Link>
                                </Box>
                                <Box pt="7%" className="childItem">
                                    <Link onClick={() => closeDrawer()} smooth spy to="home">Customers</Link>
                                </Box>
                                <Box pt="7%" className="childItem">
                                    <Link onClick={() => closeDrawer()} smooth spy to="home">Contact </Link>
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