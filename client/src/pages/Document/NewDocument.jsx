import React, { useState } from "react";
import "./NewDocument.scss";

import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";
import getCurrentUser from "../../utils/getCurrentUser.js";

const NewDocument = ({currentUser}) => {
  // const currentUser = getCurrentUser();

  const [files1, setFiles1] = useState(null);
  const [data, setData] = useState({
    Ten_tai_lieu: "ten tai lieu",
    Mo_ta_tai_lieu: "mo ta tai lieu",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("Ten_tai_lieu", data.Ten_tai_lieu);
      formDataToSend.append("Mo_ta_tai_lieu", data.Mo_ta_tai_lieu);
      // files1.forEach((file) => {
      //   data.append("image", file);
      // });
      // for (let i = 0; i < files1.length; i++) {
      // formDataToSend.append("image", files1[i]);

      // }
      formDataToSend.append("datafile", files1);

      console.log("Ten_tai_lieu.....", data.Ten_tai_lieu);
      console.log("Mo_ta_tai_lieu.....", data.Mo_ta_tai_lieu);
      console.log("file.....", files1);

      await newRequest.post("/document/new", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="left">
          <h1>tai lieu moi{currentUser.Email}</h1>
          <label htmlFor="">ten tai lieu</label>
          <input name="Ten_tai_lieu" type="text" placeholder="" onChange={handleChange} />
          <label htmlFor="">mo ta</label>
          <input name="Mo_ta_tai_lieu" type="text" placeholder="" onChange={handleChange} />
          <label htmlFor="">Profile Picture</label>
          <input type="file" onChange={(e) => setFiles1(e.target.files[0])} />
          <button type="submit">luu</button>
        </div>
      </form>
    </div>
  );
};

export default NewDocument;
