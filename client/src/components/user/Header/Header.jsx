import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Header.scss";
import newRequest from "../../../utils/newRequest.js";
import images from "../../../assets/images";
import icons from "../../../assets/icons";
import { AuthContext } from "../../../helpers/AuthContext.jsx";

const Header = () => {
  const navigate = useNavigate();

  const { currentUser, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="header rbt-header rbt-header-3">
        <div className="rbt-header-top rbt-header-top-1 header-space-betwween bg-color-darker rbt-border-bottom top-expended-activation">
          <div className="container-fluid">
            <div className="top-expended-wrapper">
              <div className="top-expended-inner rbt-header-sec align-items-center ">
                <div className="rbt-header-sec-col rbt-header-left d-none d-xl-block">
                  <div className="rbt-header-content">
                    <div className="header-info">
                      <ul className="rbt-information-list">
                        <li>
                          <Link to={"/"}>
                            <i>
                              <icons.SchoolIcon />
                            </i>
                            B1910055
                          </Link>
                        </li>
                        <li>
                          <Link to={"/"}>
                            <i>
                              <icons.BookIcon />
                            </i>
                            Luận văn
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="rbt-header-sec-col rbt-header-right mt_md--10 mt_sm--10">
                  <div className="rbt-header-content justify-content-start justify-content-lg-end">
                    <div className="header-info">
                      <ul className="rbt-dropdown-menu switcher-language">
                        <li className="has-child-menu">
                          <a href="#">
                            <img className="left-image" src={images.en_us} alt="Language Images" />
                            <span className="menu-item">English</span>
                            <i>
                              <icons.ExpandMoreIcon />
                            </i>
                          </a>
                          <ul className="sub-menu">
                            <li>
                              <a href="#">
                                <img className="left-image" src={images.fr} alt="Language Images" />
                                <span className="menu-item">Français</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img className="left-image" src={images.de} alt="Language Images" />
                                <span className="menu-item">Deutsch</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>

                    <div className="header-info">
                      <ul className="rbt-dropdown-menu currency-menu">
                        <li className="has-child-menu">
                          <a href="#">
                            <span className="menu-item">USD</span>
                            <i>
                              <icons.ExpandMoreIcon />
                            </i>
                          </a>
                          <ul className="sub-menu hover-reverse">
                            <li>
                              <a href="#">
                                <span className="menu-item">EUR</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="menu-item">GBP</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="header-info">
                <div className="top-bar-expended d-block d-lg-none">
                  <button className="topbar-expend-button rbt-round-btn">
                    <i className="feather-plus"></i>
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="rbt-header-middle position-relative rbt-header-mid-1 header-space-betwween bg-color-white rbt-border-bottom d-none d-xl-block">
          <div className="container-fluid">
            <div className="rbt-header-sec align-items-center ">
              <div className="rbt-header-sec-col rbt-header-left">
                <div className="rbt-header-content">
                  <div className="header-info">
                    <div className="logo">
                      <a href="index.html">
                        <img src={images.logo} alt="Education Logo Images" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rbt-header-sec-col rbt-header-center">
                <div className="rbt-header-content">
                  <div className="header-info">
                    <div className="rbt-search-with-category">
                      <div className="filter-select rbt-modern-select search-by-category">
                        <select>
                          <option>All Categories</option>
                          <option>Education</option>
                          <option>Course</option>
                          <option>Art</option>
                          <option>Web Design</option>
                        </select>
                      </div>
                      <div className="search-field">
                        <input type="text" placeholder="Search Course" />
                        <button className="rbt-round-btn serach-btn" type="submit">
                          <i>
                            <icons.SearchIcon />
                          </i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rbt-header-sec-col rbt-header-right">
                <div className="rbt-header-content">
                  <div className="header-info">
                    <ul className="quick-access">
                      <li className="access-icon rbt-mini-cart">
                        <a className="rbt-cart-sidenav-activation rbt-round-btn" href="#">
                          <i>
                            <icons.ShoppingCartIcon />
                          </i>
                          <span className="rbt-cart-count">4</span>
                        </a>
                      </li>

                      <li className="access-icon rbt-user-wrapper">
                        <a className="rbt-round-btn" href="#">
                          <i>
                            <icons.PermIdentityIcon />
                          </i>
                        </a>
                        <div className="rbt-user-menu-list-wrapper">
                          <div className="inner">
                            <div className="rbt-admin-profile">
                              <div className="admin-thumbnail">
                                <img src={images.avatar} alt="User Images" />
                              </div>
                              <div className="admin-info">
                                <span className="name">Nipa Bali</span>
                                <a className="rbt-btn-link color-primary" href="profile.html">
                                  View Profile
                                </a>
                              </div>
                            </div>
                            <ul className="user-list-wrapper">
                              <li>
                                <a href="instructor-dashboard.html">
                                  <i className="feather-home"></i>
                                  <span>My Dashboard</span>
                                </a>
                              </li>

                              <li>
                                <a href="instructor-wishlist.html">
                                  <i className="feather-heart"></i>
                                  <span>Wishlist</span>
                                </a>
                              </li>
                            </ul>
                            <hr className="mt--10 mb--10" />

                            <ul className="user-list-wrapper">
                              <li>
                                <a href="index.html">
                                  <i className="feather-log-out"></i>
                                  <span>Logout</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* <div className="header-info">
                    <a className="rbt-btn rbt-switch-btn btn-gradient btn-sm hover-transform-none" href="#">
                      <span data-text="Get Free Course">Get Free Course</span>
                    </a>
                  </div> */}

                  {/* <div className="header-info d-xl-none">
                    <ul className="quick-access">
                      <li className="access-icon">
                        <a className="search-trigger-active rbt-round-btn" href="#">
                          <i className="feather-search"></i>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="header-info d-block d-xl-none">
                    <div className="mobile-menu-bar">
                      <div className="hamberger">
                        <button className="hamberger-button rbt-round-btn">
                          <i className="feather-menu"></i>
                        </button>
                      </div>
                    </div>
                  </div> */}
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rbt-header-wrapper height-50 header-space-betwween bg-color-white header-sticky">
          <div className="container-fluid">
            <div className="mainbar-row rbt-navigation-center align-items-center">
              <div className="rbt-main-navigation d-none d-xl-block">
                <nav className="mainmenu-nav">
                  <ul className="mainmenu">
                    <li className="with-megamenu has-menu-child-item position-static">
                      <a href="#">
                        Home <i className="feather-chevron-down"></i>
                      </a>
                    </li>

                    <li className="with-megamenu has-menu-child-item">
                      <a href="#">
                        Courses <i className="feather-chevron-down"></i>
                      </a>
                    </li>

                    <li className="has-dropdown has-menu-child-item">
                      <a href="#">
                        Dashboard
                        <i className="feather-chevron-down"></i>
                      </a>
                      <ul className="submenu">
                        <li className="has-dropdown">
                          <a href="#">Instructor Dashboard</a>
                          <ul className="submenu">
                            <li>
                              <a href="instructor-dashboard.html">Dashboard</a>
                            </li>
                            <li>
                              <a href="instructor-profile.html">Profile</a>
                            </li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <a href="#">Student Dashboard</a>
                          <ul className="submenu">
                            <li>
                              <a href="student-dashboard.html">Dashboard</a>
                            </li>
                            <li>
                              <a href="student-profile.html">Profile</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>

                    <li className="with-megamenu has-menu-child-item position-static">
                      <a href="#">
                        Pages <i className="feather-chevron-down"></i>
                      </a>
                    </li>

                    <li className="with-megamenu has-menu-child-item position-static">
                      <a href="#">
                        Elements <i className="feather-chevron-down"></i>
                      </a>
                    </li>

                    <li className="with-megamenu has-menu-child-item position-static">
                      <a href="#">
                        Blog <i className="feather-chevron-down"></i>
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

export default Header;
