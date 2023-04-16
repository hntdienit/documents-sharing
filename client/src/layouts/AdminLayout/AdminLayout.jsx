import React from "react";

import "./adminlayout.scss";

import Sidebar from "../../components/admin/Sidebar/Sidebar.jsx";
import Navbar from "../../components/admin/Navbar/Navbar.jsx";

const AdminLayout = ({ children }) => {
  return (
    <>
      <div className="main-wrapper">
        <Sidebar />
        <div className="page-wrapper">
          <Navbar />
          <div className="page-content">{children}</div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
