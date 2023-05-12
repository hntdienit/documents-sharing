import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="page404">
      <div className="rbt-error-area bg-gradient-11 rbt-section-gap">
        <div className="error-area pt-7">
          <div className="p404__container">
            <h1 className="title">404!</h1>
            <h3 className="sub__title">Không tìm thấy trang!</h3>
            <p className="my-4">Không thể tìm thấy trang bạn đang tìm kiếm.</p>

            <Link to={"/"} className="rbt-btn btn-gradient hover-icon-reverse">
              Trở về trang chủ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
