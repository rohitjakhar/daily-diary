import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { v4 as uuidv4 } from 'uuid';
import { developers } from "../../config/developers";
import Header from "../Header";
import Developer from "./Developer";

const DevelopersBody = () => {
  return (
    <>
      <Header heading="Our Developers" />
      <Flex
        backgroundColor="back.800"
        minH={["80vh", "75vh"]}
        paddingX="15vw"
        paddingY="10vh"
        flexDirection="column"
      >
        {developers.map((developer) => (
          <Developer
            key={uuidv4()}
            name={developer.name}
            role={developer.role}
            description={developer.description}
            imageSource={developer.imageSource}
          />
        ))}
      </Flex>
    </>
  );
};

export default DevelopersBody;
