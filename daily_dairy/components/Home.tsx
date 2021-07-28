import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { project } from "../config/project";
import Footer from "./Footer";
const Hero = () => {
  return (
    <Flex
      width="100%"
      height="100vh"
      backgroundColor="back.800"
      backgroundImage="linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/back.svg')"
      backgroundSize="cover"
      backgroundPosition="top"
      align="center"
      justify="center"
      direction="column"
      padding="10"
      textAlign="center"
    >
      <Heading color="white" fontSize={["6xl", "9xl"]}>
        {project.name}
      </Heading>
      <Text color="whiteAlpha.800" fontSize={["xl", "2xl"]} pt="5">
        {project.description}
      </Text>

      <Link href="/dashboard"><Button
        backgroundColor="white"
        _hover={{ backgroundColor: "whiteAlpha.800" }}
        fontSize="2xl"
        padding="6"
        mt="20"
      >Ready to use it? 🚀</Button></Link>

      <Footer />
    </Flex>
  );
};

export default Hero;
