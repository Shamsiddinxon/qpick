import React from "react";
import "./KorzinkaPusta.css";
import imgPusta from "../../Assests/img/Illustration.png";
import { NavLink } from "react-router-dom";
import data from "../../localization/content";
import LangHook from "../../Hooks/langHook";

function KorzinkaPusta() {
  let [lang] = LangHook();
  return (
    <div className="container">
      <div className="korzinkaPusta">
        <img src={imgPusta} alt="" />
        <h2>{data[lang].karzP}</h2>
        <p>{data[lang].karzP1}</p>
        <NavLink className="korzinkaPusta__a" to="/">
          {data[lang].karzP2}
        </NavLink>
      </div>
    </div>
  );
}

export default KorzinkaPusta;
