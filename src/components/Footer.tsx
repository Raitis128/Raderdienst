import { Flex, Text } from "@chakra-ui/react";
import Icons from "./Icons";

const Footer = () => {
  return (
    <footer>
      <Flex
        bgColor="blue.900"
        fontFamily={"Roboto"}
        pt={5}
        pb={5}
        pl={10}
        pr={10}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text>Copyright © 2024 RÄDERDIENST</Text>
        <Icons gap={5} />
      </Flex>
    </footer>
  );
};

export default Footer;
