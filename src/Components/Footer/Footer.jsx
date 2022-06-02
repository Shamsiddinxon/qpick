import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import langHook from "../../Hooks/langHook";
import data from "../../localization/content";

function Footer() {
  let [lang, setLang] = langHook();

  return (
    <div className="container">
      <div className="footer">
        <NavLink to="/" className="header__logo">
          QPICK
        </NavLink>
        <div className="footer__menu">
          <NavLink className="footer__menu-item" to="/karzinka">
            {data[lang].footer_kar}
          </NavLink>
          <NavLink className="footer__menu-item" to="/contact">
            {data[lang].footer_kon}
          </NavLink>

          <NavLink className="footer__menu-item" to="/selected">
            {data[lang].footer_select}
          </NavLink>
        </div>

        <div className="footer__selects">
          <NavLink className="footer__selects_linc" to="/service">
            {data[lang].footer_usluga}
          </NavLink>
          <div>
            <i className="fa-solid fa-globe fa-lg"></i>
            <button
              onClick={(e) => setLang("uz")}
              className={data[lang].langBtnUz}
            >
              Uz
            </button>
            <button
              onClick={(e) => setLang("ru")}
              className={data[lang].langBtnRu}
            >
              Рус
            </button>
            <button
              onClick={(e) => setLang("eng")}
              className={data[lang].langBtnEng}
            >
              Eng
            </button>
          </div>
        </div>
        <div className="footer__icons">
          <a href="https://www.instagram.com/shamsiddinxon01/">
            <i className="fa-brands fa-instagram fa-2xl"></i>
          </a>

          <a href="https://t.me/Shodlikklinikasi">
            <i className="fa-brands fa-telegram fa-2xl"></i>
          </a>

          <a href="https://www.instagram.com/shamsiddinxon01/">
            <i className="fa-brands fa-whatsapp fa-2xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
