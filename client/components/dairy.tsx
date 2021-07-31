import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    SimpleGrid,
    Badge,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  
  export default function Dairy() {
    return (
      <Center py={6}>
        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'start'}>
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            29 June 2021
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            @lindsey_jam3s
          </Text>
          <Text
            textAlign={'start'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Actress, musician, songwriter and artist. PM for work inquires or{' '}
            <Link href={'#'} color={'blue.400'}>
              #tag
            </Link>{' '}
            me in your posts
          </Text>
  
          <SimpleGrid minChildWidth="120px" spacing="40px">
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              Delete
            </Button>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              Edit
            </Button>
          </SimpleGrid>
        </Box>
      </Center>
    );
  }