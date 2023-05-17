import React, { useState, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import { Formik } from "formik";

import images from "../../assets/images/index.js";
import HeaderPage from "../../components/user/HeaderPage/HeaderPage.jsx";
import Star from "../../components/public/Star/Star.jsx";
import Reviews from "../../components/user/Reviews/Reviews.jsx";
import newRequest from "../../utils/newRequest.js";
import LoadingCompoment from "../../components/public/LoadingCompoment.jsx";
import ErrorCompoment from "../../components/public/ErrorCompoment.jsx";
import { AuthContext } from "../../helpers/AuthContext.jsx";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const [openReport, setOpenReport] = useState(false);

  const [quantity, setQuantity] = useState(1);

  const { isLoading, error, data, refetch } = useQuery({
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

  const decQuantity = () => {
    if (quantity === 1) {
      toast.error("Số lượng phải lớn hơn 0!", {});
    } else {
      setQuantity(quantity - 1);
    }
  };

  const initialValues = {
    Noi_dung_bao_cao: "",
  };

  // const validationSchema = validationData.login;

  const handleReport = async (data) => {
    data.Tai_lieu_id = id;
    await newRequest.post("/report/", data).then((res) => {
      if (res.data.error) {
        toast.error(res.data.error, {});
      } else {
        toast.success("Bạn đã báo cáo vi phạm thành công!", {});
        navigate("/");
      }
    });
  };

  if (isLoading) return <LoadingCompoment />;
  if (error) return <ErrorCompoment />;

  return (
    <>
      <HeaderPage page={"Chi tiết tài liệu"} linkpage={"Chi tiết tài liệu"} />
      <div className="rbt-single-product-area rbt-single-product rbt-section-gap mt-6 pb-5">
        <div className="container">
          <div className="row g-5 row--30 align-items-center">
            <div className="col-lg-6">
              <div className=" img-detail">
                <div className="img_mini_wrap"></div>
                <div>
                  <img
                    className="radius-10 img_detail"
                    src={data?.Tai_lieu?.Url ? images.pdf : data?.Hinhs[0]?.Url}
                    alt="Product Images"
                  />
                </div>
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
                  {data?.Tai_lieu?.Url ? (
                    <span className="current-price theme-gradient"></span>
                  ) : (
                    <>
                      <span className="current-price theme-gradient my-3">{data?.Tai_lieu?.Gia} vnđ</span>
                      {/* <span className="off-price">$150.00</span> */}
                    </>
                  )}
                </div>

                <p className="my-4 decs_detail">{data?.Tai_lieu?.Mo_ta_tai_lieu}</p>

                {data?.Tai_lieu?.Url ? (
                  <div className="addto-cart-btn">
                    <Link to={`/document/viewpdf/${id}`}>
                      <button className="rbt-btn btn-gradient hover-icon-reverse">
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">Xem tài liệu</span>
                          <span className="btn-icon">
                            <KeyboardDoubleArrowRightIcon />
                          </span>
                          <span className="btn-icon">
                            <KeyboardDoubleArrowRightIcon />
                          </span>
                        </span>
                      </button>
                    </Link>
                  </div>
                ) : (
                  <div className="product-action mb--20">
                    <div className="pro-qty">
                      <span
                        className="dec qtybtn"
                        onClick={() => {
                          decQuantity();
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
                )}

                <ul className="product-feature">
                  <li>
                    {data?.Tai_lieu?.Url ? (
                      <p></p>
                    ) : (
                      <>
                        <span>số lượng còn:</span> {data?.Tai_lieu?.So_luong}
                      </>
                    )}
                  </li>
                  <li>
                    <span>Ngành học: </span>
                    <Link to={"/"}>{data?.Nganh?.Ma_nganh_hoc + " - " + data?.Nganh?.Ten_nganh_hoc}</Link>
                  </li>

                  {currentUser && !openReport && (
                    <div className="plceholder-button">
                      <button
                        type="button"
                        className="rbt-btn btn-gradient rbt-switch-btn rbt-switch-y w-50"
                        onClick={() => {
                          setOpenReport(!openReport);
                        }}
                      >
                        <span data-text="Tài liệu có vi phạm?">Báo cáo vi phạm</span>
                      </button>
                    </div>
                  )}
                </ul>
              </div>
            </div>
            <div className="col-lg-2"></div>
            {openReport && (
              <div className="col-lg-8">
                <div className="rbt-comment-form mt-4 rbt-shadow-box">
                  <div className="row">
                    <div className="col-lg-8 comment-form-inner">
                      <h3 className="title fs-2">Báo cáo vi phạm tài liệu</h3>
                    </div>
                    <div className="col-lg-4">
                      <div className="plceholder-button">
                        <button
                          type="button"
                          className="rbt-btn btn-gradient rbt-switch-btn rbt-switch-y w-100"
                          onClick={() => {
                            setOpenReport(!openReport);
                          }}
                        >
                          <span data-text="Hủy báo cáo?">Hủy</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <Formik
                    initialValues={initialValues}
                    // validationSchema={validationSchema}
                    onSubmit={(values) => {
                      handleReport(values);
                    }}
                  >
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                      <form onSubmit={handleSubmit}>
                        <TextField
                          label="Nội dung báo cáo"
                          multiline
                          rows={4}
                          fullWidth
                          margin="normal"
                          id="Noi_dung_bao_cao"
                          name="Noi_dung_bao_cao"
                          type="text"
                          value={values.Noi_dung_bao_cao}
                          onChange={handleChange}
                          error={touched.Noi_dung_bao_cao && Boolean(errors.Noi_dung_bao_cao)}
                          helperText={touched.Noi_dung_bao_cao && errors.baocao}
                        />

                        <div className="form-submit-group">
                          <div className="plceholder-button">
                            <button type="submit" className="rbt-btn btn-gradient rbt-switch-btn rbt-switch-y w-100">
                              <span data-text="Xác nhận báo cáo vi phạm">Báo cáo vi phạm</span>
                            </button>
                          </div>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Reviews documentId={data?.Tai_lieu?.id} refetch={refetch} />
    </>
  );
};

export default Detail;
