import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import services from "../data/services";

import { PiTireFill } from "react-icons/pi";
import { BsFillLaptopFill } from "react-icons/bs";
import { MdOutlineTireRepair } from "react-icons/md";
import { RiOilFill } from "react-icons/ri";

const Services = () => {
  const renderIcon = (heading: string) => {
    switch (heading) {
      case "TPMS-Programmierung":
        return <MdOutlineTireRepair color="white" size={80} />;
      case "Fehlerdiagnose":
        return <BsFillLaptopFill color="white" size={80} />;
      case "Motorölwechsel":
        return <RiOilFill color="white" size={80} />;
      default:
        return <PiTireFill color="white" size={80} />;
    }
  };

  return (
    <Box bgColor={"blue.800"} pt={10} id="services">
      <Heading as={"h2"} textAlign={"center"} color="red.300" mb={10}>
        Unsere Leistungen
      </Heading>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList justifyContent="center" pb={10} gap={5} flexWrap={"wrap"}>
          {services.map((service, index) => (
            <Tab
              key={index}
              color={"white"}
              _selected={{
                bg: "blue.900",
                color: "red.300",
              }}
              _hover={{
                bg: "blue.900",
                color: "red.300",
              }}
            >
              {service.heading}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {services.map((service, index) => (
            <TabPanel key={index}>
              <Flex
                mb={10}
                gap={10}
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src={service.image}
                  alt={service.heading}
                  boxSize="500px"
                  objectFit="cover"
                />
                <Card
                  bgColor={"blue.900"}
                  p={5}
                  maxW={"500px"}
                  h={"500px"}
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <CardHeader
                    as={"h3"}
                    fontSize={"3xl"}
                    color={"red.300"}
                    textAlign={"center"}
                  >
                    <Flex justifyContent={"center"} pb={5}>
                      {renderIcon(service.heading)}
                    </Flex>
                    {service.heading}
                  </CardHeader>
                  <CardBody textAlign={"justify"} flexGrow="1" fontSize={"xl"}>
                    {service.text}
                  </CardBody>
                </Card>
              </Flex>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Services;
