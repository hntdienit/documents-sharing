/* eslint-disable no-extra-boolean-cast */
import React, { useContext, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { Formik, Field, FastField, Form, FieldArray } from "formik";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import sp_pdfjs_dist from "../../../assets/js/sp_pdfjs_dist.js";

import HeaderPage from "../../../components/admin/HeaderPage/HeaderPage.jsx";
import LoadingCompoment from "../../../components/public/LoadingCompoment.jsx";
import ErrorCompoment from "../../../components/public/ErrorCompoment.jsx";
import newRequest from "../../../utils/newRequest.js";
import { AuthContext } from "../../../helpers/AuthContext.jsx";

import { useQuery } from "@tanstack/react-query";

const ViewReport = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const customeSlider = useRef();

  const settings = {
    arrows: false,
    centerMode: true,
    swipeToSlide: true,
    infinite: true,
    rows: 1,
    slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 600,
    initialSlide: 0,
    autoplaySpeed: 5000,
  };

  const { isLoading, error, data } = useQuery({
    queryKey: [`view_report_${id}`],
    queryFn: () =>
      newRequest.get(`/report/${id}`).then((res) => {
        return res.data;
      }),
  });

  const handleCheck = async (data) => {
    await newRequest.post(`/report/check`, data).then((res) => {
      if (res.data.error) {
        toast.error(`${res.data.error}`, {});
      } else {
        toast.success("Xử lý báo cáo thành công!", {});
        // navigate("/admin/document/list");
      }
    });
  };

  if (isLoading) return <LoadingCompoment />;
  if (error) return <ErrorCompoment err={error?.response?.data} />;

  return (
    <>
      <div className="checkout_area bg-color-white rbt-section-gap pb-7">
        <div className="container">
          <HeaderPage edit title={"tài liệu"} to={"/admin/listwarehouse"}></HeaderPage>
          <div className="row">
            <div className="col-lg-8 pdfview mt-3 pb-3">
              {data?.Tai_lieu?.Url ? (
                <Worker workerUrl={sp_pdfjs_dist}>
                  <Viewer fileUrl={data?.Tai_lieu?.Url} plugins={[defaultLayoutPluginInstance]} />
                </Worker>
              ) : (
                <Slider ref={customeSlider} {...settings}>
                  {data?.Tai_lieu?.Hinhs?.map((h) => (
                    <div className="" key={h?.id}>
                      <img src={h.Url} alt="" className="img_eidt" />
                    </div>
                  ))}
                </Slider>
              )}
            </div>
            <div className="col-lg-4 pdfview mt-3 pb-3">
              <div className="row">
                <div className="col-lg-12 mt-1 pb-4">
                  <h3>Tên tài liệu: {data?.Tai_lieu?.Ten_tai_lieu}</h3>
                  <h3 className="mt-2">Mô tả tài liệu: {data?.Tai_lieu?.Mo_ta_tai_lieu}</h3>
                  <h3 className="mt-2">Kiểu tài liệu: {data?.Tai_lieu?.Kieu_tai_lieu}</h3>
                  <h3 className="mt-2">Ngành: {data?.Nganh?.Ten_nganh_hoc}</h3>
                </div>
                <div className="col-lg-12 mt-1 pb-4">
                  <h3>Tên chủ sở hữu: {data?.Tai_lieu?.Nguoi_dung?.Ho_ten}</h3>
                  <h3 className="mt-2">
                    Vai trò: {data?.Tai_lieu?.Nguoi_dung?.Vai_tro == "SinhVien" ? "Sinh viên" : "Giảng viên"}
                  </h3>
                </div>
                <div className="col-lg-12 mt-1 pb-4">
                  <h3>Tên người báo cáo: {currentUser?.Ho_ten}</h3>
                  <h3 className="mt-2">Vai trò: {currentUser?.Vai_tro == "SinhVien" ? "Sinh viên" : "Giảng viên"}</h3>
                </div>
                <div className="col-lg-12">
                  <div className="plceholder-button">
                    <button
                      className="rbt-btn btn-gradient rbt-switch-btn rbt-switch-y w-100"
                      onClick={() => {
                        handleCheck({
                          checkD: true,
                          idNBC: data?.Nguoi_dung_id,
                          idTL: data?.Tai_lieu?.id,
                        });
                      }}
                    >
                      <span data-text="Có vi phạm">Có vi phạm</span>
                    </button>
                  </div>
                  <div className="plceholder-button mt-4">
                    <button
                      className="rbt-btn btn-gradient rbt-switch-btn rbt-switch-y w-100"
                      onClick={() => {
                        handleCheck({
                          idNBC: data?.Nguoi_dung_id,
                          idTL: data?.Tai_lieu?.id,
                        });
                      }}
                    >
                      <span data-text="Không vi phạm">Không vi phạm</span>
                    </button>
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

export default ViewReport;
