import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { toast } from "react-toastify";

import images from "../../assets/images/index.js";
import HeaderPage from "../../components/user/HeaderPage/HeaderPage.jsx";
import Star from "../../components/public/Star/Star.jsx";
import Reviews from "../../components/user/Reviews/Reviews.jsx";
import newRequest from "../../utils/newRequest.js";
import LoadingCompoment from "../../components/public/LoadingCompoment.jsx";
import ErrorCompoment from "../../components/public/ErrorCompoment.jsx";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  const { isLoading, error, data } = useQuery({
    queryKey: [`detail_${id}`],
    queryFn: () =>
      newRequest.get(`/document/${id}`).then((res) => {
        return res.data;
      }),
  });

  const addProductToCart = async () => {
    await newRequest
      .post("/cart/add", {
        So_luong: quantity,
        Tai_lieu_id: id,
      })
      .then((res) => {
        if (res.data.error) {
          toast.error(`${res.data.error}`, {});
        } else {
          toast.success("Thêm sản phẩm vào giỏ hàng thành công!", {});
          navigate("/cart");
        }
      });
  };

  const incQuantity = (stock) => {
    if (quantity >= stock) {
      toast.error("Số lượng phải nhỏ hơn số lượng còn!", {});
    } else {
      setQuantity(quantity + 1);
    }
  };

  const decQuantity = (stock) => {
    if (quantity === 1) {
      toast.error("Số lượng phải lớn hơn 0!", {});
    } else {
      setQuantity(quantity - 1);
    }
  };

  if (isLoading) return <LoadingCompoment />;
  if (error) return <ErrorCompoment err={error?.response?.data} />;

  return (
    <>
      <HeaderPage page={"Chi tiết tài liệu"} linkpage={"Chi tiết tài liệu"} />
      <div className="rbt-single-product-area rbt-single-product rbt-section-gap mt-6 pb-5">
        <div className="container">
          <div className="row g-5 row--30 align-items-center">
            <div className="col-lg-6">
              <div className="thumbnail">
                <img className="radius-10 img_detail" src={images.course_online_01} alt="Product Images" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <div className="rbt-review justify-content-start">
                  <Star
                    stars={data?.Danh_gia?.So_sao}
                    isReviews
                    reviews={data?.Danh_gia?.So_sao > 0 ? `${data?.Danh_gia?.So_nguoi} đánh giá` : "0 đánh giá"}
                  />
                </div>

                <h2 className="title mt--10 mb--10">{data?.Tai_lieu?.Ten_tai_lieu}</h2>
                <span className="rbt-label-style description">{data?.Nguoi_dung?.Ho_ten}</span>

                <div className="rbt-price justify-content-start mt--10">
                  <span className="current-price theme-gradient">{data?.Tai_lieu?.Gia} vnđ</span>
                  {/* <span className="off-price">$150.00</span> */}
                </div>

                <p className="my-4">
                  {data?.Tai_lieu?.Mo_ta_tai_lieu}
                </p>

                <div className="product-action mb--20">
                  <div className="pro-qty">
                    <span
                      className="dec qtybtn"
                      onClick={() => {
                        decQuantity(data?.Tai_lieu?.So_luong);
                      }}
                    >
                      -
                    </span>
                    <input type="text" value={quantity} readOnly />
                    <span
                      className="inc qtybtn"
                      onClick={() => {
                        incQuantity(data?.Tai_lieu?.So_luong);
                      }}
                    >
                      +
                    </span>
                  </div>
                  <div className="addto-cart-btn">
                    <button
                      className="rbt-btn btn-gradient hover-icon-reverse"
                      onClick={() => {
                        addProductToCart();
                      }}
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Thêm vào giỏ hàng</span>
                        <span className="btn-icon">
                          <KeyboardDoubleArrowRightIcon />
                        </span>
                        <span className="btn-icon">
                          <KeyboardDoubleArrowRightIcon />
                        </span>
                      </span>
                    </button>
                  </div>
                </div>

                <ul className="product-feature">
                  <li>
                    <span>số lượng còn:</span> {data?.Tai_lieu?.So_luong}
                  </li>
                  <li>
                    <span>Ngành học: </span> <Link to={"/"}>Motivation</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Reviews documentId={data?.Tai_lieu?.id} />
    </>
  );
};

export default Detail;
