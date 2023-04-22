import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    useToast,
    Text,
    Image
} from '@chakra-ui/react'
import logo from '../assets/Quantum_Logo.avif'
import { useDispatch } from "react-redux";
import React, { useReducer } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from '../Redux/AuthReducer/action';

const initialSignInState = {
    email: "",
    password: "",
};

const signInReducer = (state, action) => {
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

export const SignIn = () => {

    const dispatch = useDispatch();
    const toast = useToast();
    const navigate = useNavigate();

    const [userState, setUserState] = useReducer(
        signInReducer,
        initialSignInState
    );

    const signInHandler = () => {
        if (userState.email && userState.password) {
            console.log(userState);
            dispatch(login(userState.email,userState.password));
            setTimeout(() => {
                navigate("/mainpage");
            }, 2000);
        }
        else {
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
                    <Box width={{ base: "30%" }} margin="auto">
                        <Image w="100%" src={logo} alt="" />
                    </Box>
                    <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                        <Heading size={{ base: 'xs', md: 'sm' }}>Log in to your account</Heading>
                        <HStack spacing="1" justify="center">
                            <Text color="muted">Don't have an account?</Text>
                            <Button variant="link" colorScheme="blue">
                                <Link to="/signup">Sign up</Link>
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
                        <HStack justify="space-between">
                            <Checkbox defaultChecked>Remember me</Checkbox>
                            <Button variant="link" colorScheme="blue" size="sm">
                                Forgot password?
                            </Button>
                        </HStack>
                        <Stack spacing="6">
                            <Button onClick={() => signInHandler()} colorScheme='blue'>Sign in</Button>
                            <HStack>
                                <Divider />
                                <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                                    or continue with
                                </Text>
                                <Divider />
                            </HStack>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Container>
    );
};