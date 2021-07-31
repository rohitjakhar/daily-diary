import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "../theme/fonts";
import { theme } from "../theme/theme";
import Main from "../layouts/Main";
import { ClerkProvider } from "@clerk/clerk-react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const publicPage = ["/", "/sign-in/[[...]]", "/sign-up/[[...index]]", "/dashboard", "/about", "/features"];

const RedirectToSignIn = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/sign-in");
  });
  return null;
};


const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  
  return (
    <ClerkProvider frontendApi="clerk.bdaic.x9n5g.lcl.dev">
      <ChakraProvider theme={theme}>
        <Fonts />
        <Main>
          <Component {...pageProps} />
        </Main>

      </ChakraProvider>
    </ClerkProvider>
  );
};

export default MyApp;
