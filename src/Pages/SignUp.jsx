import {
    Box,
    Button,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Image,
    Input,
    Stack,
    Text,
    useToast
} from '@chakra-ui/react';
import logo from '../assets/Quantum_Logo.avif'
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useReducer } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signup } from '../Redux/AuthReducer/action';


const initialSignUpState = {
    email: "",
    password: "",
};

const signUpReducer = (state, action) => {
    switch (action.type) {
        case "email":
            return {
                ...state,
                email: action.payload,
            };

        case "password":
            return {
                ...state,
                password: action.payload,
            };

        default:
            return state;
    }
};


export const SignUp = () => {

    const dispatch = useDispatch();
    const toast = useToast();
    const navigate = useNavigate();
    const {status, error} = useSelector((store) => store.AuthReducer); 

    const [userState, setUserState] = useReducer(
        signUpReducer,
        initialSignUpState
    );

    useEffect(() => {
         if(status == "signup success"){
            alert("Signup successfull!")
         }

         if(error){
            alert(error);
         }
    },[status, error]);
    

    // const HandleGoole = () => {
    //     dispatch(googleSignup());
    //     setTimeout(() => {
    //         navigate("/mainpage");
    //     }, 2000);
    // }

    const signUpHandler = () => {

        if( userState.email && userState.password ) {
            console.log(userState);
            dispatch(signup(userState.email, userState.password));
            
            setTimeout(() => {
                navigate("/");
            }, 2000);

        } else {
            toast({
                title: "Error!",
                description: "Something went wrong.",
                status: "warning",
                duration: 2000,
                position: "top",
                isClosable: true,
                render: () => (
                    <Box
                        border="2px solid green"
                        textAlign="center"
                        borderRadius="10px"
                        fontWeight="bolder"
                        color="white"
                        p={3}
                        bg="red.500"
                        boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
                    >
                        {`All fields are not there !`}
                    </Box>
                ),
            });
        }
    };

    return (
        <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
            <Stack spacing="8">
                <Stack spacing="6">
                    <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                        <Box width={{ base: "30%" }} margin="auto">
                            <Image w="100%" src={logo} alt="" />
                        </Box>
                        <Heading size={{ base: 'xs', md: 'sm' }}>Signup to your account</Heading>
                        <HStack spacing="1" justify="center">
                            <Text color="muted">Already have an account?</Text>
                            <Button variant="link" colorScheme="blue">
                                <Link to="/">Sign in</Link>
                            </Button>
                        </HStack>
                    </Stack>
                </Stack>
                <Box
                    py={{ base: '0', sm: '8' }}
                    px={{ base: '4', sm: '10' }}
                    bg={{ base: 'transparent', sm: 'bg-surface' }}
                    boxShadow={{ base: 'none', sm: 'md' }}
                    borderRadius={{ base: 'none', sm: 'xl' }}
                >
                    <Stack spacing="6">
                        <Stack spacing="5">
                        <FormControl mt={4}>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    id="email"
                                    type={"email"}
                                    placeholder="email id"
                                    value={userState.email}
                                    onChange={(e) =>
                                        setUserState({ type: "email", payload: e.target.value })
                                    }
                                />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Password</FormLabel>
                                <Input
                                    type={"password"}
                                    placeholder="password"
                                    value={userState.password}
                                    onChange={(e) =>
                                        setUserState({ type: "password", payload: e.target.value })
                                    }
                                />
                            </FormControl>
                        </Stack>

                        <Stack spacing="6">
                            <Button colorScheme='blue' onClick={() =>signUpHandler()}>Sign Up</Button>
                            <HStack>
                                <Divider />
                                <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                                    or continue with 
                                </Text>
                                <Divider />
                            </HStack>
                            {/* <Button width={'full'} colorScheme='red' onClick={() => HandleGoole()}>Google</Button> */}

                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Container>
    );
};
