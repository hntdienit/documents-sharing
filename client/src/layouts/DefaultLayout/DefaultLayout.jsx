import React from "react";
import Footer from "../../components/user/Footer/Footer.jsx";
import Header from "../../components/user/Header/Header.jsx";
import Navbar from "../../components/user/Navbar/Navbar.jsx";
import getCurrentUser from "../../utils/getCurrentUser.js";
import "./DefaultLayout.scss";

function DefaultLayout({ children, currentUser }) {
// console.log("nhan tu app", currentUser)
  return (
    <>
      <div className="defaultLayout">
        <div className="container">
          {/* <Header /> */}
          <Navbar currentUser={currentUser}/>     
          {/* <Silder/> */}
          <div className="content">{children}</div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default DefaultLayout;
