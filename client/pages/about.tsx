import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  Box,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
  IoBarChartOutline,
} from "react-icons/io5";
import { ReactElement } from "react";
import { project } from "../config/project";
import Header from "../components/Header";
import Head from "next/head";
import { SpaceBar } from "@material-ui/icons";
interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  return (
    <div>
      <Head>
        <title>About | {project.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header heading="About us" />

      <Container maxW={"5xl"} py={12}>
        <VStack spacing="32px">
          <Box borderWidth="2px" borderRadius="xl" overflow="hidden" p={6} borderColor="black">
            <Text fontSize="3xl">
            Daily Diary is a sample web app  built to demonstrate the use of Clerk ( Complete user management )  with Nextjs, GoLang and MongoDB.
            </Text>
          </Box>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Stack spacing={4}>
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
                Our Mission
              </Text>
              <Heading>Write your Dairy Daily Digitaly.</Heading>
              <Text color={"gray.500"} fontSize={"lg"}>
                Benifit of writing dairy.
              </Text>
              <Stack
                spacing={4}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue("gray.100", "gray.700")}
                  />
                }
              >
                <Feature
                  icon={
                    <Icon
                      as={IoAnalyticsSharp}
                      color={"yellow.500"}
                      w={5}
                      h={5}
                    />
                  }
                  iconBg={useColorModeValue("yellow.100", "yellow.900")}
                  text={"Improve your writing."}
                />
                <Feature
                  icon={
                    <Icon
                      as={IoBarChartOutline}
                      color={"green.500"}
                      w={5}
                      h={5}
                    />
                  }
                  iconBg={useColorModeValue("green.100", "yellow.900")}
                  text={"Set & achieve your goals."}
                />
                <Feature
                  icon={
                    <Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />
                  }
                  iconBg={useColorModeValue("green.100", "green.900")}
                  text={"Boost your memory"}
                />
                <Feature
                  icon={
                    <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
                  }
                  iconBg={useColorModeValue("purple.100", "purple.900")}
                  text={"Inspire creativity"}
                />
              </Stack>
            </Stack>
            <Flex>
              <Image
                rounded={"md"}
                alt={"feature image"}
                src={"https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"}
                objectFit={"cover"}
              />
            </Flex>
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Stack spacing={4}>
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
                About Developer
              </Text>
              <Heading>Rohit Jakhar</Heading>
              <Text color={"gray.500"} fontSize={"lg"}>
              B.Tech Undergrad Full Stack Developer.
              3 Year Experience in Android.
              Currently Learning: GoLang, NextJs, Docker
              </Text>
              <Stack
                spacing={4}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue("gray.100", "gray.700")}
                  />
                }
              >
              </Stack>
            </Stack>
            <Flex>
              <Image
                rounded={"md"}
                alt={"feature image"}
                src={
                  "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                 }
                objectFit={"cover"}
              />
            </Flex>
          </SimpleGrid>
          <Box alignSelf="self-start">
          <Stack spacing={4} divider= {
     <StackDivider
     borderColor={useColorModeValue("gray.100", "gray.700")}
   />
  }>
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
                Link
              </Text>
             
              <Stack>
      
    
      </Stack>
            </Stack>
          </Box>
        
        </VStack>
      </Container>
    </div>
  );
}
