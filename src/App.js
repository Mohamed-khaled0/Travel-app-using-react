import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Search from "./components/Search";
import Selects from "./components/Selects";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />

    </div>
  );
}

export default App;
