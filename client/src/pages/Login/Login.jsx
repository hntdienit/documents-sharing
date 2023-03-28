import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.scss";
import { AuthContext } from "../../helpers/AuthContext.jsx";

const Login = () => {
  const [inputs, setInputs] = useState({
    Email: "",
    Mat_khau: "",
  });

  const [error, setError] = useState(null);

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="container">
      <div className="login">
        <div className="rbt-contact-form contact-form-style-1 max-width-auto">
          <h3 className="title">Login</h3>
          <form className="max-width-auto">
            <div className="form-group">
              <input name="con_name" type="text" />
              <label>Username or email *</label>
              <span className="focus-border"></span>
            </div>
            <div className="form-group">
              <input name="con_email" type="email" />
              <label>Password *</label>
              <span className="focus-border"></span>
            </div>

            <div className="row mb--30">
              <div className="col-lg-6">
                <div className="rbt-checkbox">
                  <input type="checkbox" id="rememberme" name="rememberme" />
                  <label htmlFor="rememberme">Remember me</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="rbt-lost-password text-end">
                  <a className="rbt-btn-link" href="#">
                    Lost your password?
                  </a>
                </div>
              </div>
            </div>

            <div className="form-submit-group">
              <button type="submit" className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100">
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Log In</span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <form onSubmit={handleLogin}>
        <h1>Đăng nhập</h1>
        <label htmlFor="">Email</label>
        <input name="Email" type="text" placeholder="dien123@gmail.com" onChange={handleChange} />

        <label htmlFor="">Mật khẩu</label>
        <input name="Mat_khau" type="password" onChange={handleChange} />
        <button type="submit">Login</button>
        {error && error}
      </form> */}
    </div>
  );
};

export default Login;
