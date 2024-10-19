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
import logo from "../assets/logo1.svg";

const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          display={{ base: "none", md: "flex" }}
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
                <Link
                  href="#services"
                  onClick={onClose}
                  _hover={{ color: "blue.100" }}
                >
                  Leistungen
                </Link>
                <Link
                  href="#faq"
                  onClick={onClose}
                  _hover={{ color: "blue.100" }}
                >
                  FAQ
                </Link>
                <Link
                  href="#contact"
                  onClick={onClose}
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
