import React from "react";
import { Link } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import "./HeaderPage.scss";

const HeaderPage = ({ page, linkpage }) => {
  const current = {
    Page: page || "Trang chủ",
    LinkPage: linkpage || "Trang chủ",
  };

  return (
    <>
      <div className="rbt-breadcrumb-default ptb--60 ptb_md--50 ptb_sm--30 bg-gradient-1">
        <div className="container">
          <div className="breadcrumb-inner text-center">
            <h2 className="title">{current.Page}</h2>
            <ul className="page-list">
              <li>
                <Link to={"/"}>Trang chủ</Link>
              </li>
              <li className="icon-right"></li>
              <li>
                <KeyboardDoubleArrowRightIcon />
                {current.Page}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderPage;
