import { Flex, HStack, Image, Link } from "@chakra-ui/react";
import logo from "../assets/logo1.svg";

const Navigation = () => {
  return (
    <HStack justifyContent="space-between" p={3} backgroundColor={"blue.900"}>
      <Link href="#">
        <Image
          src={logo}
          width="200px"
          alt="logo"
          justifyContent="space-between"
        />
      </Link>
      <Flex justifyContent="space-between" gap={10} fontSize={23} pr={5}>
        <Link _hover={{ color: "blue.100" }}>Link</Link>
        <Link _hover={{ color: "blue.100" }}>Link</Link>
        <Link _hover={{ color: "blue.100" }}>Link</Link>
        <Link _hover={{ color: "blue.100" }}>Link</Link>
      </Flex>
    </HStack>
  );
};

export default Navigation;
