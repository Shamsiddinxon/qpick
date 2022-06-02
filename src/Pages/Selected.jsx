import React from "react";
import Header from "../Components/Header/Header";
import Selected from "../Components/Selected/Selected";
import Footer from "../Components/Footer/Footer";

function Selecteds() {
  return (
    <div className="appp">
      <Header />
      <div className="apps">
        <Selected />
      </div>
      <Footer />
    </div>
  );
}

export default Selecteds;
