import { Flex, Text, Link, Image, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleDatenschutzClick = () => {
    navigate("/datenschutz");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleImpressumClick = () => {
    navigate("/impressum");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <Flex
        bgColor="blue.900"
        fontFamily={"Roboto"}
        pt={5}
        pb={5}
        pl={10}
        pr={10}
        justifyContent={{base: "center", md: "space-between"}}
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        <Text color="white" pb={5} pt={5} pr={5}>
          Copyright © 2024 RÄDERDIENST
        </Text>

        <Flex
          gap={5}
          alignItems={"center"}
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          <Link href="https://www.reifenleader.de/" target="_blank">
            <Image
              src="https://cdn.tiresleader.com/static/sites/reifenleader.de/img/banners/Banner_12.jpg"
              alt="Reifenleader.de Montagepartnerstation"
              height={"45px"}
              pr={5}
            />
          </Link>
          <HStack gap={5}>
            <Link
              onClick={handleDatenschutzClick}
              color="white"
              _hover={{ color: "blue.100" }}
            >
              Datenschutzerklärung
            </Link>
            <Link
              onClick={handleImpressumClick}
              color="white"
              _hover={{ color: "blue.100" }}
            >
              Impressum
            </Link>
          </HStack>
        </Flex>
      </Flex>
    </footer>
  );
};

export default Footer;
