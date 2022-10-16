import React from "react";

import Navbar from "./components/Navbar";
import Billboard from "./components/Billboard";
import Row from "./components/Row";
import Footer from "./components/Footer";

import "./App.css";
import "./normalize.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Billboard />
      <Row />
      <Row />
      <Footer />
    </div>
  );
}

export default App;
