import { useState } from "react";
import { AboutUs } from "../Components/AboutUs";
import Footer from "../Components/FooterPage";
import HomePage from "../Components/HomePage";
import { Box } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";

const MainPage = () => {

    const [theme, setTheme] = useState(true);

    const changeTheme = () => {
        setTheme(prev => !prev);
    }

    return (
        <Box bg={theme? "white" : "black"}>
            <Navbar toggleTheme={changeTheme} theme={theme} />
            <section id="home">
                <HomePage theme={theme} />
            </section>
            <section id="aboutus">
                <AboutUs />
            </section>
            <section id="contact">
                <Footer />
            </section>
        </Box>
    );
};

export { MainPage }