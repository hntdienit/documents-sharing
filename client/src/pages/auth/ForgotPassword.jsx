import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Formik } from "formik";
import { toast } from "react-toastify";

import newRequest from "../../utils/newRequest.js";
import validationData from "../../helpers/validationData.jsx";

const ForgotPassword = () => {
  const initialValues = {
    Email: "",
  };

  // const validationSchema = validationData.register;

  const navigate = useNavigate();

  const handleCheckEmail = async (data) => {
    await newRequest.post("/auth/checkemail", data).then((res) => {
      if (res.data.error) {
        toast.error(res.data.error, {});
      } else {
        toast.success("Mã xác thực đã được gửi về email, vui lòng xác thực!", {});
        localStorage.setItem("email", JSON.stringify(data.Email));
        localStorage.setItem("newpassword", JSON.stringify(1));
        navigate("/verifyemail");
      }
    });
  };

  return (
    <>
      <div className="container login">
        <div className="rbt-contact-form contact-form-style-1 max-width-auto">
          <h3 className="title">Địa chỉ email</h3>
          <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={(values) => {
              handleCheckEmail(values);
            }}
          >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  margin="normal"
                  id="Email"
                  name="Email"
                  label="Email của bạn"
                  type="text"
                  value={values.Email}
                  onChange={handleChange}
                  error={touched.Email && Boolean(errors.Email)}
                  helperText={touched.Email && errors.Email}
                />
                <div className="form-submit-group mt-3">
                  <button type="submit" className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100">
                    Lấy mã xác thực
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

export default ForgotPassword;
