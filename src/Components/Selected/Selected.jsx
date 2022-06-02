import React from "react";
import "./Selected.css";
import { NavLink } from "react-router-dom";
import imgChexol from "../../Assests/img/chexol.png";

function Selected() {
  return (
    <div className="container">
      <div className="selected">
        <p className="main__chexol-desc">Избранное</p>
        <div className="selected-list ">
          <NavLink to="/singleproduct" className="main__chexol-item">
            <img src={imgChexol} alt="" />
            <p className="main__chexol-item-desc">Стеклянные</p>
          </NavLink>

          <NavLink to="/singleproduct" className="main__chexol-item">
            <img src={imgChexol} alt="" />
            <p className="main__chexol-item-desc">Стеклянные</p>
          </NavLink>

          <NavLink to="/singleproduct" className="main__chexol-item">
            <img src={imgChexol} alt="" />
            <p className="main__chexol-item-desc">Стеклянные</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Selected;
