import React from "react";
import Footer from "../../components/user/Footer/Footer.jsx";
import Header from "../../components/user/Header.jsx";

import "./DefaultLayout.scss";
import "../../assets/scss/style.scss"

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default DefaultLayout;
