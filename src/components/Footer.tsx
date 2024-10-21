import { Flex, Text, Link } from "@chakra-ui/react";
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
        p={5}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text color="white">Copyright © 2024 RÄDERDIENST</Text>

        <Flex gap={5}>
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
        </Flex>
      </Flex>
    </footer>
  );
};

export default Footer;
