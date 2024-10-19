import { Flex, HStack, Image, Link } from "@chakra-ui/react";
import logo from "../assets/logo1.svg";

const Navigation = () => {
  return (
    <nav>
      <HStack
        justifyContent="space-between"
        pt={5}
        pb={5}
        pl={10}
        pr={10}
        backgroundColor={"blue.900"}
        fontFamily={"Roboto"}
      >
        <Link href="#">
          <Image
            src={logo}
            width="200px"
            alt="logo"
            justifyContent="space-between"
          />
        </Link>
        <Flex
          justifyContent="space-between"
          gap={10}
          fontSize={20}
          textTransform={"uppercase"}
        >
          <Link href="#services" _hover={{ color: "blue.100" }}>
            Leistungen
          </Link>
          <Link href="#faq" _hover={{ color: "blue.100" }}>
            FAQ
          </Link>
          <Link href="#contact" _hover={{ color: "blue.100" }}>
            Kontakt
          </Link>
        </Flex>
      </HStack>
    </nav>
  );
};

export default Navigation;
