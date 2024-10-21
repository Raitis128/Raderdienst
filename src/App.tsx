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

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner slides={bannerslides} />
              <PhoneSection />
              <Services />
              <Faq faq={faq} />
              <Contacts />
            </>
          }
        />

        <Route path="/datenschutz" element={<PrivacyPolicy />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
