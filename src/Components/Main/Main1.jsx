import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import SinglItem from "../../Hooks/singlItemHook";
import langHook from "../../Hooks/langHook";
import "./Main.css";
import data from "../../localization/content";

function Main() {
  const [, setSinglItem] = SinglItem();
  const [lang] = langHook();
  const [chexol, setChexol] = useState([""]); //naushnikList jsx
  const [nau, setNau] = useState([""]); //naushnikList jsx
  const [nau2, setNau2] = useState([""]); //naushnikList jsx
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );

  console.log();

  function dataa() {
    try {
      fetch("https://qpik.herokuapp.com/salom")
        .then((res) => res.json())
        .then((datas) => {
          setList([...datas.chexol, ...datas.kabelsiz, ...datas.naushnik]);
          window.localStorage.setItem(
            "list",
            JSON.stringify([
              ...datas.chexol,
              ...datas.kabelsiz,
              ...datas.naushnik,
            ])
          );

          let item = datas.chexol.map((i) => {
            return (
              <NavLink
                onClick={(e) => {
                  setSinglItem(list.filter((item) => item.id === i.id));
                  console.log(i.id);
                }}
                to="/singleproduct"
                key={i.id}
                className="main__chexol-item"
              >
                <img src={i.productImage} alt="" />
                <p className="main__chexol-item-desc">{i.productTitle}</p>
              </NavLink>
            );
          });

          let naush = datas.naushnik.map((i) => {
            return (
              <div key={i.id} className="main__naushnik-item">
                <NavLink
                  className="main__naushnik-item-imgg"
                  to="/singleproduct"
                  onClick={(e) => {
                    setSinglItem(list.filter((item) => item.id === i.id));
                  }}
                >
                  <img id={i.id} src={i.productImage} alt="" />
                </NavLink>
                <NavLink
                  className="main__btn"
                  onClick={(e) => {
                    setSinglItem(list.filter((item) => item.id === i.id));
                    console.log(i.id);
                  }}
                  key={i.id}
                  to="/singleproduct"
                >
                  <i className="fa-solid fa-align-right fa-lg"></i>
                </NavLink>

                <button className="main__naushnik-btn ">
                  <i className="fa-regular fa-heart fa-lg"></i>
                </button>

                <button className="main__naushnik-btn1 ">
                  <i className="fa-solid fa-heart fa-lg"></i>
                </button>

                <div className="main__naushnik-item-b">
                  <div>
                    <p className="main__naushnik-item-desc">{i.productTitle}</p>
                    <p className="main__naushnik-item-price">
                      {i.price} {data[lang].sum}
                    </p>
                  </div>
                  <p>
                    <i className="fa-solid fa-star"></i>
                    4.7
                  </p>
                </div>
              </div>
            );
          });

          let items = datas.kabelsiz.map((i) => {
            return (
              <div key={i.id} className="main__naushnik-item">
                <NavLink
                  to="/singleproduct"
                  onClick={(e) => {
                    setSinglItem(list.filter((item) => item.id === i.id));
                  }}
                  className="main__naushnik-item-imgg"
                >
                  <img id={i.id} src={i.productImage} alt="" />
                </NavLink>
                <NavLink
                  className="main__btn"
                  onClick={(e) => {
                    setSinglItem(list.filter((item) => item.id === i.id));
                  }}
                  key={i.id}
                  to="/singleproduct"
                >
                  <i className="fa-solid fa-align-right fa-lg"></i>
                </NavLink>
                <button className="main__naushnik-btn ">
                  <i className="fa-regular fa-heart fa-lg"></i>
                </button>

                <button className="main__naushnik-btn1 ">
                  <i className="fa-solid fa-heart fa-lg"></i>
                </button>
                <div className="main__naushnik-item-b">
                  <div>
                    <p className="main__naushnik-item-desc">{i.productTitle}</p>
                    <p className="main__naushnik-item-price">
                      {i.price} <span>{data[lang].sum}</span>
                    </p>
                  </div>
                  <p>
                    <i className="fa-solid fa-star"></i>
                    4.7
                  </p>
                </div>
              </div>
            );
          });

          setChexol(item);
          setNau(naush);
          setNau2(items);
        });
    } catch (err) {
      console.error(err);
    }
  }

  // data();
  useEffect((e) => {
    dataa();
  }, []);

  return (
    <div className="main">
      <div className="container">
        {/* CHEXOL */}
        <div className="main__chexol">
          <p className="main__chexol-desc">{data[lang].main_chexol}</p>
          <ul className="main__chexol-list">{chexol}</ul>
        </div>

        {/* NAUSHNIK */}
        <div className="main__naushnik">
          <p className="main__naushnik-desc">{data[lang].main_naushnik}</p>
          <div className="main__naushnik-list">{nau}</div>
        </div>

        {/* KABELSIZ NAUSHNIKLAR */}
        <div className="main__naushnik">
          <p className="main__naushnik-desc">{data[lang].main_naushnik}</p>
          <ul className="main__naushnik-list">{nau2}</ul>
        </div>
      </div>
    </div>
  );
}

export default Main;
