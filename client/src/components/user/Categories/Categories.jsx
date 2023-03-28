import React from "react";

import "./Categories.scss";
import icons from "../../../assets/icons";

const Categories = () => {
  return (
    <div className="Categories">
      <div className="rbt-rbt-course-area rbt-section-gapBottom bg-color-white">
        <div className="container">
          <div className="row g-5 align-items-center mb--50">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="section-title">
                <h2 className="title">Course Outline</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="load-more-btn text-start text-md-end">
                <a className="rbt-btn btn-gradient rbt-marquee-btn radius-round" href="#">
                  <span data-text="View All Courses">View All Courses</span>
                </a>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
              <a href="course-filter-one-toggle.html" className="rbt-cat-box rbt-cat-box-1 variation-4 text-center">
                <div className="inner">
                  <div className="icons">
                    <i>
                      <icons.DashboardIcon />
                    </i>
                  </div>
                  <div className="content">
                    <h5 className="title">UI/UX Design Services</h5>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
              <a href="course-filter-one-toggle.html" className="rbt-cat-box rbt-cat-box-1 variation-4 text-center">
                <div className="inner">
                  <div className="icons">
                    <i>
                      <icons.DashboardIcon />
                    </i>
                  </div>
                  <div className="content">
                    <h5 className="title">UI/UX Design Services</h5>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
              <a href="course-filter-one-toggle.html" className="rbt-cat-box rbt-cat-box-1 variation-4 text-center">
                <div className="inner">
                  <div className="icons">
                    <i>
                      <icons.DashboardIcon />
                    </i>
                  </div>
                  <div className="content">
                    <h5 className="title">UI/UX Design Services</h5>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
              <a href="course-filter-one-toggle.html" className="rbt-cat-box rbt-cat-box-1 variation-4 text-center">
                <div className="inner">
                  <div className="icons">
                    <i>
                      <icons.DashboardIcon />
                    </i>
                  </div>
                  <div className="content">
                    <h5 className="title">UI/UX Design Services</h5>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
              <a href="course-filter-one-toggle.html" className="rbt-cat-box rbt-cat-box-1 variation-4 text-center">
                <div className="inner">
                  <div className="icons">
                    <i>
                      <icons.DashboardIcon />
                    </i>
                  </div>
                  <div className="content">
                    <h5 className="title">UI/UX Design Services</h5>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
              <a href="course-filter-one-toggle.html" className="rbt-cat-box rbt-cat-box-1 variation-4 text-center">
                <div className="inner">
                  <div className="icons">
                    <i>
                      <icons.DashboardIcon />
                    </i>
                  </div>
                  <div className="content">
                    <h5 className="title">UI/UX Design Services</h5>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
