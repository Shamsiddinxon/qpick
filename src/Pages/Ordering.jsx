import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Order from "../Components/Order/Order";

function Ordering() {
  return (
    <div className="appp">
      <Header />
      <div className="apps">
        <Order />
      </div>
      <Footer />
    </div>
  );
}

export default Ordering;
