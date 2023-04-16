import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";
// import images from "../../../assets/images";
import icons from "../../../assets/icons";

const Header = () => {
  return (
    <>
      <header className="main-header">
        <div className="d-flex align-items-center logo-box justify-content-start">
          <a href="index.html" className="logo justify-content-around w-p100">
            <div className="logo-mini w-30">
              <span className="light-logo">
                <img src={icons.AddCircleOutlineIcon} alt="logo" />
              </span>
              <span className="dark-logo">
                <img src="../images/logo-letter.png" alt="logo" />
              </span>
            </div>
            <div className="logo-lg">
              <span className="light-logo">
                <img src="../images/logo-dark-text.png" alt="logo" />
              </span>
              <span className="dark-logo">
                <img src="../images/logo-light-text.png" alt="logo" />
              </span>
            </div>
          </a>
        </div>

        <nav className="navbar navbar-static-top">
          <div className="app-menu">
            <ul className="header-megamenu nav">
              <li className="btn-group nav-item">
                <a
                  href="#"
                  className="waves-effect waves-light nav-link push-btn"
                  data-toggle="push-menu"
                  role="button"
                >
                  <span className="icon-Align-left">
                    <span className="path1"></span>
                    <span className="path2"></span>
                    <span className="path3"></span>
                  </span>
                </a>
              </li>
              <li className="btn-group nav-item d-none d-xl-inline-block">
                <a href="contact_app_chat.html" className="waves-effect waves-light nav-link svg-bt-icon" title="Chat">
                  <i className="icon-Chat">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                </a>
              </li>
              <li className="btn-group nav-item d-none d-xl-inline-block">
                <a href="mailbox.html" className="waves-effect waves-light nav-link svg-bt-icon" title="Mailbox">
                  <i className="icon-Mailbox">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                </a>
              </li>
              <li className="btn-group nav-item d-none d-xl-inline-block">
                <a
                  href="extra_taskboard.html"
                  className="waves-effect waves-light nav-link svg-bt-icon"
                  title="Taskboard"
                >
                  <i className="icon-Clipboard-check">
                    <span className="path1"></span>
                    <span className="path2"></span>
                    <span className="path3"></span>
                  </i>
                </a>
              </li>
            </ul>
          </div>

          <div className="navbar-custom-menu r-side">
            <ul className="nav navbar-nav">
              <li className="btn-group d-lg-inline-flex d-none">
                <div className="app-menu">
                  <div className="search-bx mx-5">
                    <form>
                      <div className="input-group">
                        <input
                          type="search"
                          className="form-control"
                          placeholder="Search"
                          aria-label="Search"
                          aria-describedby="button-addon2"
                        />
                        <div className="input-group-append">
                          <button className="btn" type="submit" id="button-addon3">
                            <i data-feather="search"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </li>
              <li className="btn-group nav-item d-lg-inline-flex d-none">
                <a
                  href="#"
                  data-provide="fullscreen"
                  className="waves-effect waves-light nav-link full-screen"
                  title="Full Screen"
                >
                  <i className="icon-Expand-arrows">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                </a>
              </li>

              <li className="dropdown notifications-menu">
                <a
                  href="#"
                  className="waves-effect waves-light dropdown-toggle"
                  data-bs-toggle="dropdown"
                  title="Notifications"
                >
                  <i className="icon-Notifications">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
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
                          <i className="fa fa-users text-info"></i> Curabitur id eros quis nunc suscipit blandit.
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-warning text-warning"></i> Duis malesuada justo eu sapien elementum, in
                          semper diam posuere.
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-users text-danger"></i> Donec at nisi sit amet tortor commodo porttitor
                          pretium a erat.
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <i className="fa fa-shopping-cart text-success"></i> In gravida mauris et nisi{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-user text-danger"></i> Praesent eu lacus in libero dictum fermentum.
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <i className="fa fa-user text-primary"></i> Nunc fringilla lorem{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-user text-success"></i> Nullam euismod dolor ut quam interdum, at
                          scelerisque ipsum imperdiet.
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="footer">
                    <a href="#">View all</a>
                  </li>
                </ul>
              </li>

              <li className="dropdown user user-menu">
                <a href="#" className="waves-effect waves-light dropdown-toggle" data-bs-toggle="dropdown" title="User">
                  <i className="icon-User">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                </a>
                <ul className="dropdown-menu animated flipInX">
                  <li className="user-body">
                    <a className="dropdown-item" href="#">
                      <i className="ti-user text-muted me-2"></i> Profile
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="ti-wallet text-muted me-2"></i> My Wallet
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="ti-settings text-muted me-2"></i> Settings
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      <i className="ti-lock text-muted me-2"></i> Logout
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#" data-toggle="control-sidebar" title="Setting" className="waves-effect waves-light">
                  <i className="icon-Settings">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
