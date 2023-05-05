import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Formik } from "formik";
import { toast } from "react-toastify";
import GoogleIcon from "@mui/icons-material/Google";

import { AuthContext } from "../../helpers/AuthContext.jsx";
import newRequest from "../../utils/newRequest.js";
import validationData from "../../helpers/validationData.jsx";

const Register = () => {
  const { setCurrentUser } = useContext(AuthContext);

  const initialValues = {
    Ho_ten: "",
    Email: "",
    Mat_khau: "",
    Lai_mat_khau: "",
  };

  const validationSchema = validationData.register;

  const navigate = useNavigate();

  const handleLogin = async (data) => {
    await newRequest.post("/auth/register", data).then((res) => {
      if (res.data.error) {
        toast.error(res.data.error, {});
      } else {
        setCurrentUser(res.data);
        toast.success("Bạn đã đăng ký thành công!, vui lòng đăng nhập", {});

        navigate("/login");
      }
    });
  };

  const handleLoginGG = async () => {
    await newRequest.get("/auth/google").then((res) => {
      if (res.data.error) {
        toast.error(res.data.error, {});
      } else {
        setCurrentUser(res.data);
        toast.success("Bạn đã đăng nhập thành công!", {});
        if (res.data.Quyen === "QuanTri") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      }
    });
  };
  return (
    <>
      <div className="container login">
        <div className="rbt-contact-form contact-form-style-1 max-width-auto">
          <div className="login-gg">
            <div>
              <Link
                onClick={() => {
                  handleLoginGG();
                }}
              >
                <button type="submit" className="rbt-btn btn-md w-100 btn__social">
                  <span className="icon__social">
                    <GoogleIcon />
                  </span>
                  <span>Đăng ký với Google</span>
                </button>
              </Link>
            </div>
            <span>... hoặc đăng ký bằng Email ...</span>
          </div>
          <h3 className="title">Đăng ký</h3>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              handleLogin(values);
            }}
          >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  margin="normal"
                  id="Ho_ten"
                  name="Ho_ten"
                  label="Họ tên"
                  type="Ho_ten"
                  value={values.Ho_ten}
                  onChange={handleChange}
                  error={touched.Ho_ten && Boolean(errors.Ho_ten)}
                  helperText={touched.Ho_ten && errors.Ho_ten}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  id="Email"
                  name="Email"
                  label="Email"
                  type="email"
                  value={values.Email}
                  onChange={handleChange}
                  error={touched.Email && Boolean(errors.Email)}
                  helperText={touched.Email && errors.Email}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  id="Mat_khau"
                  name="Mat_khau"
                  label="Mật khẩu"
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

                <div className="row mb--15">
                  <div className="col-lg-6">
                    {/* <div className="rbt-checkbox">
                                   <input type="checkbox" id="rememberme" name="rememberme"/>
                                   <label >Remember me</label>
                               </div> */}
                  </div>
                  {/* <div className="col-lg-6">
                    <div className="rbt-lost-password text-end">
                      <Link className="rbt-btn-link" to={"/"}>
                        Quên mật khẩu?
                      </Link>
                    </div>
                  </div> */}
                </div>

                <div className="form-submit-group">
                  <button type="submit" className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100">
                    Đăng nhập
                  </button>
                </div>
                <div className="changelogin">
                  <span>Bạn đã có tài khoản </span>
                  <Link className="rbt-btn-link" to={"/login"}>
                    đăng nhập
                  </Link>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Register;
