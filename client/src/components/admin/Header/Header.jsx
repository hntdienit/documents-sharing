import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";
import images from "../../../assets/images";
import icons from "../../../assets/icons";

const Header = () => {
  return (
    <header className="main-header">
      <div className="d-flex align-items-center logo-box justify-content-start">
        <Link to={"/admin"} className="logo">
          {/* <div className="logo-mini w-30">
            <span className="light-logo">
              <img src={images.logo} alt="logo" />
            </span>
            <span className="dark-logo">
              <img src={images.logo} alt="logo" />
            </span>
          </div> */}
          <div className="logo-lg">
            <span className="light-logo">
              <img src={images.logo} alt="logo" />
            </span>
            <span className="dark-logo">
              <img src={images.logo} alt="logo" />
            </span>
          </div>
        </Link>
      </div>

      <nav className="navbar navbar-static-top">
        <div className="app-menu">
          <ul className="header-megamenu nav">
            {/* <li className="btn-group nav-item">
              <a
                href="#"
                className="waves-effect waves-light nav-link push-btn btn-primary-light ms-0"
                data-toggle="push-menu"
                role="button"
              >
                <i><icons.MenuIcon/></i>
              </a>
            </li> */}
            <li className="btn-group d-lg-inline-flex d-none">
              <div className="app-menu">
                <div className="search-bx mx-5">
                  <form>
                    <div className="input-group">
                      <input type="search" className="form-control" placeholder="Search" />
                      <div className="input-group-append">
                        <button className="btn" type="submit" id="button-addon3">
                          <i>
                            <icons.SearchIcon />
                            {/* <span className="path1"></span>
                          <span className="path2"></span> */}
                          </i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="navbar-custom-menu r-side">
          <ul className="nav navbar-nav">
            {/* <li className="btn-group d-md-inline-flex d-none">
              <a href="/" title="skin Change" className="waves-effect skin-toggle waves-light">
                <label className="switch">
                  <input type="checkbox" data-mainsidebarskin="toggle" id="toggle_left_sidebar_skin" />
                  <span className="switch-on">
                    <i data-feather="moon"></i>
                  </span>
                  <span className="switch-off">
                    <i data-feather="sun"></i>
                  </span>
                </label>
              </a>
            </li> */}
            {/* <li className="dropdown notifications-menu btn-group">
              <a
                href="#"
                className="waves-effect waves-light btn-primary-light svg-bt-icon bg-transparent"
                data-bs-toggle="dropdown"
                title="Notifications"
              >
                <i>
                  <icons.NotificationsIcon />
                </i>
                <div className="pulse-wave"></div>
              </a>
              <ul className="dropdown-menu animated bounceIn">
                <li className="header">
                  <div className="p-20">
                    <div className="flexbox">
                      <div>
                        <h4 className="mb-0 mt-0">Notifications</h4>
                      </div>
                      <div>
                        <a href="#" className="text-danger">
                          Clear All
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <ul className="menu sm-scrol">
                    <li>
                      <a href="#">
                        <i>
                          <icons.PermIdentityIcon />
                        </i>
                        Curabitur id eros quis nunc suscipit blandit.
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i>
                          <icons.PermIdentityIcon />
                        </i>
                        Duis malesuada justo eu sapien elementum, in semper diam posuere.
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i>
                          <icons.PermIdentityIcon />
                        </i>
                        Donec at nisi sit amet tortor commodo porttitor pretium a erat.
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i>
                          <icons.PermIdentityIcon />
                        </i>
                        In gravida mauris et nisi
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i>
                          <icons.PermIdentityIcon />
                        </i>
                        Praesent eu lacus in libero dictum fermentum.
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i>
                          <icons.PermIdentityIcon />
                        </i>
                        Nunc fringilla lorem
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i>
                          <icons.PermIdentityIcon />
                        </i>
                        Nullam euismod dolor ut quam interdum, at scelerisque ipsum imperdiet.
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="footer">
                  <a href="#">View all</a>
                </li>
              </ul>
            </li> */}
            {/* <li className="btn-group nav-item d-xl-inline-flex d-none">
              <a
                href="#"
                className="waves-effect waves-light nav-link btn-primary-light svg-bt-icon"
                title=""
                id="live-chat"
              >
                <i>
                  <icons.MessageIcon />
                </i>
              </a>
            </li> */}

            {/* <li className="btn-group d-xl-inline-flex d-none">
              <a
                href="#"
                className="waves-effect waves-light nav-link btn-primary-light svg-bt-icon dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <img className="rounded-circle" src={images.en_us} alt="" />
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item my-5" href="#">
                  <img className="w-20 rounded me-10" src={images.en_us} alt="" /> English
                </a>
                <a className="dropdown-item my-5" href="#">
                  <img className="w-20 rounded me-10" src={images.en_us} alt="" /> Spanish
                </a>
                <a className="dropdown-item my-5" href="#">
                  <img className="w-20 rounded me-10" src={images.en_us} alt="" /> German
                </a>
                <a className="dropdown-item my-5" href="#">
                  <img className="w-20 rounded me-10" src={images.en_us} alt="" /> Japanese
                </a>
                <a className="dropdown-item my-5" href="#">
                  <img className="w-20 rounded me-10" src={images.en_us} alt="" /> French
                </a>
              </div>
            </li> */}

            {/* <li className="btn-group nav-item d-xl-inline-flex d-none">
              <a
                href="#"
                data-provide="fullscreen"
                className="waves-effect waves-light nav-link btn-primary-light svg-bt-icon"
                title="Full Screen"
              >
                <i data-feather="maximize"></i>
              </a>
            </li> */}

            {/* <li className="dropdown user user-menu">
              <a
                href="#"
                className="waves-effect waves-light dropdown-toggle w-auto l-h-12 bg-transparent p-0 no-shadow"
                title="User"
                data-bs-toggle="modal"
                data-bs-target="#quick_user_toggle"
              >
                <div className="d-flex pt-1 align-items-center">
                  <div className="text-end me-10">
                    <p className="pt-5 fs-14 mb-0 fw-700">Nil Yeager</p>
                    <small className="fs-10 mb-0 text-uppercase text-mute">Admin</small>
                  </div>
                  <img src={images.avatar} className="avatar rounded-circle bg-primary-light h-40 w-40" alt="" />
                </div>
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
