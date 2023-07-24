import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { Box, Grid, Card, CardContent, TextField, Button, Typography } from "@mui/material";

import HeaderPage from "../../../components/admin/HeaderPage/HeaderPage.jsx";
import newRequest from "../../../utils/newRequest.js";
import icons from "../../../assets/icons/index.js";

const CreateCourse = () => {
  let navigate = useNavigate();

  const postForm = async (data) => {
    await newRequest.post("/course", data).then((response) => {
      if (response.data.error) {
        toast.error(response.data.error, {});
      } else {
        toast.success("Thêm lớp học mới thành công", {});
        navigate("/admin/course/list");
      }
    });
  };

  const formik = useFormik({
    initialValues: {
      Ma_lop: "",
      Ten_lop_hoc: "",
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      postForm(values);
    },
  });
  return (
    <>
      <Card elevation={4}>
        <HeaderPage add title={"lớp học"} to={"/admin/course/list"}></HeaderPage>
        <CardContent>
          <Box component={"form"} sx={{ flexGrow: 1 }} onSubmit={formik.handleSubmit} autoComplete="off">
            <Grid container justifyContent="center" alignItems="center" spacing={2} paddingX={2}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  id="Ma_lop"
                  name="Ma_lop"
                  label="Mã lớp"
                  value={formik.values.Ma_lop}
                  onChange={formik.handleChange}
                  error={formik.touched.Ma_lop && Boolean(formik.errors.Ma_lop)}
                  helperText={formik.touched.Ma_lop && formik.errors.Ma_lop}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  id="Ten_lop_hoc"
                  name="Ten_lop_hoc"
                  label="Tên lớp học"
                  value={formik.values.Ten_lop_hoc}
                  onChange={formik.handleChange}
                  error={formik.touched.Ten_lop_hoc && Boolean(formik.errors.Ten_lop_hoc)}
                  helperText={formik.touched.Ten_lop_hoc && formik.errors.Ten_lop_hoc}
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

export default CreateCourse;
