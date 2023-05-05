import React from "react";

import "./Footer.scss";

import images from "../../../assets/images";
import icons from "../../../assets/icons";
import { Link } from "react-router-dom";

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

                  <p className="description mt--20">Đừng ngại chia sẻ những tài liệu hay!</p>

                  <div className="contact-btn mt--30">
                    {/* <a className="rbt-btn hover-icon-reverse btn-border-gradient radius-round" href="#">
                      <div className="icon-reverse-wrapper">
                        <span className="btn-text">Contact With Us</span>
                        <span className="btn-icon">
                          <i>
                            <icons.ArrowForwardIcon />
                          </i>
                        </span>
                        <span className="btn-icon">
                          <i>
                            <icons.ArrowForwardIcon />
                          </i>
                        </span>
                      </div>
                    </a> */}
                  </div>
                </div>
              </div>

              <div className="offset-lg-1 col-lg-2 col-md-6 col-sm-6 col-12 mt--30">
                <div className="footer-widget">
                  <h5 className="ft-title">Chuyển trang</h5>
                  <ul className="ft-link">
                    <li>
                      <Link to={"/profile"}>Trang cá nhân</Link>
                    </li>
                    <li>
                      <Link to={"/cart"}>Giỏ hàng</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Danh sách tài liệu</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Danh sách yêu thích</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 col-sm-6 col-12 mt--30">
                <div className="footer-widget">
                  <h5 className="ft-title">Tài liệu</h5>
                  <ul className="ft-link">
                    <li>
                      <Link to={"/"}>Chia sẻ tài liệu</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Bán tài liệu</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Đơn hàng</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Đơn đặt hàng</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--30">
                <div className="footer-widget">
                  <h5 className="ft-title">Lấy thông tin</h5>
                  <ul className="ft-link">
                    <li>
                      <span>SDT:</span> <a href="#">(+84) 123456789</a>
                    </li>
                    <li>
                      <span>E-mail:</span> <a href="mailto:hr@example.com">dien@example.com</a>
                    </li>
                    <li>
                      <span>Địa chỉ:</span> Cần Thơ
                    </li>
                  </ul>
                  <ul className="social-icon social-default icon-naked justify-content-start mt--20">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i>
                          <icons.FacebookIcon />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com">
                        <i>
                          <icons.TwitterIcon />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i>
                          <icons.InstagramIcon />
                        </i>
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
