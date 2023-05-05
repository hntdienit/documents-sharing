import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as yup from "yup";
import { Box, Grid, Card, CardContent, TextField, Button, Typography, MenuItem } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import HeaderPage from "../../../components/admin/HeaderPage/HeaderPage.jsx";
import newRequest from "../../../utils/newRequest.js";
import icons from "../../../assets/icons/index.js";

const CreateLecturers = () => {
  let navigate = useNavigate();

  const postForm = async (data) => {
    await newRequest
      .post("/admin/lecturers", data)
      .then((response) => {
        if (response.data.error) {
          toast.error(response.data.error, {});
        } else {
          toast.success("Thêm giảng viên mới thành công", {});
          navigate("/admin/lecturers/list");
        }
      });
  };

  const formik = useFormik({
    initialValues: {
      Email: "",
      Mat_khau: "",
      Ho_ten: "",
      Dia_chi: "",
      CCCD: "",
      Gioi_tinh: "",
      So_dien_thoai: "",
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      postForm(values);
    },
  });
  return (
    <>
      <Card elevation={4}>
        <HeaderPage add title={"giảng viên"} to={"/admin/lecturers/list"}></HeaderPage>
        <CardContent>
          <Box
            component={"form"}
            sx={{ flexGrow: 1 }}
            onSubmit={formik.handleSubmit}
            autoComplete="off"
          >
            <Grid container justifyContent="center" alignItems="center" spacing={2} paddingX={2}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  id="Email"
                  name="Email"
                  label="Email"
                  value={formik.values.Email}
                  onChange={formik.handleChange}
                  error={formik.touched.Email && Boolean(formik.errors.Email)}
                  helperText={formik.touched.Email && formik.errors.Email}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  id="Mat_khau"
                  name="Mat_khau"
                  label="Mật khẩu"
                  value={formik.values.Mat_khau}
                  onChange={formik.handleChange}
                  error={formik.touched.Mat_khau && Boolean(formik.errors.Mat_khau)}
                  helperText={formik.touched.Mat_khau && formik.errors.Mat_khau}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  id="Ho_ten"
                  name="Ho_ten"
                  label="Họ tên"
                  value={formik.values.Ho_ten}
                  onChange={formik.handleChange}
                  error={formik.touched.Ho_ten && Boolean(formik.errors.Ho_ten)}
                  helperText={formik.touched.Ho_ten && formik.errors.Ho_ten}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  id="Dia_chi"
                  name="Dia_chi"
                  label="Địa chỉ"
                  value={formik.values.Dia_chi}
                  onChange={formik.handleChange}
                  error={formik.touched.Dia_chi && Boolean(formik.errors.Dia_chi)}
                  helperText={formik.touched.Dia_chi && formik.errors.Dia_chi}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  id="CCCD"
                  name="CCCD"
                  label="CCCD"
                  value={formik.values.CCCD}
                  onChange={formik.handleChange}
                  error={formik.touched.CCCD && Boolean(formik.errors.CCCD)}
                  helperText={formik.touched.CCCD && formik.errors.CCCD}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  id="Gioi_tinh"
                  name="Gioi_tinh"
                  label="Giới tinh"
                  value={formik.values.Gioi_tinh}
                  onChange={formik.handleChange}
                  error={formik.touched.Gioi_tinh && Boolean(formik.errors.Gioi_tinh)}
                  helperText={formik.touched.Gioi_tinh && formik.errors.Gioi_tinh}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  id="So_dien_thoai"
                  name="So_dien_thoai"
                  label="Số điện thoại"
                  value={formik.values.So_dien_thoai}
                  onChange={formik.handleChange}
                  error={formik.touched.So_dien_thoai && Boolean(formik.errors.So_dien_thoai)}
                  helperText={formik.touched.So_dien_thoai && formik.errors.So_dien_thoai}
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

export default CreateLecturers;
