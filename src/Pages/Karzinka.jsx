import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Korzinka from "../Components/Korzinka/Korzinka";
import KorzinkaPusta from "../Components/KorzinkaPusta/KorzinkaPusta";
import karzinkaHook from "../Hooks/KarzinkaHook";

function Karzinka() {
  const [karzinka] = karzinkaHook();

  const arr = () => {
    if (karzinka.length > 0) {
      return <Korzinka />;
    } else {
      return <KorzinkaPusta />;
    }
  };

  return (
    <div className="appp">
      <Header />
      <div className="apps">{arr()}</div>
      <Footer />
    </div>
  );
}

export default Karzinka;
