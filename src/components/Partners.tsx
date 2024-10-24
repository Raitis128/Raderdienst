import { Box, Heading, Image, Link, Stack } from "@chakra-ui/react";

const Partners = () => {
  return (
    <Stack p={10} textAlign={"center"} id="partners">
      <Heading as={"h2"} color={"red.300"} pb={5} textTransform={"uppercase"}>
        Partner
      </Heading>
      <Box display={"flex"} justifyContent={"center"}>
        <Link href="https://www.reifenleader.de/" target="_blank">
          <Image
            src="https://cdn.tiresleader.com/static/sites/reifenleader.de/img/banners/Banner_15.jpg"
            alt="Reifenleader.de Montagepartnerstation"
            height={150}
          />
        </Link>
      </Box>
    </Stack>
  );
};

export default Partners;
