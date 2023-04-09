import React from "react";
import { Link } from "react-router-dom";
import "./Page404.scss";

import icons from "../../../assets/icons";

const Page404 = () => {
  return (
    <div className="page404">
      <div className="rbt-error-area bg-gradient-11 rbt-section-gap">
        <div className="error-area">
          <div className="p404__container">
            <h1 className="title">404!</h1>
            <h3 className="sub__title">Không tìm thấy trang!</h3>
            <p>Không thể tìm thấy trang bạn đang tìm kiếm.</p>
            <Link to={"/"} className="rbt-btn btn-gradient icon-hover">
              <span className="btn-text">Trở về trang chủ</span>
              <span className="btn-icon">
                <i>
                  <icons.ArrowForwardIcon />
                </i>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="rbt-separator-mid">
        <div className="p404__container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
    </div>
  );
};

export default Page404;
