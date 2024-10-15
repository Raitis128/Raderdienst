import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import "@fontsource/roboto";
import "@fontsource/raleway";

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
  },
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
});

export default theme;
