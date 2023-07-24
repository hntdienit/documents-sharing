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

const EditUser = () => {
  const { id } = useParams();
  let navigate = useNavigate();

  const { isLoading, error, data, remove } = useQuery({
    queryKey: [`student_${id}`],
    queryFn: () =>
      newRequest.get(`/admin/user/${id}`).then((res) => {
        return res.data;
      }),
  });

  const editForm = async (data) => {
    await newRequest.patch(`/admin/user/${id}`, data).then((res) => {
      if (res.data.error) {
        toast.error(`${res.data.error}`, {});
      } else {
        toast.success("Sửa thông tin sinh viên thành công!", {});
        navigate("/admin/student/list");
        remove();
      }
    });
  };

  if (isLoading) return <LoadingCompoment />;
  if (error) return <ErrorCompoment />;
  return (
    <>
      <Card elevation={4}>
        <HeaderPage edit title={"sinh viên"} to={"/admin/student/list"}></HeaderPage>
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
                      id="Email"
                      name="Email"
                      label="Email"
                      value={values?.Email}
                      onChange={handleChange}
                      error={touched.Email && Boolean(errors.Email)}
                      helperText={touched.Email && errors.Email}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField
                      fullWidth
                      margin="normal"
                      id="Ho_ten"
                      name="Ho_ten"
                      label="Họ tên"
                      value={values?.Ho_ten}
                      onChange={handleChange}
                      error={touched.Ho_ten && Boolean(errors.Ho_ten)}
                      helperText={touched.Ho_ten && errors.Ho_ten}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField
                      fullWidth
                      margin="normal"
                      id="Dia_chi"
                      name="Dia_chi"
                      label="Địa chỉ"
                      value={values?.Dia_chi}
                      onChange={handleChange}
                      error={touched.Dia_chi && Boolean(errors.Dia_chi)}
                      helperText={touched.Dia_chi && errors.Dia_chi}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField
                      fullWidth
                      margin="normal"
                      id="CCCD"
                      name="CCCD"
                      label="CCCD"
                      value={values?.CCCD}
                      onChange={handleChange}
                      error={touched.CCCD && Boolean(errors.CCCD)}
                      helperText={touched.CCCD && errors.CCCD}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField
                      fullWidth
                      margin="normal"
                      id="Gioi_tinh"
                      name="Gioi_tinh"
                      label="Giới tinh"
                      value={values?.Gioi_tinh}
                      onChange={handleChange}
                      error={touched.Gioi_tinh && Boolean(errors.Gioi_tinh)}
                      helperText={touched.Gioi_tinh && errors.Gioi_tinh}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField
                      fullWidth
                      margin="normal"
                      id="So_dien_thoai"
                      name="So_dien_thoai"
                      label="Số điện thoại"
                      value={values?.So_dien_thoai}
                      onChange={handleChange}
                      error={touched.So_dien_thoai && Boolean(errors.So_dien_thoai)}
                      helperText={touched.So_dien_thoai && errors.So_dien_thoai}
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

export default EditUser;
