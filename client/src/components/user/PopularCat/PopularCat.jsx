import React, { useRef } from "react";
import "./PopularCat.scss";
import SliderCustom from "../../../components/public/Slider/Slider.jsx";

const PopularCat = () => {
  const settings = {
    arrows: false,
    centerMode: true,
    swipeToSlide: true,
    infinite: true,
    rows: 1,
    slidesPerRow: 1,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 600,
    initialSlide: 0,
    autoplaySpeed: 5000,
  };

  return (
    <div className="popularcat">
      <div className="popularcat__container">
        <div className="popularcat__base-header">
          <h3> Popular Categories </h3>
        </div>
        <div className="popularcat__wrap">
          <SliderCustom settings={settings} psbutton={"popularcat_button"}>
            <div className="popularcat__item">
              <h4>12</h4>
              <h4>Design</h4>
            </div>
            <div className="popularcat__item">
              <div className="popularcat__card">
                <h4>12</h4>
                <h4>Education</h4>
              </div>
            </div>
            <div className="popularcat__item">
              <h4>12</h4>
              <h4>Craft</h4>
            </div>
            <div className="popularcat__item">
              <h4>12</h4>
              <h4>Marketing</h4>
            </div>
            <div className="popularcat__item">
              <h4>12</h4>
              <h4>Design</h4>
            </div>
          </SliderCustom>
        </div>
      </div>
    </div>
  );
};

export default PopularCat;
