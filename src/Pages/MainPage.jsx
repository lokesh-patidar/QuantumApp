import { useState } from "react";
import { AboutUs } from "../Components/AboutUs";
import Footer from "../Components/FooterPage";
import HomePage from "../Components/HomePage";
import { Box } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import { Projects } from "../Components/Projects";

const MainPage = () => {

    const [theme, setTheme] = useState(true);

    const changeTheme = () => {
        setTheme(prev => !prev);
    }

    return (
        <Box bg={theme? "white" : "black"}>
            <Navbar toggleTheme={changeTheme} theme={theme} />
            <hr/>
            <section id="home">
                <HomePage theme={theme} />
            </section>
            <hr/>
            <section id="aboutus">
                <AboutUs theme={theme}/>
            </section>
            <hr/>
            <section id="project">
                <Projects theme={theme}/>
            </section>
            <hr/>
            <section id="contact">
                <Footer theme={theme}/>
            </section>
        </Box>
    );
};

export { MainPage }