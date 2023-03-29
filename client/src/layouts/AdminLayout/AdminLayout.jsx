import React from "react";

import "./adminlayout.scss";
import MultiNavbar from "../../components/admin/MultiNavbar/MultiNavbar.jsx";
import Header from "../../components/admin/Header/Header.jsx";

const AdminLayout = ({ children }) => {
  return (
    <>
      <div className="hold-transition light-skin sidebar-mini theme-primary fixed">
        <div className="wrapper">
          <Header />
          <MultiNavbar />
          <div className="content-wrapper">
            <div className="container-full">
              <div className="content">
                {/* <div className="row">
                  <div className="col-xl-9 col-12">
                    <div className="box bg-success">
                      <div className="box-body d-flex p-0">
                        <div className="flex-grow-1 p-30 flex-grow-1 bg-img bg-none-md">
                          <div className="row">
                            <div className="col-12 col-xl-7">
                              <h1 className="mb-0 fw-600">Learn With Effectively With Us!</h1>
                              <p className="my-10 fs-16 text-white-70">Get 30% off every course on january.</p>
                              <div className="mt-45 d-md-flex align-items-center">
                                <div className="me-30 mb-30 mb-md-0">
                                  <div className="d-flex align-items-center">
                                    <div className="me-15 text-center fs-24 w-50 h-50 l-h-50 bg-danger b-1 border-white rounded-circle">
                                      <i className="fa fa-graduation-cap"></i>
                                    </div>
                                    <div>
                                      <h5 className="mb-0">Students</h5>
                                      <p className="mb-0 text-white-70">75,000+</p>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="d-flex align-items-center">
                                    <div className="me-15 text-center fs-24 w-50 h-50 l-h-50 bg-warning b-1 border-white rounded-circle">
                                      <i className="fa fa-user"></i>
                                    </div>
                                    <div>
                                      <h5 className="mb-0">Expert Mentors</h5>
                                      <p className="mb-0 text-white-70">200+</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-xl-5"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-12">
                    <div className="box bg-transparent no-shadow">
                      <div className="box-body p-xl-0 text-center">
                        <h3 className="px-30 mb-20">
                          Have More
                          <br />
                          knoledge to share?
                        </h3>
                        <a href="course.html" className="waves-effect waves-light w-p100 btn btn-primary">
                          <i className="fa fa-plus me-15"></i> Create New Course
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <a className="box box-link-shadow text-center pull-up" href="">
                          <div className="box-body py-5 bg-primary-light px-5">
                            <p className="fw-500 text-primary text-overflow">Courses in Progress</p>
                          </div>
                          <div className="box-body p-10">
                            <h1 className="countnm fs-40 m-0">5</h1>
                          </div>
                        </a>
                      </div>
                      <div className="col-6">
                        <a className="box box-link-shadow text-center pull-up" href="">
                          <div className="box-body py-5 bg-primary-light px-5">
                            <p className="fw-500 text-primary text-overflow">Forum Discussion</p>
                          </div>
                          <div className="box-body p-10">
                            <h1 className="countnm fs-40 m-0">25</h1>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-12">
                    <div className="box no-shadow mb-0 bg-transparent">
                      <div className="box-header no-border px-0">
                        <h3 className="fw-500 box-title">Popular Courses</h3>
                        <div className="box-controls pull-right d-md-flex d-none">
                          <a href="course.html">All Courses</a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="box mb-15 pull-up">
                        <div className="box-body">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <div className="me-15 bg-warning h-50 w-50 l-h-55 rounded text-center">
                                <span className="fs-24">U</span>
                              </div>
                              <div className="d-flex flex-column fw-500">
                                <a href="course.html" className="text-dark hover-warning mb-1 fs-16">
                                  UI/UX Design
                                </a>
                                <span className="text-fade">30+ Courses</span>
                              </div>
                            </div>

                            <div className="d-flex align-items-center">
                              <a
                                href="course.html"
                                className="waves-effect waves-light btn btn-sm btn-warning-light me-10"
                              >
                                View Courses
                              </a>
                              <div className="dropdown">
                                <a className="px-10 pt-5" href="#" data-bs-toggle="dropdown">
                                  <i className="fa fa-ellipsis-v"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a className="dropdown-item flexbox" href="#">
                                    Apply
                                  </a>
                                  <a className="dropdown-item flexbox" href="#">
                                    Make a Payment
                                  </a>
                                  <a className="dropdown-item flexbox" href="#">
                                    Benefits
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="box mb-15 pull-up">
                        <div className="box-body">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <div className="me-15 bg-danger h-50 w-50 l-h-55 rounded text-center">
                                <span className="fs-24">M</span>
                              </div>
                              <div className="d-flex flex-column fw-500">
                                <a href="course.html" className="text-dark hover-danger mb-1 fs-16">
                                  Marketing
                                </a>
                                <span className="text-fade">25+ Courses</span>
                              </div>
                            </div>

                            <div className="d-flex align-items-center">
                              <a
                                href="course.html"
                                className="waves-effect waves-light btn btn-sm btn-danger-light me-10"
                              >
                                View Courses
                              </a>
                              <div className="dropdown">
                                <a className="px-10 pt-5" href="#" data-bs-toggle="dropdown">
                                  <i className="fa fa-ellipsis-v"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a className="dropdown-item flexbox" href="#">
                                    Apply
                                  </a>
                                  <a className="dropdown-item flexbox" href="#">
                                    Make a Payment
                                  </a>
                                  <a className="dropdown-item flexbox" href="#">
                                    Benefits
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="box mb-15 pull-up">
                        <div className="box-body">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <div className="me-15 bg-success h-50 w-50 l-h-55 rounded text-center">
                                <span className="fs-24">W</span>
                              </div>
                              <div className="d-flex flex-column fw-500">
                                <a href="course.html" className="text-dark hover-success mb-1 fs-16">
                                  Web Dev.
                                </a>
                                <span className="text-fade">30+ Courses</span>
                              </div>
                            </div>

                            <div className="d-flex align-items-center">
                              <a
                                href="course.html"
                                className="waves-effect waves-light btn btn-sm btn-success-light me-10"
                              >
                                View Courses
                              </a>
                              <div className="dropdown">
                                <a className="px-10 pt-5" href="#" data-bs-toggle="dropdown">
                                  <i className="fa fa-ellipsis-v"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a className="dropdown-item flexbox" href="#">
                                    Apply
                                  </a>
                                  <a className="dropdown-item flexbox" href="#">
                                    Make a Payment
                                  </a>
                                  <a className="dropdown-item flexbox" href="#">
                                    Benefits
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="box mb-15 pull-up">
                        <div className="box-body">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <div className="me-15 bg-primary h-50 w-50 l-h-55 rounded text-center">
                                <span className="fs-24">M</span>
                              </div>
                              <div className="d-flex flex-column fw-500">
                                <a href="course.html" className="text-dark hover-primary mb-1 fs-16">
                                  Mathematics
                                </a>
                                <span className="text-fade">50+ Courses</span>
                              </div>
                            </div>

                            <div className="d-flex align-items-center">
                              <a
                                href="course.html"
                                className="waves-effect waves-light btn btn-sm btn-primary-light me-10"
                              >
                                View Courses
                              </a>
                              <div className="dropdown">
                                <a className="px-10 pt-5" href="#" data-bs-toggle="dropdown">
                                  <i className="fa fa-ellipsis-v"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a className="dropdown-item flexbox" href="#">
                                    Apply
                                  </a>
                                  <a className="dropdown-item flexbox" href="#">
                                    Make a Payment
                                  </a>
                                  <a className="dropdown-item flexbox" href="#">
                                    Benefits
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-12">
                    <div className="box no-shadow mb-0 bg-transparent">
                      <div className="box-header no-border px-0">
                        <h3 className="fw-500 box-title">Current Activity</h3>
                      </div>
                    </div>
                    <div className="box">
                      <div className="box-body pb-0">
                        <div className="mb-15 w-p100 d-flex align-items-center justify-content-between">
                          <div>
                            <h3 className="my-0">Monthly Progress</h3>
                            <p className="mb-0 text-fade">This is the latest Improvement</p>
                          </div>
                          <div className="input-group w-auto">
                            <button type="button" className="btn btn-primary-light btn-circle" id="daterange-btn">
                              <p>
                                <i className="fa fa-calendar"></i>
                              </p>
                            </button>
                          </div>
                        </div>
                        <div id="charts_widget_2_chart"></div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-7">
                        <div className="box bg-warning">
                          <div className="box-body">
                            <h2 className="my-0 fw-600 text-white">450K+</h2>
                            <p className="mb-10 text-white-80">Completed Course</p>
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="mb-0 text-white-70">This is the latest Data</p>
                              <button
                                type="button"
                                className="waves-effect waves-circle btn btn-circle btn-warning-light"
                              >
                                <i className="mdi mdi-arrow-top-right"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-5">
                        <div className="box bg-danger">
                          <div className="box-body">
                            <h2 className="my-0 fw-600 text-white">200K+</h2>
                            <p className="mb-10 text-white-80">Video Course</p>
                            <div className="d-flex align-items-center justify-content-end">
                              <button
                                type="button"
                                className="waves-effect waves-circle btn btn-circle btn-danger-light"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                <i className="mdi mdi-play"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="modal fade" id="exampleModal" aria-hidden="true">
                          <div className="modal-dialog modal-xl modal-dialog-centered">
                            <div className="modal-content">
                              <div className="ratio ratio-16x9">
                                <iframe
                                  src="//player.vimeo.com/video/473177594?title=0&portrait=0&byline=0&autoplay=1"
                                  title="video"
                                  allowFullScreen
                                ></iframe>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-12">
                    <div className="box no-shadow mb-0 bg-transparent">
                      <div className="box-header no-border px-0">
                        <h3 className="fw-500 box-title">Best Instructors</h3>
                        <div className="box-controls pull-right d-md-flex d-none">
                          <a href="#">See All</a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="box mb-15 pull-up">
                        <div className="box-body">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <div className="me-15 mb-1">
                                <img
                                  src="../../../images/avatar/avatar-1.png"
                                  className="bg-primary-light avatar avatar-lg rounded-circle"
                                  alt=""
                                />
                              </div>
                              <div className="d-flex flex-column fw-500">
                                <a href="extra_profile.html" className="text-dark hover-primary mb-1 fs-16">
                                  Nil Yeager
                                </a>
                                <span className="text-fade">5 Design Course</span>
                              </div>
                            </div>

                            <div className="d-flex align-items-center">
                              <a href="course.html" className="waves-effect waves-light btn btn-sm btn-secondary">
                                Courses
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="box mb-15 pull-up">
                        <div className="box-body">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <div className="me-15 mb-1">
                                <img
                                  src="../../../images/avatar/avatar-2.png"
                                  className="bg-primary-light avatar avatar-lg rounded-circle"
                                  alt=""
                                />
                              </div>
                              <div className="d-flex flex-column fw-500">
                                <a href="extra_profile.html" className="text-dark hover-primary mb-1 fs-16">
                                  Theron Trump
                                </a>
                                <span className="text-fade">5 Design Course</span>
                              </div>
                            </div>

                            <div className="d-flex align-items-center">
                              <a href="course.html" className="waves-effect waves-light btn btn-sm btn-secondary">
                                Courses
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="box mb-15 pull-up">
                        <div className="box-body">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <div className="me-15">
                                <img
                                  src="../../../images/avatar/avatar-3.png"
                                  className="bg-primary-light avatar avatar-lg rounded-circle"
                                  alt=""
                                />
                              </div>
                              <div className="d-flex flex-column fw-500">
                                <a href="extra_profile.html" className="text-dark hover-primary mb-1 fs-16">
                                  Tyler Mark
                                </a>
                                <span className="text-fade">5 Design Course</span>
                              </div>
                            </div>

                            <div className="d-flex align-items-center">
                              <a href="course.html" className="waves-effect waves-light btn btn-sm btn-secondary">
                                Courses
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="box mb-15 pull-up">
                        <div className="box-body">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                              <div className="me-15">
                                <img
                                  src="../../../images/avatar/avatar-4.png"
                                  className="bg-primary-light avatar avatar-lg rounded-circle"
                                  alt=""
                                />
                              </div>
                              <div className="d-flex flex-column fw-500">
                                <a href="extra_profile.html" className="text-dark hover-primary mb-1 fs-16">
                                  Johen Mark
                                </a>
                                <span className="text-fade">5 Design Course</span>
                              </div>
                            </div>

                            <div className="d-flex align-items-center">
                              <a href="course.html" className="waves-effect waves-light btn btn-sm btn-secondary">
                                Courses
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-12">
                    <div className="box">
                      <div className="box-header no-border">
                        <h3 className="box-title">Top 5 School Performance</h3>
                      </div>
                      <div className="box-body">
                        <div id="performance_chart"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-12">
                    <div className="box">
                      <div className="box-header no-border">
                        <h3 className="box-title">Overall Pass Percentage</h3>
                      </div>
                      <div className="box-body">
                        <div id="pass_chart"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-12">
                    <div className="box">
                      <div className="box-header no-border">
                        <h3 className="box-title">Content Usage</h3>
                      </div>
                      <div className="box-body text-center pt-60">
                        <p className="text-primary">12.5% higher than last month</p>
                        <div id="usage_chart"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-8 col-12">
                    <div className="row">
                      <div className="col-xl-5 col-lg-6 col-12">
                        <div className="box">
                          <div className="box-header no-border">
                            <h3 className="box-title">Course completion</h3>
                            <ul className="box-controls pull-right d-md-flex d-none">
                              <li>
                                <a href="course.html" className="btn btn-primary-light px-10 base-font">
                                  View All
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="box-body">
                            <div className="mb-25">
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="w-p85">
                                  <div className="progress progress-sm mb-0">
                                    <div
                                      className="progress-bar progress-bar-primary"
                                      role="progressbar"
                                      aria-valuenow="40"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </div>
                                <div>
                                  <div>40%</div>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <p className="mb-0 text-primary">In Progress</p>
                                <p className="text-fade mb-0">117 User</p>
                              </div>
                            </div>
                            <div className="mb-25">
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="w-p85">
                                  <div className="progress progress-sm mb-0">
                                    <div
                                      className="progress-bar progress-bar-success"
                                      role="progressbar"
                                      aria-valuenow="20"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </div>
                                <div>
                                  <div>20%</div>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <p className="mb-0 text-primary">Completed</p>
                                <p className="text-fade mb-0">74 User</p>
                              </div>
                            </div>
                            <div className="mb-25">
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="w-p85">
                                  <div className="progress progress-sm mb-0">
                                    <div
                                      className="progress-bar progress-bar-warning"
                                      role="progressbar"
                                      aria-valuenow="18"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </div>
                                <div>
                                  <div>18%</div>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <p className="mb-0 text-primary">Inactive</p>
                                <p className="text-fade mb-0">58 User</p>
                              </div>
                            </div>
                            <div className="mb-25">
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="w-p85">
                                  <div className="progress progress-sm mb-0">
                                    <div
                                      className="progress-bar progress-bar-danger"
                                      role="progressbar"
                                      aria-valuenow="7"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </div>
                                <div>
                                  <div>07%</div>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <p className="mb-0 text-primary">Expeired</p>
                                <p className="text-fade mb-0">11 User</p>
                              </div>
                            </div>
                            <div className="mb-25">
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="w-p85">
                                  <div className="progress progress-sm mb-0">
                                    <div
                                      className="progress-bar progress-bar-primary"
                                      role="progressbar"
                                      aria-valuenow="40"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </div>
                                <div>
                                  <div>40%</div>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <p className="mb-0 text-primary">In Progress</p>
                                <p className="text-fade mb-0">117 User</p>
                              </div>
                            </div>
                            <div className="mb-20">
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="w-p85">
                                  <div className="progress progress-sm mb-0">
                                    <div
                                      className="progress-bar progress-bar-success"
                                      role="progressbar"
                                      aria-valuenow="20"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </div>
                                <div>
                                  <div>20%</div>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <p className="mb-0 text-primary">Completed</p>
                                <p className="text-fade mb-0">74 User</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-7 col-lg-6 col-12">
                        <div className="box bg-transparent no-shadow mb-30">
                          <div className="box-header no-border pb-0">
                            <h3 className="box-title">Upcoming Lessons</h3>
                            <ul className="box-controls pull-right d-md-flex d-none">
                              <li>
                                <a href="course.html" className="btn btn-primary-light px-10 base-font">
                                  View All
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="box mb-15 pull-up">
                          <div className="box-body">
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="d-flex align-items-center">
                                <div className="me-15 bg-warning h-50 w-50 l-h-68 rounded text-center">
                                  <span className="icon-Book-open fs-24">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                  </span>
                                </div>
                                <div className="d-flex flex-column fw-500">
                                  <a href="course.html" className="text-dark hover-primary mb-1 fs-16">
                                    Informatic Course
                                  </a>
                                  <span className="text-fade">Nil Yeager, 19 April</span>
                                </div>
                              </div>
                              <a href="course.html">
                                <span className="icon-Arrow-right fs-24">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="box mb-15 pull-up">
                          <div className="box-body">
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="d-flex align-items-center">
                                <div className="me-15 bg-primary h-50 w-50 l-h-68 rounded text-center">
                                  <span className="icon-Mail fs-24"></span>
                                </div>
                                <div className="d-flex flex-column fw-500">
                                  <a href="course.html" className="text-dark hover-primary mb-1 fs-16">
                                    Live Drawing
                                  </a>
                                  <span className="text-fade">Micak Doe, 12 June</span>
                                </div>
                              </div>
                              <a href="course.html">
                                <span className="icon-Arrow-right fs-24">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="box mb-15 pull-up">
                          <div className="box-body">
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="d-flex align-items-center">
                                <div className="me-15 bg-danger h-50 w-50 l-h-68 rounded text-center">
                                  <span className="icon-Book-open fs-24">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                  </span>
                                </div>
                                <div className="d-flex flex-column fw-500">
                                  <a href="course.html" className="text-dark hover-primary mb-1 fs-16">
                                    Contemporary Art
                                  </a>
                                  <span className="text-fade">Potar doe, 27 July</span>
                                </div>
                              </div>
                              <a href="course.html">
                                <span className="icon-Arrow-right fs-24">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="box mb-15 pull-up">
                          <div className="box-body">
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="d-flex align-items-center">
                                <div className="me-15 bg-info h-50 w-50 l-h-68 rounded text-center">
                                  <span className="icon-Mail fs-24"></span>
                                </div>
                                <div className="d-flex flex-column fw-500">
                                  <a href="course.html" className="text-dark hover-info mb-1 fs-16">
                                    Live Drawing
                                  </a>
                                  <span className="text-fade">Micak Doe, 12 June</span>
                                </div>
                              </div>
                              <a href="course.html">
                                <span className="icon-Arrow-right fs-24">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-12">
                    <div className="box">
                      <div className="box-header no-border">
                        <h3 className="box-title">Notice board</h3>
                      </div>
                      <div className="box-body p-0">
                        <div className="act-div">
                          <div className="media-list media-list-hover">
                            <div className="media bar-0">
                              <span className="avatar avatar-lg bg-primary-light rounded">
                                <i className="fa fa-user"></i>
                              </span>
                              <div className="media-body">
                                <p className="d-flex align-items-center justify-content-between">
                                  <a className="hover-success fs-16" href="#">
                                    New Teacher
                                  </a>
                                  <span className="text-fade fs-12">Just Now</span>
                                </p>
                                <p className="text-fade">
                                  It is a long established fact that a reader will be
                                  <span className="d-xxxl-inline-block d-none">distracted by the readable</span>...
                                </p>
                              </div>
                            </div>

                            <div className="media bar-0">
                              <span className="avatar avatar-lg bg-danger-light rounded">
                                <i className="fa fa-money"></i>
                              </span>
                              <div className="media-body">
                                <p className="d-flex align-items-center justify-content-between">
                                  <a className="hover-success fs-16" href="#">
                                    New Fees Structure
                                  </a>
                                  <span className="text-fade fs-12">Today</span>
                                </p>
                                <p className="text-fade">
                                  It is a long established fact that a reader will be
                                  <span className="d-xxxl-inline-block d-none">distracted by the readable</span>...
                                </p>
                              </div>
                            </div>

                            <div className="media bar-0">
                              <span className="avatar avatar-lg bg-success-light rounded">
                                <i className="fa fa-book"></i>
                              </span>
                              <div className="media-body">
                                <p className="d-flex align-items-center justify-content-between">
                                  <a className="hover-success fs-16" href="#">
                                    Updated Syllabus
                                  </a>
                                  <span className="text-fade fs-12">17 Dec 2020</span>
                                </p>
                                <p className="text-fade">
                                  It is a long established fact that a reader will be
                                  <span className="d-xxxl-inline-block d-none">distracted by the readable</span>...
                                </p>
                              </div>
                            </div>

                            <div className="media bar-0">
                              <span className="avatar avatar-lg bg-info-light rounded">
                                <i className="fa fa-graduation-cap"></i>
                              </span>
                              <div className="media-body">
                                <p className="d-flex align-items-center justify-content-between">
                                  <a className="hover-success fs-16" href="#">
                                    New Course
                                  </a>
                                  <span className="text-fade fs-12">27 Oct 2020</span>
                                </p>
                                <p className="text-fade">
                                  It is a long established fact that a reader will be
                                  <span className="d-xxxl-inline-block d-none">distracted by the readable</span>...
                                </p>
                              </div>
                            </div>

                            <div className="media bar-0">
                              <span className="avatar avatar-lg bg-danger-light rounded">
                                <i className="fa fa-money"></i>
                              </span>
                              <div className="media-body">
                                <p className="d-flex align-items-center justify-content-between">
                                  <a className="hover-success fs-16" href="#">
                                    New Fees Structure
                                  </a>
                                  <span className="text-fade fs-12">Today</span>
                                </p>
                                <p className="text-fade">
                                  It is a long established fact that a reader will be
                                  <span className="d-xxxl-inline-block d-none">distracted by the readable</span>...
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="box-footer text-center p-20">
                        <a href="extra_taskboard.html" className="btn w-p100 btn-primary-light p-5">
                          View all
                        </a>
                      </div>
                    </div>
                  </div>
                </div> */}
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
