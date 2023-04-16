import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Profile.scss";
import images from "../../../assets/images";

const Profile = () => {
  const [document, setDocument] = useState(false);

  const handleProfile = () => {
    // if (title == "1") {
    // setDocument(true);
    alert("asdas");
    // }
  };
  return (
    <>
      <div className="row">
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="position-relative">
              <figure className="overflow-hidden mb-0 d-flex justify-content-center">
                <img src={images.logo} className="rounded-top" alt="profile cover" />
              </figure>
              <div className="d-flex justify-content-between align-items-center position-absolute top-90 w-100 px-2 px-md-4 mt-n4">
                <div>
                  <img className="wd-70 rounded-circle" src={images.avatar} alt="profile" />
                  <span className="h4 ms-3 text-dark">Amiah Burton</span>
                </div>
                <div className="d-none d-md-block">
                  <button
                    className="btn btn-primary btn-icon-text"
                    onClick={() => {
                      handleProfile();
                    }}
                  >
                    <i data-feather="edit" className="btn-icon-prepend"></i> Edit profile
                  </button>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center p-3 rounded-bottom">
              <ul className="d-flex align-items-center m-0 p-0">
                <li className="d-flex align-items-center active">
                  <i className="me-1 icon-md text-primary" data-feather="columns"></i>
                  <Link
                    className="pt-1px d-none d-md-block text-primary"
                    onClick={() => {
                      handleProfile();
                    }}
                  >
                    tai lieu
                  </Link>
                </li>
                <li className="ms-3 ps-3 border-start d-flex align-items-center">
                  <i className="me-1 icon-md" data-feather="user"></i>
                  <a className="pt-1px d-none d-md-block text-body" href="#">
                    About
                  </a>
                </li>
                <li className="ms-3 ps-3 border-start d-flex align-items-center">
                  <i className="me-1 icon-md" data-feather="users"></i>
                  <a className="pt-1px d-none d-md-block text-body" href="#">
                    Friends <span className="text-muted tx-12">3,765</span>
                  </a>
                </li>
                <li className="ms-3 ps-3 border-start d-flex align-items-center">
                  <i className="me-1 icon-md" data-feather="image"></i>
                  <a className="pt-1px d-none d-md-block text-body" href="#">
                    Photos
                  </a>
                </li>
                <li className="ms-3 ps-3 border-start d-flex align-items-center">
                  <i className="me-1 icon-md" data-feather="video"></i>
                  <a className="pt-1px d-none d-md-block text-body" href="#">
                    Videos
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row profile-body">
        <div className="d-none d-md-block col-md-4 col-xl-3 left-wrapper">
          <div className="card rounded">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h6 className="card-title mb-0">About</h6>
                <div className="dropdown">
                  <a
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="icon-lg text-muted pb-3px" data-feather="more-horizontal"></i>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item d-flex align-items-center">
                      <i data-feather="edit-2" className="icon-sm me-2"></i> <span className="">Edit</span>
                    </a>
                    <a className="dropdown-item d-flex align-items-center">
                      <i data-feather="git-branch" className="icon-sm me-2"></i> <span className="">Update</span>
                    </a>
                    <a className="dropdown-item d-flex align-items-center">
                      <i data-feather="eye" className="icon-sm me-2"></i> <span className="">View all</span>
                    </a>
                  </div>
                </div>
              </div>
              <p>
                Hi! I m Amiah the Senior UI Designer at NobleUI. We hope you enjoy the design and quality of Social.
              </p>
              <div className="mt-3">
                <label className="tx-11 fw-bolder mb-0 text-uppercase">Joined:</label>
                <p className="text-muted">November 15, 2015</p>
              </div>
              <div className="mt-3">
                <label className="tx-11 fw-bolder mb-0 text-uppercase">Lives:</label>
                <p className="text-muted">New York, USA</p>
              </div>
              <div className="mt-3">
                <label className="tx-11 fw-bolder mb-0 text-uppercase">Email:</label>
                <p className="text-muted">me@nobleui.com</p>
              </div>
              <div className="mt-3">
                <label className="tx-11 fw-bolder mb-0 text-uppercase">Website:</label>
                <p className="text-muted">www.nobleui.com</p>
              </div>
              <div className="mt-3 d-flex social-links">
                <a className="btn btn-icon border btn-xs me-2">
                  <i data-feather="github"></i>
                </a>
                <a className="btn btn-icon border btn-xs me-2">
                  <i data-feather="twitter"></i>
                </a>
                <a className="btn btn-icon border btn-xs me-2">
                  <i data-feather="instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        {document ? <div className="col-md-8 col-xl-6 middle-wrapper">haha</div> : ""}
      </div>
    </>
  );
};

export default Profile;
