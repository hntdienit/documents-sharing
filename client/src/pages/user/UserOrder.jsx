import React, { useState } from "react";
import { Link } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import InfoIcon from '@mui/icons-material/Info';

import images from "../../assets/images";
import HeaderPage from "../../components/user/HeaderPage/HeaderPage.jsx";
import newRequest from "../../utils/newRequest.js";
import LoadingCompoment from "../../components/public/LoadingCompoment.jsx";
import ErrorCompoment from "../../components/public/ErrorCompoment.jsx";

const UserOrder = () => {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["userorder"],
    queryFn: () =>
      newRequest.get("/order/userorder").then((res) => {
        return res.data;
      }),
  });

  // const handleChange = async (id) => {
  //   await newRequest.patch(`/wishlist/change`, { Tai_lieu_id: id }).then((res) => {
  //     if (res.data.error) {
  //       toast.error(`${res.data.error}`, {});
  //     } else {
  //       // toast.s(`${res.data.error}`, {});
  //       refetch();
  //     }
  //   });
  // };

  let total = 0;

  if (isLoading) return <LoadingCompoment />;
  if (error) return <ErrorCompoment />;

  return (
    <>
      <HeaderPage page={"Đơn đặt hàng"} linkpage={"Đơn đặt hàng"} />
      <div className="wishlist mt-5 pb-7">
        <div className="wishlist_area bg-color-white rbt-section-gap">
          <div className="container">
            <div className="row">
              {data?.length === 0 ? (
                <div className="col-12 h-50vh mt-5">
                  <div className="fs-1 mt-2 text-center">Bạn chưa có đơn đặt hàng nào!</div>
                </div>
              ) : (
                <div className="col-12">
                  <form>
                    <div className="cart-table table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="pro-thumbnail">Mã đơn hàng</th>
                            <th className="pro-title">Phương thức thanh toán</th>
                            <th className="pro-title">Địa chỉ nhận hàng</th>
                            <th className="pro-quantity">Tổng đơn hàng</th>
                            <th className="pro-remove">Xem chi tiết đơn hàng</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data?.map((d) => (
                            <tr key={d?.id}>
                              <td className="pro-thumbnail">
                                <span>{d?.id}</span>
                              </td>
                              <td className="pro-title">
                                <span>{d?.Phuong_thuc_thanh_toan_id === 1 ? "VNPAY" : "Thanh toán trực tiếp"}</span>
                              </td>
                              <td className="pro-title">
                                <span>{d?.Dia_chi_nhan_hang}</span>
                              </td>
                              <td className="pro-quantity">
                                <span>
                                  {d?.Tong_don_hang} vnđ
                                </span>
                              
                              </td>
                              <td className="pro-remove">
                                <Link to={"/"}>
                                  <InfoIcon />
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

export default UserOrder;
