import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "../Assets/css/App.scss";
import Header from "./Header";
import Us from "./Us";
import Offres from "./Offres";
import Temoignage from "./Temoignage";
import Partenaire from "./Partenaire";
import Footer from "./Footer";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Header />
      <section>
        <Us />
        <Offres />
        <Temoignage />
        <Partenaire />
      </section>
      <Footer />
    </div>
  );
}

export default App;
