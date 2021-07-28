import { Image } from "@chakra-ui/image";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";

const Developer = (props) => {
    return (
        <Flex
            width="100%"
            backgroundColor="whiteAlpha.200"
            borderRadius="2xl"
            shadow="lg"
            h={["50vh", "20vh"]}
            my="10"
            flexDirection={["column", "row"]}
        >
            <Image
                src={props.imageSource}
                width={["100%", "20%"]}
                height={["40%", "100%"]}
                objectFit="cover"
                borderTopLeftRadius="xl"
                borderBottomLeftRadius="xl"
            />
            <Flex padding="10" pt="5" direction="column">
                <Heading color="white">{props.name}</Heading>
                <Text color="whiteAlpha.900" fontSize="xl">
                    {props.role}
                </Text>
                <Text color="whiteAlpha.700">{props.description}</Text>
            </Flex>
        </Flex>
    );
};

export default Developer;
