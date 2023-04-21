import {
    Button,
    Box,
    FormControl,
    FormLabel,
    Input,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    useToast,
    Select,
} from "@chakra-ui/react";
import React, { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import logo from "../assets/Quantum_Logo.avif";
import { useNavigate } from "react-router-dom";


const initialLoginState = {
    email: "",
    password: "",
};

const loginReducer = (state, action) => {
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

export default function SignUpLogin() {

    const [islogin, setIsLogin] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    const dispatch = useDispatch();
    const toast = useToast();
    const navigate = useNavigate();


    const [loginState, setLoginState] = useReducer(
        loginReducer,
        initialLoginState
    );

    const handleToggleLogin = () => {
        setIsLogin(true);
    }


    const loginHandler = (loginState) => {
        if (loginState.email !== "" && loginState.password !== "") {
            // dispatch(login(loginState))

            const timer = setTimeout(() => {
                toast({
                    title: "User loged in!",
                    status: "success",
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
                            bg="blue.500"
                            boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
                        >
                            {`Login successfull!`}
                        </Box>
                    ),
                });
                onClose();
                navigate("/");
            }, 3000);
            return () => clearTimeout(timer);
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
                    <Box border="2px solid green" textAlign="center" borderRadius="10px" fontWeight="bolder" color="white" p={3} bg="red.500" boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px">
                        {`All fields are not there !`}
                    </Box>
                )
            });
        }
    };

    // signup:-
    const [userState, setUserState] = useReducer(
        signUpReducer,
        initialSignUpState
    );

    const handleToggleSignup = () => {
        setIsLogin(false);
    }

    const signUpHandler = () => {
        if( userState.email && userState.password ) {
            // dispatch(signUp(userState));
            const timer = setTimeout(() => {
                
                toast({
                    title: "User signed up!",
                    status: "success",
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
                            bg="blue.500"
                            boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
                        >
                            {`Sign up suceessfull!`}
                        </Box>
                    ),
                });
                setIsLogin(false);
            }, 3000);
            return () => clearTimeout(timer);
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
        !islogin ?
            (
                <>
                    <Button
                        fontSize={{ base: "60%", sm: "70%", md: "100%", lg: "100%" }}
                        size={{ base: "sm", sm: "sm", md: "md", lg: "md", xl: "md" }}
                        onClick={onOpen}
                        bg={"teal.500"}
                        color="white"
                        _hover={{ bg: "blue.300" }}
                    >
                        Login
                    </Button>
                    <Modal
                        initialFocusRef={initialRef}
                        finalFocusRef={finalRef}
                        isOpen={isOpen}
                        onClose={onClose}
                    >
                        <ModalOverlay />
                        <ModalContent>
                            <Box width="40%" margin="5%" paddingBottom={0}>
                                <Image width="100%" src={logo} />
                            </Box>
                            <ModalHeader fontWeight="bold" color={"darkgreen"}>
                                Login
                            </ModalHeader>
                            <ModalCloseButton marginTop="8%" marginRight="5%" fontSize="150%" />
                            <ModalBody pb={6}>
                                <FormControl>
                                    <FormLabel>Email</FormLabel>
                                    <Input
                                        type={"email"}
                                        placeholder="email id"
                                        value={loginState.email}
                                        onChange={(e) =>
                                            setLoginState({ type: "email", payload: e.target.value })
                                        }
                                    />
                                </FormControl>

                                <FormControl mt={4}>
                                    <FormLabel>Password</FormLabel>
                                    <Input
                                        type={"password"}
                                        placeholder="password"
                                        value={loginState.password}
                                        onChange={(e) =>
                                            setLoginState({ type: "password", payload: e.target.value })
                                        }
                                    />
                                </FormControl>
                            </ModalBody>

                            <ModalFooter
                                display="flex"
                                justifyContent="space-between"
                                flexDirection="row"
                            >
                                <Box>
                                    <Button
                                        colorScheme="blue"
                                        fontSize={{ base: "60%", sm: "70%", md: "100%", lg: "100%" }}
                                        size={{ base: "sm", sm: "sm", md: "md", lg: "md", xl: "md" }}
                                        mr={3}
                                        onClick={() => loginHandler(loginState)}
                                    >
                                        Login
                                    </Button>
                                </Box>
                                <Box display="flex" justifyContent="space-around" width="50%">
                                    <Button
                                        onClick={handleToggleLogin}
                                        fontSize={{ base: "60%", sm: "70%", md: "100%", lg: "100%" }}
                                        size={{ base: "sm", sm: "sm", md: "md", lg: "md", xl: "md" }}
                                        colorScheme={'red'}
                                    >
                                        SignUp
                                    </Button>
                                    <Button
                                        onClick={onClose}
                                        fontSize={{ base: "60%", sm: "70%", md: "100%", lg: "100%" }}
                                        size={{ base: "sm", sm: "sm", md: "md", lg: "md", xl: "md" }}
                                    >
                                        Cancel
                                    </Button>
                                </Box>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </>
            ) : (
                <>
                    <Button
                        fontSize={{ base: "60%", sm: "70%", md: "100%", lg: "100%" }}
                        size={{ base: "sm", sm: "sm", md: "md", lg: "md", xl: "md" }}
                        bg={"teal.500"}
                        onClick={onOpen}
                        color="white"
                        _hover={{ bg: "pink.400" }}
                    >
                        Sign up
                    </Button>
                    <Modal
                        initialFocusRef={initialRef}
                        finalFocusRef={finalRef}
                        isOpen={isOpen}
                        onClose={onClose}
                    >
                        <ModalOverlay />
                        <ModalContent>
                            <Box width="40%" padding="5%" paddingBottom={0}>
                                <Image width="100%" src={logo} />
                            </Box>
                            <ModalHeader fontWeight="bold" color={"darkgreen"}>
                                Create your account
                            </ModalHeader>
                            <ModalCloseButton marginTop="8%" marginRight="5%" fontSize="150%" />
                            <ModalBody pb={6}>
                                <FormControl mt={4}>
                                    <FormLabel>Email</FormLabel>
                                    <Input
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
                            </ModalBody>
                            <ModalFooter
                                display="flex"
                                justifyContent="space-between"
                                flexDirection="row"
                            >
                                <Box>
                                    <Button
                                        colorScheme="blue"
                                        fontSize={{ base: "60%", sm: "70%", md: "100%", lg: "100%" }}
                                        size={{ base: "sm", sm: "sm", md: "md", lg: "md", xl: "md" }}
                                        mr={3}
                                        onClick={() => signUpHandler()}
                                    >
                                        Sign Up
                                    </Button>
                                </Box>
                                <Box display="flex" justifyContent="space-around" width="50%">
                                    <Button
                                        onClick={handleToggleSignup}
                                        fontSize={{ base: "60%", sm: "70%", md: "100%", lg: "100%" }}
                                        size={{ base: "sm", sm: "sm", md: "md", lg: "md", xl: "md" }}
                                        colorScheme={'red'}
                                    >
                                        Login
                                    </Button>
                                    <Button
                                        onClick={onClose}
                                        fontSize={{ base: "60%", sm: "70%", md: "100%", lg: "100%" }}
                                        size={{ base: "sm", sm: "sm", md: "md", lg: "md", xl: "md" }}
                                    >
                                        Cancel
                                    </Button>
                                </Box>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </>
            )
    );
}