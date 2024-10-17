import Banner from "./components/Banner";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import bannerslides from "./data/banner";
import "./app.css";
import PhoneSection from "./components/PhoneSection";

function App() {
  return (
    <>
      <Navigation />
      <Banner slides={bannerslides} />
      <Contacts />
      <PhoneSection />
      <Footer />
    </>
  );
}

export default App;
