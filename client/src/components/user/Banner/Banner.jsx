import React from "react";
import { Link } from "react-router-dom";

import "./Banner.scss";
import images from "../../../assets/images";
import icons from "../../../assets/icons";

const Banner = () => {
  return (
    <div className="Banner">
      <div className="rbt-banner-area rbt-banner-8 variation-01 bg_image bg_image--9">
        <div className="wrapper w-100">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 order-2 order-lg-1">
                <div className="content">
                  <div className="inner">
                    <div className="rbt-badge-group justify-content-start">
                      <span className="meta-text d-flex align-items-center">
                        <span className="icon">🎬</span> Video Online Course
                      </span>
                      <a href="#" className="rbt-badge-2">
                        <div className="image">
                          <img src={images.aclient_02} alt="Education Images" />
                        </div>{" "}
                        Learn with <strong>Fatima Asrafy</strong>
                      </a>
                    </div>
                    <h1 className="title">Online Courses</h1>
                    <p className="description has-medium-font-size mt--20">
                      Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations,
                      Next.js and way more!
                    </p>
                    <div className="slider-btn rbt-button-group justify-content-start">
                      <a className="rbt-btn btn-gradient radius-round hover-icon-reverse" href="#">
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">Log in to Start</span>
                          <span className="btn-icon">
                            <i><icons.ArrowForwardIcon/></i>
                          </span>
                          <span className="btn-icon">
                          <i><icons.ArrowForwardIcon/></i>
                          </span>
                        </span>
                      </a>
                      <a className="rbt-btn radius-round hover-icon-reverse btn-white" href="#">
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">Buy The Course</span>
                          <span className="btn-icon">
                          <i><icons.ArrowForwardIcon/></i>
                          </span>
                          <span className="btn-icon">
                          <i><icons.ArrowForwardIcon/></i>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 offset-xl-1 order-1 order-lg-2">
                <div className="video-popup-wrapper">
                  <img className="w-100 rbt-radius" src={images.video_02} alt="Video Images" />
                  <a
                    className="rbt-btn rounded-player-2 popup-video position-to-top with-animation"
                    href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
                  >
                    <span className="play-icon"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
