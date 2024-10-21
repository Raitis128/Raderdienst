import { Heading, Stack, Text } from "@chakra-ui/react";

const Impressum = () => {
  return (
    <Stack bgColor={"blue.800"} p={10}>
      <Heading as={"h1"} color="red.300" mb={10}>
        Impressum
      </Heading>

      <Stack mb={10}>
        <Text color="white">Räderdienst</Text>
        <Text color="white">Am Wall 1</Text>
        <Text color="white">01896 Ohorn</Text>
        <Text color="white">Deutschland</Text>
      </Stack>

      <Stack mb={10}>
        <Text color="white">Telefon: +49 176 62948021</Text>
        <Text color="white">E-Mail: Raederdienst@gmail.com</Text>
        <Text color="white">Webseite: www.räderdienst.de</Text>
      </Stack>

      <Stack mb={10}>
        <Text color="white">Vertreten durch:</Text>
        <Text color="white">Vadims Kuncevics</Text>
      </Stack>

      <Stack mb={10}>
        <Text color="white">Umsatzsteuer-Identifikationsnummer:</Text>
        <Text color="white">Steuer-Nr.: 33 078 265 195</Text>
      </Stack>
    </Stack>
  );
};

export default Impressum;
