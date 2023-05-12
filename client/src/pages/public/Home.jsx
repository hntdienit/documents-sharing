import React, { useRef } from "react";
import { Link } from "react-router-dom";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import FavoriteIcon from "@mui/icons-material/Favorite";

import Banner from "../../components/user/Banner/Banner.jsx";
import PopularCat from "../../components/user/PopularCat/PopularCat";
import Star from "../../components/public/Star/Star.jsx";
import images from "../../assets/images";

const Home = () => {
  return (
    <>
      <Banner />
      {/* <PopularCat /> */}
      <div className="rbt-course-area bg-color-extra2 rbt-section-gap pt-7 pb-7">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-secondary-opacity">Tài liệu nổi bật</span>
                <h2 className="title">
                  Các tài liệu với <br /> số sao đánh giá lớn nhất
                </h2>
              </div>
            </div>
          </div>
          <div className="categories pt-1">
            <div className="mt-7 pt-7"></div>
            <div className="rbt-section-overlayping-top rbt-section-gapBottom">
              <div className="container">
                <div className="rbt-course-grid-column list-column-half active-list-view">
                  <div className="course-grid-4" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <div className="rbt-card variation-01 rbt-hover-02 card-list-2">
                      <div className="rbt-card-img">
                        <Link to={`/`}>
                          <img src={images.pdf} alt="Card image" />
                        </Link>
                      </div>
                      <div className="rbt-card-body">
                        <div className="rbt-category">
                          <Link to={"/"}>Toán</Link>
                        </div>
                        <h4 className="rbt-card-title">
                          <Link to={`/`}>Xác xuất thống kê</Link>
                        </h4>
                        <span className="lesson-number">
                          <Star stars={4.5} />
                        </span>
                        <p className="rbt-card-text mt_d">Mô tả xác xuất thống kê</p>
                        <div className="rbt-card-bottom">
                          <Link to={`/`} className="transparent-button">
                            Tìm hiểu thêm
                            <DoubleArrowIcon />
                          </Link>

                          <button className="rbt-cart-sidenav-activation rbt-round-btn">
                            <FavoriteIcon />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="course-grid-4" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <div className="rbt-card variation-01 rbt-hover-02 card-list-2">
                      <div className="rbt-card-img">
                        <Link to={`/`}>
                          <img src={images.pdf} alt="Card image" />
                        </Link>
                      </div>
                      <div className="rbt-card-body">
                        <div className="rbt-category">
                          <Link to={"/"}>Toán</Link>
                        </div>
                        <h4 className="rbt-card-title">
                          <Link to={`/`}>Toán cao cấp</Link>
                        </h4>
                        <span className="lesson-number">
                          <Star stars={4} />
                        </span>
                        <p className="rbt-card-text mt_d">Mô tả toán cao cấp</p>
                        <div className="rbt-card-bottom">
                          <Link to={`/`} className="transparent-button">
                            Tìm hiểu thêm
                            <DoubleArrowIcon />
                          </Link>

                          <button className="rbt-cart-sidenav-activation rbt-round-btn">
                            <FavoriteIcon />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="course-grid-4" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <div className="rbt-card variation-01 rbt-hover-02 card-list-2">
                      <div className="rbt-card-img">
                        <Link to={`/`}>
                          <img src={images.pdf} alt="Card image" />
                        </Link>
                      </div>
                      <div className="rbt-card-body">
                        <div className="rbt-category">
                          <Link to={"/"}>Công nghệ thông tin</Link>
                        </div>
                        <h4 className="rbt-card-title">
                          <Link to={`/`}>Cấu trúc dữ liệu</Link>
                        </h4>
                        <span className="lesson-number">
                          <Star stars={4} />
                        </span>
                        <p className="rbt-card-text mt_d">Mô tả cấu trúc dữ liệu</p>
                        <div className="rbt-card-bottom">
                          <Link to={`/`} className="transparent-button">
                            Tìm hiểu thêm
                            <DoubleArrowIcon />
                          </Link>

                          <button className="rbt-cart-sidenav-activation rbt-round-btn">
                            <FavoriteIcon />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="course-grid-4" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <div className="rbt-card variation-01 rbt-hover-02 card-list-2">
                      <div className="rbt-card-img">
                        <Link to={`/`}>
                          <img src={images.pdf} alt="Card image" />
                        </Link>
                      </div>
                      <div className="rbt-card-body">
                        <div className="rbt-category">
                          <Link to={"/"}>Công nghệ thông tin</Link>
                        </div>
                        <h4 className="rbt-card-title">
                          <Link to={`/`}>Lập trình hướng đối tượng</Link>
                        </h4>
                        <span className="lesson-number">
                          <Star stars={4} />
                        </span>
                        <p className="rbt-card-text mt_d">Mô tả lập trình hướng đối tượng</p>
                        <div className="rbt-card-bottom">
                          <Link to={`/`} className="transparent-button">
                            Tìm hiểu thêm
                            <DoubleArrowIcon />
                          </Link>

                          <button className="rbt-cart-sidenav-activation rbt-round-btn">
                            <FavoriteIcon />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="load-more-btn mt--60 text-center">
                <a className="rbt-btn btn-gradient btn-lg hover-icon-reverse" href="#">
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Xem thêm (40+)</span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-about-area bg-color-white rbt-section-gapTop pb_md--80 pb_sm--80 about-style-1">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="thumbnail-wrapper">
                <div className="thumbnail image-1">
                  <img data-parallax='{"x": 0, "y": -20}' src={images.pdf} alt="Education Images" />
                </div>
                <div className="thumbnail image-2 d-none d-xl-block">
                  <img data-parallax='{"x": 0, "y": 60}' src={images.pdf} alt="Education Images" />
                </div>
                <div className="thumbnail image-3 d-none d-md-block">
                  <img data-parallax='{"x": 0, "y": 80}' src={images.pdf} alt="Education Images" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="inner pl--50 pl_sm--0 pl_md--0">
                <div className="section-title text-start">
                  <span className="subtitle bg-coral-opacity">Thông tin</span>
                  <h2 className="title">
                    Bạn đã biết? <br /> Tìm kiếm tài liệu nhanh chóng
                  </h2>
                </div>

                <p className="description mt--30">
                  Bạn có thể tìm kiếm các tài liệu cần thiết và chia sẻ những tài liệu mình có, góp phần tạo nên nơi bạn
                  có thể tìm kiếm mọi tài liệu mình cần!
                </p>

                <div className="rbt-feature-wrapper mt--20 ml_dec_20">
                  <div className="rbt-feature feature-style-2 rbt-radius">
                    <div className="icon bg-pink-opacity">
                      <i className="feather-heart"></i>
                    </div>
                    <div className="feature-content">
                      <h6 className="feature-title">Tài liệu điện tử</h6>
                      <p className="feature-description">Bạn có thể tìm kiếm và đọc tất cả các tài liệu điện tử!</p>
                    </div>
                  </div>

                  <div className="rbt-feature feature-style-2 rbt-radius">
                    <div className="icon bg-primary-opacity">
                      <i className="feather-book"></i>
                    </div>
                    <div className="feature-content">
                      <h6 className="feature-title">Tài liệu vật lý</h6>
                      <p className="feature-description">
                        Bạn có thể đăng bán các tài liệu bạn không cần nữa và chúng sẽ đến người đang cần!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
