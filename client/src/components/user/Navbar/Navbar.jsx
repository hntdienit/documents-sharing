import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navigation navigation_two">
        <div className="container">
          <div className="logo">
            <a href="index.html">
              <img className="img-responsive" src="./img/logo_dhct.png" alt="" />
            </a>
          </div>
          <div id="navigation" className="menu-wrap">
            <ul>
              <li className="active has-sub">
                <a href="index.html">Home</a>
                <ul>
                  <li>
                    <a href="index.html">Home One</a>{" "}
                  </li>
                  <li>
                    <a href="index-two.html">Home Two</a>{" "}
                  </li>
                </ul>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li className="has-sub">
                <a href="index.html">Pages</a>
                <ul>
                  <li>
                    <Link to={"/category"}>Course Category</Link>
                  </li>
                  <li>
                    <a href="courses.html">Our Course</a>{" "}
                  </li>
                  <li>
                    <a href="single-course.html">Course Details</a>{" "}
                  </li>
                  <li>
                    <a href="login.html">Login Page</a>{" "}
                  </li>
                  <li>
                    <a href="register.html">Register Page</a>{" "}
                  </li>
                  <li>
                    <a href="teachers.html">Instructor Page</a>{" "}
                  </li>
                  <li>
                    <a href="single-teacher.html">Instructor Details</a>{" "}
                  </li>
                  <li>
                    <a href="events.html">Event Page</a>{" "}
                  </li>
                  <li>
                    <a href="single-event.html">Event Details</a>{" "}
                  </li>
                  <li>
                    <a href="gallery.html">Gallery Page</a>{" "}
                  </li>
                  <li>
                    <a href="404.html">404 Page</a>{" "}
                  </li>
                </ul>
              </li>
              {/* <li className="has-sub">
                <a href="courses.html"> Courses</a>
                <ul>
                  <li>
                    <a href="course-category.html">Course Category</a>{" "}
                  </li>
                  <li>
                    <a href="courses.html">Our Course</a>{" "}
                  </li>
                  <li>
                    <a href="single-course.html">Course Details</a>{" "}
                  </li>
                </ul>
              </li> */}
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

          <div className="header_sign">
            <Link to={"/login"} className="link">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
