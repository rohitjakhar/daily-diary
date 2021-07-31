import { SignIn } from "@clerk/clerk-react";
import Head from "next/head";
import React from "react";
import {
    Stack,
    Box,
    Flex,
    Container
} from '@chakra-ui/react'
const SignInPage = () => (

    <>
        <Flex
            width="100%"
            height="100vh"
            backgroundColor="back.800"
            backgroundImage="linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/HomeScren.svg')"
            backgroundSize="cover"
            backgroundPosition="top"
            align="center"
            justify="center"
            direction="column"
            padding="10"
            textAlign="center"
        >
            <SignIn path="/sign-in"
                routing="path"
                signUpURL="/sign-up" />
        </Flex>
    </>


);

export default SignInPage;