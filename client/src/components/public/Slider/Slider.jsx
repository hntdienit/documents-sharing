import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Slider.scss";

const SliderCustom = ({ children, settings, psbutton }) => {
  const customeSlider = useRef();

  const previous = () => {
    customeSlider.current.slickNext();
  };

  const next = () => {
    customeSlider.current.slickPrev();
  };

  const classes = psbutton + " " + "slider__next";

  return (
    <div className="slider__custom">
      <Slider ref={customeSlider} {...settings}>
        {children}
      </Slider>
      {/* <div>{children}</div> */}
      <div className={classes}>
        <button type="button" className="slider__btn" onClick={next}>
          n
        </button>
        <button type="button" className="slider__btn" onClick={previous}>
          p
        </button>
      </div>
    </div>
  );
};

export default SliderCustom;
