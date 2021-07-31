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
  Button,
  ButtonGroup,
  Box,
  useColorModeValue,
  VStack,
  Textarea,
  AlertProps,
  Alert,
  Center,
} from "@chakra-ui/react";

import { Children, ReactElement, useEffect, useState } from "react";
import React from "react";
import { project } from "../config/project";
import Header from "../components/Header";
import Head from "next/head";
import axios from "axios";

import { useForm } from "react-hook-form";
import { SignedIn, useUser } from "@clerk/clerk-react";

//axios.defaults.baseURL = 'http://localhost:8081/api/';

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

export default function Dashboard({ dairys }) {
  let [value, setValue] = React.useState("");
  
  

  
  const handleClick = async (diarytext: string) => {
    const user = useUser();
    axios({
      method: "post",
      url: "http://localhost:8081/api/addDairy/",
      data: {
        userid: user.id,
        name: user.fullName,
        dairytext: diarytext,
        createdDate: new Date(),
      },
    }).catch((error) => {
      console.log(error);
    });
    axios({
      method: "get",
      url: "http://localhost:8081/api/allDairy/rohit",
    })
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setDiaries(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [diaries, setDiaries] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8081/api/allDairy/rohit",
    })
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setDiaries(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => handleClick(data.diarytext);

  return (
    <div>
      <Head>
        <title>Dashboard | {project.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header heading="Dashboard" />

      <Container maxW={"5xl"} py={12}>
        <Stack>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Textarea
              borderWidth="2pd"
              borderColor="black"
              p={6}
              {...register("diarytext")}
              minH="48"
              placeholder="Write your diary"
              size="md"
            />
          </form>
          <Button
            colorScheme="teal"
            variant="outline"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            Add Diary
          </Button>
          <SimpleGrid py={4} column={[2, null, 3]} minChildWidth="220px" spacing="40px">
          
          {diaries.map((diary) => {
            return (
              <>
                  <Box
                    p={8}
                    maxW={"330px"}
                    w={"full"}
                    bg={useColorModeValue("white", "gray.800")}
                    boxShadow={"2xl"}
                    rounded={"md"}
                    overflow={"hidden"}
                  >
                    <Stack
                      textAlign={"center"}
                      p={6}
                      color={useColorModeValue("gray.800", "white")}
                      align={"center"}
                    >
                      <Text
                        fontSize={"sm"}
                        fontWeight={500}
                        bg={useColorModeValue("green.50", "green.900")}
                        p={2}
                        px={3}
                        color={"green.500"}
                        rounded={"full"}
                      >
                        30/07/2021
                      </Text>
                      <Text fontSize={"3xl"}>{diary.dairytext}</Text>
                      <Text fontSize={"3xl"}>{diary.name}</Text>
                    </Stack>
                  </Box>
                
              </>
            );
          })}
          </SimpleGrid>
        </Stack>
      </Container>
    </div>
  );
}
