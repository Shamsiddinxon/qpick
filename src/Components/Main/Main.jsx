import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import SinglItem from "../../Hooks/singlItemHook";
import langHook from "../../Hooks/langHook";
import data from "../../localization/content";
import Skeleton from "react-loading-skeleton";
import Skelet from "../Skeleton/card";

import "./Main.css";

function Main() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [, setSinglItem] = SinglItem();
  const [lang] = langHook();
  const [isLoading, setIsLoading] = useState(true);
  const [lov, setLov] = React.useState(false);
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );
  const [data1, setData] = useState([]);
  let setId = 0;

  const handleChange = (event) => {
    const id = event.target.value;
    list.map((i) => {
      if (i.id == id) {
        i.lov = !i.lov;
      }
    });
    setLov(list.filter((i) => i.lov == true));
  };

  useEffect((e) => {
    setIsLoading(true);
    try {
      fetch("https://qpik.herokuapp.com/salom")
        .then((res) => res.json())
        .then((datas) => {
          setData(datas.data);
          setList([
            ...datas.data[0].product,
            ...datas.data[1].product,
            ...datas.data[2].product,
          ]);
          window.localStorage.setItem(
            "list",
            JSON.stringify([
              ...datas.data[0].product,
              ...datas.data[1].product,
              ...datas.data[2].product,
            ])
          );
          setIsLoading(false);
          console.log("fech");
        });
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  }, []);
  return (
    <div className="main container">
      {isLoading ? (
        <div>

        <p className="main__chexol-desc">
          <Skeleton className="loader1"/>
        </p>
        <div className="main__list">
          <div className="main__naushnik-item">
            <Skelet loader />
          </div>
          <div className="main__naushnik-item">
            <Skelet loader />
          </div>
          <div className="main__naushnik-item">
            <Skelet loader />
          </div>
        </div>
        </div>
      ) : (
        <div>
          <p className="main__chexol-desc">{data[lang].main_chexol}</p>
          <div className="main__list">
            {data1
              .filter((i) => i.name === "chexol")
              .map((item) =>
                item.product.map((i) => (
                  <div key={(setId += 1)} className="main__naushnik-item">
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

                    <button className="main__naushnik-btn1 ">
                      <i className="fa-solid fa-heart fa-lg"></i>
                    </button>

                    <div className="main__naushnik-item-b">
                      <div>
                        <p className="main__naushnik-item-desc">
                          {i.productTitle}
                        </p>
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
                ))
              )}
          </div>

          <div>
            <p className="main__chexol-desc">{data[lang].main_naushnik}</p>
            <div className="main__list">
              {data1
                .filter((i) => i.name === "kabelsiz")
                .map((item) =>
                  item.product.map((i) => (
                    <div key={(setId += 1)} className="main__naushnik-item">
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
                          <p className="main__naushnik-item-desc">
                            {i.productTitle}
                          </p>
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
                  ))
                )}
            </div>
          </div>

          <div>
            <p className="main__chexol-desc">{data[lang].main_naushnik1}</p>
            <div className="main__list">
              {data1
                .filter((i) => i.name === "naushnik")
                .map((item) =>
                  item.product.map((i) => (
                    <div key={(setId += 1)} className="main__naushnik-item">
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
                          <p className="main__naushnik-item-desc">
                            {i.productTitle}
                          </p>
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
                  ))
                )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
