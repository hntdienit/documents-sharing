import React, { useState } from "react";
import "./NewDocument.scss";

import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";
import getCurrentUser from "../../utils/getCurrentUser.js";

//--- pdf
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Worker } from "@react-pdf-viewer/core";
import sp_pdfjs_dist from "../../assets/js/sp_pdfjs_dist.js"
//--- pdf

const NewDocument = ({ currentUser }) => {
  // const currentUser = getCurrentUser();

  //--- pdf
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileError, setPdfFileError] = useState("");
  const [viewPdf, setViewPdf] = useState(null);
  const fileType = ["application/pdf"];
  const handlePdfFileChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setPdfFile(e.target.result);
          setPdfFileError("");
        };
      } else {
        setPdfFile(null);
        setPdfFileError("Please select valid pdf file");
      }
    } else {
      console.log("select your file");
    }
  };
  const handlePdfFileSubmit = (e) => {
    e.preventDefault();
    if (pdfFile !== null) {
      setViewPdf(pdfFile);
    } else {
      setViewPdf(null);
    }
  };
  //--- pdf

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
          <h1>tai lieu moi</h1>
          <label htmlFor="">ten tai lieu</label>
          <input name="Ten_tai_lieu" type="text" placeholder="" onChange={handleChange} />
          <label htmlFor="">mo ta</label>
          <input name="Mo_ta_tai_lieu" type="text" placeholder="" onChange={handleChange} />
          <label htmlFor="">Profile Picture</label>
          <input type="file" onChange={(e) => setFiles1(e.target.files[0])} />
          <button type="submit">luu</button>
        </div>
      </form>
      {/* --- pdf */}
      <hr />
      <div className="container">
        <br></br>

        <form className="form-group" onSubmit={handlePdfFileSubmit}>
          <input type="file" className="form-control" required onChange={handlePdfFileChange} />
          {pdfFileError && <div className="error-msg">{pdfFileError}</div>}
          <br></br>
          <button type="submit" className="btn btn-success btn-lg">
            UPLOAD
          </button>
        </form>
        <br></br>
        <h4>View PDF</h4>
        <div className="pdf-container">
          {/* show pdf conditionally (if we have one)  */}
          {viewPdf && (
            <>
              <Worker workerUrl={sp_pdfjs_dist}>
                <Viewer fileUrl={viewPdf} plugins={[defaultLayoutPluginInstance]} />
              </Worker>
            </>
          )}

          {/* if we dont have pdf or viewPdf state is null */}
          {!viewPdf && <>No pdf file selected</>}
        </div>
      </div>
      {/* --- pdf */}
    </div>
  );
};

export default NewDocument;
