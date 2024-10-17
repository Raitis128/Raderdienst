import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import "@fontsource/roboto";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    blue: {
      50: "#daffff",
      100: "#afffff",
      200: "#80ffff",
      300: "#52ffff",
      400: "#31fefe",
      500: "#24e4e5",
      600: "#12b2b3",
      700: "#007f80",
      800: "#004c4e",
      900: "#001b1c",
    },
    red: {
      50: "#ffe3e3",
      100: "#ffb1b2",
      200: "#ff7f7f",
      300: "#fe4e4e",
      400: "#fd1e1c",
      500: "#e30602",
      600: "#b10101",
      700: "#800000",
      800: "#4e0000",
      900: "#1f0000",
    },
  },
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
});

export default theme;
