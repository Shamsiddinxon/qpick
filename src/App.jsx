import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Singleproduct from "./Pages/Singleproduct";
import Selected from "./Pages/Selected";
import Contacts from "./Pages/Contacts";
import Service from "./Pages/Service";
import Ordering from "./Pages/Ordering";
import Karzinka from "./Pages/Karzinka";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singleproduct" element={<Singleproduct />} />
          <Route path="/selected" element={<Selected />} />
          <Route path="/karzinka" element={<Karzinka />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/service" element={<Service />} />
          <Route path="/ordering" element={<Ordering />} />
        </Routes>
      </div>
    );
  }
}

export default App;
