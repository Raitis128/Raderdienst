import Banner from "./components/Banner";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Map from "./components/Map";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Banner />
      <Contacts />
      <Map width={"100%"} height={300}/>
      <Footer />
    </>
  );
}

export default App;
