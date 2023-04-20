import React from "react";
import { Link } from "react-router-dom";


import "./Navbar.scss";
import icons from "../../../assets/icons";
import images from "../../../assets/images"

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to={"/admin"} className="sidebar-toggler">
          <i>
            <icons.AddCircleOutlineIcon />
          </i>
        </Link>
        <div className="navbar-content">
          <form className="search-form">
            <div className="input-group">
              <div className="input-group-text">
                <i>
                  <icons.SearchIcon />
                </i>
              </div>
              <input type="text" className="form-control" id="navbarForm" placeholder="Tìm kiếm......" />
            </div>
          </form>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                id="languageDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="flag-icon flag-icon-us mt-1" title="us"></i>
                <span className="ms-1 me-1 d-none d-md-inline-block">English</span>
              </Link>
              <div className="dropdown-menu" aria-labelledby="languageDropdown">
                <Link to={"/admin"} className="dropdown-item py-2">
                  <i className="flag-icon flag-icon-us" title="us" id="us"></i> <span className="ms-1"> English </span>
                </Link>
                <Link to={"/admin"} className="dropdown-item py-2">
                  <i className="flag-icon flag-icon-fr" title="fr" id="fr"></i> <span className="ms-1"> French </span>
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                id="messageDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i><icons.MessageIcon/></i>
              </Link>
              <div className="dropdown-menu p-0" aria-labelledby="messageDropdown">
                <div className="px-3 py-2 d-flex align-items-center justify-content-between border-bottom">
                  <p>9 New Messages</p>
                  <a href="/" className="text-muted">
                    Clear all
                  </a>
                </div>
                <div className="p-1">
                  <Link to={"/admin"} className="dropdown-item d-flex align-items-center py-2">
                    <div className="me-3">
                      <img className="wd-30 ht-30 rounded-circle" src={images.course_online_01} alt="userr" />
                    </div>
                    <div className="d-flex justify-content-between flex-grow-1">
                      <div className="me-4">
                        <p>Leonardo Payne</p>
                        <p className="tx-12 text-muted">Project status</p>
                      </div>
                      <p className="tx-12 text-muted">2 min ago</p>
                    </div>
                  </Link>
                </div>
                <div className="px-3 py-2 d-flex align-items-center justify-content-center border-top">
                  <Link to={"/admin"}>View all</Link>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                id="notificationDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i><icons.NotificationsIcon/></i>
                <div className="indicator">
                  <div className="circle"></div>
                </div>
              </Link>
              <div className="dropdown-menu p-0" aria-labelledby="notificationDropdown">
                <div className="px-3 py-2 d-flex align-items-center justify-content-between border-bottom">
                  <p>6 New Notifications</p>
                  <a href="/" className="text-muted">
                    Clear all
                  </a>
                </div>
                <div className="p-1">
                  <Link to={"/admin"} className="dropdown-item d-flex align-items-center py-2">
                    <div className="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
                      <i className="icon-sm text-white" data-feather="gift"></i>
                    </div>
                    <div className="flex-grow-1 me-2">
                      <p>New Order Recieved</p>
                      <p className="tx-12 text-muted">30 min ago</p>
                    </div>
                  </Link>
                  <Link to={"/admin"} className="dropdown-item d-flex align-items-center py-2">
                    <div className="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
                      <img className="wd-30 ht-30 rounded-circle" src={images.avatar} alt="userr" />
                    </div>
                    <div className="flex-grow-1 me-2">
                      <p>New customer registered</p>
                      <p className="tx-12 text-muted">2 sec ago</p>
                    </div>
                  </Link>
                </div>
                <div className="px-3 py-2 d-flex align-items-center justify-content-center border-top">
                  <Link to={"/admin"}>View all</Link>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                id="profileDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img className="wd-30 ht-30 rounded-circle" src={images.avatar} alt="profile" />
              </Link>
              <div className="dropdown-menu p-0" aria-labelledby="profileDropdown">
                <div className="d-flex flex-column align-items-center border-bottom px-5 py-3">
                  <div className="mb-3">
                    <img className="wd-80 ht-80 rounded-circle" src={images.avatar} alt="" />
                  </div>
                  <div className="text-center">
                    <p className="tx-16 fw-bolder">Amiah Burton</p>
                    <p className="tx-12 text-muted">amiahburton@gmail.com</p>
                  </div>
                </div>
                <ul className="list-unstyled p-1">
                  <li className="dropdown-item py-2">
                    <Link to={"/profile"} className="text-body ms-0">
                      <i className="me-2 icon-md"><icons.BookIcon/></i>
                      <span>Profile</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
