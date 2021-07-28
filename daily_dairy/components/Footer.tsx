import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { project } from "../config/project";
const Footer = () => {
  return (
    <Flex
      w="100%"
      h={["13vh", "7vh"]}
      // backgroundColor="back.800"
      justify="center"
      align="center"
      position="fixed"
      bottom="0.5"
      zIndex="2"
    >
      <Text
        color="white"
        fontSize={["sm", "xl"]}
        textAlign="center"
        padding="5"
      >
        Made with ❤️ by {project.coreDevelopers}
      </Text>
    </Flex>
  );
};

export default Footer;
