import React from "react";
import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurWork from "./components/OurWork";
import Insights from "./components/Insights";
import Services from "./components/Services";
import GetInTouch from "./components/GetInTouch";
import News from "./components/News";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Cards />
      <OurWork />
      <Services/>
      <Insights />
      <GetInTouch/>
      <Footer />
      {/* <News /> */}

    </div>
  );
}

export default App;
