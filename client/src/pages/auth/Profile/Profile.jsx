import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import images from "../../../assets/images";
import HeaderPage from "../../../components/user/HeaderPage/HeaderPage";

const Profile = () => {
  return (
    <>
      <HeaderPage page={"Hồ sơ"} linkpage={"Hồ sơ"} />
      <div className="profile">
        <div className="rbt-section-overlayping-top rbt-section-gapBottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rbt-dashboard-content-wrapper">
                  <div className="tutor-bg-photo bg_image bg_image--22 height-350">
                    <img src={images.course_online_01} alt="" />
                  </div>

                  <div className="rbt-tutor-information">
                    <div className="rbt-tutor-information-left">
                      <div className="thumbnail rbt-avatars size-lg">
                        <img src={images.avatar} alt="Instructor" />
                      </div>
                      <div className="tutor-content">
                        <h5 className="title">John Due</h5>
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
                        <ul className="rbt-meta rbt-meta-white mt--5">
                          <li>
                            <i className="feather-book"></i>20 Courses
                          </li>
                          <li>
                            <i className="feather-users"></i>40 Students
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 mt--30">
                <div className="rbt-shadow-box">
                  <h4 className="rbt-title-style-3">Biography</h4>
                  <div className="row g-5">
                    <div className="col-lg-8">
                      <p className="mt--10 mb--20">
                        I m the Front-End Developer for #Rainbow IT in Bangladesh, OR. I have serious passion for UI
                        effects, animations and creating intuitive, dynamic user experiences.
                      </p>
                    </div>
                    <div className="col-lg-2 offset-lg-2">
                      <div className="feature-sin best-seller-badge text-end h-100">
                        <span className="rbt-badge-2 w-100 text-center badge-full-height">
                          <span className="image">
                            <img src={images.course_online_01} alt="Best Seller Icon" />
                          </span>{" "}
                          Bestseller
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rbt-profile-course-area mt--60">
              <div className="row">
                <div className="col-lg-12">
                  <div className="sction-title">
                    <h2 className="rbt-title-style-3">Courses</h2>
                  </div>
                </div>
              </div>
              <div className="row g-5 mt--5">
                <div
                  className="col-lg-4 col-md-6 col-sm-12 col-12"
                  data-sal-delay="150"
                  data-sal="slide-up"
                  data-sal-duration="800"
                >
                  <div className="rbt-card variation-01 rbt-hover">
                    <div className="rbt-card-img">
                      <a href="course-details.html">
                        <img src={images.course_online_01} alt="Card image" />
                        <div className="rbt-badge-3 bg-white">
                          <span>-40%</span>
                          <span>Off</span>
                        </div>
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
                          <a className="rbt-round-btn" title="Bookmark" href="#">
                            <i className="feather-bookmark"></i>
                          </a>
                        </div>
                      </div>

                      <h4 className="rbt-card-title">
                        <a href="course-details.html">React Front To Back</a>
                      </h4>

                      <ul className="rbt-meta">
                        <li>
                          <i className="feather-book"></i>12 Lessons
                        </li>
                        <li>
                          <i className="feather-users"></i>50 Students
                        </li>
                      </ul>

                      <p className="rbt-card-text">It is a long established fact that a reader will be distracted.</p>
                      <div className="rbt-author-meta mb--10">
                        <div className="rbt-avater">
                          <a href="#">
                            <img src={images.course_online_01} alt="Sophia Jaymes" />
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
                          Learn More<i className="feather-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 mt--60">
                <nav>
                  <ul className="rbt-pagination">
                    <li>
                      <a href="#" aria-label="Previous">
                        <i className="feather-chevron-left"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">1</a>
                    </li>
                    <li className="active">
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#" aria-label="Next">
                        <i className="feather-chevron-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
