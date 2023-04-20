import React from "react";
import "./PopularCat.scss";
import images from "../../../assets/images";
import icons from "../../../assets/icons";

import Star from "../../public/Star/Star.jsx";

const PopularCat = () => {
  return (
    <>
      <div className="rbt-course-area bg-color-white rbt-section-gapTop masonary-wrapper-activation">
        <div className="container popularcat">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-primary-opacity">Popular Course</span>
                <h2 className="title">
                  Online Coaching Lessons For <br /> Remote Learning
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul
                className="rbt-portfolio-filter filter-tab-button text-center nav nav-tabs"
                id="rbt-myTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="active"
                    id="all-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#all"
                    type="button"
                    role="tab"
                    aria-controls="all"
                    aria-selected="true"
                  >
                    <span className="filter-text">All Course</span> <span className="course-number">06</span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    id="featured-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#featured"
                    type="button"
                    role="tab"
                    aria-controls="featured"
                    aria-selected="false"
                  >
                    <span className="filter-text">Featured</span> <span className="course-number">02</span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    id="popular-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#popular"
                    type="button"
                    role="tab"
                    aria-controls="popular"
                    aria-selected="false"
                  >
                    <span className="filter-text">Popular</span> <span className="course-number">05</span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    id="trending-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#trending"
                    type="button"
                    role="tab"
                    aria-controls="trending"
                    aria-selected="false"
                  >
                    <span className="filter-text">Trending</span> <span className="course-number">03</span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    id="latest-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#latest"
                    type="button"
                    role="tab"
                    aria-controls="latest"
                    aria-selected="false"
                  >
                    <span className="filter-text">Latest</span> <span className="course-number">04</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="tab-content mt--60" id="rbt-myTabContent">
                <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
                  <div className="row g-5">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="rbt-card variation-01 rbt-hover card-list-2">
                        <div className="rbt-card-img">
                          <a href="course-details.html">
                            <img src={images.aclient_02} alt="Card image" />
                          </a>
                        </div>
                        <div className="rbt-card-body">
                          <div className="rbt-card-top">
                            <div className="rbt-review">
                              <div className="rating">
                                <Star stars={3.3} isReviews reviews={"15 review"}/>
                              </div>
                            </div>
                            <div className="rbt-bookmark-btn">
                              <a className="rbt-round-btn" title="Bookmark" href="#">
                                <i><icons.BookIcon/></i>
                              </a>
                            </div>
                          </div>

                          <h4 className="rbt-card-title">
                            <a href="course-details.html">React Front To Back</a>
                          </h4>

                          <ul className="rbt-meta">
                            <li>
                            <i><icons.BookIcon/></i>12 Lessons
                            </li>
                            <li>
                            <i><icons.BookIcon/></i>50 Students
                            </li>
                          </ul>

                          <p className="rbt-card-text">
                            It is a long established fact that a reader will be distracted.
                          </p>
                          <div className="rbt-author-meta mb--10">
                            <div className="rbt-avater">
                              <a href="#">
                                <img src={images.avatar} alt="Sophia Jaymes" />
                              </a>
                            </div>
                            <div className="rbt-author-info">
                              By <a href="profile.html">Angela</a> In <a href="#">Development</a>
                            </div>
                          </div>
                          <div className="rbt-card-bottom">
                            <div className="rbt-price">
                              <span className="current-price">$60</span>
                              <span className="off-price">$120</span>
                            </div>
                            <a className="rbt-btn-link" href="course-details.html">
                              Learn More<i><icons.BookIcon/></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="tab-pane fade" id="featured" role="tabpanel" aria-labelledby="featured-tab">
                            <div className="row g-5">
                                <!-- Start Single Card  -->
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="rbt-card variation-01 rbt-hover card-list-2">
                                        <div className="rbt-card-img">
                                            <a href="course-details.html">
                                                <img src="assets/images/course/course-list-02.jpg" alt="Card image">
                                            </a>
                                        </div>
                                        <div className="rbt-card-body">
                                            <div className="rbt-card-top">
                                                <div className="rbt-review">
                                                    <div className="rating">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>
                                                    <span className="rating-count"> (15 Reviews)</span>
                                                </div>
                                                <div className="rbt-bookmark-btn">
                                                    <a className="rbt-round-btn" title="Bookmark" href="#"><i
                                                            className="feather-bookmark"></i></a>
                                                </div>
                                            </div>
                                            <h4 className="rbt-card-title"><a href="course-details.html">PHP Beginner
                                                    Advanced</a>
                                            </h4>
                                            <ul className="rbt-meta">
                                                <li><i className="feather-book"></i>12 Lessons</li>
                                                <li><i className="feather-users"></i>50 Students</li>
                                            </ul>

                                            <p className="rbt-card-text">It is a long established fact that a reader will be distracted.
                                            </p>
                                            <div className="rbt-author-meta mb--10">
                                                <div className="rbt-avater">
                                                    <a href="#">
                                                        <img src="assets/images/client/avatar-02.png" alt="Sophia Jaymes">
                                                    </a>
                                                </div>
                                                <div className="rbt-author-info">
                                                    By <a href="profile.html">Angela</a> In <a href="#">Development</a>
                                                </div>
                                            </div>
                                            <div className="rbt-card-bottom">
                                                <div className="rbt-price">
                                                    <span className="current-price">$60</span>
                                                    <span className="off-price">$120</span>
                                                </div>
                                                <a className="rbt-btn-link left-icon" href="course-details.html"><i
                                                        className="feather-shopping-cart"></i> Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- End Single Card  -->

                                <!-- Start Single Card  -->
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="rbt-card variation-01 rbt-hover card-list-2">
                                        <div className="rbt-card-img">
                                            <a href="course-details.html">
                                                <img src="assets/images/course/course-list-03.jpg" alt="Card image">
                                            </a>
                                        </div>
                                        <div className="rbt-card-body">
                                            <div className="rbt-card-top">
                                                <div className="rbt-review">
                                                    <div className="rating">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>
                                                    <span className="rating-count"> (5 Reviews)</span>
                                                </div>
                                                <div className="rbt-bookmark-btn">
                                                    <a className="rbt-round-btn" title="Bookmark" href="#"><i
                                                            className="feather-bookmark"></i></a>
                                                </div>
                                            </div>
                                            <h4 className="rbt-card-title"><a href="course-details.html">Angular Zero to
                                                    Mastery</a>
                                            </h4>
                                            <ul className="rbt-meta">
                                                <li><i className="feather-book"></i>8 Lessons</li>
                                                <li><i className="feather-users"></i>30 Students</li>
                                            </ul>
                                            <p className="rbt-card-text">Angular Js long fact that a reader will be distracted by the readable.</p>

                                            <div className="rbt-author-meta mb--20">
                                                <div className="rbt-avater">
                                                    <a href="#">
                                                        <img src="assets/images/client/avatar-03.png" alt="Sophia Jaymes">
                                                    </a>
                                                </div>
                                                <div className="rbt-author-info">
                                                    By <a href="profile.html">Slaughter</a> In <a href="#">Languages</a>
                                                </div>
                                            </div>
                                            <div className="rbt-card-bottom">
                                                <div className="rbt-price">
                                                    <span className="current-price">$80</span>
                                                    <span className="off-price">$100</span>
                                                </div>
                                                <a className="rbt-btn-link" href="course-details.html">Learn
                                                    More<i className="feather-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- End Single Card  -->
                            </div>
                        </div>

                        <div className="tab-pane fade" id="popular" role="tabpanel" aria-labelledby="popular-tab">
                            <div className="row g-5">
                                <!-- Start Single Card  -->
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="rbt-card variation-01 rbt-hover card-list-2">
                                        <div className="rbt-card-img">
                                            <a href="course-details.html">
                                                <img src="assets/images/course/course-list-01.jpg" alt="Card image">
                                            </a>
                                        </div>
                                        <div className="rbt-card-body">
                                            <div className="rbt-card-top">
                                                <div className="rbt-review">
                                                    <div className="rating">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>
                                                    <span className="rating-count"> (15 Reviews)</span>
                                                </div>
                                                <div className="rbt-bookmark-btn">
                                                    <a className="rbt-round-btn" title="Bookmark" href="#"><i
                                                            className="feather-bookmark"></i></a>
                                                </div>
                                            </div>

                                            <h4 className="rbt-card-title"><a href="course-details.html">React Front To
                                                    Back</a>
                                            </h4>

                                            <ul className="rbt-meta">
                                                <li><i className="feather-book"></i>12 Lessons</li>
                                                <li><i className="feather-users"></i>50 Students</li>
                                            </ul>

                                            <p className="rbt-card-text">It is a long established fact that a reader will be distracted.
                                            </p>
                                            <div className="rbt-author-meta mb--10">
                                                <div className="rbt-avater">
                                                    <a href="#">
                                                        <img src="assets/images/client/avatar-02.png" alt="Sophia Jaymes">
                                                    </a>
                                                </div>
                                                <div className="rbt-author-info">
                                                    By <a href="profile.html">Angela</a> In <a href="#">Development</a>
                                                </div>
                                            </div>
                                            <div className="rbt-card-bottom">
                                                <div className="rbt-price">
                                                    <span className="current-price">$60</span>
                                                    <span className="off-price">$120</span>
                                                </div>
                                                <a className="rbt-btn-link" href="course-details.html">Learn
                                                    More<i className="feather-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- End Single Card  -->

                                <!-- Start Single Card  -->
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="rbt-card variation-01 rbt-hover card-list-2">
                                        <div className="rbt-card-img">
                                            <a href="course-details.html">
                                                <img src="assets/images/course/course-list-02.jpg" alt="Card image">
                                            </a>
                                        </div>
                                        <div className="rbt-card-body">
                                            <div className="rbt-card-top">
                                                <div className="rbt-review">
                                                    <div className="rating">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>
                                                    <span className="rating-count"> (15 Reviews)</span>
                                                </div>
                                                <div className="rbt-bookmark-btn">
                                                    <a className="rbt-round-btn" title="Bookmark" href="#"><i
                                                            className="feather-bookmark"></i></a>
                                                </div>
                                            </div>
                                            <h4 className="rbt-card-title"><a href="course-details.html">PHP Beginner
                                                    Advanced</a>
                                            </h4>
                                            <ul className="rbt-meta">
                                                <li><i className="feather-book"></i>12 Lessons</li>
                                                <li><i className="feather-users"></i>50 Students</li>
                                            </ul>

                                            <p className="rbt-card-text">It is a long established fact that a reader will be distracted.
                                            </p>
                                            <div className="rbt-author-meta mb--10">
                                                <div className="rbt-avater">
                                                    <a href="#">
                                                        <img src="assets/images/client/avatar-02.png" alt="Sophia Jaymes">
                                                    </a>
                                                </div>
                                                <div className="rbt-author-info">
                                                    By <a href="profile.html">Angela</a> In <a href="#">Development</a>
                                                </div>
                                            </div>
                                            <div className="rbt-card-bottom">
                                                <div className="rbt-price">
                                                    <span className="current-price">$60</span>
                                                    <span className="off-price">$120</span>
                                                </div>
                                                <a className="rbt-btn-link left-icon" href="course-details.html"><i
                                                        className="feather-shopping-cart"></i> Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- End Single Card  -->

                                <!-- Start Single Card  -->
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="rbt-card variation-01 rbt-hover card-list-2">
                                        <div className="rbt-card-img">
                                            <a href="course-details.html">
                                                <img src="assets/images/course/course-list-03.jpg" alt="Card image">
                                            </a>
                                        </div>
                                        <div className="rbt-card-body">
                                            <div className="rbt-card-top">
                                                <div className="rbt-review">
                                                    <div className="rating">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>
                                                    <span className="rating-count"> (5 Reviews)</span>
                                                </div>
                                                <div className="rbt-bookmark-btn">
                                                    <a className="rbt-round-btn" title="Bookmark" href="#"><i
                                                            className="feather-bookmark"></i></a>
                                                </div>
                                            </div>
                                            <h4 className="rbt-card-title"><a href="course-details.html">Angular Zero to
                                                    Mastery</a>
                                            </h4>
                                            <ul className="rbt-meta">
                                                <li><i className="feather-book"></i>8 Lessons</li>
                                                <li><i className="feather-users"></i>30 Students</li>
                                            </ul>
                                            <p className="rbt-card-text">Angular Js long fact that a reader will be distracted by the readable.</p>

                                            <div className="rbt-author-meta mb--20">
                                                <div className="rbt-avater">
                                                    <a href="#">
                                                        <img src="assets/images/client/avatar-03.png" alt="Sophia Jaymes">
                                                    </a>
                                                </div>
                                                <div className="rbt-author-info">
                                                    By <a href="profile.html">Slaughter</a> In <a href="#">Languages</a>
                                                </div>
                                            </div>
                                            <div className="rbt-card-bottom">
                                                <div className="rbt-price">
                                                    <span className="current-price">$80</span>
                                                    <span className="off-price">$100</span>
                                                </div>
                                                <a className="rbt-btn-link" href="course-details.html">Learn
                                                    More<i className="feather-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- End Single Card  -->

                                <!-- Start Single Card  -->
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="rbt-card variation-01 rbt-hover card-list-2">
                                        <div className="rbt-card-img">
                                            <a href="course-details.html">
                                                <img src="assets/images/course/course-list-04.jpg" alt="Card image">
                                            </a>
                                        </div>
                                        <div className="rbt-card-body">
                                            <div className="rbt-card-top">
                                                <div className="rbt-review">
                                                    <div className="rating">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>
                                                    <span className="rating-count"> (15 Reviews)</span>
                                                </div>
                                                <div className="rbt-bookmark-btn">
                                                    <a className="rbt-round-btn" title="Bookmark" href="#"><i
                                                            className="feather-bookmark"></i></a>
                                                </div>
                                            </div>

                                            <h4 className="rbt-card-title"><a href="course-details.html">Web Front To
                                                    Back</a>
                                            </h4>
                                            <ul className="rbt-meta">
                                                <li><i className="feather-book"></i>20 Lessons</li>
                                                <li><i className="feather-users"></i>40 Students</li>
                                            </ul>
                                            <p className="rbt-card-text">Web Js long fact that a reader will be distracted by the readable.</p>
                                            <div className="rbt-author-meta mb--20">
                                                <div className="rbt-avater">
                                                    <a href="#">
                                                        <img src="assets/images/client/avater-01.png" alt="Sophia Jaymes">
                                                    </a>
                                                </div>
                                                <div className="rbt-author-info">
                                                    By <a href="profile.html">Patrick</a> In <a href="#">Languages</a>
                                                </div>
                                            </div>

                                            <div className="rbt-card-bottom">
                                                <div className="rbt-price">
                                                    <span className="current-price">$60</span>
                                                    <span className="off-price">$120</span>
                                                </div>
                                                <a className="rbt-btn-link" href="course-details.html">Learn
                                                    More<i className="feather-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- End Single Card  -->

                                <!-- Start Single Card  -->
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="rbt-card variation-01 rbt-hover card-list-2">
                                        <div className="rbt-card-img">
                                            <a href="course-details.html">
                                                <img src="assets/images/course/course-list-05.jpg" alt="Card image">
                                            </a>
                                        </div>
                                        <div className="rbt-card-body">
                                            <div className="rbt-card-top">
                                                <div className="rbt-review">
                                                    <div className="rating">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>
                                                    <span className="rating-count"> (15 Reviews)</span>
                                                </div>
                                                <div className="rbt-bookmark-btn">
                                                    <a className="rbt-round-btn" title="Bookmark" href="#"><i
                                                            className="feather-bookmark"></i></a>
                                                </div>
                                            </div>
                                            <h4 className="rbt-card-title"><a href="course-details.html">SQL Beginner
                                                    Advanced</a>
                                            </h4>
                                            <ul className="rbt-meta">
                                                <li><i className="feather-book"></i>12 Lessons</li>
                                                <li><i className="feather-users"></i>50 Students</li>
                                            </ul>
                                            <p className="rbt-card-text">It is a long established fact that a reader will be distracted by the readable.</p>
                                            <div className="rbt-author-meta mb--20">
                                                <div className="rbt-avater">
                                                    <a href="#">
                                                        <img src="assets/images/client/avatar-02.png" alt="Sophia Jaymes">
                                                    </a>
                                                </div>
                                                <div className="rbt-author-info">
                                                    By <a href="profile.html">Angela</a> In <a href="#">Development</a>
                                                </div>
                                            </div>
                                            <div className="rbt-card-bottom">
                                                <div className="rbt-price">
                                                    <span className="current-price">$60</span>
                                                    <span className="off-price">$120</span>
                                                </div>
                                                <a className="rbt-btn-link left-icon" href="course-details.html"><i
                                                        className="feather-shopping-cart"></i> Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- End Single Card  -->
                            </div>
                        </div>

                        <div className="tab-pane fade" id="trending" role="tabpanel" aria-labelledby="trending-tab">
                            <div className="row g-5">
                                <!-- Start Single Card  -->
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="rbt-card variation-01 rbt-hover card-list-2">
                                        <div className="rbt-card-img">
                                            <a href="course-details.html">
                                                <img src="assets/images/course/course-list-03.jpg" alt="Card image">
                                            </a>
                                        </div>
                                        <div className="rbt-card-body">
                                            <div className="rbt-card-top">
                                                <div className="rbt-review">
                                                    <div className="rating">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>
                                                    <span className="rating-count"> (5 Reviews)</span>
                                                </div>
                                                <div className="rbt-bookmark-btn">
                                                    <a className="rbt-round-btn" title="Bookmark" href="#"><i
                                                            className="feather-bookmark"></i></a>
                                                </div>
                                            </div>
                                            <h4 className="rbt-card-title"><a href="course-details.html">Angular Zero to
                                                    Mastery</a>
                                            </h4>
                                            <ul className="rbt-meta">
                                                <li><i className="feather-book"></i>8 Lessons</li>
                                                <li><i className="feather-users"></i>30 Students</li>
                                            </ul>
                                            <p className="rbt-card-text">Angular Js long fact that a reader will be distracted by the readable.</p>

                                            <div className="rbt-author-meta mb--20">
                                                <div className="rbt-avater">
                                                    <a href="#">
                                                        <img src="assets/images/client/avatar-03.png" alt="Sophia Jaymes">
                                                    </a>
                                                </div>
                                                <div className="rbt-author-info">
                                                    By <a href="profile.html">Slaughter</a> In <a href="#">Languages</a>
                                                </div>
                                            </div>
                                            <div className="rbt-card-bottom">
                                                <div className="rbt-price">
                                                    <span className="current-price">$80</span>
                                                    <span className="off-price">$100</span>
                                                </div>
                                                <a className="rbt-btn-link" href="course-details.html">Learn
                                                    More<i className="feather-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- End Single Card  -->

                                <!-- Start Single Card  -->
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="rbt-card variation-01 rbt-hover card-list-2">
                                        <div className="rbt-card-img">
                                            <a href="course-details.html">
                                                <img src="assets/images/course/course-list-04.jpg" alt="Card image">
                                            </a>
                                        </div>
                                        <div className="rbt-card-body">
                                            <div className="rbt-card-top">
                                                <div className="rbt-review">
                                                    <div className="rating">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>
                                                    <span className="rating-count"> (15 Reviews)</span>
                                                </div>
                                                <div className="rbt-bookmark-btn">
                                                    <a className="rbt-round-btn" title="Bookmark" href="#"><i
                                                            className="feather-bookmark"></i></a>
                                                </div>
                                            </div>

                                            <h4 className="rbt-card-title"><a href="course-details.html">Web Front To
                                                    Back</a>
                                            </h4>
                                            <ul className="rbt-meta">
                                                <li><i className="feather-book"></i>20 Lessons</li>
                                                <li><i className="feather-users"></i>40 Students</li>
                                            </ul>
                                            <p className="rbt-card-text">Web Js long fact that a reader will be distracted by the readable.</p>
                                            <div className="rbt-author-meta mb--20">
                                                <div className="rbt-avater">
                                                    <a href="#">
                                                        <img src="assets/images/client/avater-01.png" alt="Sophia Jaymes">
                                                    </a>
                                                </div>
                                                <div className="rbt-author-info">
                                                    By <a href="profile.html">Patrick</a> In <a href="#">Languages</a>
                                                </div>
                                            </div>

                                            <div className="rbt-card-bottom">
                                                <div className="rbt-price">
                                                    <span className="current-price">$60</span>
                                                    <span className="off-price">$120</span>
                                                </div>
                                                <a className="rbt-btn-link" href="course-details.html">Learn
                                                    More<i className="feather-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- End Single Card  -->

                                <!-- Start Single Card  -->
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="rbt-card variation-01 rbt-hover card-list-2">
                                        <div className="rbt-card-img">
                                            <a href="course-details.html">
                                                <img src="assets/images/course/course-list-05.jpg" alt="Card image">
                                            </a>
                                        </div>
                                        <div className="rbt-card-body">
                                            <div className="rbt-card-top">
                                                <div className="rbt-review">
                                                    <div className="rating">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>
                                                    <span className="rating-count"> (15 Reviews)</span>
                                                </div>
                                                <div className="rbt-bookmark-btn">
                                                    <a className="rbt-round-btn" title="Bookmark" href="#"><i
                                                            className="feather-bookmark"></i></a>
                                                </div>
                                            </div>
                                            <h4 className="rbt-card-title"><a href="course-details.html">SQL Beginner
                                                    Advanced</a>
                                            </h4>
                                            <ul className="rbt-meta">
                                                <li><i className="feather-book"></i>12 Lessons</li>
                                                <li><i className="feather-users"></i>50 Students</li>
                                            </ul>
                                            <p className="rbt-card-text">It is a long established fact that a reader will be distracted by the readable.</p>
                                            <div className="rbt-author-meta mb--20">
                                                <div className="rbt-avater">
                                                    <a href="#">
                                                        <img src="assets/images/client/avatar-02.png" alt="Sophia Jaymes">
                                                    </a>
                                                </div>
                                                <div className="rbt-author-info">
                                                    By <a href="profile.html">Angela</a> In <a href="#">Development</a>
                                                </div>
                                            </div>
                                            <div className="rbt-card-bottom">
                                                <div className="rbt-price">
                                                    <span className="current-price">$60</span>
                                                    <span className="off-price">$120</span>
                                                </div>
                                                <a className="rbt-btn-link left-icon" href="course-details.html"><i
                                                        className="feather-shopping-cart"></i> Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- End Single Card  -->
                            </div>
                        </div>

                        <div className="tab-pane fade" id="latest" role="tabpanel" aria-labelledby="latest-tab">
                            <div className="row g-5">
                                <!-- Start Single Card  -->
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="rbt-card variation-01 rbt-hover card-list-2">
                                        <div className="rbt-card-img">
                                            <a href="course-details.html">
                                                <img src="assets/images/course/course-list-02.jpg" alt="Card image">
                                            </a>
                                        </div>
                                        <div className="rbt-card-body">
                                            <div className="rbt-card-top">
                                                <div className="rbt-review">
                                                    <div className="rating">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>
                                                    <span className="rating-count"> (15 Reviews)</span>
                                                </div>
                                                <div className="rbt-bookmark-btn">
                                                    <a className="rbt-round-btn" title="Bookmark" href="#"><i
                                                            className="feather-bookmark"></i></a>
                                                </div>
                                            </div>
                                            <h4 className="rbt-card-title"><a href="course-details.html">PHP Beginner
                                                    Advanced</a>
                                            </h4>
                                            <ul className="rbt-meta">
                                                <li><i className="feather-book"></i>12 Lessons</li>
                                                <li><i className="feather-users"></i>50 Students</li>
                                            </ul>

                                            <p className="rbt-card-text">It is a long established fact that a reader will be distracted.
                                            </p>
                                            <div className="rbt-author-meta mb--10">
                                                <div className="rbt-avater">
                                                    <a href="#">
                                                        <img src="assets/images/client/avatar-02.png" alt="Sophia Jaymes">
                                                    </a>
                                                </div>
                                                <div className="rbt-author-info">
                                                    By <a href="profile.html">Angela</a> In <a href="#">Development</a>
                                                </div>
                                            </div>
                                            <div className="rbt-card-bottom">
                                                <div className="rbt-price">
                                                    <span className="current-price">$60</span>
                                                    <span className="off-price">$120</span>
                                                </div>
                                                <a className="rbt-btn-link left-icon" href="course-details.html"><i
                                                        className="feather-shopping-cart"></i> Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- End Single Card  -->

                                <!-- Start Single Card  -->
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="rbt-card variation-01 rbt-hover card-list-2">
                                        <div className="rbt-card-img">
                                            <a href="course-details.html">
                                                <img src="assets/images/course/course-list-03.jpg" alt="Card image">
                                            </a>
                                        </div>
                                        <div className="rbt-card-body">
                                            <div className="rbt-card-top">
                                                <div className="rbt-review">
                                                    <div className="rating">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>
                                                    <span className="rating-count"> (5 Reviews)</span>
                                                </div>
                                                <div className="rbt-bookmark-btn">
                                                    <a className="rbt-round-btn" title="Bookmark" href="#"><i
                                                            className="feather-bookmark"></i></a>
                                                </div>
                                            </div>
                                            <h4 className="rbt-card-title"><a href="course-details.html">Angular Zero to
                                                    Mastery</a>
                                            </h4>
                                            <ul className="rbt-meta">
                                                <li><i className="feather-book"></i>8 Lessons</li>
                                                <li><i className="feather-users"></i>30 Students</li>
                                            </ul>
                                            <p className="rbt-card-text">Angular Js long fact that a reader will be distracted by the readable.</p>

                                            <div className="rbt-author-meta mb--20">
                                                <div className="rbt-avater">
                                                    <a href="#">
                                                        <img src="assets/images/client/avatar-03.png" alt="Sophia Jaymes">
                                                    </a>
                                                </div>
                                                <div className="rbt-author-info">
                                                    By <a href="profile.html">Slaughter</a> In <a href="#">Languages</a>
                                                </div>
                                            </div>
                                            <div className="rbt-card-bottom">
                                                <div className="rbt-price">
                                                    <span className="current-price">$80</span>
                                                    <span className="off-price">$100</span>
                                                </div>
                                                <a className="rbt-btn-link" href="course-details.html">Learn
                                                    More<i className="feather-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="rbt-card variation-01 rbt-hover card-list-2">
                                        <div className="rbt-card-img">
                                            <a href="course-details.html">
                                                <img src="assets/images/course/course-list-04.jpg" alt="Card image"/>
                                            </a>
                                        </div>
                                        <div className="rbt-card-body">
                                            <div className="rbt-card-top">
                                                <div className="rbt-review">
                                                    <div className="rating">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>
                                                    <span className="rating-count"> (15 Reviews)</span>
                                                </div>
                                                <div className="rbt-bookmark-btn">
                                                    <a className="rbt-round-btn" title="Bookmark" href="#"><i
                                                            className="feather-bookmark"></i></a>
                                                </div>
                                            </div>

                                            <h4 className="rbt-card-title"><a href="course-details.html">Web Front To
                                                    Back</a>
                                            </h4>
                                            <ul className="rbt-meta">
                                                <li><i className="feather-book"></i>20 Lessons</li>
                                                <li><i className="feather-users"></i>40 Students</li>
                                            </ul>
                                            <p className="rbt-card-text">Web Js long fact that a reader will be distracted by the readable.</p>
                                            <div className="rbt-author-meta mb--20">
                                                <div className="rbt-avater">
                                                    <a href="#">
                                                        <img src="assets/images/client/avater-01.png" alt="Sophia Jaymes"/>
                                                    </a>
                                                </div>
                                                <div className="rbt-author-info">
                                                    By <a href="profile.html">Patrick</a> In <a href="#">Languages</a>
                                                </div>
                                            </div>

                                            <div className="rbt-card-bottom">
                                                <div className="rbt-price">
                                                    <span className="current-price">$60</span>
                                                    <span className="off-price">$120</span>
                                                </div>
                                                <a className="rbt-btn-link" href="course-details.html">Learn
                                                    More<i className="feather-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
      
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="rbt-card variation-01 rbt-hover card-list-2">
                                        <div className="rbt-card-img">
                                            <a href="course-details.html">
                                                <img src="assets/images/course/course-list-05.jpg" alt="Card image"/>
                                            </a>
                                        </div>
                                        <div className="rbt-card-body">
                                            <div className="rbt-card-top">
                                                <div className="rbt-review">
                                                    <div className="rating">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>
                                                    <span className="rating-count"> (15 Reviews)</span>
                                                </div>
                                                <div className="rbt-bookmark-btn">
                                                    <a className="rbt-round-btn" title="Bookmark" href="#"><i
                                                            className="feather-bookmark"></i></a>
                                                </div>
                                            </div>
                                            <h4 className="rbt-card-title"><a href="course-details.html">SQL Beginner
                                                    Advanced</a>
                                            </h4>
                                            <ul className="rbt-meta">
                                                <li><i className="feather-book"></i>12 Lessons</li>
                                                <li><i className="feather-users"></i>50 Students</li>
                                            </ul>
                                            <p className="rbt-card-text">It is a long established fact that a reader will be distracted by the readable.</p>
                                            <div className="rbt-author-meta mb--20">
                                                <div className="rbt-avater">
                                                    <a href="#">
                                                        <img src="assets/images/client/avatar-02.png" alt="Sophia Jaymes"/>
                                                    </a>
                                                </div>
                                                <div className="rbt-author-info">
                                                    By <a href="profile.html">Angela</a> In <a href="#">Development</a>
                                                </div>
                                            </div>
                                            <div className="rbt-card-bottom">
                                                <div className="rbt-price">
                                                    <span className="current-price">$60</span>
                                                    <span className="off-price">$120</span>
                                                </div>
                                                <a className="rbt-btn-link left-icon" href="course-details.html"><i
                                                        className="feather-shopping-cart"></i> Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              
                            </div>
                        </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularCat;
