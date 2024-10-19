import { Card, Flex, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import Map from "./Map";
import Icons from "./Icons";

const Contacts = () => {
  return (
    <Flex direction={["column", "column", "row"]} id="contact">
      <Map />

      <Card
        bgGradient={"linear(to-r, blue.900, blue.800)"}
        p={10}
        width={["100%", "100%", "50%"]}
        textAlign={"center"}
        justifyContent={"center"}
        borderRadius={0}
      >
        <Heading as={"h2"} color="red.300" textTransform={"uppercase"} pb={5}>
          Kontakt
        </Heading>
        <Heading as={"h3"} pb={5} color={"red.300"} fontSize={"2xl"}>
          Kontaktinformationen
        </Heading>
        <Text pb={5}>
          Möchten Sie Ihr Fahrzeug in unserer Werkstatt überprüfen oder
          reparieren lassen? Dann sind Sie bei den Kfz-Mechanikern von
          RÄDERDIENST genau richtig!
        </Text>
        <HStack pb={5} justifyContent={"center"} flexWrap={"wrap"}>
          <Text color="red.300">Address:</Text>
          <Text>Bergstraße 16, 01896 Ohorn, Germany</Text>
        </HStack>
        <Text pb={1} color="red.300">
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
        <Heading as={"h3"} fontSize={"2xl"} pb={5} color={"red.300"}>
          Kontaktieren Sie mich gerne
        </Heading>
        <Icons gap={5} size="lg" />
      </Card>
    </Flex>
  );
};

export default Contacts;
