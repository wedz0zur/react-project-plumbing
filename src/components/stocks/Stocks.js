import React from "react";
import "./Stocks.css";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export const Stocks = () => {
  return (
    <section className="section2">
      <div className="stocks">
        <div className="stocks_text">
          <p className="stocks_text_p">Актуальные акции</p>
          <Link to="Stocks">
            <button className="stoks_btn">
              {" "}
              Все акции <KeyboardArrowRightIcon />
            </button>
          </Link>
        </div>
        <div className="stocks_div">
          <div className="stocks_div1">
            <div className="stocks_div1_img1"></div>
            <p className="stocks_p1">Акция действует до 11.11.2023 </p>
            <p className="stocks_p2">Скидка 15% на все смесители</p>
            <p className="stocks_p3">Предлагаем смесители для кухни, ванны, душа по низким ценам! Акция действует только на товары в наличии.</p>
            <Link className="stocks_link" to="MoreDetailed">Подробнее  <KeyboardArrowRightIcon /></Link>
          </div>
          <div className="stocks_div1">
            <div className="stocks_div1_img2"></div>
            <p className="stocks_p1">Акция действует до 30.11.2023  </p>
            <p className="stocks_p2">Осенняя распродажа сантехнических аксессуаров для ванной комнаты</p>
            <p className="stocks_p3">Большой выбор аксессуаров для ванной со скидками до 40%. Товары со скидкой отмечены в каталоге красной табличкой SALE.</p>
            <Link className="stocks_link" to="MoreDetailed">Подробнее  <KeyboardArrowRightIcon /></Link>
          </div>
          <div className="stocks_div1">
            <div className="stocks_div1_img3"></div>
            <p className="stocks_p1">Акция действует до 31.12.2023  </p>
            <p className="stocks_p2">Душевые системы по выгодным ценам!</p>
            <p className="stocks_p3">Душевые системы, стойки и гарнитуры по выгодным ценам. Доставка в любой регион России. Гарантия от производителя.</p>
            <Link className="stocks_link" to="MoreDetailed">Подробнее  <KeyboardArrowRightIcon /></Link>
          </div>
        </div>
      </div>
    </section>
  );
};
