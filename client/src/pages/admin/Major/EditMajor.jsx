/* eslint-disable no-extra-boolean-cast */
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { Formik, Field, FastField, Form, FieldArray } from "formik";

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

const EditMajor = () => {
  const { id } = useParams();
  let navigate = useNavigate();

  const { isLoading, error, data, remove } = useQuery({
    queryKey: [`major_${id}`],
    queryFn: () =>
      newRequest.get(`/major/${id}`).then((res) => {
        return res.data;
      }),
  });

  const editForm = async (data) => {
    await newRequest.patch(`/major/${id}`, data).then((res) => {
      if (res.data.error) {
        toast.error(`${res.data.error}`, {});
      } else {
        toast.success("Sửa thông tin ngành học thành công!", {});
        navigate("/admin/major/list");
        remove();
      }
    });
  };

  if (isLoading) return <LoadingCompoment />;
  if (error) return <ErrorCompoment />;
  return (
    <>
      <Card elevation={4}>
        <HeaderPage edit title={"ngành học"} to={"/admin/major/list"}></HeaderPage>
        <CardContent>
          <Formik
            initialValues={data}
            // validationSchema={validationSchema}
            onSubmit={(values) => {
              editForm(values);
            }}
          >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
              <Box component={"form"} sx={{ flexGrow: 1 }} onSubmit={handleSubmit} autoComplete="off" paddingTop={1}>
                <Grid container justifyContent="center" alignItems="center" spacing={2} paddingX={2}>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField
                      fullWidth
                      margin="normal"
                      id="Ma_nganh_hoc"
                      name="Ma_nganh_hoc"
                      label="Mã ngành học"
                      value={values?.Ma_nganh_hoc}
                      onChange={handleChange}
                      error={touched.Ma_nganh_hoc && Boolean(errors.Ma_nganh_hoc)}
                      helperText={touched.Ma_nganh_hoc && errors.Ma_nganh_hoc}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField
                      fullWidth
                      margin="normal"
                      id="Ten_nganh_hoc"
                      name="Ten_nganh_hoc"
                      label="Tên ngành học"
                      value={values?.Ten_nganh_hoc}
                      onChange={handleChange}
                      error={touched.Ten_nganh_hoc && Boolean(errors.Ten_nganh_hoc)}
                      helperText={touched.Ten_nganh_hoc && errors.Ten_nganh_hoc}
                    />
                  </Grid>
                </Grid>
                <Typography component="div" marginTop={2} paddingLeft={2}>
                  <Button variant="contained" type="submit" endIcon={<SaveIcon />}>
                    Lưu
                  </Button>
                </Typography>
              </Box>
            )}
          </Formik>
        </CardContent>
      </Card>
    </>
  );
};

export default EditMajor;
