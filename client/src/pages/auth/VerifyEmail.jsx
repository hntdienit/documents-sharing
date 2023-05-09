import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Formik } from "formik";
import { toast } from "react-toastify";
import GoogleIcon from "@mui/icons-material/Google";

import { AuthContext } from "../../helpers/AuthContext.jsx";
import newRequest from "../../utils/newRequest.js";
import validationData from "../../helpers/validationData.jsx";

const VerifyEmail = () => {
  const [email, setEmail] = useState(JSON.parse(localStorage.getItem("email")) || null);

  const initialValues = {
    Ma_xac_thuc: "",
  };

  // const validationSchema = validationData.register;

  console.log(email)

  const navigate = useNavigate();

  const handleVerify = async (data) => {
    data.Email = email;
    await newRequest.post("/auth/verify", data).then((res) => {
      if (res.data.error) {
        toast.error(res.data.error, {});
      } else {
        toast.success("Xác thực email thành công!, vui lòng đăng nhập", {});
        navigate("/login");
      }
    });
  };

  const handleNewVerify = async () => {
    await newRequest.post("/auth/newverify", {Email : email}).then((res) => {
      if (res.data.error) {
        toast.error(res.data.error, {});
      } else {
        toast.success("Mã xác thực mới đã được gửi!", {});
      }
    });
  };

  return (
    <>
      <div className="container login">
        <div className="rbt-contact-form contact-form-style-1 max-width-auto">
          <h3 className="title">Xác thực email</h3>
          <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={(values) => {
              handleVerify(values);
            }}
          >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  margin="normal"
                  id="Ma_xac_thuc"
                  name="Ma_xac_thuc"
                  label="Mã xác thực"
                  type="text"
                  value={values.Ma_xac_thuc}
                  onChange={handleChange}
                  error={touched.Ma_xac_thuc && Boolean(errors.Ma_xac_thuc)}
                  helperText={touched.Ma_xac_thuc && errors.Ma_xac_thuc}
                />
                                <div className="row mb--15">
                  <div className="col-lg-12 mt-3">
                    <div className="rbt-lost-password text-center">
                      <Link className="rbt-btn-link" onClick={handleNewVerify}>
                        Gửi lại mã xác thực
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="form-submit-group mt-3">
                  <button type="submit" className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100">
                    Xác thực email
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default VerifyEmail;
