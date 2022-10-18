import React from "react";

import Navbar from "./components/Navbar";
import Billboard from "./components/Billboard";
import Row from "./components/Row";
import Footer from "./components/Footer";

import bigList from "./api/movies.json";
import styles from "./App.module.css";
import "./normalize.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Billboard />
      <Row title="My List" list={bigList.mylist} />
      <Row title="Recommendations" list={bigList.recommendations} />
      <Footer />
    </div>
  );
}

export default App;
