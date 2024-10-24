import { Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import PhoneSection from "./components/PhoneSection";
import Services from "./components/Services";
import Faq from "./components/Faq";
import PrivacyPolicy from "./components/PrivacyPolicy";

import faq from "./data/faq";
import bannerslides from "./data/banner";
import Impressum from "./components/Impressum";
import { Flex } from "@chakra-ui/react";
import Partners from "./components/Partners";

function App() {
  return (
    <Flex direction={"column"} minH={"100vh"}>
      <Navigation />

      <Flex as="main" flex="1" direction="column" bgColor={"blue.800"}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner slides={bannerslides} />
                <PhoneSection />
                <Services />
                <Faq faq={faq} />
                <Partners />
                <Contacts />
              </>
            }
          />
          <Route path="/datenschutz" element={<PrivacyPolicy />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
      </Flex>

      <Footer />
    </Flex>
  );
}

export default App;
