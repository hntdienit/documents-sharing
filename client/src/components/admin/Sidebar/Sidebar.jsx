import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "./Sidebar.scss";
import icons from "../../../assets/icons";
import newRequest from "../../../utils/newRequest.js";
import { AuthContext } from "../../../helpers/AuthContext.jsx";

const sidelink = [
  {
    nav_category: "web apps",
    nav: [
      {
        title: "Email",
        titleIcon: <icons.AddCircleOutlineIcon />,
        linkCreate: "/admin/document/create",
        linkList: "/admin",
      },
      {
        title: "Email31",
        titleIcon: <icons.AddCircleOutlineIcon />,
        linkCreate: "/admin",
        linkList: "/admin",
      },
    ],
  },
];

const Sidebar = () => {
  const { setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await newRequest.post("/auth/logout").then((res) => {
      if (res.data.error) {
        toast.error(res.data.error, {});
      } else {
        setCurrentUser(null);
        toast.info("Bạn đã đăng xuất thành công!", {});
        navigate("/");
      }
    });
  };
  return (
    <>
      <nav className="admin__sidebar">
        <div className="sidebar__header">
          <Link to={"/admin"} className="sidebar__brand">
            Noble<span>UI</span>
          </Link>
          {/* <div className="sidebar-toggler not-active">
                <span></span>
                <span></span>
                <span></span>
              </div> */}
        </div>

        <div className="sidebar__body">
          <ul className="nav">
            <Link onClick={handleLogout}> logout</Link>
            {sidelink.map((s, i) => (
              <div key={s.nav_category}>
                <li className="nav-item nav-category">{s.nav_category}</li>
                {s.nav.map((n) => (
                  <li key={n.title} className="nav-item">
                    <a
                      className="nav-link"
                      data-bs-toggle="collapse"
                      href={"#" + n.title}
                      role="button"
                      aria-expanded="false"
                      aria-controls="emails"
                    >
                      <i className="link-icon">{n.titleIcon}</i>
                      <span className="link-title">{n.title}</span>
                      <i className="link-arrow">
                        <icons.SearchIcon />
                      </i>
                    </a>
                    <div id={n.title}>
                      <ul className="nav sub-menu">
                        <li className="nav-item">
                          <Link to={n.linkCreate} className="nav-link">
                            tao {n.title}
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to={n.linkList} className="nav-link">
                            danh sach {n.title}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                ))}
              </div>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
