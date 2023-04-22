import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Formik } from "formik";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import { toast } from "react-toastify";

import HeaderPage from "../../components/user/HeaderPage/HeaderPage.jsx";
import LoadingCompoment from "../../components/public/LoadingCompoment.jsx";
import ErrorCompoment from "../../components/public/ErrorCompoment.jsx";

import newRequest from "../../utils/newRequest.js";

const Checkout = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["checkout"],
    queryFn: () =>
      newRequest.get("/cart").then((res) => {
        return res.data;
      }),
  });

  const initialValues = {
    Dia_chi_nhan_hang: "",
    Phuong_thuc_thanh_toan: "",
  };

  const navigate = useNavigate();

  const postForm = async (data) => {
    await newRequest.post(`/order/checkout`, data).then((response) => {
      if (response.data.error) {
        // toast.error(`Add new product failed! - error: ${response.data.error}`, {});
      } else {
        console.log(response.data.hinh);
        toast.success("Checkout successfully!", {});
        navigate("/");
      }
    });
  };

  const postFormVNP = async (data) => {
    await newRequest
      .post(`/order/create_payment_url`, {
        ...data,
        amount: data.Tong_don_hang,
        bankCode: "",
        orderDescription: "Online payment",
        orderType: "billpayment",
        language: "vn",
      })
      .then((response) => {
        if (response.data.error) {
          // toast.error(`Add new product failed! - error: ${response.data.error}`, {});
        } else {
          window.open(response.data.url, "_self");
        }
      });
  };

  if (isLoading) return <LoadingCompoment />;
  if (error) return <ErrorCompoment />;

  return (
    <>
      <HeaderPage page={"Thủ tục thanh toán"} linkpage={"Thủ tục thanh toán"} />
      <div className="checkout_area bg-color-white rbt-section-gap pb-7">
        <div className="container">
          <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema} mo ta 150 ky tu
            onSubmit={(values) => {
              values.Tong_don_hang = data.reduce((a, c) => a + c?.Tai_lieu?.Gia * c?.So_luong, 0);
              if (values.Phuong_thuc_thanh_toan === "vnpay") postFormVNP(values);
              else postForm(values);
            }}
          >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <div className="row g-5 checkout-form">
                  <div className="col-lg-7">
                    <div className="checkout-content-wrapper">
                      <div id="billing-form">
                        <h4 className="checkout-title">Thông tin thanh toán</h4>

                        <div className="row">
                          <div className="col-12 mb--20">
                            <TextField
                              fullWidth
                              margin="normal"
                              id="Dia_chi_nhan_hang"
                              name="Dia_chi_nhan_hang"
                              label="Nơi nhận tài liệu"
                              value={values.Dia_chi_nhan_hang}
                              onChange={handleChange}
                              error={touched.Dia_chi_nhan_hang && Boolean(errors.Dia_chi_nhan_hang)}
                              helperText={touched.Dia_chi_nhan_hang && errors.Dia_chi_nhan_hang}
                            />
                          </div>
                          <div className="col-12 mb--20">
                            <TextField
                              fullWidth
                              margin="normal"
                              select
                              label="Hình thức thanh toán"
                              id="Phuong_thuc_thanh_toan"
                              name="Phuong_thuc_thanh_toan"
                              value={values.Phuong_thuc_thanh_toan}
                              onChange={handleChange}
                              error={touched.Phuong_thuc_thanh_toan && Boolean(errors.Phuong_thuc_thanh_toan)}
                              helperText={touched.LopPhuong_thuc_thanh_toan && errors.Phuong_thuc_thanh_toan}
                            >
                              <MenuItem value={"tt"}>Thanh toán trực tiếp</MenuItem>
                              <MenuItem value={"vnpay"}>VNPAY</MenuItem>
                            </TextField>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-5">
                    <div className="row pl--50 pl_md--0 pl_sm--0">
                      <div className="col-12 mb-4">
                        <div className="checkout-cart-total">
                          <h4>
                            <div className="row">
                              <div className="col-lg-7">Sản phẩm</div>
                              <div className="col-lg-2">SL</div>
                              <div className="col-lg-3">Giá</div>
                            </div>
                          </h4>
                          <ul>
                            {data?.map((d) => (
                              <li key={d?.id}>
                                <div className="row">
                                  <div className="col-lg-7">{d?.Tai_lieu?.Ten_tai_lieu}</div>
                                  <div className="col-lg-2">{d?.So_luong}</div>
                                  <div className="col-lg-3">{d?.So_luong * d?.Tai_lieu?.Gia}</div>
                                </div>
                              </li>
                            ))}
                          </ul>
                          <h4 className="mt--30">
                            Tổng đơn hàng
                            <span>{data.reduce((a, c) => a + c?.Tai_lieu?.Gia * c?.So_luong, 0)} vnđ</span>
                          </h4>
                        </div>
                      </div>

                      <div className="col-12 mb--60">
                        <div className="plceholder-button">
                          <button className="rbt-btn btn-gradient rbt-switch-btn rbt-switch-y w-100" type="submit">
                            <span data-text="Xác nhận thanh toán">Thanh toán</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Checkout;
