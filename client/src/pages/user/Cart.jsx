import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import HeaderPage from "../../components/user/HeaderPage/HeaderPage.jsx";
import LoadingCompoment from "../../components/public/LoadingCompoment.jsx";
import ErrorCompoment from "../../components/public/ErrorCompoment.jsx";

import newRequest from "../../utils/newRequest.js";
import images from "../../assets/images/index.js";

const Cart = () => {
  const queryClient = useQueryClient();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["cart"],
    queryFn: () =>
      newRequest.get("/cart").then((res) => {
        return res.data;
      }),
  });

  const mutaDelete = useMutation({
    mutationFn: (id) => {
      return newRequest.delete(`/cart/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
    },
  });

  const handleDelete = (id) => {
    mutaDelete.mutate(id);
  };

  const handleChangQuantity = async (id, So_luong) => {
    await newRequest.patch(`/cart/${id}`, { So_luong: So_luong }).then((res) => {
      if (res.data.error) {
        toast.error(`${res.data.error}`, {});
      } else {
        refetch();
      }
    });
  };

  if (isLoading) return <LoadingCompoment />;
  if (error) return <ErrorCompoment />;

  return (
    <>
      <HeaderPage page={"Giỏ hàng"} linkpage={"Giỏ hàng"} />
      <div className="rbt-cart-area bg-color-white rbt-section-gap pt-5">
        <div className="cart_area">
          <div className="container">
            <div className="row">
              {data.length === 0 ? (
                <div className="col-12 h-50vh mt-3">
                  <div className="fs-1 mt-2 text-center">Bạn chưa có sản phẩm nào trong giỏ hàng!</div>
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
                  <div className="cart-summary w-50 ">
                    <div className="cart-summary-wrap">
                      <div className="section-title text-start">
                        <h4 className="title mb--30">Tổng đơn hàng</h4>
                      </div>
                      <p>
                        Tổng <span>{data.reduce((a, c) => a + c?.Tai_lieu?.Gia * c?.So_luong, 0)} vnđ</span>
                      </p>
                      <div className="cart-submit-btn-group mt-2">
                        <div className="single-button w-50">
                          <Link to={"/checkout"}>
                            <button className="rbt-btn btn-gradient rbt-switch-btn rbt-switch-y w-100">
                              <span data-text="Thanh toán">Thanh toán</span>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <form action="#">
                    <div className="cart-table table-responsive mb--60">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="pro-thumbnail">Hình</th>
                            <th className="pro-title">Tên tài liệu</th>
                            <th className="pro-price">Giá</th>
                            <th className="pro-quantity">Số lượng</th>
                            <th className="pro-subtotal">Tổng</th>
                            <th className="pro-remove">Xóa</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data?.map((d) => (
                            <tr key={d?.id}>
                              <td className="pro-thumbnail">
                                <Link to={`/document/${d?.Tai_lieu_id}`}>
                                  <img src={d?.Tai_lieu?.Url === null ? d?.Tai_lieu?.Hinhs[0]?.Url : images.pdf} alt="Product" />
                                </Link>
                              </td>
                              <td className="pro-title">
                                <a href="#">{d?.Tai_lieu?.Ten_tai_lieu}</a>
                              </td>
                              <td className="pro-price">
                                <span>{d?.Tai_lieu?.Gia}</span>
                              </td>
                              <td className="pro-quantity">
                                <div className="pro-qty">
                                  <span
                                    className="dec qtybtn"
                                    onClick={() => {
                                      handleChangQuantity(d?.id, d?.So_luong - 1);
                                    }}
                                  >
                                    -
                                  </span>
                                  <input type="text" value={d?.So_luong} readOnly />
                                  <span
                                    className="inc qtybtn"
                                    onClick={() => {
                                      handleChangQuantity(d?.id, d?.So_luong + 1);
                                    }}
                                  >
                                    +
                                  </span>
                                </div>
                              </td>
                              <td className="pro-subtotal">
                                <span>{d?.So_luong * d?.Tai_lieu?.Gia} vnđ</span>
                              </td>
                              <td className="pro-remove">
                                <Link onClick={() => handleDelete(d?.id)}>
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

export default Cart;
