import React, { useState }  from 'react'
import "./Login.scss"

import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [Email, setEmail] = useState("");
  const [Mat_khau, setMat_khau] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("/auth/login", { Email, Mat_khau });
      localStorage.setItem("accessToken", JSON.stringify(res.data));
      navigate("/")
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="login">
    <form onSubmit={handleSubmit}>
      <h1>Đăng nhập</h1>
      <label htmlFor="">Email</label>
      <input
        name="Email"
        type="text"
        placeholder="dien123@gmail.com"
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="">Mật khẩu</label>
      <input
        name="Mat_khau"
        type="password"
        onChange={(e) => setMat_khau(e.target.value)}
      />
      <button type="submit">Login</button>
      {error && error}
    </form>
  </div>
  )
}

export default Login