/* eslint-disable no-extra-boolean-cast */
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik } from "formik";

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

const EditSubject = () => {
  const { id } = useParams();
  let navigate = useNavigate();

  const { isLoading, error, data, remove } = useQuery({
    queryKey: [`subject_${id}`],
    queryFn: () =>
      newRequest.get(`/subject/${id}`).then((res) => {
        return res.data;
      }),
  });

  const editForm = async (data) => {
    await newRequest.patch(`/subject/${id}`, data).then((res) => {
      if (res.data.error) {
        toast.error(`${res.data.error}`, {});
      } else {
        toast.success("Sửa thông tin lớp học phần thành công!", {});
        navigate("/admin/subject/list");
        remove();
      }
    });
  };

  if (isLoading) return <LoadingCompoment />;
  if (error) return <ErrorCompoment />;
  return (
    <>
      <Card elevation={4}>
        <HeaderPage edit title={"lớp học phần"} to={"/admin/subject/list"}></HeaderPage>
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
                      id="Ma_lop_hoc_phan"
                      name="Ma_lop_hoc_phan"
                      label="Mã lớp học phần"
                      value={values?.Ma_lop_hoc_phan}
                      onChange={handleChange}
                      error={touched.Ma_lop_hoc_phan && Boolean(errors.Ma_lop_hoc_phan)}
                      helperText={touched.Ma_lop_hoc_phan && errors.Ma_lop_hoc_phan}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField
                      fullWidth
                      margin="normal"
                      id="Ten_lop_hoc_phan"
                      name="Ten_lop_hoc_phan"
                      label="Tên lớp học phần"
                      value={values?.Ten_lop_hoc_phan}
                      onChange={handleChange}
                      error={touched.Ten_lop_hoc_phan && Boolean(errors.Ten_lop_hoc_phan)}
                      helperText={touched.Ten_lop_hoc_phan && errors.Ten_lop_hoc_phan}
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

export default EditSubject;
