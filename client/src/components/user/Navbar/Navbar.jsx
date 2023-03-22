import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.scss";

import images from "../../../assets/images";
import getCurrentUser from "../../../utils/getCurrentUser.js";
import newRequest from "../../../utils/newRequest.js";

const Navbar = () => {
  const navigate = useNavigate();
  const currentUser = getCurrentUser();

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("accessToken", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="navbar">
      <div className="navigation navigation_two">
        <div className="container">
          <div className="logo">
            <Link to={"/"}>
              <img className="img-responsive" src={images.logo} alt="" />
            </Link>
          </div>
          <div id="navigation" className="menu-wrap">
            <ul>
              <li>
                <a href="about.html">About</a>
              </li>

              <li className="has-sub">
                <a href="blog.html">tai lieu</a>
                <ul>
                  <li>
                    <Link to={"/newdocument"}>them tai lieu</Link>
                  </li>

                  <li>
                    <Link to={"/category"}>Course Category</Link>
                  </li>
                </ul>
              </li>
              <li className="has-sub">
                <a href="blog.html">Blog</a>
                <ul>
                  <li>
                    <a href="blog.html">Blog One</a>{" "}
                  </li>
                  <li>
                    <a href="single-blog.html">Blog Details</a>{" "}
                  </li>
                  <li>
                    <a href="events.html">Event Page</a>{" "}
                  </li>
                  <li>
                    <a href="single-event.html">Event Details</a>{" "}
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>

          {currentUser ? (
            <>
              <div className="header_sign">
                <Link to={"/login"} className="link">
                  {currentUser.Email || "ho va ten"}
                </Link>
                <Link className="link" onClick={handleLogout}>
                  Logout
                </Link>
              </div>
            </>
          ) : (
            <div className="header_sign">
              <Link to={"/login"} className="link">
                Sign in
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
