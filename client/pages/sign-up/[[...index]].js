import { SignUp } from "@clerk/clerk-react";
import React from "react";
import {
    Stack,
    Box,
    Flex,
    Container
} from '@chakra-ui/react'

const SignUpPage = () => (
 

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
       <SignUp path="/sign-up" routing="path" signInURL="/sign-in" />
  </Flex>
</>
);

export default SignUpPage;