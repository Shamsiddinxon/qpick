import React from "react";
import "./Service.css";
import data from "../../localization/content";
import langHook from "../../Hooks/langHook";

function Service() {
  const [lang] = langHook();
  return (
    <div className="container">
      <div className="service">
        <div className="service__item">
          <h3>{data[lang].ser}</h3>
          <p>{data[lang].ser1}</p>
        </div>

        <div className="service__item">
          <h3>{data[lang].ser}</h3>
          <p>{data[lang].ser1}</p>
        </div>
      </div>
    </div>
  );
}

export default Service;
