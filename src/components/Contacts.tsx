import {
  Box,
  Card,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import Map from "./Map";
import Icons from "./Icons";

const Contacts = () => {
  return (
    <Box bgColor={"blue.800"} p={10}>
      <Heading
        as={"h2"}
        textAlign={"center"}
        color="#fe4e4e"
        textTransform={"uppercase"}
      >
        Kontakt
      </Heading>
      <Flex
        pt={10}
        justifyContent={"center"}
        gap={10}
        alignItems={"center"}
        direction={["column", "column", "row"]}
      >
        <Map width={"600px"} height={600} />

        <Card bgColor={"blue.900"} p={10}>
          <Heading as={"h3"} pb={5} color={"#fe4e4e"} fontSize={"2xl"}>
            Kontaktinformationen
          </Heading>
          <Text pb={5} textAlign={"justify"} maxWidth={"500px"}>
            Möchten Sie Ihr Fahrzeug in unserer Werkstatt überprüfen oder
            reparieren lassen? Dann sind Sie bei den Kfz-Mechanikern von
            RÄDERDIENST genau richtig!
          </Text>
          <HStack pb={5}>
            <Text color="#fe4e4e">Address:</Text>
            <Text>Bergstraße 16, 01896 Ohorn, Germany</Text>
          </HStack>
          <Text pb={1} color="#fe4e4e">
            Öffnungszeiten:
          </Text>
          <Stack pb={5}>
            <Text>Donnerstag 16–21 Uhr</Text>
            <Text>Freitag 16–20 Uhr</Text>
            <Text>Samstag 10–22 Uhr</Text>
            <Text>Sonntag 11–19 Uhr</Text>
            <Text>Montag 16–21 Uhr</Text>
            <Text>Dienstag 16–21 Uhr</Text>
            <Text>Mittwoch 16–21 Uhr</Text>
          </Stack>
          <Text pb={5} fontWeight={"bold"}>
            Terminvereinbarung auf Anfrage
          </Text>
          <Heading as={"h3"} fontSize={"2xl"} pb={5} color={"#fe4e4e"}>
            Kontaktieren Sie mich gerne
          </Heading>
          <Icons gap={5} />
        </Card>
      </Flex>
    </Box>
  );
};

export default Contacts;
