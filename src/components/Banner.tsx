import { Heading, HStack } from "@chakra-ui/react";
import bannerImage from "../assets/images/tire3.jpg";

const Banner = () => {
  return (
    <HStack
      backgroundImage={bannerImage}
      bgRepeat={"no-repeat"}
      bgPos={"center"}
      bgSize={"cover"}
      height="700px"
      alignItems="flex-end"
      justifyContent="center"
    >
      <Heading as="h1" size="xl" bgColor={"blue.800"} p={5} opacity={0.8}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Heading>
    </HStack>
  );
};

export default Banner;
