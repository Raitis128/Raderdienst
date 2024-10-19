import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
} from "@chakra-ui/react";

type Faq = {
  question: string;
  answer: string;
};

interface Props {
  faq: Faq[];
}

const Faq = ({ faq }: Props) => {
  return (
    <Box id="faq" bgColor={"blue.900"} p={10}>
      <Heading
        as={"h2"}
        textAlign={"center"}
        color="red.300"
        textTransform={"uppercase"}
        pt={10}
      >
        Vergölst FAQ
      </Heading>
      <Accordion
        p={10}
        defaultIndex={[0]}
        allowMultiple
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        {faq.map(({ question, answer }) => (
          <AccordionItem bgColor={"blue.800"} key={question} width={"90%"}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontSize={"lg"}>
                  {question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel p={4} bgColor={"blue.700"} fontSize={"md"}>
              {answer}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default Faq;
