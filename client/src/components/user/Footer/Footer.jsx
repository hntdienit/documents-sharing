import React from "react";

import "./Footer.scss";

import images from "../../../assets/images";
import icons from "../../../assets/icons"

const Footer = () => {
  return (
    <div className="footer">
      <footer className="rbt-footer footer-style-1">
        <div className="footer-top">
          <div className="container">
            <div className="row row--15 mt_dec--30">
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30">
                <div className="footer-widget">
                  <div className="logo">
                    <a href="index.html">
                      <img src={images.logo} alt="Edu-cause" />
                    </a>
                  </div>

                  <p className="description mt--20">
                    We’re always in search for talented and motivated people. Don’t be shy introduce yourself!
                  </p>

                  <div className="contact-btn mt--30">
                    <a className="rbt-btn hover-icon-reverse btn-border-gradient radius-round" href="#">
                      <div className="icon-reverse-wrapper">
                        <span className="btn-text">Contact With Us</span>
                        <span className="btn-icon">
                          <i><icons.ArrowForwardIcon/></i>
                        </span>
                        <span className="btn-icon">
                        <i><icons.ArrowForwardIcon/></i>
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="offset-lg-1 col-lg-2 col-md-6 col-sm-6 col-12 mt--30">
                <div className="footer-widget">
                  <h5 className="ft-title">Useful Links</h5>
                  <ul className="ft-link">
                    <li>
                      <a href="12-marketplace.html">Marketplace</a>
                    </li>
                    <li>
                      <a href="04-kindergarten.html">kindergarten</a>
                    </li>
                    <li>
                      <a href="13-university-classic.html">University</a>
                    </li>
                    <li>
                      <a href="09-gym-coaching.html">GYM Coaching</a>
                    </li>
                    <li>
                      <a href="faqs.html">FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 col-sm-6 col-12 mt--30">
                <div className="footer-widget">
                  <h5 className="ft-title">Our Company</h5>
                  <ul className="ft-link">
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                    <li>
                      <a href="become-a-teacher.html">Become Teacher</a>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="instructor.html">Instructor</a>
                    </li>
                    <li>
                      <a href="event-list.html">Events</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--30">
                <div className="footer-widget">
                  <h5 className="ft-title">Get Contact</h5>
                  <ul className="ft-link">
                    <li>
                      <span>Phone:</span> <a href="#">(406) 555-0120</a>
                    </li>
                    <li>
                      <span>E-mail:</span> <a href="mailto:hr@example.com">rainbow@example.com</a>
                    </li>
                    <li>
                      <span>Location:</span> North America, USA
                    </li>
                  </ul>
                  <ul className="social-icon social-default icon-naked justify-content-start mt--20">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i><icons.FacebookIcon/></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com">
                        <i><icons.TwitterIcon/></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i><icons.InstagramIcon/></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
