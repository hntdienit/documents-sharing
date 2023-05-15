import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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

import HeaderPage from "../../../components/user/HeaderPage/HeaderPage.jsx";
import LoadingCompoment from "../../../components/public/LoadingCompoment.jsx";
import ErrorCompoment from "../../../components/public/ErrorCompoment.jsx";
import newRequest from "../../../utils/newRequest.js";
import validationData from "../../../helpers/validationData.jsx";
import { AuthContext } from "../../../helpers/AuthContext.jsx";

const EditShareDocument = () => {
  const { id } = useParams();
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

  const document = useQuery({
    queryKey: [`documentedit_${currentUser?.userId}`],
    queryFn: () =>
      newRequest.get(`/document/${id}`).then((res) => {
        return res.data;
      }),
  });

  const major = useQuery({
    queryKey: [`major_${currentUser?.userId}`],
    queryFn: () =>
      newRequest.get(`/major/all`).then((res) => {
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
      setPdfError("Vui lòng chọn một tệp PDF");
    }
  };

  const navigate = useNavigate();

  const postForm = async (data) => {
    const formDataToSend = new FormData();
    formDataToSend.append("Ten_tai_lieu", data.Ten_tai_lieu);
    formDataToSend.append("Mo_ta_tai_lieu", data.Mo_ta_tai_lieu);
    formDataToSend.append("Cong_Khai", data.Cong_Khai);
    formDataToSend.append("LopHP", data.LopHP);
    formDataToSend.append("LopHPId", data.LopHPId);
    formDataToSend.append("Nganh_hoc_id", data.Nganh_hoc_id);
    for (let i = 0; i < datafile.length; i++) {
      formDataToSend.append("datafile", datafile[i]);
    }
    await newRequest
      .patch(`document/editshare/${id}`, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.data.error) {
          toast.error(`${response.data.error}`, {});
        } else {
          toast.success("Chia sẻ tài liệu thành công, chờ quản trị viên kiểm duyệt!", {});
          navigate("/");
        }
      });
  };

  // useEffect(() => {
  //   setDataFile(document.data?.Tai_lieu?.Url);
  //   console.log(document.data?.Tai_lieu?.Url)
  // }, [document]);

  if (isLoading || major.isLoading) return <LoadingCompoment />;
  if (error || major.error) return <ErrorCompoment />;

  return (
    <>
      <HeaderPage page={"chỉnh sửa tài liệu chia sẻ"} />
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
                      initialValues={{
                        Ten_tai_lieu: document.data?.Tai_lieu?.Ten_tai_lieu,
                        Mo_ta_tai_lieu: document.data?.Tai_lieu?.Mo_ta_tai_lieu,
                        Cong_Khai: document.data?.Tai_lieu?.Cong_Khai,
                        LopHP: document.data?.Tai_lieu?.Lop_hoc_phan_id ? true : false,
                        LopHPId: document.data?.Tai_lieu?.Lop_hoc_phan_id,
                        Nganh_hoc_id: document.data?.Tai_lieu?.Nganh_hoc_id,
                      }}
                      validationSchema={validationData.shareDocument}
                      onSubmit={(values) => {
                        postForm(values);
                      }}
                    >
                      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                        <form onSubmit={handleSubmit}>
                          <div className="row mb--15">
                            <div className="col-lg-12">
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
                            <div className="col-lg-12">
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
                            <div className="col-lg-12">
                              <TextField
                                fullWidth
                                margin="normal"
                                select
                                label="Thuộc ngành"
                                id="Nganh_hoc_id"
                                name="Nganh_hoc_id"
                                value={values.Nganh_hoc_id}
                                onChange={handleChange}
                                error={touched.Nganh_hoc_id && Boolean(errors.Nganh_hoc_id)}
                                helperText={touched.Nganh_hoc_id && errors.Nganh_hoc_id}
                              >
                                {major?.data?.map((m) => (
                                  <MenuItem key={m.id} value={m.id}>
                                    {m?.Ma_nganh_hoc} - {m?.Ten_nganh_hoc}
                                  </MenuItem>
                                ))}
                              </TextField>
                            </div>
                            <div className="col-lg-12 mt-3">
                              <input type="file" name="datafile" onChange={handleFile} />
                              {pdfError && <span className="text-danger">{pdfError}</span>}
                            </div>

                            {currentUser.Vai_tro === "GiangVien" && (
                              <div className="col-12 mt-4">
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
                          <div className="form-submit-group mt-5">
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

export default EditShareDocument;
