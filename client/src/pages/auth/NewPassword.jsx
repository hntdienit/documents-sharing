import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Formik } from "formik";
import { toast } from "react-toastify";

import newRequest from "../../utils/newRequest.js";
import validationData from "../../helpers/validationData.jsx";

const NewPassword = () => {
  const [email, setEmail] = useState(JSON.parse(localStorage.getItem("email")) || null);

  const initialValues = {
    Mat_khau: "",
    Lai_mat_khau: "",
  };

  // const validationSchema = validationData.register;

  const navigate = useNavigate();

  const handleNewPassword = async (data) => {
    data.Email = email
    await newRequest.post("/auth/newpassword", data).then((res) => {
      if (res.data.error) {
        toast.error(res.data.error, {});
      } else {
        toast.success("Mật khẩu đã được cập nhật, vui lòng đăng nhập!", {});
        localStorage.removeItem("email");
        navigate("/login");
      }
    });
  };

  return (
    <>
      <div className="container login">
        <div className="rbt-contact-form contact-form-style-1 max-width-auto">
          <h3 className="title">Cập nhật mật khẩu</h3>
          <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={(values) => {
              handleNewPassword(values);
            }}
          >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  margin="normal"
                  id="Mat_khau"
                  name="Mat_khau"
                  label="Mật khẩu mới"
                  type="password"
                  value={values.Mat_khau}
                  onChange={handleChange}
                  error={touched.Mat_khau && Boolean(errors.Mat_khau)}
                  helperText={touched.Mat_khau && errors.Mat_khau}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  id="Lai_mat_khau"
                  name="Lai_mat_khau"
                  label="Nhập lại mật khẩu"
                  type="password"
                  value={values.Lai_mat_khau}
                  onChange={handleChange}
                  error={touched.Lai_mat_khau && Boolean(errors.Lai_mat_khau)}
                  helperText={touched.Lai_mat_khau && errors.Lai_mat_khau}
                />
                <div className="form-submit-group mt-3">
                  <button type="submit" className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100">
                    Cập nhật mật khẩu
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

export default NewPassword;
