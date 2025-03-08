import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../../store/action/cartActions";
import './Cart.css';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart">
      <h2 style={{marginLeft:"46%"}}>Корзина</h2>
      {cartItems.length === 0 ? (
         <div className="cart_div_8"><p style={{color: 'red'}}>Ваша корзина пуста</p></div>
      ) : (
        <div className="cart_div">
          {cartItems.map((item) => (
            <div key={item.id} className="product">
              <img src={item.image} className="product_img" alt={item.title}></img>
              <div className="cart-item-info">
                <p className="catalog_p1">Артикул: {item.article}</p>
                <p className="catalog_p2">
                  {item.title} {item.info}
                </p>
                <p className="catalog_p3">Коллекция: {item.collection}</p>
                <p className="catalog_p4">Цена: {item.price}</p>
                <p className="quantity">Количество: {item.quantity}</p>
                <button className="delete_btn" onClick={() => handleRemove(item.id)}>Удалить</button>
              </div>
            </div>
          ))}<button className="clear_btn" onClick={handleClearCart}>Очистить корзину</button>
        </div>
      )}
      
    </div>
  );
};

export default Cart;
