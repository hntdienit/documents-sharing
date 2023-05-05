import React from "react";
import { Link } from "react-router-dom";

import "./Banner.scss";
import images from "../../../assets/images";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import SliderCustom from "../../public/Slider/Slider.jsx";

const Banner = () => {
  const settings = {
    arrows: false,
    centerMode: true,
    swipeToSlide: true,
    infinite: true,
    rows: 1,
    slidesPerRow: 1,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 600,
    initialSlide: 0,
    autoplaySpeed: 5000,
  };
  return (
   <div className="rbt-banner-area rbt-banner-2 header-transperent-spacer">
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-content text-center">
                <div className="inner">
                  <div className="rbt-new-badge rbt-new-badge-one mb--30">
                    <span className="rbt-new-badge-icon">🏆</span> Chia sẻ và tìm kiếm tài liệu
                  </div>
                  <h1 className="title">
                    chúng ta<span className="theme-gradient"> chia sẻ </span>tài liệu và
                    <span className="theme-gradient"> tìm kiếm </span>tài liệu mình cần
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper service-item-3-activation  rbt-arrow-between gutter-swiper-30">
            <div className="swiper-wrapper">
              <SliderCustom settings={settings}>
                <div className="swiper-slide">
                  <div className="single-slide">
                    <div className="rbt-service rbt-service-2 rbt-hover-02 bg-no-shadow card-bg-4">
                      <Link to={"/"}>
                        <div className="inner">
                          <div className="content">
                            <p>Lập trình hướng đối tượng</p>
                            <span className="transparent-button">
                              Tìm hiểu thêm
                              <ArrowForwardIcon />
                            </span>
                          </div>
                          <div className="thumbnail">
                            <img src={images.pdf} className="img_banner" alt="Education Images" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="single-slide">
                    <div className="rbt-service rbt-service-2 rbt-hover-02 bg-no-shadow card-bg-4">
                      <Link to={"/"}>
                        <div className="inner">
                          <div className="content">
                            <p>Cấu trúc dữ liệu</p>
                            <span className="transparent-button">
                              Tìm hiểu thêm
                              <ArrowForwardIcon />
                            </span>
                          </div>
                          <div className="thumbnail">
                            <img src={images.pdf} className="img_banner" alt="Education Images" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="single-slide">
                    <div className="rbt-service rbt-service-2 rbt-hover-02 bg-no-shadow card-bg-4">
                      <Link to={"/"}>
                        <div className="inner">
                          <div className="content">
                            <p>Toán cao cấp</p>
                            <span className="transparent-button">
                              Tìm hiểu thêm
                              <ArrowForwardIcon />
                            </span>
                          </div>
                          <div className="thumbnail">
                            <img src={images.pdf} className="img_banner" alt="Education Images" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="single-slide">
                    <div className="rbt-service rbt-service-2 rbt-hover-02 bg-no-shadow card-bg-4">
                      <Link to={"/"}>
                        <div className="inner">
                          <div className="content">
                            <p>Xác xuất thống kê</p>
                            <span className="transparent-button">
                              Tìm hiểu thêm
                              <ArrowForwardIcon />
                            </span>
                          </div>
                          <div className="thumbnail">
                            <img src={images.pdf} className="img_banner" alt="Education Images" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </SliderCustom>
            </div>
          </div>
        </div>
      </div>
   </div>
  );
};

export default Banner;
