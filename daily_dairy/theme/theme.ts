import { extendTheme } from "@chakra-ui/react";
const fonts = {
  heading: "Open Sans",
  // body: "Raleway",
};
const colors = {
  primary: {
    500: "#222222",
  },
  back: {
    700: "#313641",
    800: "#1A202C",
  },
};

export const theme = extendTheme({ colors, fonts });
