import { Heading, HStack, Image } from "@chakra-ui/react";

const Banner = () => {
  return (
    <HStack>
      <Image />
      <Heading as="h1" size="lg" bgColor={"blue.900"}>Text</Heading>
    </HStack>
  );
};

export default Banner;
