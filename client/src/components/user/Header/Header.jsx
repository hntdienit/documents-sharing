import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Header.scss";
import newRequest from "../../../utils/newRequest.js";

const Header = () => {
  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="header">
      <div className="container">
        {currentUser ? (
          <>
            <div>{currentUser?.Ho_ten}</div>
            <Link className="link" onClick={handleLogout}>
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to={"/register"} className="link">
              dang ky
            </Link>
            |
            <Link to={"/login"} className="link">
              dang nhap
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
