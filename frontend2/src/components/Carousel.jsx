import React from "react";
import "./carousel.css";
const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carousel__container">
        <div className="carousel__slide">
          <img src="https://picsum.photos/1080?t=0" alt="" />
        </div>
        <div className="carousel__slide">
          <img src="https://picsum.photos/1080?t=1" alt="" />
        </div>
        <div className="carousel__slide">
          <img src="https://picsum.photos/1080?t=2" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
