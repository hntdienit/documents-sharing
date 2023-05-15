import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

import images from "../../assets/images";
import HeaderPage from "../../components/user/HeaderPage/HeaderPage";
import LoadingCompoment from "../../components/public/LoadingCompoment";
import ErrorCompoment from "../../components/public/ErrorCompoment";
import Card from "../../components/public/Card.jsx";
import SearchIcon from "@mui/icons-material/Search";

import Pagination from "../../components/public/Pagination.jsx";
import Swal from "sweetalert2";

import newRequest from "../../utils/newRequest.js";

import { AuthContext } from "../../helpers/AuthContext.jsx";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [deleteload, setDeleteload] = useState(0);

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["profile"],
    queryFn: () =>
      newRequest.get("/user/getprofile").then((res) => {
        return res.data;
      }),
  });

  useEffect(() => {
    newRequest.get(`/document/user/?keyword=${keyword}&page=${page}&limit=${limit}`).then((res) => {
      if (res.data.error) {
        alert(res.data.error);
      } else {
        setList(res.data.result);
        setPage(res.data.page);
        setPages(res.data.totalPage);
        setRows(res.data.totalRows);
      }
    });
  }, [page, limit, keyword, deleteload]);

  const changePage = ({ selected }) => {
    setPage(selected);
  };

  const deleteTL = (id) => {
    Swal.fire({
      title: "Bạn muốn xóa?",
      text: "Bạn có chắc chắn muốn xóa!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xóa!",
      cancelButtonText: "Hủy!",
    }).then((result) => {
      if (result.isConfirmed) {
        newRequest.delete(`/document/${id}`, {}).then((response) => {
          setList(
            list.filter((val) => {
              return val.id !== id;
            })
          );
        });
        Swal.fire("Xóa!", "Bạn đã xóa thành công.", "Thành công");
        setDeleteload(deleteload + 1);
      }
    });
  };

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
                  <div className="tutor-bg-photo bg_image height-350">
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
                    <h2 className="">Danh sách tài liệu cá nhân</h2>
                  </div>
                </div>
              </div>

              <div className="categories">
                <div className="rbt-page-banner-wrapper">
                  <div className="rbt-banner-content">
                    {list.length !== 0 && (
                      <div className="rbt-course-top-wrapper">
                        <div className="container">
                          <div className="row g-5 align-items-center">
                            <div className="col-lg-5 col-md-12">
                              <div className="rbt-sorting-list d-flex flex-wrap align-items-center">
                                <div className="rbt-short-item">
                                  <span className="course-index fs-4">
                                    Thứ tự {(page + 1) * limit - limit + 1} đến{" "}
                                    {(page + 1) * limit > rows ? rows : (page + 1) * limit} của {rows} kết quả
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-7 col-md-12">
                              <div className="rbt-sorting-list d-flex flex-wrap align-items-center justify-content-start justify-content-lg-end">
                                <div className="rbt-short-item">
                                  <form action="#" className="rbt-search-style me-0">
                                    <input
                                      type="text"
                                      placeholder="Tìm kiếm tài liệu..."
                                      onChange={(e) => {
                                        setKeyword(e.target.value);
                                      }}
                                    />
                                    <button type="submit" className="rbt-search-btn rbt-round-btn">
                                      <SearchIcon />
                                    </button>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="rbt-section-overlayping-top rbt-section-gapBottom">
                  <div className="container">
                    {list.length === 0 ? (
                      <h2 className="no_data_search">Bạn chưa có tài liệu nào!</h2>
                    ) : (
                      <>
                        <div className="rbt-course-grid-column list-column-half active-list-view">
                          {list.map((i) => (
                            <div
                              key={i.id}
                              className="course-grid-4"
                              data-sal-delay="150"
                              data-sal="slide-up"
                              data-sal-duration="800"
                            >
                              <Card item={i} edit deleteTL={deleteTL} />
                            </div>
                          ))}
                        </div>

                        <div className="mt-5">
                          <Pagination
                            even
                            limit={limit}
                            setLimit={setLimit}
                            setPage={setPage}
                            changePage={changePage}
                            pages={pages}
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
