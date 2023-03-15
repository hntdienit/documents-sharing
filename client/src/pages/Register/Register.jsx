import React, { useState } from "react";
// import upload from "../../utils/upload";
import "./Register.scss";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

function Register() {
//   const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    Ho_ten: "",
    email: "",
    Mat_khau: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

//   const handleSeller = (e) => {
//     setUser((prev) => {
//       return { ...prev, isSeller: e.target.checked };
//     });
//   };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const url = await upload(file);
    try {
      await newRequest.post("/auth/register", {
        ...user,
        // img: url,
      });
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Tạo tài khoản mới</h1>
          <label htmlFor="">Họ và tên</label>
          <input name="Ho_ten" type="text" placeholder="thanh dien" onChange={handleChange} />
          <label htmlFor="">Email</label>
          <input name="Email" type="email" placeholder="dien123@gmail.com" onChange={handleChange} />
          <label htmlFor="">Mật khẩu</label>
          <input name="Mat_khau" type="password" onChange={handleChange} />
          <button type="submit">Register</button>
        </div>
        {/* <div className="right">
          <h1>I want to become a seller</h1>
          <div className="toggle">
            <label htmlFor="">Activate the seller account</label>
            <label className="switch">
              <input type="checkbox" onChange={handleSeller} />
              <span className="slider round"></span>
            </label>
          </div>
          <label htmlFor="">Phone Number</label>
          <input name="phone" type="text" placeholder="+1 234 567 89" onChange={handleChange} />
          <label htmlFor="">Description</label>
          <textarea
            placeholder="A short description of yourself"
            name="desc"
            id=""
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </div> */}
      </form>
    </div>
  );
}

export default Register;
