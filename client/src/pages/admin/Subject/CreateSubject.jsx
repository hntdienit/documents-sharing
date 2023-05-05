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

const CreateSubject = () => {
  let navigate = useNavigate();

  const postForm = async (data) => {
    await newRequest
      .post("/subject", data)
      .then((response) => {
        if (response.data.error) {
          toast.error(response.data.error, {});
        } else {
          toast.success("Thêm lớp học phần mới thành công", {});
          navigate("/admin/subject/list");
        }
      });
  };

  const formik = useFormik({
    initialValues: {
      Ma_lop_hoc_phan: "",
      Ten_lop_hoc_phan: "",
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      postForm(values);
    },
  });
  return (
    <>
      <Card elevation={4}>
        <HeaderPage add title={"lớp học phần"} to={"/admin/subject/list"}></HeaderPage>
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
                  id="Ma_lop_hoc_phan"
                  name="Ma_lop_hoc_phan"
                  label="Mã lớp học phần"
                  value={formik.values.Ma_lop_hoc_phan}
                  onChange={formik.handleChange}
                  error={formik.touched.Ma_lop_hoc_phan && Boolean(formik.errors.Ma_lop_hoc_phan)}
                  helperText={formik.touched.Ma_lop_hoc_phan && formik.errors.Ma_lop_hoc_phan}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  id="Ten_lop_hoc_phan"
                  name="Ten_lop_hoc_phan"
                  label="Tên lớp học phần"
                  value={formik.values.Ten_lop_hoc_phan}
                  onChange={formik.handleChange}
                  error={formik.touched.Ten_lop_hoc_phan && Boolean(formik.errors.Ten_lop_hoc_phan)}
                  helperText={formik.touched.Ten_lop_hoc_phan && formik.errors.Ten_lop_hoc_phan}
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

export default CreateSubject;
