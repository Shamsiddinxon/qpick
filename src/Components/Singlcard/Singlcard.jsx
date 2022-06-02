import React from "react";
import "./Singlcard.css";
import SinglItem from "../../Hooks/singlItemHook";
import KarzinkaHook from "../../Hooks/KarzinkaHook";
import langHook from "../../Hooks/langHook";
import data from "../../localization/content";
import { NavLink } from "react-router-dom";

function Singlcard() {
  const [lang] = langHook();
  const [singlitem] = SinglItem();
  const [karzinka, setKarzinkas] = KarzinkaHook();

  function submits() {
    if (!karzinka.includes(singlitem[0])) {
      setKarzinkas([...karzinka, ...singlitem]);
    } else {
      console.log("");
    }
  }

  return (
    <div className="container">
      <div className="singlcard">
        <div className="singlcard__top">
          <button className="singlcard__top-btn">
            <i className="fa-regular fa-heart fa-lg"></i>
            <i className="fa-solid fa-heart fa-lg"></i>
          </button>
          <div className="singlcard__top-cards">
            <div>
              <img src={singlitem[0].image[0]} alt="" />
            </div>

            <div>
              <img src={singlitem[0].image[1]} alt="" />
            </div>

            <div>
              <img src={singlitem[0].image[2]} alt="" />
            </div>

            <div>
              <img src={singlitem[0].image[3]} alt="" />
            </div>

            <div>
              <img src={singlitem[0].image[4]} alt="" />
            </div>
          </div>
          <div className="singlcard__bot">
            <h3>{singlitem[0].productTitle}</h3>
            <p>
              {singlitem[0].price} {data[lang].sum} <span>-20%</span>
            </p>
          </div>
        </div>

        <div className="singlcard__bot">
          <div className="singlcard__bot-left">
            <div className="singlcard__bot-title">
              <h3>{data[lang].singlcard_tit}</h3>
            </div>
            <div className="singlcard__bot-desc">
              <p>{data[lang].singlcard_desc}</p>
              <p>{data[lang].singlcard_desc1}</p>
              <p>{data[lang].singlcard_desc2}</p>
            </div>
          </div>

          <div className="singlcard__bot-right">
            <NavLink
              to="/ordering"
              onClick={(e) => {
                submits();
              }}
              className="singlcard__bot-right-b"
            >
              {data[lang].singlcard_btn}
            </NavLink>

            <button
              type="submit"
              className="singlcard__bot-right-btn"
              onClick={(e) => {
                submits();
              }}
            >
              <i className="fa-solid fa-cart-plus fa-lg"></i>
              {data[lang].singlcard_btn1}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Singlcard;
