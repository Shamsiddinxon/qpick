import React from "react";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import Main from "../Components/Main/Main";
import Footer from "../Components/Footer/Footer";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="apps">
        <Hero />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
