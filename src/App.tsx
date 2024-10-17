import Banner from "./components/Banner";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import bannerslides from "./data/banner";

function App() {
  return (
    <>
      <Navigation />
      <Banner slides={bannerslides} />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
