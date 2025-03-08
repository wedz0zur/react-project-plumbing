import React, { useState } from "react";
import './Filter.css'

const Filters = ({ onApplyFilters }) => {
  const [selectedCollections, setSelectedCollections] = useState([]);
  const [priceRange, setPriceRange] = useState([10000, 55000]); // Пример диапазона цен

  const collections = [
    "ACIARIUM INOX",
    "ALKES",
    "DRAKE",
    "ELITE",
    "ERYOS",
    "GRANGE",
    "IVORY",
    "JAGO",
    "KLARYNG",
    "KUOVADIS",
  ];

  const handleCollectionChange = (e) => {
    const { value, checked } = e.target;
    setSelectedCollections((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handlePriceChange = (e, index) => {
    const updatedPrice = [...priceRange];
    updatedPrice[index] = Number(e.target.value);
    setPriceRange(updatedPrice);
  };

  const resetFilters = () => {
    setSelectedCollections([]);
    setPriceRange([20000, 85000]);
  };

  return (
    <div className="filters">
      <h3>Фильтры</h3>

      
      <div className="filter-section">
        <h4>Коллекция</h4>
        {collections.map((collection, idx) => (
          <label key={idx}>
            <input
              type="checkbox"
              value={collection}
              checked={selectedCollections.includes(collection)}
              onChange={handleCollectionChange}
            />
            {collection}
          </label>
        ))}
      </div>

     
      <div className="filter-section">
        <h4>Цена, руб.</h4>
        <div className="price-slider">
          <input
            type="number"
            min="0"
            max="100000"
            value={priceRange[0]}
            onChange={(e) => handlePriceChange(e, 0)}
          />
          <input
            type="number"
            min="0"
            max="100000"
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(e, 1)}
          />
        </div>
        <div className="slider">
          <input
            type="range"
            min="0"
            max="100000"
            value={priceRange[0]}
            onChange={(e) => handlePriceChange(e, 0)}
          />
          <input
            type="range"
            min="0"
            max="100000"
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(e, 1)}
          />
        </div>
      </div>

      <button onClick={resetFilters}>Сбросить фильтры</button>
      <button onClick={() => onApplyFilters({ selectedCollections, priceRange })}>
        Применить фильтры
      </button>
    </div>
  );
};

export default Filters;
