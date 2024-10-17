import { Flex, Heading, HStack } from "@chakra-ui/react";
import bannerImage from "../assets/images/tire3.jpg";

const Banner = () => {
  return (
    <HStack
      backgroundImage={bannerImage}
      bgRepeat={"no-repeat"}
      bgPos={"center"}
      bgSize={"cover"}
      height="600px"
      alignItems="flex-end"
      justifyContent="center"
    >
      <Flex bgColor={"rgba(6, 70, 72, 0.7)"} p={5}>
        <Heading as="h1" size="xl" opacity={1}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Heading>
      </Flex>
    </HStack>
  );
};

export default Banner;
