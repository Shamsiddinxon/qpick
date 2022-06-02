import React from "react";
// import { YMaps, Map, Placemark } from "react-yandex-maps";
import "./Order.css";
import karzinkaHook from "../../Hooks/KarzinkaHook";
import OrderPusta from "../OrderPusta/OrderPusta";
import data from "../../localization/content";
import langHook from "../../Hooks/langHook";

// function Order({}) {
function Order() {
  const [lang] = langHook();
  const [karzinka, setKarzinkas] = karzinkaHook();
  const [openModal, setOpenModal] = React.useState(false);

  let prise = 15000;
  let leng = 0;
  karzinka.map((i) => (prise += i.price));

  return (
    <div className="container">
      {openModal && <OrderPusta />}
      <form
        className="order"
        id="form"
        onSubmit={(e) => {
          e.preventDefault();
          setOpenModal(true);
          setKarzinkas([]);
        }}
      >
        <div className="order__left">
          <div className="order__left-prise">
            <h3>{data[lang].order_tit}</h3>
            <p>15000 sum</p>
          </div>
          <div className="order__map">
            {/* <YMaps>
              <Map
                width="100%"
                height={175}
                defaultState={{
                  center: [41.285766, 69.203664],
                  zoom: 13,
                }}
              >
                <Placemark geometry={[41.285766, 69.203664]} />
              </Map>
            </YMaps> */}
          </div>
          <div className="order__adress">
            <i className="fa-solid fa-location-dot fa-xl"></i>
            <h3 className="order__adres">{data[lang].order_tit1}</h3>
          </div>
          <div className="order__options">
            <select className="order__select-city" id="16" required>
              <option value="">{data[lang].order_opt} </option>
              <option value="toshkent">Tashkent</option>
            </select>
          </div>
          <div className="order__options">
            <input
              type="text"
              // value="rayon"
              className="order__input-rayon"
              placeholder={data[lang].order_opt1}
              required
            />
            <i className="fa-solid fa-pen fa-lg"></i>
          </div>
          <div className="order__inputs">
            <div className="order__optionss">
              <input
                type="text"
                // value="dom"
                className="order__dom"
                placeholder={data[lang].order_opt2}
                required
              />
              <i className="fa-solid fa-pen fa-lg"></i>
            </div>

            <div className="order__optionss">
              <input
                type="text"
                // value="podez"
                className="order__podez"
                placeholder={data[lang].order_opt3}
                required
              />
              <i className="fa-solid fa-pen fa-lg"></i>
            </div>
          </div>
          <div className="order__optionss">
            <input
              type="text"
              // value="kvartira"
              className="order__kvartira"
              placeholder={data[lang].order_opt4}
              required
            />
            <i className="fa-solid fa-pen fa-lg"></i>
          </div>
        </div>

        <div className="order__right">
          <div className="order__zakaz">
            <h3>{data[lang].order_zak}</h3>
            <div className="box">
              <p className="order__zakaz-desc1">{karzinka.length}x</p>
              <div className="box1">
                <div className="box3">
                  {karzinka.map((i) => {
                    return (
                      <div key={leng++} className="order__zakaz_item">
                        <p className="order__zakaz-desc">{i.productTitle}</p>
                        <p className="order__zakaz-prise">
                          {i.price} {data[lang].sum}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="order__zakaz_item">
                  <p className="order__zakaz-desc">{data[lang].order_zak1}</p>
                  <p className="order__zakaz-prise">15000 {data[lang].sum}</p>
                </div>
                <div className="order__zakaz_item">
                  <p className="order__zakaz-desc">{data[lang].order_zak2}</p>
                  <p className="order__zakaz-prise">
                    {prise} {data[lang].sum}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="order__oplata">
            <h3>{data[lang].order_zak3}</h3>
            <select name="prise" id="57787" required>
              <option value="viza">{data[lang].order_zak4}</option>
              <option value="viza">{data[lang].order_zak5}</option>
            </select>
            <p>{data[lang].order_zak6}</p>
          </div>
          <div className="order__number">
            <h3>{data[lang].order_zak7}</h3>
            <div>
              <input
                type="tell"
                // value="tell"
                placeholder="+998 9_ ___ __ __"
                required
              />
              <i className="fa-solid fa-pen fa-lg"></i>
            </div>
          </div>

          <button className="order__btn" type="submit">
            {data[lang].order_zak8}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Order;
