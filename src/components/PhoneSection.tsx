import { Button, Flex, Text } from "@chakra-ui/react";
import { MdPhoneInTalk } from "react-icons/md";

const PhoneSection = () => {
  return (
    <Flex flexDirection={"column"} alignItems={"center"} p={10} bgColor={"blue.700"} gap={5}>
      <MdPhoneInTalk size={100} />
      <Text fontSize={"3xl"} maxW={"50%"} textAlign={"center"}>
        Möchten Sie einen Termin zur Unfallinstandsetzung Ihres Fahrzeugs mit
        unserer freien Kfz-Werkstatt vereinbaren?
      </Text>
      <Button bgColor={"red.700"} size="lg" width={"10%"} height={"50px"} _hover={{ bgColor: "red.600" }}>
        Anrufen
      </Button>
    </Flex>
  );
};

export default PhoneSection;
