import { Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";

const Header = (props) => {
    return (
        <Flex
            width="100%"
            minHeight={["28vh", "25vh"]}
            backgroundColor="back.700"
            pt="20"
            paddingX="15vw"
            zIndex="2"
            flexDirection="column"
        >
            <Heading fontSize={["4xl", "6xl"]} color="white">
                {props.heading}
            </Heading>
        </Flex>
    );
};

export default Header;
