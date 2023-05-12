import React, { useState } from "react";
import { Link } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import MessageIcon from "@mui/icons-material/Message";

import images from "../../assets/images";
import HeaderPage from "../../components/user/HeaderPage/HeaderPage.jsx";
import newRequest from "../../utils/newRequest.js";
import LoadingCompoment from "../../components/public/LoadingCompoment.jsx";
import ErrorCompoment from "../../components/public/ErrorCompoment.jsx";

const Order = ({ setOpenMess, setId, setUId }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["orderall"],
    queryFn: () =>
      newRequest.get("/order/all").then((res) => {
        return res.data;
      }),
  });

  const handleNewMess = async (id) => {
    await newRequest.post("/conversation", { Nguoi_mua_id: id }).then((res) => {
      if (res.data.error) {
        toast.error(res.data.error, {});
      } else {
        setId(res.data);
        setUId(id);
        setOpenMess(true);
      }
    });
  };

  const handleMess = async (id) => {
    await newRequest.get(`/conversation/single/${id}`).then((res) => {
      if (res.data.error) {
        toast.error(res.data.error, {});
      } else {
        if (res.data === 0) {
          handleNewMess(id);
        } else {
          setId(res.data);
          setUId(id);
          setOpenMess(true);
        }
      }
    });
    setUId(id);
  };

  let total = 0;

  if (isLoading) return <LoadingCompoment />;
  if (error) return <ErrorCompoment />;

  return (
    <>
      <HeaderPage page={"Đơn hàng"} linkpage={"Đơn hàng"} />
      <div className="wishlist mt-5 pb-7">
        <div className="wishlist_area bg-color-white rbt-section-gap">
          <div className="container">
            <div className="row">
              {data?.order?.length === 0 ? (
                <div className="col-12 h-50vh mt-5">
                  <div className="fs-1 mt-2 text-center">Bạn chưa có đơn hàng nào!</div>
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
                            <th className="pro-remove">Nhắn tin cho người mua</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data?.order?.map((d) => (
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
                                  {data?.orderdetail?.map((od) => {
                                    if (d?.id === od?.Don_hang_id) {
                                      total += od?.So_luong * od?.Gia;
                                    }
                                  })}
                                  {total}
                                </span>
                                <p hidden>{total > 0 ? (total = 0) : (total = 0)}</p>
                              </td>
                              <td className="pro-remove">
                                <Link
                                  onClick={() => {
                                    handleMess(d?.Nguoi_dung_id);
                                  }}
                                >
                                  <MessageIcon />
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

export default Order;
