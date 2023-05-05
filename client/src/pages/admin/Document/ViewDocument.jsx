/* eslint-disable no-extra-boolean-cast */
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import SaveIcon from "@mui/icons-material/Save";

import HeaderPage from "../../../components/admin/HeaderPage/HeaderPage.jsx";
import LoadingCompoment from "../../../components/public/LoadingCompoment.jsx";
import ErrorCompoment from "../../../components/public/ErrorCompoment.jsx";
import newRequest from "../../../utils/newRequest.js";

import { useQuery } from "@tanstack/react-query";

const ViewDocument = () => {
  const { id } = useParams();
  let navigate = useNavigate();

  const { isLoading, error, data } = useQuery({
    queryKey: [`viewpdf${id}`],
    queryFn: () =>
      newRequest.get(`/document/${id}`).then((res) => {
        return res.data;
      }),
  });

  const handleCheck = async (data) => {
    await newRequest.post(`/document/check`, data).then((res) => {
      if (res.data.error) {
        toast.error(`${res.data.error}`, {});
      } else {
        toast.success("Xác nhận tài liệu đã kiểm duyệt!", {});
        navigate("/admin/document/list");
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
            <div className="col-lg-8 pdfview mt-3 row">
              {data?.Hinhs?.map((h) => (
                <div className="col-lg-6" key={h?.id}>
                  <img src={h.Url} alt="" className="img_eidt"/>
                </div>
              ))}
            </div>
            <div className="col-lg-4 pdfview mt-3 pb-3">
              <div className="row">
                <div className="col-lg-12 mt-1 pb-4">
                  <h3>Tên tài liệu: {data?.Tai_lieu?.Ten_tai_lieu}</h3>
                  <h3 className="mt-2">Mô tả tài liệu: {data?.Tai_lieu?.Mo_ta_tai_lieu}</h3>
                  <h3 className="mt-2">Kiểu tài liệu: {data?.Tai_lieu?.Kieu_tai_lieu}</h3>
                  <h3 className="mt-2">Ngành: {data?.Nganh?.Ten_nganh_hoc}</h3>
                </div>
                <div className="col-lg-12">
                  <div className="plceholder-button">
                    <button
                      className="rbt-btn btn-gradient rbt-switch-btn rbt-switch-y w-100"
                      onClick={() => {
                        handleCheck({
                          checkD: true,
                          id: data?.Tai_lieu?.id,
                        });
                      }}
                    >
                      <span data-text="Xác nhận kiểm duyệt">Kiểm duyệt</span>
                    </button>
                  </div>
                  <div className="plceholder-button mt-4">
                    <button
                      className="rbt-btn btn-gradient rbt-switch-btn rbt-switch-y w-100"
                      onClick={() => {
                        handleCheck({
                          id: data?.Tai_lieu?.id,
                        });
                      }}
                    >
                      <span data-text="Không kiểm duyệt">Không kiểm duyệt</span>
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

export default ViewDocument;
