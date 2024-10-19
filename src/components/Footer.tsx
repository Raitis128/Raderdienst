import { Flex, Text } from "@chakra-ui/react";

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
        <Text>Copyright © 2024 RÄDERDIENST</Text>
      </Flex>
    </footer>
  );
};

export default Footer;
