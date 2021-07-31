
import { Flex, Heading, Text } from "@chakra-ui/layout";
import { Box, Icon, Stack, StackDivider, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const TechStack = () => {
    return (
  <Box spacing={10} alignSelf="start">
  <Stack spacing={4} divider= {
     <StackDivider
     borderColor={useColorModeValue("gray.100", "gray.700")}
   />
  }>
    <Stack>
    <Text
      textTransform={"uppercase"}
      color={"blue.400"}
      fontWeight={600}
      fontSize={"sm"}
      bg={useColorModeValue("blue.50", "blue.900")}
      p={2}
      alignSelf={"flex-start"}
      rounded={"md"}
    >
      Texh Stack
    </Text>
    <Stack direction="row">
      <Heading>Clerk</Heading>
      <img src="https://clerk.dev/_next/image?url=%2Fimages%2Ffooter-logo.svg&w=96&q=75" alt="" />
      </Stack>
    <Text color={"gray.500"} fontSize={"lg"}>
    Add sign up, sign in, and profile management to your application in minutes. Theme prebuilt frontends to match your branding, or customize everything with easy to use APIs. 
    
    </Text>
    </Stack>
    <Stack>
    <Stack direction="row">
      <Heading>NextJs</Heading>
      <img src="https://cdn.icon-icons.com/icons2/2148/PNG/512/nextjs_icon_132160.png&w=70&q=75" alt="" />
      </Stack>
    <Text color={"gray.500"} fontSize={"lg"}>
    Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed. 
    
    </Text>
    </Stack>
    <Stack>
      <Stack direction="row">
      <Heading>Type Script</Heading>
      <img src="https://img.icons8.com/color/48/000000/typescript.png" alt="" />
      </Stack>
    <Text color={"gray.500"} fontSize={"lg"}>
    By understanding JavaScript, TypeScript saves you time catching errors and providing fixes before you run code.

Any browser, any OS, anywhere JavaScript runs. Entirely Open Source.
    </Text>
    </Stack>
    <Stack>
    <Stack direction="row">
      <Heading>GoLang</Heading>
      <img src="https://img.icons8.com/color/50/000000/golang.png" alt="" />
      </Stack>
    <Text color={"gray.500"} fontSize={"lg"}>
    Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.
    </Text>
    </Stack>
    <Stack>
    <Stack direction="row">
      <Heading>gorila mux</Heading>
      <img src="https://img.icons8.com/emoji/48/000000/gorilla-emoji.png" alt="" />
      </Stack>
    <Text color={"gray.500"} fontSize={"lg"}>
    A powerful HTTP router and URL matcher for building Go web servers with
    </Text>
    </Stack>
    <Stack>
    <Stack direction="row">
      <Heading>MongoDB</Heading>
      <img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="" />
      </Stack>
    <Text color={"gray.500"} fontSize={"lg"}>
    Accelerate development, address diverse data sets, and adapt quickly to change with a proven application data platform built around the database most wanted by developers 4 years running.
    </Text>
    </Stack>
  </Stack>
 
</Box>
    );
}

export default TechStack;