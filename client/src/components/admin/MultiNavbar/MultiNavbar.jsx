import React from "react";
import { Link } from "react-router-dom";

import "./MultiNavbar.scss";
import images from "../../../assets/images";

const MultiNavbar = () => {
  return (
    <>
      <div className="main-sidebar">
        <div className="sidebar position-relative">
          <div className="multinav">
            <div className="multinav-scroll">
              <ul className="sidebar-menu" data-widget="tree">
                <li className="header">Components</li>
                <li>
                  <Link to={"/admin/user/NewUser"}>NewUser</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MultiNavbar;
