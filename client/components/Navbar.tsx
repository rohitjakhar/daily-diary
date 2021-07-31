import React from "react";
import {
  Link as ChakraLink,
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Spacer,
  Image,
  Avatar,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { project } from "../config/project";
import { signIn, signOut, useSession } from "next-auth/client";
import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/clerk-react";

const Logo = (props) => {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        {project.name}
      </Text>
    </Box>
  );
};

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo color="white" />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, link, ...rest }) => {
  return (
    <ChakraLink>
      <Link href={link}>
        <Text display="block" {...rest}>
          {children}
        </Text>
      </Link>
    </ChakraLink>
  );
};

const MenuLinks = ({ isOpen }) => {
  const [session, loading] = useSession();
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem link="/">Home</MenuItem>
        <SignedIn>
          <MenuItem link="/dashboard">Dashboard</MenuItem>
          <MenuItem link="/profile">Profile</MenuItem>
        </SignedIn>
        <MenuItem link="/features">Features </MenuItem>
        <MenuItem link="/about">About </MenuItem>

        <SignedIn>
          <UserButton />
        </SignedIn>

      

        <SignedOut>
        
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
          >
            <Link href="/sign-in">
          <Button
            as={'a'}
            fontSize={'sm'}
            textColor={'white'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Sign In
          </Button>
          </Link>
          <Link href="/sign-up">
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'pink.400'}
            href={'#'}
            _hover={{
              bg: 'pink.300',
            }}>
            Sign Up
          </Button>
          </Link>
        </Stack>

        </SignedOut>

        {/* <Spacer /> */}
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      position={["fixed", "absolute"]}
      top="0"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      zIndex="100"
      // mb={8}
      p={4}
      bg={["back.800", "back.800", "transparent", "transparent"]}
      color="white"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
