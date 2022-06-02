import React from "react";
import Singlcard from "../Components/Singlcard/Singlcard";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

function Singleproduct() {
  return (
    <div className="appp">
      <Header />
      <div className="apps">
        <Singlcard />
      </div>
      <Footer />
    </div>
  );
}

export default Singleproduct;
