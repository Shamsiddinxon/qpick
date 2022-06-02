import React from "react";
import "./Korzinka.css";
// import { YMaps, Map, Placemark } from "react-yandex-maps";
import KorzinlaHook from "../../Hooks/KarzinkaHook";
import { NavLink } from "react-router-dom";
import data from "../../localization/content";
import langHook from "../../Hooks/langHook";

function Korzinka() {
  const [lang] = langHook();
  const [karzinka, setKarzinkas] = KorzinlaHook();
  let id = 0;
  let prise = 15000;
  karzinka.map((i) => (prise += i.price));

  return (
    <div className="container">
      <div className="korzinka">
        <div className="korzinka__top">
          <div className="korzinka__list">
            <h3 className="korzinka__title">{data[lang].karz1}</h3>

            {karzinka.map((i) => {
              return (
                <div key={id++} className="korzinka__item">
                  <i
                    id={i.id}
                    onClick={(e) => {
                      const itemId = e.target.id - 0;
                      setKarzinkas(
                        karzinka.filter((items) => items.id !== itemId)
                      );
                    }}
                    className="fa-solid fa-trash fa-xl"
                  ></i>
                  <div className="korzinka__item-top">
                    <div className="korzinka__item_img_box">
                      <img
                        className="korzinka__item_img"
                        src={i.productImage}
                        alt=""
                      />
                    </div>
                    <div>
                      <h3 className="korzinka__item-title">{i.productTitle}</h3>
                      <p className="korzinka__item-prise">
                        {i.price} {data[lang].sum}
                      </p>
                    </div>
                  </div>
                  <div className="korzinka__item-bot">
                    <div className="boxx1">
                      <div className="korzinka__bot-btns">
                        <i className="fa-solid fa-circle-plus fa-2xl"></i>
                        <p>1</p>
                        <i className="fa-solid fa-circle-minus fa-2xl"></i>
                      </div>
                    </div>
                    <p className="korzinka__bot-price">
                      {i.price} {data[lang].sum}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="korzinka__red">
              <h3>{data[lang].karz1}</h3>

              <div className="korzinka__map">
                {/* <YMaps>
                  <Map
                    width="100%"
                    height={200}
                    defaultState={{
                      center: [41.285766, 69.203664],
                      zoom: 16,
                    }}
                  >
                    <Placemark geometry={[41.285766, 69.203664]} />
                  </Map>
                </YMaps> */}
              </div>

              <div className="korzinka__red-bot">
                <p className="korzinka__red-desc">
                  <i className="fa-solid fa-truck-fast"></i>
                  {data[lang].karz2}
                </p>

                <p className="korzinka__red-price">15000 {data[lang].sum}</p>
              </div>
            </div>
          </div>
          <div className="korzinka__itog">
            <p>
              {data[lang].karz3}
              <span>
                {prise} {data[lang].sum}
              </span>
            </p>
            <div className="korzinka__itog_btns">
              <NavLink className="korzinka__itog_btn" to="/ordering">
                {data[lang].karz4}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Korzinka;
