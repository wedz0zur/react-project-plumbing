import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchData } from "../../store/product";
import "./ProductPage.css";

export const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const catalog = useSelector((state) => state.items.catalog);
  const product = catalog.find((item) => String(item.id) === id);

  if (!product) {
    return (
      <>
        <Link to="/Catalog">назад</Link>
        <h1>Товар не найден</h1>
      </>
    );
  }

  return (
    <section className="page_secton">
      <Link className="page_a" to="/Catalog">
        <button className="btn_page"><p>⬅ назад</p></button>
      </Link>
      <div className="page_pr" style={{ padding: "20px" }}>
        <img
          className="img_page"
          src={product.image}
          style={{ width: "300px", marginBottom: "20px" }}
        />
        <div className="asd">
          <p className="p_page1">
            {product.title} {product.info}
          </p>
          <hr className="hr_page"></hr>

          <div className="sd"><p className="kl">Цена:</p><p className="kl3"> {product.price} руб.</p></div>

          <hr className="hr_page"></hr>

          <div className="sd"><p className="kl">Артикул:</p><p className="kl3"> {product.article}</p></div>

          <hr className="hr_page"></hr>

          <div className="sd"><p className="kl">Коллекция:</p><p className="kl3"> {product.collection}</p></div>

          <hr className="hr_page"></hr>
        </div>
      </div>
      <p>
        <p className="kl4"><p className="kl2">Описание: </p><br></br> {product.description}</p>
      </p>
    </section>
  );
};
