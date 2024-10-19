import Banner from "./components/Banner";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import "./app.css";
import PhoneSection from "./components/PhoneSection";
import Services from "./components/Services";
import Faq from "./components/Faq";

import faq from "./data/faq";
import bannerslides from "./data/banner";

function App() {
  return (
    <>
      <Navigation />
      <Banner slides={bannerslides} />
      <PhoneSection />
      <Services />
      <Faq faq={faq} />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
