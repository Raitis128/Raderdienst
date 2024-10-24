import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Flex,
  HStack,
  Image,
  Link,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/logo2.svg";

const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleNavigateToSection = (sectionId: string) => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

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
        <RouterLink to="/">
          <Image
            src={logo}
            width="200px"
            alt="logo"
            justifyContent="space-between"
            cursor="pointer"
          />
        </RouterLink>

        <Flex
          justifyContent="space-between"
          gap={10}
          fontSize={20}
          textTransform={"uppercase"}
          display={{ base: "none", md: "flex" }}
        >
          <Link
            onClick={() => handleNavigateToSection("services")}
            _hover={{ color: "blue.100" }}
          >
            Leistungen
          </Link>
          <Link
            onClick={() => handleNavigateToSection("faq")}
            _hover={{ color: "blue.100" }}
          >
            FAQ
          </Link>

          <Link
            onClick={() => handleNavigateToSection("contact")}
            _hover={{ color: "blue.100" }}
          >
            Kontakt
          </Link>
        </Flex>

        <IconButton
          aria-label="Open Menu"
          icon={<RxHamburgerMenu size={30} />}
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          backgroundColor="blue.900"
          color="white"
          _hover={{ backgroundColor: "blue.800" }}
        />

        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent backgroundColor={"blue.900"} color={"white"}>
            <DrawerCloseButton />
            <DrawerBody>
              <VStack
                spacing={5}
                mt={10}
                fontSize={20}
                textTransform="uppercase"
              >
                <Link href="https://www.reifenleader.de/" target="_blank">
                  <Image
                    src="https://cdn.tiresleader.com/static/sites/reifenleader.de/img/banners/Banner_12.jpg"
                    alt="Reifenleader.de Montagepartnerstation"
                    height={"45px"}
                    pr={5}
                  />
                </Link>
                <Link
                  onClick={() => {
                    handleNavigateToSection("services");
                    onClose();
                  }}
                  _hover={{ color: "blue.100" }}
                >
                  Leistungen
                </Link>
                <Link
                  onClick={() => {
                    handleNavigateToSection("faq");
                    onClose();
                  }}
                  _hover={{ color: "blue.100" }}
                >
                  FAQ
                </Link>
                <Link
                  onClick={() => {
                    handleNavigateToSection("contact");
                    onClose();
                  }}
                  _hover={{ color: "blue.100" }}
                >
                  Kontakt
                </Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </HStack>
    </nav>
  );
};

export default Navigation;
