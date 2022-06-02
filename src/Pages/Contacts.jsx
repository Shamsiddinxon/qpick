import React from "react";
import Contact from "../Components/Contact/Contact";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

function Contacts() {
  return (
    <div className="appp">
      <Header />
      <div className="apps">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default Contacts;
