import { extendTheme } from "@chakra-ui/react";
const fonts = {
  heading: "Open Sans",
  colors: "#fcfc7a"
  // body: "Raleway",
};
const colors = {
  primary: {
    500: "#A18ED3",
  },
  back: {
    700: "#120E43",
    800: "#03203C",
  },
};

export const theme = extendTheme({ colors, fonts });
