import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import SliderCustom from "../../public/Slider/Slider.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./BestLike.scss";
import newRequest from "../../../utils/newRequest.js";
import images from "../../../assets/images/index.js";

const BestLike = () => {
  const customeSlider = useRef();
  const previous = () => {
    customeSlider.current.slickNext();
  };

  const next = () => {
    customeSlider.current.slickPrev();
  };
  const settings = {
    arrows: false,
    centerMode: true,
    swipeToSlide: true,
    infinite: true,
    rows: 1,
    slidesPerRow: 1,
    autoplay: true,
    speed: 600,
    initialSlide: 0,
    autoplaySpeed: 5000,
  };

  return (
    <div className="bestlike">
      {/* <div className="bestlike__container">
        <div className="bestlike__wrap">
          <div className="bestlike__item">
            <div className="bestlike__header">
              <h3> Some Best Books </h3>
            </div>
            <div className="bestlike__card">
              <div className="bestlike__card__item">
                <i className="pe-7s-note2">12</i>
                <span>
                  132+ <br /> Total Pages
                </span>
              </div>
              <div className="bestlike__card__item">
                <i className="pe-7s-download">12</i>
                <span>
                  237+ <br /> Downloads
                </span>
              </div>
              <div className="bestlike__card__item">
                <i className="pe-7s-cup">12</i>
                <span>
                  13+ <br /> Award Won
                </span>
              </div>
            </div>

            <div className="bestlike__btn">
              <a href="#" className="link">
                Free Preview
              </a>
              <a href="#" className="link">
                Download
              </a>
            </div>
          </div>

          <div className="haha3">
        
              <div>
              <Slider ref={customeSlider} {...settings}>
              <div className="bbook_crs_item">
            <img src="./img/hinh.jpg" alt="image" />
          </div>
          <div className="bbook_crs_item">
            <img src="./img/logo_dhct.png" alt="image" />
          </div>
          <div className="bbook_crs_item">
            <img src="./img/hinh.jpg" alt="image" />
          </div>
      </Slider>
              </div>
         
          </div>
        </div>
      </div> */}

      <div className="vitri">
       <div className="vitri1">
          <div className="">
            <Slider className="vitricon" ref={customeSlider} {...settings}>
              <div className="bbook_crs_item">
                <img src={images.courses2} alt="image" />
              </div>
              <div className="bbook_crs_item">
                <img src={images.courses3} alt="image" />
              </div>
              <div className="bbook_crs_item">
                <img src={images.courses4} alt="image" />
              </div>
            </Slider>
            <div className="popularcat__btn">
              <button type="button" className="slider__btn" onClick={next}>
                n
              </button>
              <button type="button" className="slider__btn" onClick={previous}>
                p
              </button>
            </div>
          </div>
       </div>
      </div>
    </div>
  );
};

export default BestLike;
