import React from "react";
import Footer from "../../components/user/Footer/Footer.jsx";
import Header from "../../components/user/Header/Header.jsx";

import "./DefaultLayout.scss";

function DefaultLayout({ children }) {

  return (
    <>
      {/* <div className="defaultLayout">
        <div className="container"> */}
          <Header />
          {/* <Navbar currentUser={currentUser}/>      */}
          {/* <Silder/> */}
          <div>{children}</div>
          <Footer />
        {/* </div>
      </div> */}
    </>
  );
}

export default DefaultLayout;
