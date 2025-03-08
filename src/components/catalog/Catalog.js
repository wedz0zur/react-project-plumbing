import React, { useEffect } from "react";
import "./Catalog.css";
import Filters from "./Filter";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/action/cartActions";
import { fetchData } from "../../store/product";
import { Link } from "react-router-dom";

export const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData()); 
  }, [dispatch]);

  const data = useSelector((state) => state.items.catalog);
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartItem = (id) => cartItems.find((item) => item.id === id);

  return (
    <section className="section_catalog">
      <div className="section_catalog_div">
        <p className="catalog_p">Каталог</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Filters />
          <div className="catalog">
            {data.length > 0 ? (
              data.map((item) => {
                const cartItem = getCartItem(item.id);
                return (
                  <div className="product" key={item.id}>
                    <img src={item.image} className="product_img" alt={item.title}></img>
                    <p className="catalog_p1">Артикул: {item.article}</p>
                    <p className="catalog_p2">
                      {item.title} {item.info}
                    </p>
                    <p className="catalog_p3">Коллекция: {item.collection}</p>
                    <p className="catalog_p4">Цена: {item.price}</p>
                    {!cartItem ? (
                      <button
                        className="catalog_btn"
                        onClick={() => handleAddToCart(item)}
                      >
                        В корзину
                      </button>
                    ) : (
                      <div className="quantity-controls">
                        <button
                          className="quantity-btn"
                          onClick={() => handleRemoveFromCart(item.id)}
                        >
                          -
                        </button>
                        <span className="quantity-count">{cartItem.quantity}</span>
                        <button
                          className="quantity-btn"
                          onClick={() => handleAddToCart(item)}
                        >
                          +
                        </button>
                      </div>
                    )}
                    <Link to={`/product/${item.id}`} className="catalog_btn">
                      Информация о товаре
                    </Link>
                  </div>
                );
              })
            ) : (
              <h1>Каталог пуст</h1>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
