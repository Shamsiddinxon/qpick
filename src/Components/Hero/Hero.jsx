import React from "react";
import "./Hero.css";
import heroImg from "../../Assests/img/iPhone13Pro.png";
import data from "../../localization/content";
import langHook from "../../Hooks/langHook";

function Hero() {
  let [lang] = langHook();
  return (
    <div className="container ">
      <div className="hero hero__container">
        <div className="hero__box">
          <h2 className="hero__title">{data[lang].hero}</h2>
          <img className="hero__img" src={heroImg} alt="iPhone 13 Pro Max" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
