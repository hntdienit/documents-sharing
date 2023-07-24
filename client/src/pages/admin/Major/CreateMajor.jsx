import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { Box, Grid, Card, CardContent, TextField, Button, Typography } from "@mui/material";

import HeaderPage from "../../../components/admin/HeaderPage/HeaderPage.jsx";
import newRequest from "../../../utils/newRequest.js";
import icons from "../../../assets/icons/index.js";

const CreateMajor = () => {
  let navigate = useNavigate();

  const postForm = async (data) => {
    await newRequest.post("/major", data).then((response) => {
      if (response.data.error) {
        toast.error(response.data.error, {});
      } else {
        toast.success("Thêm ngành học mới thành công", {});
        navigate("/admin/major/list");
      }
    });
  };

  const formik = useFormik({
    initialValues: {
      Ma_nganh_hoc: "",
      Ten_nganh_hoc: "",
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      postForm(values);
    },
  });
  return (
    <>
      <Card elevation={4}>
        <HeaderPage add title={"ngành học"} to={"/admin/major/list"}></HeaderPage>
        <CardContent>
          <Box component={"form"} sx={{ flexGrow: 1 }} onSubmit={formik.handleSubmit} autoComplete="off">
            <Grid container justifyContent="center" alignItems="center" spacing={2} paddingX={2}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  id="Ma_nganh_hoc"
                  name="Ma_nganh_hoc"
                  label="Mã ngành học"
                  value={formik.values.Ma_nganh_hoc}
                  onChange={formik.handleChange}
                  error={formik.touched.Ma_nganh_hoc && Boolean(formik.errors.Ma_nganh_hoc)}
                  helperText={formik.touched.Ma_nganh_hoc && formik.errors.Ma_nganh_hoc}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  id="Ten_nganh_hoc"
                  name="Ten_nganh_hoc"
                  label="Tên ngành học"
                  value={formik.values.Ten_nganh_hoc}
                  onChange={formik.handleChange}
                  error={formik.touched.Ten_nganh_hoc && Boolean(formik.errors.Ten_nganh_hoc)}
                  helperText={formik.touched.Ten_nganh_hoc && formik.errors.Ten_nganh_hoc}
                />
              </Grid>
            </Grid>
            <Typography component="div" marginTop={2} paddingLeft={2}>
              <Button variant="contained" type="submit" endIcon={<icons.SaveIcon />}>
                Lưu
              </Button>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default CreateMajor;
