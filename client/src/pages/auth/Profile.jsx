import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

import images from "../../assets/images";
import HeaderPage from "../../components/user/HeaderPage/HeaderPage";
import LoadingCompoment from "../../components/public/LoadingCompoment";
import ErrorCompoment from "../../components/public/ErrorCompoment";
import Card from "../../components/public/Card.jsx"

import newRequest from "../../utils/newRequest.js";

import { AuthContext } from "../../helpers/AuthContext.jsx";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["profile"],
    queryFn: () =>
      newRequest.get("/user/getprofile").then((res) => {
        return res.data;
      }),
  });

  if (isLoading) return <LoadingCompoment />;
  if (error) return <ErrorCompoment />;

  return (
    <>
      <HeaderPage page={"Trang cá nhân"} />
      <div className="profile mt-1">
        <div className="rbt-section-gapBottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rbt-dashboard-content-wrapper">
                  <div className="tutor-bg-photo bg_image bg_image--22 height-350">
                    <img src={images.nenpp} alt="" className="img-full" />
                  </div>

                  <div className="rbt-tutor-information">
                    <div className="rbt-tutor-information-left">
                      <div className="thumbnail rbt-avatars size-lg">
                        <img
                          src={currentUser?.Hinh_dai_dien ? currentUser?.Hinh_dai_dien : images.noavatar}
                          alt="Instructor"
                        />
                      </div>
                      <div className="tutor-content">
                        <h5 className="title ms-2">{currentUser?.Ho_ten}</h5>
                        <ul className="rbt-meta rbt-meta-white mt--5">
                          <li>
                            <i className="feather-book"></i>
                            {currentUser?.Email}
                          </li>
                        </ul>
                        <div className="rbt-review pt-2 ms-1">
                          <span className="rating-count">
                            {currentUser?.Vai_tro === "SinhVien"
                              ? "Sinh viên"
                              : currentUser?.Vai_tro === "GiangVien"
                              ? "Giảng viên"
                              : "Người dùng"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 mt--30">
                <div className="rbt-shadow-box">
                  <h4 className="rbt-title-style-3">Thông tin cá nhân</h4>
                  <div className="row g-5">
                    <div className="col-lg-12">
                      <p className="mt--10 mb--20">Họ tên: {data?.Ho_ten}</p>
                      <p className="mt--10 mb--20">CCCD: {data?.CCCD}</p>
                      <p className="mt--10 mb--20">Địa chỉ: {data?.Dia_chi}</p>
                      <p className="mt--10 mb--20">Giới tính: {data?.Gioi_tinh}</p>
                      <p className="mt--10 mb--20">Số điện thoại: {data?.So_dien_thoai}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rbt-profile-course-area mt-5">
              <div className="row">
                <div className="col-lg-12">
                  <div className="sction-title">
                    <h2 className="rbt-title-style-3">Danh sách tài liệu</h2>
                  </div>
                </div>
              </div>
              <div className="row g-5">
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                 {/* <Card/> */}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 mt--60">
                <nav>
                  <ul className="rbt-pagination">
                    <li>
                      <a href="#" aria-label="Previous">
                        <i className="feather-chevron-left"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">1</a>
                    </li>
                    <li className="active">
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#" aria-label="Next">
                        <i className="feather-chevron-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
