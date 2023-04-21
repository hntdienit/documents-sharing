import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik } from "formik";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useQuery } from "@tanstack/react-query";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import sp_pdfjs_dist from "../../../assets/js/sp_pdfjs_dist.js";

import "./Document.scss";
import HeaderPage from "../../../components/user/HeaderPage/HeaderPage.jsx";
import LoadingCompoment from "../../../components/public/LoadingCompoment.jsx";
import ErrorCompoment from "../../../components/public/ErrorCompoment.jsx";
import newRequest from "../../../utils/newRequest.js";
import validationData from "../../../helpers/validationData.jsx";
import { AuthContext } from "../../../helpers/AuthContext.jsx";

const lop = [
  {
    id: 1,
    name: "123",
  },
  {
    id: 2,
    name: "5656",
  },
];

const ShareDocument = () => {
  const { currentUser } = useContext(AuthContext);

  const [datafile, setDataFile] = useState([]);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfError, setPdfError] = useState("");
  const allowedFiles = ["application/pdf"];

  const { isLoading, error, data } = useQuery({
    queryKey: [`subject_${currentUser?.userId}`],
    queryFn: () =>
      newRequest.get(`/subject/learn/all`).then((res) => {
        return res.data;
      }),
  });

  const handleFile = (e) => {
    setDataFile(e.target.files);
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && allowedFiles.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setPdfError("");
          setPdfFile(e.target.result);
        };
      } else {
        setPdfError("Không phải là bản pdf hợp lệ: Vui lòng chỉ chọn bản PDF");
        setPdfFile(null);
      }
    } else {
      console.log("vui lòng chọn một tệp PDF");
    }
  };

  const initialValues = {
    Ten_tai_lieu: "tai lieu 7",
    Mo_ta_tai_lieu: "mo ta 7",
    Cong_Khai: true,
    LopHP: false,
    LopHPId: "",
  };

  const navigate = useNavigate();

  const postForm = async (data) => {
    const formDataToSend = new FormData();
    formDataToSend.append("Ten_tai_lieu", data.Ten_tai_lieu);
    formDataToSend.append("Mo_ta_tai_lieu", data.Mo_ta_tai_lieu);
    formDataToSend.append("Cong_Khai", data.Cong_Khai);
    formDataToSend.append("LopHP", data.LopHP);
    formDataToSend.append("LopHPId", data.LopHPId);
    for (let i = 0; i < datafile.length; i++) {
      formDataToSend.append("datafile", datafile[i]);
    }
    await newRequest
      .post("/document/new", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.data.error) {
          toast.error(`${response.data.error}`, {});
        } else {
          toast.success("Add new product successfully!", {});
          // navigate("/admin");
        }
      });
  };

  if (isLoading) return <LoadingCompoment />;
  if (error) return <ErrorCompoment />;
  return (
    <>
      <HeaderPage page={"Chia sẻ tài liệu"} />
      <div className="sharedocument checkout_area bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row g-5 checkout-form">
            <div className="col-lg-7">
              <div className="row pl--50 pl_md--0 pl_sm--0">
                <div className="col-12 mb--60">
                  <h4 className="checkout-title">Trình xem PDF</h4>
                  <div className="pdf_wrap">
                    {pdfFile && (
                      <Worker workerUrl={sp_pdfjs_dist}>
                        <Viewer fileUrl={pdfFile} plugins={[defaultLayoutPluginInstance]} />
                      </Worker>
                    )}
                    {!pdfFile && <>Chưa có tệp nào được chọn</>}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="checkout-content-wrapper">
                <div id="billing-form">
                  <h4 className="checkout-title">Chia sẻ tài liệu</h4>

                  <div className="row">
                    <Formik
                      initialValues={initialValues}
                      // validationSchema={validationSchema} mo ta 150 ky tu
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
                              <input type="file" name="datafile" onChange={handleFile} />
                              {pdfError && <span className="text-danger">{pdfError}</span>}
                            </div>

                            {currentUser.Quyen === "GiangVien" && (
                              <div className="col-12 mb--20">
                                <div>
                                  <FormControlLabel
                                    control={<Checkbox checked={values.Cong_Khai} />}
                                    name="Cong_Khai"
                                    label="Công khai"
                                    onChange={handleChange}
                                  />
                                  <FormControlLabel
                                    control={<Checkbox checked={values.LopHP} />}
                                    name="LopHP"
                                    label="lớp học phần"
                                    onChange={handleChange}
                                  />
                                </div>

                                {values.LopHP && (
                                  <div className="mt--20">
                                    <div className="row g-5">
                                      <div className="col-12">
                                        <TextField
                                          fullWidth
                                          margin="normal"
                                          select
                                          label="Lớp"
                                          id="LopHPId"
                                          name="LopHPId"
                                          value={values.LopHPId}
                                          onChange={handleChange}
                                          error={touched.LopHPId && Boolean(errors.LopHPId)}
                                          helperText={touched.LopHPId && errors.LopHPId}
                                        >
                                          {data.map((d) => (
                                            <MenuItem key={d.id} value={d.id}>
                                              {d.Ma_lop_hoc_phan} - {d.Ten_lop_hoc_phan}
                                            </MenuItem>
                                          ))}
                                        </TextField>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                          <div className="form-submit-group">
                            <button type="submit" className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100">
                              Chia sẻ
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

export default ShareDocument;
