import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "../theme/fonts";
import { theme } from "../theme/theme";
import Main from "../layouts/Main";
import { Provider } from "next-auth/client";
const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Main>
          <Component {...pageProps} />
        </Main>

      </ChakraProvider>
    </Provider>
  );
};

export default MyApp;
