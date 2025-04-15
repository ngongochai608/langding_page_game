import Header from "./components/Header";
import Banner from "./sections/Banner";
import ButtonScroll from "./components/ButtonScroll"
import AboutUs from "./sections/AboutUs";
import Witch from "./components/Witch";
import OurGames from "./sections/OurGames";
import OurPartner from "./sections/OurPartner";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner heading="We’re Getting Ready" />
      <ButtonScroll />
      <AboutUs />
      <Witch />
      <OurGames />
      <OurPartner />
      <Footer />
    </div>
  );
}

export default App;
