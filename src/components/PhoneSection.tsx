import { Button, Flex, Link, Text } from "@chakra-ui/react";
import { MdPhoneInTalk } from "react-icons/md";

const PhoneSection = () => {
  return (
    <Flex
      flexDirection={"column"}
      alignItems={"center"}
      p={10}
      bgColor={"blue.700"}
      gap={5}
    >
      <MdPhoneInTalk size={100} />
      <Text fontSize={"3xl"} maxW={"90%"} textAlign={"center"}>
        Möchten Sie einen Termin zur Ihres Fahrzeugs mit
        unserer freien Kfz-Werkstatt vereinbaren?
      </Text>
      <Link
        href="tel:+4917662948021"
        bgColor={"red.700"}
        borderRadius={10}
        _hover={{ bgColor: "red.600" }}
      >
        <Button size="lg">Anrufen</Button>
      </Link>
    </Flex>
  );
};

export default PhoneSection;
