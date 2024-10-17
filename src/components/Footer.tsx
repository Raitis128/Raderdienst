import { Flex, Text } from "@chakra-ui/react";
import Icons from "./Icons";

const Footer = () => {
  return (
    <footer>
      <Flex
        bgColor="blue.900"
        fontFamily={"Roboto"}
        p={5}
        flexDirection={"column"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text pb={3}>Copyright © 2024 RÄDERDIENST</Text>
        <Icons gap={5} size="sm" />
      </Flex>
    </footer>
  );
};

export default Footer;
