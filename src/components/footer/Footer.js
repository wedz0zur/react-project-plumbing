import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PlaceIcon from '@mui/icons-material/Place';
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="footer_div1">
        <div className="footer_logo">
          <Link to="/">
            <div className="footer_logo_img"></div>
          </Link>
          <div className="wats">
            <img className="wats_img" src="/images/Whatsapp.svg"></img>
            <p className="wats_p">Написать в WhatsApp</p>
          </div>
        </div>
        <div className="footer_catalog">
          <p className="footer_p1">КАТАЛОГ</p>
          <Link className="footer_link" to="Mixers">
            Смесители
          </Link>
          <Link className="footer_link" to="Shower_systems">
            Душевые системы
          </Link>
          <Link className="footer_link" to="Shower_racks">
            Душевые стойки
          </Link>
          <Link className="footer_link" to="Spouts">
            Изливы
          </Link>
          <Link className="footer_link" to="Accessories">
            Аксессуары
          </Link>
        </div>
        <div className="footer_catalog">
          <p className="footer_p1">КАТАЛОГ</p>
          <Link className="footer_link" to="Stocks">
            Акции
          </Link>
          <Link className="footer_link" to="info">
            О компании
          </Link>
          <Link className="footer_link" to="payment&delivery">
            Оплата и доставка
          </Link>
          <Link className="footer_link" to="shop">
            Магазины
          </Link>
          <Link className="footer_link" to="contacts">
            Контакты
          </Link>
        </div>
        <div className="footer_info">
          <p className="footer_p2">
            Узнавайте об акциях и новостях первыми, подпишитесь на рассылку
          </p>
          <form className="footer_form">
            <input
              className="footer_inp"
              type="email"
              placeholder="Электронная почта"
            ></input>
            <button className="footer_btn" type="submit">
            Подписаться <KeyboardArrowRightIcon className="rt2"/>
            </button>
          </form>
          <p className="footer_p3">+7 999 999-99-99</p>
          <p className="footer_p4"><PlaceIcon className="footer_icon"/> г. Новосибирск, улица, дом, офис</p>
        </div>
      </div>
      <Link to="Stocks"></Link>
      <div className="footer_div2">
        <Link className="footer_link2">© DEMM RUBINETTERIA 2023</Link>
        <Link className="footer_link we">Договор оферты</Link>
        <Link className="footer_link we">Пользовательское соглашение</Link>
      </div>
    </footer>
  );
};
