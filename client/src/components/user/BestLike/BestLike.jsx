import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";

import "./BestLike.scss";
import newRequest from "../../../utils/newRequest.js";

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
    responsive: [
      {
        breakpoint: 2700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bestLike">
      <div className="bestLike__container">
        <section className="best-book-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="base-header">
                  <h3> Some Best Books </h3>
                </div>

                <div className="bbook_wrap">
                  <div className="bbook_item">
                    <i className="pe-7s-note2"></i>
                    <span>
                      132+ <br /> Total Pages
                    </span>
                  </div>
                  <div className="bbook_item">
                    <i className="pe-7s-download"></i>
                    <span>
                      237+ <br /> Downloads
                    </span>
                  </div>
                  <div className="bbook_item">
                    <i className="pe-7s-cup"></i>
                    <span>
                      13+ <br /> Award Won
                    </span>
                  </div>
                </div>
                <div className="bbook_btn">
                  <a href="#" className="more-link link-transparent">
                    Free Preview
                  </a>
                  <a href="#" className="more-link">
                    Download
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12" id="best_book">

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

              <div>
                <button type="button" onClick={next}>next</button>
                <button type="button" onClick={previous}>previous</button>
              </div>
                
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BestLike;
