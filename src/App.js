import React from "react";
import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import OurWork from "./components/OurWork";
import Insights from "./components/Insights";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Cards />
      <OurWork />
      <Insights />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
