import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import sp_pdfjs_dist from "../../assets/js/sp_pdfjs_dist.js";

import HeaderPage from "../../components/user/HeaderPage/HeaderPage.jsx";
import newRequest from "../../utils/newRequest.js";
import LoadingCompoment from "../../components/public/LoadingCompoment.jsx";
import ErrorCompoment from "../../components/public/ErrorCompoment.jsx";

const ViewPDF = () => {
  const { id } = useParams();

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const { isLoading, error, data } = useQuery({
    queryKey: [`viewpdf${id}`],
    queryFn: () =>
      newRequest.get(`/document/${id}`).then((res) => {
        return res.data;
      }),
  });

  if (isLoading) return <LoadingCompoment />;
  if (error) return <ErrorCompoment />;

  return (
    <>
      <HeaderPage page={"Trình xem PDF"} linkpage={"Trình xem PDF"} />
      <div className="rbt-single-product-area rbt-single-product rbt-section-gap mt-5 pb-7">
        <div className="container">
          <div className="row g-5 row--30 align-items-center">
            <div className="col-lg-12">
              <Link to={`/document/${id}`}>
                <div className="plceholder-button">
                  <button className="rbt-btn btn-gradient rbt-switch-btn rbt-switch-y w-100" type="submit">
                    <span data-text="Về trang chi tiết">Về trang chi tiết</span>
                  </button>
                </div>
              </Link>
            </div>
            <div className="col-lg-12">
              <Worker workerUrl={sp_pdfjs_dist}>
                <Viewer fileUrl={data?.Tai_lieu?.Url} plugins={[defaultLayoutPluginInstance]} />
              </Worker>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewPDF;
