import React, { useState, useEffect } from "react";
import ReactSlidy from "react-slidy";
import "react-slidy/lib/styles.css";
import { Link } from "react-router-dom";
import './Slider.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import slide1 from "./images/slide1.svg";
import slide2 from "./images/slide2.svg";
import slide3 from "./images/slide3.svg";
import slide4 from "./images/slide4.svg";

const SLIDES = [slide1, slide2, slide3, slide4];

const createStyles = (isActive) => ({
  background: "transparent",
  border: 0,
  color: isActive ? "#333" : "#ccc",
  cursor: "pointer",
  fontSize: "32px",
});

export const Slide = () => {
  const [actualSlide, setActualSlide] = useState(0);

  const updateSlide = ({ currentSlide }) => {
    setActualSlide(currentSlide);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActualSlide((prevSlide) => (prevSlide + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ReactSlidy 
        doAfterSlide={updateSlide} 
        slide={actualSlide}
        arrows={false} 
      >
        {SLIDES.map((src) => (
          <div>
            <div className="div_slide"
              style={{
                backgroundImage: `url(${SLIDES[actualSlide]})`,
                backgroundSize: "cover",
                height: "600px",
                backgroundPosition: "center",
              }}
            >
              <div className="rt">
                <Link to="Catalog" className="slide_p">Перейти в каталог <KeyboardArrowRightIcon/></Link>
                <p className="slide_p2">Изысканные смесители для вашего интерьера</p>
                <p className="slide_p3">Гарантируем высочайшую безопасность и надёжность в соответствии с международными стандартами качества.</p>
              </div>
              <div className="Dots">
                {SLIDES.map((_, index) => {
                  return (
                    <button
                      key={index}
                      style={createStyles(index === actualSlide)}
                      onClick={() => updateSlide({ currentSlide: index })}
                    >
                      &bull;
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </ReactSlidy>
    </>
  );
};
