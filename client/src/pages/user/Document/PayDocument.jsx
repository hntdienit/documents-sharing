import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik } from "formik";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useQuery } from "@tanstack/react-query";

import HeaderPage from "../../../components/user/HeaderPage/HeaderPage.jsx";
import LoadingCompoment from "../../../components/public/LoadingCompoment.jsx";
import ErrorCompoment from "../../../components/public/ErrorCompoment.jsx";
import newRequest from "../../../utils/newRequest.js";
import validationData from "../../../helpers/validationData.jsx";
import { AuthContext } from "../../../helpers/AuthContext.jsx";
import { Hidden } from "@mui/material";

const PayDocument = () => {
  const { currentUser } = useContext(AuthContext);

  const [datafile, setDataFile] = useState([]);

  const major = useQuery({
    queryKey: [`major_${currentUser?.userId}`],
    queryFn: () =>
      newRequest.get(`/major/all`).then((res) => {
        return res.data;
      }),
  });

  const initialValues = {
    Ten_tai_lieu: "",
    Mo_ta_tai_lieu: "",
    Nganh_hoc_id: "",
    So_luong: "",
    Gia: "",
  };

  const navigate = useNavigate();

  const postForm = async (data) => {
    const formDataToSend = new FormData();
    formDataToSend.append("Ten_tai_lieu", data.Ten_tai_lieu);
    formDataToSend.append("Mo_ta_tai_lieu", data.Mo_ta_tai_lieu);
    formDataToSend.append("Nganh_hoc_id", data.Nganh_hoc_id);
    formDataToSend.append("So_luong", data.So_luong);
    formDataToSend.append("Gia", data.Gia);
    for (let i = 0; i < datafile.length; i++) {
      formDataToSend.append("datafile", datafile[i]);
    }
    await newRequest
      .post("/document/pay", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.data.error) {
          toast.error(`${response.data.error}`, {});
        } else {
          toast.success("Đăng tài liệu bán thành công, chờ quản trị viên kiểm duyệt!", {});
          navigate("/");
        }
      });
  };

  if (major.isLoading) return <LoadingCompoment />;
  if (major.error) return <ErrorCompoment />;
  return (
    <>
      <HeaderPage page={"Đăng bán tài liệu"} />
      <div className="aydocument checkout_area bg-color-white rbt-section-gap pb-7">
        <div className="container">
          <div className="row g-5 checkout-form f-c-c">
            <div className="col-lg-10">
              <div className="checkout-content-wrapper">
                <div id="billing-form">
                  <h4 className="checkout-title">Đăng bán tài liệu</h4>

                  <div className="row">
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationData.payDocument}
                      onSubmit={(values) => {
                        postForm(values);
                      }}
                    >
                      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                        <form onSubmit={handleSubmit}>
                          <div className="row mb--15">
                            <div className="col-lg-6">
                              <TextField
                                fullWidth
                                margin="normal"
                                id="Ten_tai_lieu"
                                name="Ten_tai_lieu"
                                label="Tên tài liệu"
                                value={values.Ten_tai_lieu}
                                onChange={handleChange}
                                error={touched.Ten_tai_lieu && Boolean(errors.Ten_tai_lieu)}
                                helperText={touched.Ten_tai_lieu && errors.Ten_tai_lieu}
                              />
                            </div>
                            <div className="col-lg-6">
                              <TextField
                                fullWidth
                                margin="normal"
                                id="Mo_ta_tai_lieu"
                                name="Mo_ta_tai_lieu"
                                label="Mô tả tài liệu"
                                value={values.Mo_ta_tai_lieu}
                                onChange={handleChange}
                                error={touched.Mo_ta_tai_lieu && Boolean(errors.Mo_ta_tai_lieu)}
                                helperText={touched.Mo_ta_tai_lieu && errors.Mo_ta_tai_lieu}
                              />
                            </div>
                            <div className="col-lg-6">
                              <TextField
                                fullWidth
                                margin="normal"
                                select
                                label="Thuộc ngành"
                                id="Nganh_hoc_id"
                                name="Nganh_hoc_id"
                                value={values.Nganh_hoc_id}
                                onChange={handleChange}
                                error={touched.Nganh_hoc_id && Boolean(errors.Nganh_hoc_id)}
                                helperText={touched.Nganh_hoc_id && errors.Nganh_hoc_id}
                              >
                                {major?.data?.map((m) => (
                                  <MenuItem key={m.id} value={m.id}>
                                    {m?.Ma_nganh_hoc} - {m?.Ten_nganh_hoc}
                                  </MenuItem>
                                ))}
                              </TextField>
                            </div>
                            <div className="col-lg-6 mt-3">
                              <label htmlFor="datafile" className="me-3 fw-500">
                                Hình ảnh:
                              </label>
                              <input
                                type="file"
                                id="datafile"
                                name="datafile"
                                multiple
                                onChange={(e) => {
                                  setDataFile(e.target.files);
                                  Hidden;
                                }}
                              />
                            </div>
                            <div className="col-lg-6">
                              <TextField
                                fullWidth
                                margin="normal"
                                id="So_luong"
                                name="So_luong"
                                label="Số lượng"
                                value={values.So_luong}
                                onChange={handleChange}
                                error={touched.So_luong && Boolean(errors.So_luong)}
                                helperText={touched.So_luong && errors.So_luong}
                              />
                            </div>
                            <div className="col-lg-6">
                              <TextField
                                fullWidth
                                margin="normal"
                                id="Gia"
                                name="Gia"
                                label="Giá"
                                value={values.Gia}
                                onChange={handleChange}
                                error={touched.Gia && Boolean(errors.Gia)}
                                helperText={touched.Gia && errors.Gia}
                              />
                            </div>
                          </div>
                          <div className="form-submit-group mt-5">
                            <button type="submit" className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100">
                              Đăng bán
                            </button>
                          </div>
                        </form>
                      )}
                    </Formik>
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

export default PayDocument;
