import React from "react";
import "./OrderPusta.css";
import { NavLink } from "react-router-dom";
import data from "../../localization/content";
import langHook from "../../Hooks/langHook";

function OrderPusta() {
  const [lang] = langHook();
  return (
    <div className="container">
      <div className="pusta">
        <p>{data[lang].order_P}</p>
      </div>
      <NavLink to="/" className="overlay"></NavLink>
    </div>
  );
}

export default OrderPusta;
