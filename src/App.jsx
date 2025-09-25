import "./index.css";
import React, { Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import Progress from "./components/Progress/Progress";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}

export default App;
