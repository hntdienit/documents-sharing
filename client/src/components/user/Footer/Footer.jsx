import React from "react";

import "./Footer.scss";

import images from "../../../assets/images";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="footertwo-section">
        <div className="footer__container">
          {/* <div className="row"> */}
          <div className="col-3 col-md-6 col-sm-12 item">
            <div className="footer_logo">
              <img src={images.logo} alt="" />
              <ul>
                <li>
                  <a href="">(+75) 36 6552 9564 </a>
                </li>
                <li>
                  <a href="services.html">contact@domain.com</a>
                </li>
                <li>
                  <a href="services.html">Washington, United State</a>
                </li>
              </ul>
              <div className="footer_socil">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 item">
            <div className="foo_widgetquick_lnk">
              <h5>Category</h5>
              <ul>
                <li>
                  <a href="courses.html">Privacy & Poilicy</a>
                </li>
                <li>
                  <a href="courses.html">Terms & Condition</a>
                </li>
                <li>
                  <a href="courses.html">Customer Support</a>
                </li>
                <li>
                  <a href="courses.html">For Business </a>
                </li>
                <li>
                  <a href="courses.html">Support</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 item">
            <div className="foo_widgetuseful_lnk">
              <h5>Useful Links</h5>
              <ul>
                <li>
                  <a href="courses.html">About Us</a>
                </li>
                <li>
                  <a href="courses.html">Refer A Friend</a>
                </li>
                <li>
                  <a href="courses.html">Scolarship</a>
                </li>
                <li>
                  <a href="courses.html">Marketing</a>
                </li>
                <li>
                  <a href="courses.html">Free Courses</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 item">
            <div className="foo_widget footer_contact_form">
              <h5>Send Message</h5>
              <form method="post" action="mailer.php">
                <input className="con-field" name="email" id="email" type="text" placeholder="Your Email" />
                {/* <textarea defaultValue={""} className="con-field" name="email" id="message" placeholder="Your Message">
                  {" "}
                </textarea> */}
                <input type="submit" id="submit-contact" className="btn-alt" value="Submit" />
              </form>
            </div>
          </div>
          {/* </div> */}
        </div>

        <div className="subfooter">
          <p>
            Copyright © 2021 <a href="index.html">Aducat.</a> All rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
