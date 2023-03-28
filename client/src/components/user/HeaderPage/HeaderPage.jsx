import React from "react";
import { Link } from "react-router-dom";
import "./HeaderPage.scss";

const HeaderPage = ({ page, linkpage }) => {
  const current = {
    Page: page || "Trang chủ",
    LinkPage: linkpage || "Trang chủ",
  };

  return (
    <div className="headerpage">
      <div className="headerpage_container">
        <h3>{current.Page}</h3>
        <h4>
          <Link to={"/"}> Trang chủ </Link> <span> || </span> {current.LinkPage}
        </h4>
      </div>
    </div>

  );
};

export default HeaderPage;
