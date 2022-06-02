import React from "react";
import Service from "../Components/Service/Service";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

function Services() {
  return (
    <div className="appp">
      <Header />
      <div className="apps">
        <Service />
      </div>
      <Footer />
    </div>
  );
}

export default Services;
