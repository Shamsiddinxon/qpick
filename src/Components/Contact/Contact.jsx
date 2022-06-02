import React from "react";
// import { YMaps, Map, Placemark } from "react-yandex-maps";
import "./Contact.css";
import vk from "../../Assests/img/VK.svg";
import watsap from "../../Assests/img/watsapp.svg";
import ins from "../../Assests/img/ins.png";
import tel from "../../Assests/img/tel.svg";
import data from "../../localization/content";
import langHook from "../../Hooks/langHook";

function Contact() {
  const [lang] = langHook();
  return (
    <div className="container contacts">
      <div className="contact">
        <div className="left">
          <div className="cotact__left">
            <h3>{data[lang].cont}</h3>
            <div className="contact__map">
              {/* <YMaps>
                <Map
                  width="100%"
                  height={424}
                  defaultState={{
                    center: [41.285766, 69.203664],
                    zoom: 16,
                  }}
                >
                  <Placemark geometry={[41.285766, 69.203664]} />
                </Map>
              </YMaps> */}
            </div>
            <div className="contact__title1">
              <i className="fa-solid fa-location-dot fa-xl"></i>
              <div className="contact__title2">
                <h3>{data[lang].cont1}</h3>
                <p>{data[lang].cont2}</p>
              </div>
            </div>
          </div>

          <div className="contact_tell">
            <a className="contact_title" href="tel:+777777777">
              <i className="fa-solid fa-phone-flip"></i>
              +77 7777 77777
            </a>
          </div>
        </div>

        <div className="contact__right">
          <a href="#">
            <img src={vk} alt="" width="53" />
          </a>

          <a href="#">
            <img src={watsap} alt="" width="49" />
          </a>

          <a href="#">
            <img src={ins} alt="" width="39" height="39" />
          </a>

          <a href="#">
            <img src={tel} alt="" width="48" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Contact;
