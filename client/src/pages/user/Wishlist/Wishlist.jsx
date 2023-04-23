import React from "react";
import { Link } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

import images from "../../../assets/images";
import HeaderPage from "../../../components/user/HeaderPage/HeaderPage.jsx";
import newRequest from "../../../utils/newRequest.js";
import LoadingCompoment from "../../../components/public/LoadingCompoment.jsx";
import ErrorCompoment from "../../../components/public/ErrorCompoment.jsx";

const Wishlist = () => {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["wishlist"],
    queryFn: () =>
      newRequest.get("/wishlist/all").then((res) => {
        return res.data;
      }),
  });

  const handleChange = async (id) => {
    await newRequest.patch(`/wishlist/change`, { Tai_lieu_id: id }).then((res) => {
      if (res.data.error) {
        toast.error(`${res.data.error}`, {});
      } else {
        // toast.s(`${res.data.error}`, {});
        refetch();
      }
    });
  };

  if (isLoading) return <LoadingCompoment />;
  if (error) return <ErrorCompoment />;

  return (
    <>
      <HeaderPage page={"Danh sách yêu thích"} linkpage={"Danh sách yêu thích"} />
      <div className="wishlist mt-5 pb-7">
        <div className="wishlist_area bg-color-white rbt-section-gap">
          <div className="container">
            <div className="row">
              {data.length === 0 ? (
                <div className="col-12 h-50vh mt-3">
                  <div className="fs-1 mt-2 text-center">Bạn chưa có tài liệu nào trong danh sách yêu thích!</div>
                  <div className="cart-submit-btn-group mt-5 f-c-c">
                    <div className="single-button w-50">
                      <Link to={"/document/all"}>
                        <button className="rbt-btn btn-gradient rbt-switch-btn rbt-switch-y w-100">
                          <span data-text="Danh sách sản phẩm">Danh sách sản phẩm</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="col-12">
                  <form>
                    <div className="cart-table table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="pro-thumbnail">Hình</th>
                            <th className="pro-title">Tên tài liệu</th>
                            {/* <th className="pro-quantity">Giá</th>
                            <th className="pro-subtotal">Hành động</th> */}
                            <th className="pro-remove">Xóa</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data?.map((d) => (
                            <tr key={d?.id}>
                              <td className="pro-thumbnail">
                                <Link to={`/document/${d?.Tai_lieu_id}`}>
                                  <img src={images.course_online_01} alt="Product" />
                                </Link>
                              </td>
                              <td className="pro-title">
                                <a href="#">{d?.Tai_lieu?.Ten_tai_lieu}</a>
                              </td>
                              <td className="pro-remove">
                                <Link onClick={() => handleChange(d?.Tai_lieu_id)}>
                                  <ClearIcon />
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
