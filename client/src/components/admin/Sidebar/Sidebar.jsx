import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "./Sidebar.scss";
import icons from "../../../assets/icons";
import newRequest from "../../../utils/newRequest.js";
import { AuthContext } from "../../../helpers/AuthContext.jsx";
import images from "../../../assets/images";

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
            <img src={images.logo} alt="" />
          </Link>
        </div>

        <div className="sidebar__body">
          <ul className="nav">
            <div>
              <li className="nav-item nav-category">Quản lý thông tin</li>
              <li className="nav-item">
                <div id="document">
                  <ul className="nav sub-menu">
                    <li className="nav-item">
                      <Link to={"/admin/user/list"} className="nav-link">
                        Quản lý người dùng
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <div id="document">
                  <ul className="nav sub-menu">
                    <li className="nav-item">
                      <Link to={"/admin/student/list"} className="nav-link">
                        Quản lý sinh viên
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <div id="document">
                  <ul className="nav sub-menu">
                    <li className="nav-item">
                      <Link to={"/admin/lecturers/list"} className="nav-link">
                        Quản lý giảng viên
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <div id="document">
                  <ul className="nav sub-menu">
                    <li className="nav-item">
                      <Link to={"/admin/course/list"} className="nav-link">
                        Quản lý lớp học
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <div id="document">
                  <ul className="nav sub-menu">
                    <li className="nav-item">
                      <Link to={"/admin/subject/list"} className="nav-link">
                        Quản lý lớp học phần
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <div id="document">
                  <ul className="nav sub-menu">
                    <li className="nav-item">
                      <Link to={"/admin/major/list"} className="nav-link">
                        Quản lý ngành học
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-item nav-category">Kiểm duyệt</li>
              <li className="nav-item">
                <div id="document">
                  <ul className="nav sub-menu">
                    <li className="nav-item">
                      <Link to={"/admin/document/list"} className="nav-link">
                        Kiểm duyệt tài liệu
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-item nav-category">Thống kê</li>
              <li className="nav-item">
                <div id="document">
                  <ul className="nav sub-menu">
                    <li className="nav-item">
                      <Link to={"/admin/statistic"} className="nav-link">
                        Thống kê
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-item nav-category">Xử lý vi phạm</li>
              <li className="nav-item">
                <div id="document">
                  <ul className="nav sub-menu">
                    <li className="nav-item">
                      <Link to={"/admin/report/list"} className="nav-link">
                        Xử lý vi phạm
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item nav-category">Hệ thống</li>
              <li className="nav-item">
                <div id="document">
                  <ul className="nav sub-menu">
                    <li className="nav-item">
                      <Link className="nav-link" onClick={handleLogout}>
                        Đăng xuất
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
