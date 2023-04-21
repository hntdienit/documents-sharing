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

const EditDocument = () => {
  const { id } = useParams();
  let navigate = useNavigate();

  const { isLoading, error, data, remove } = useQuery({
    queryKey: [`document_${id}`],
    queryFn: () =>
      newRequest.get(`/document/${id}`).then((res) => {
        return res.data;
      }),
  });

  const validationSchema = yup.object({
    Ten_tai_lieu: yup
      .string()
      .min(3, "Warehouse names need more than 3 characters!")
      .max(15, "Warehouse names need less than 15 characters!")
      .required("Warehouse names cannot be empty!"),
  });

  const editForm = async (data) => {
    await newRequest.patch(`/document/${id}`, data).then((res) => {
      if (res.data.error) {
        toast.error(`${res.data.error}`, {});
      } else {
        toast.success("Edit warehouse successfully!", {});
        navigate("/admin/document/list");
        remove();
      }
    });
  };

  if (isLoading) return <LoadingCompoment />;
  if (error) return <ErrorCompoment err={"loi 1212323"} />;
  return (
    <>
      <Card elevation={4}>
        <HeaderPage edit title={"Warehouse"} to={"/admin/listwarehouse"}></HeaderPage>
        <CardContent>
          <Formik
            initialValues={data.Tai_lieu}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              editForm(values);
            }}
          >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
              <Box component={"form"} sx={{ flexGrow: 1 }} onSubmit={handleSubmit} autoComplete="off" paddingTop={1}>
                <Grid container justifyContent="center" alignItems="center" spacing={2} paddingX={2}>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TextField
                      fullWidth
                      margin="normal"
                      id="Ten_tai_lieu"
                      name="Ten_tai_lieu"
                      label="Ten_tai_lieu"
                      value={values.Ten_tai_lieu}
                      onChange={handleChange}
                      error={touched.Ten_tai_lieu && Boolean(errors.Ten_tai_lieu)}
                      helperText={touched.Ten_tai_lieu && errors.Ten_tai_lieu}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}></Grid>
                </Grid>
                <Typography component="div" marginTop={2} paddingLeft={2}>
                  <Button variant="contained" type="submit" endIcon={<SaveIcon />}>
                    Save
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

export default EditDocument;
