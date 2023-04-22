import { Box, Text, Image, Button } from "@chakra-ui/react";
import webimg from "../assets/web.png";
import appimg from "../assets/banner3.png";

const AboutUs = ({ theme }) => {
    return (
        <Box id="aboutus" mt={5}>
            <Text fontWeight="bold" display="flex" justifyContent="center" alignItems="center" fontSize="200%" color={theme ? "black" : "white"}>About Us</Text>
            <Text width={{ base: "80%" }} fontSize={{ base: "130%" }} fontWeight="500" color={theme ? "blue.700" : "orange.500"} margin="auto" display="flex" justifyContent="center" alignItems="center" textAlign="center" mt={2} mb={2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
            <Text width={{ base: "80%" }} margin="auto" display="flex" justifyContent="center" alignItems="center" fontSize="100%" textAlign="center" color={theme ? "black" : "white"} mb={10}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</Text>
            <Box mt={5}>
                <Box width="90%" margin="auto" display="flex" flexDir={{ base: "column", sm: "column", md: "row", lg: "row", xl: "row" }}>
                    <Box padding={3} w={{ base: "100%", sm: "100%", md: "50%", lg: "50%", xl: "50%" }} display="flex" justifyContent="center" alignItems="center" borderRight="2px solid gray" borderBottom="2px solid gray">
                        <Image width={{ base: "70%", sm: "70%", md: "100%", lg: "100%", xl: "100%" }} src={webimg} alt="web" />
                    </Box>
                    <Box w={{ base: "100%", sm: "100%", md: "50%", lg: "50%", xl: "50%" }} padding="5%" mt={3}>
                        <Text fontSize={{ base: "130%" }} fontWeight="bold" color={theme ? "black" : "yellow"}>Web Development</Text>
                        <Text fontSize={{ base: "110%" }} fontWeight="500" color={theme ? "blue" : "pink"}>Lorem Ipsum is simply dummy text</Text>
                        <Text color={theme ? "black" : "white"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</Text>
                        <Button mt={5} bg={theme ? "#78015e" : "#02335c"} color="white">Know More</Button>
                    </Box>
                </Box>

                <Box width="90%" margin="auto" display="flex" flexDir={{ base: "column-reverse", sm: "column-reverse", md: "row", lg: "row", xl: "row" }}>
                    <Box w={{ base: "100%", sm: "100%", md: "50%", lg: "50%", xl: "50%" }} padding="5%" mt={3}>
                        <Text fontSize={{ base: "130%" }} fontWeight="bold" color={theme ? "black" : "yellow"}>App Development</Text>
                        <Text fontSize={{ base: "110%" }} fontWeight="500" color={theme ? "blue" : "pink"}>Lorem Ipsum is simply dummy text</Text>
                        <Text color={theme ? "black" : "white"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</Text>
                        <Button mt={5} bg={theme ? "#78015e" : "#02335c"} color="white">Know More</Button>
                    </Box>
                    <Box padding={3} w={{ base: "100%", sm: "100%", md: "50%", lg: "50%", xl: "50%" }} display="flex" justifyContent="center" alignItems="center" borderRight="2px solid gray" borderBottom="2px solid gray">
                        <Image width={{ base: "70%", sm: "70%", md: "100%", lg: "100%", xl: "100%" }} src={appimg} alt="web" />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export { AboutUs }