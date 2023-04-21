import { Box, Image } from '@chakra-ui/react';
import '../Styles/Home.css';
import Typical from "react-typical";
import Quantum_Logo from "../assets/Quantum_Logo.avif";
import background from "../assets/background.png";

const HomePage = () => {
    return (
        <Box id='Home' height={{base: "500px", sm:"700px", md:"1000px", lg: "1300px", xl:"1500px"}} alignContent="logo" backgroundImage={background} backgroundRepeat="no-repeat" backgroundSize="cover" backgroundPosition="center">
            <Box height="100%" display="flex" flexDir="column" justifyContent="center" alignItems="center">
                <Box display="flex" justifyContent="center" alignItems="center" fontSize="500%">
                    Company Website
                </Box>
                <Box width="30%" fontSize={{base: "100%"}} textAlign="center" mt={10}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry
                </Box>
            </Box>
        </Box>
    );
}

export default HomePage;