import { RedirectToSignIn, SignedIn, SignedOut, SignUp, UserProfile } from "@clerk/clerk-react";
import React from "react";
import {
    Stack,
    Box,
    Flex,
    Container
} from '@chakra-ui/react'

const ProfilePage = () => (
 

  <>
  <SignedIn>
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
       <UserProfile />
  </Flex>
  </SignedIn>

  <SignedOut >
      <RedirectToSignIn />
  </SignedOut>
</>
);

export default ProfilePage;