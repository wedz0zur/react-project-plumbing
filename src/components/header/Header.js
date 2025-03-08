import React from "react";
import "./Header.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

export const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const [open, setOpen] = React.useState(false);
  const [isChecked, setIsChecked] = React.useState(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <header>
      <div className="info">
        <nav className="navInfo">
          <Link className="header_link" to="info">
            О компании
          </Link>
          <Link className="header_link" to="payment&delivery">
            Оплата и доставка
          </Link>
          <Link className="header_link" to="shop">
            Магазины
          </Link>
          <Link className="header_link" to="contacts">
            Контакты
          </Link>
        </nav>
        <div className="user">
          <AccountBoxIcon />{" "}
          <Link className="header_link3" to="personal_account">
            Личный кабинет
          </Link>
        </div>
      </div>
      <div className="search">
        <Link to="/">
          <div className="logo"></div>
        </Link>
        <form className="form">
          <input
            className="inp"
            type="text"
            placeholder="Поиск по сайту..."
          ></input>
          <button className="search_btn" type="submit">
            <SearchIcon />
          </button>
        </form>
        <div className="num">
          <p className="num_p">+7 999 999-99-99</p>
          <p className="num_text">Звоните с 8:10 до 18:10</p>
        </div>

        <button onClick={() => setOpen(true)} className="search_btn2">
          Заказать звонок
        </button>

        <div className={`overlay animated ${open ? "show" : ""}`}>
          <div className="modal">
            <svg
              onClick={() => setOpen(false)}
              className="modal_x"
              height="25"
              viewBox="0 0 200 200"
              width="200"
            >
              <title />
              <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
            </svg>
            <p className="modal_p1">Оставьте заявку на обратный звонок</p>
            <p className="modal_p2">
              Заполните форму, наш специалист свяжется с вами в ближайшее время.
            </p>
            <form className="modal_form">
              <input
                type="text"
                placeholder="Ваше имя"
                className="modal_inp"
              ></input>
              <input
                type="text"
                placeholder="Номер телефона"
                className="modal_inp modal_inp2"
              ></input>
              <div className="check">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <p className="check_p2">
                  Я согласен(а) с Политикой конфиденциальности.
                </p>
              </div>
              <button className="modal_btn" disabled={!isChecked}>
                Оставить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="links">
        <div className="links_div">
          <div className="links_div_a">
            <Link className="lk" to="Stocks">
              Акции
            </Link>
          </div>
          <div className="links_div_a">
            <Link className="lk" to="Mixers">
              Смесители
            </Link>
          </div>
          <div className="links_div_a">
            <Link className="lk" to="Shower_systems">
              Душевые системы
            </Link>
          </div>
          <div className="links_div_a">
            <Link className="lk" to="Shower_racks">
              Душевые стойки
            </Link>
          </div>
          <div className="links_div_a">
            <Link className="lk" to="Spouts">
              Изливы
            </Link>
          </div>
          <div className="links_div_a">
            <Link className="lk" to="Accessories">
              Аксессуары
            </Link>
          </div>
        </div>
        <div className="basket">
          <Link to="/Cart" className="basket">
          <div className="basket_div">
            <ShoppingBasketIcon color="primary" />
            {cartItemsCount > 0 && (
              <div className='basket-count'><span className="basket_sp">{cartItemsCount}</span></div>
              
            )}
          </div>
            <p className="basket_p">Корзина</p>
          </Link>
        </div>
      </div>
    </header>
  );
};
