import React from "react";
import "./SliderOwl.scss";

import images from "../../../assets/images";

const SliderOwl = () => {
  return (
    <div className="sliderOwl">
      <div className="sliderOwl__container">
        <div className="slider_owl">
          <div className="hero-section hero_two">
            <div className="sliderOwl__container row">
              {/* <div className="row"> */}
                <div className="col-md-6 col-sm-12 item">
                  <div className="hero_text">
                    <h2>
                      Learn Anywhere <br /> Anytime From a <br /> Device Only
                    </h2>
                    <p>
                      Online learning is not the next big thing, <br /> it is now the greatest thing ever.
                    </p>
                    <a href="#" className="link">
                      Get Started
                    </a>
                  </div>
                </div>

                <div className="col-md-6 col-sm-12 item">
                  <div className="hero_img">
                    <img src={images.coding} alt="" className="coding" />
                    <div className="hero_img_ani" id="scene4">
                      <img src={images.hero_men2} alt="" data-depth="0.10" className="layer" />
                    </div>
                    <div className="hero_stu">
                      <h4> 13k+ Students</h4>
                      <img src={images.hero_students} alt="" />
                    </div>
                    <img src={images.pencil} alt="" className="pencil" />
                  </div>
                </div>
              {/* </div> */}
            </div>

            <div className="hero_ellipse_icon">
              <img className="ellipse1" src={images.ellipse1} alt="" />
              <img className="ellipse2" src={images.ellipse11} alt="" />
              <img className="ellipse3" src={images.ellipse3} alt="" />
              <img className="ellipse4" src={images.ellipse4} alt="" />
              <img className="ellipse7" src={images.ellipse7} alt="" />
              {/* <img className="ellipse8" src="./img/ellipse10.png" alt="" /> */}
              <img className="ellipse6" src={images.ellipse6} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderOwl;
