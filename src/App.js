import React from "react";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Footer } from "./components/footer/Footer";
import { Routes,  Route} from "react-router-dom";
import Cart from "./components/cart/Cart";
import { Catalog } from "./components/catalog/Catalog";
import { ProductPage } from "./components/productPage/ProducPage";


import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <Footer />

      
    </div>
  );
}

export default App;
