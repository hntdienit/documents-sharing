import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Featured.scss";

import images from "../../../assets/images";
import icons from "../../../assets/icons";
import Star from "../../public/Star/Star.jsx";

const Featured = () => {
  return (
    <div className="Featured">
      <div className="rbt-featured-course bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row g-5 align-items-end mb--60">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="section-title text-start">
                <h2 className="title">Featured Courses</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="load-more-btn text-start text-lg-end">
                <a className="rbt-btn btn-border icon-hover radius-round" href="#">
                  <span className="btn-text">Browse Histudy Courses</span>
                  <span className="btn-icon">
                    <i>
                      <icons.ArrowForwardIcon />
                    </i>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="row g-5">
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
                        <Star stars={4} />
                      </div>
                      <span className="rating-count"> (15 Reviews)</span>
                    </div>
                    <div className="rbt-bookmark-btn">
                      <a className="rbt-round-btn" title="Bookmark" href="#">
                        <i>
                          <icons.FavoriteIcon />
                        </i>
                      </a>
                    </div>
                  </div>

                  <h4 className="rbt-card-title">
                    <a href="course-details.html">React Front To Back</a>
                  </h4>

                  <ul className="rbt-meta">
                    <li>
                      <i>
                        <icons.PermIdentityIcon />
                      </i>
                      12 Lessons
                    </li>
                    <li>
                      <i>
                        <icons.PermIdentityIcon />
                      </i>
                      50 Students
                    </li>
                  </ul>

                  <p className="rbt-card-text">It is a long established fact that a reader will be distracted.</p>
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
                      Learn More
                      <i>
                        <icons.ArrowForwardIcon />
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
                        <Star stars={4} />
                      </div>
                      <span className="rating-count"> (15 Reviews)</span>
                    </div>
                    <div className="rbt-bookmark-btn">
                      <a className="rbt-round-btn" title="Bookmark" href="#">
                        <i>
                          <icons.FavoriteIcon />
                        </i>
                      </a>
                    </div>
                  </div>

                  <h4 className="rbt-card-title">
                    <a href="course-details.html">React Front To Back</a>
                  </h4>

                  <ul className="rbt-meta">
                    <li>
                      <i>
                        <icons.PermIdentityIcon />
                      </i>
                      12 Lessons
                    </li>
                    <li>
                      <i>
                        <icons.PermIdentityIcon />
                      </i>
                      50 Students
                    </li>
                  </ul>

                  <p className="rbt-card-text">It is a long established fact that a reader will be distracted.</p>
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
                      Learn More
                      <i>
                        <icons.ArrowForwardIcon />
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
                        <Star stars={4} />
                      </div>
                      <span className="rating-count"> (15 Reviews)</span>
                    </div>
                    <div className="rbt-bookmark-btn">
                      <a className="rbt-round-btn" title="Bookmark" href="#">
                        <i>
                          <icons.FavoriteIcon />
                        </i>
                      </a>
                    </div>
                  </div>

                  <h4 className="rbt-card-title">
                    <a href="course-details.html">React Front To Back</a>
                  </h4>

                  <ul className="rbt-meta">
                    <li>
                      <i>
                        <icons.PermIdentityIcon />
                      </i>
                      12 Lessons
                    </li>
                    <li>
                      <i>
                        <icons.PermIdentityIcon />
                      </i>
                      50 Students
                    </li>
                  </ul>

                  <p className="rbt-card-text">It is a long established fact that a reader will be distracted.</p>
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
                      Learn More
                      <i>
                        <icons.ArrowForwardIcon />
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
                        <Star stars={4} />
                      </div>
                      <span className="rating-count"> (15 Reviews)</span>
                    </div>
                    <div className="rbt-bookmark-btn">
                      <a className="rbt-round-btn" title="Bookmark" href="#">
                        <i>
                          <icons.FavoriteIcon />
                        </i>
                      </a>
                    </div>
                  </div>

                  <h4 className="rbt-card-title">
                    <a href="course-details.html">React Front To Back</a>
                  </h4>

                  <ul className="rbt-meta">
                    <li>
                      <i>
                        <icons.PermIdentityIcon />
                      </i>
                      12 Lessons
                    </li>
                    <li>
                      <i>
                        <icons.PermIdentityIcon />
                      </i>
                      50 Students
                    </li>
                  </ul>

                  <p className="rbt-card-text">It is a long established fact that a reader will be distracted.</p>
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
                      Learn More
                      <i>
                        <icons.ArrowForwardIcon />
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
                        <Star stars={4} />
                      </div>
                      <span className="rating-count"> (15 Reviews)</span>
                    </div>
                    <div className="rbt-bookmark-btn">
                      <a className="rbt-round-btn" title="Bookmark" href="#">
                        <i>
                          <icons.FavoriteIcon />
                        </i>
                      </a>
                    </div>
                  </div>

                  <h4 className="rbt-card-title">
                    <a href="course-details.html">React Front To Back</a>
                  </h4>

                  <ul className="rbt-meta">
                    <li>
                      <i>
                        <icons.PermIdentityIcon />
                      </i>
                      12 Lessons
                    </li>
                    <li>
                      <i>
                        <icons.PermIdentityIcon />
                      </i>
                      50 Students
                    </li>
                  </ul>

                  <p className="rbt-card-text">It is a long established fact that a reader will be distracted.</p>
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
                      Learn More
                      <i>
                        <icons.ArrowForwardIcon />
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
                        <Star stars={4} />
                      </div>
                      <span className="rating-count"> (15 Reviews)</span>
                    </div>
                    <div className="rbt-bookmark-btn">
                      <a className="rbt-round-btn" title="Bookmark" href="#">
                        <i>
                          <icons.FavoriteIcon />
                        </i>
                      </a>
                    </div>
                  </div>

                  <h4 className="rbt-card-title">
                    <a href="course-details.html">React Front To Back</a>
                  </h4>

                  <ul className="rbt-meta">
                    <li>
                      <i>
                        <icons.PermIdentityIcon />
                      </i>
                      12 Lessons
                    </li>
                    <li>
                      <i>
                        <icons.PermIdentityIcon />
                      </i>
                      50 Students
                    </li>
                  </ul>

                  <p className="rbt-card-text">It is a long established fact that a reader will be distracted.</p>
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
                      Learn More
                      <i>
                        <icons.ArrowForwardIcon />
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
