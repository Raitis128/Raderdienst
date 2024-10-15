import { Flex, HStack, Image, Link } from "@chakra-ui/react";
import logo from "../assets/logo5.svg";

const Navigation = () => {
  return (
    <HStack justifyContent="space-between" p={5} backgroundColor={"blue.900"}>
      <Link href="#">
        <Image
          src={logo}
          width="300px"
          alt="logo"
          justifyContent="space-between"
        />
      </Link>
      <Flex justifyContent="space-between" gap={10} fontSize={25} pr={5}>
        <Link _hover={{ color: "blue.200" }}>Link</Link>
        <Link _hover={{ color: "blue.200" }}>Link</Link>
        <Link _hover={{ color: "blue.200" }}>Link</Link>
        <Link _hover={{ color: "blue.200" }}>Link</Link>
      </Flex>
    </HStack>
  );
};

export default Navigation;
