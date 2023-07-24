import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as yup from "yup";
import { Box, Grid, Card, CardContent, TextField, Button, Typography} from "@mui/material";

import HeaderPage from "../../../components/admin/HeaderPage/HeaderPage.jsx";
import newRequest from "../../../utils/newRequest.js";
import icons from "../../../assets/icons/index.js";

const CreateDocument = () => {
  const [files1, setFiles1] = useState([]);
  let navigate = useNavigate();

  const postForm = async (data) => {
    await newRequest
      .post("/document/share", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.data.error) {
          toast.error(`Add new product failed! - error: ${response.data.error}`, {});
        } else {
          toast.success("Add new product successfully!", {});
        }
      });
  };

  const validationSchema = yup.object({
    Ten_tai_lieu: yup
      .string()
      .min(3, "The product name needs more than 3 characters!")
      .max(15, "The product name needs less than 15 characters!")
      .required("The product name cannot be empty!"),
    Mo_ta_tai_lieu: yup
      .string()
      .min(3, "The product description needs more than 3 characters!")
      .max(30, "The product description needs less than 30 characters!")
      .required("The product description cannot be empty!"),
  });

  const formik = useFormik({
    initialValues: {
      Ten_tai_lieu: "",
      Mo_ta_tai_lieu: "",
      Cong_khai: 1,
      Url: [],
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const formDataToSend = new FormData();
      formDataToSend.append("Ten_tai_lieu", values.Ten_tai_lieu);
      formDataToSend.append("Mo_ta_tai_lieu", values.Mo_ta_tai_lieu);
      for (let i = 0; i < files1.length; i++) {
        formDataToSend.append("datafile", files1[i]);
      }
      postForm(formDataToSend);
    },
  });
  return (
    <>
      <Card elevation={4}>
        <HeaderPage add title={"CreateDocument"} to={"/admin/listproduct"}></HeaderPage>
        <CardContent>
          <Box
            component={"form"}
            sx={{ flexGrow: 1 }}
            onSubmit={formik.handleSubmit}
            autoComplete="off"
            encType="multipart/form-data"
          >
            <Grid container justifyContent="center" alignItems="center" spacing={2} paddingX={2}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  id="Ten_tai_lieu"
                  name="Ten_tai_lieu"
                  label="Ten_tai_lieu"
                  value={formik.values.Ten_tai_lieu}
                  onChange={formik.handleChange}
                  error={formik.touched.Ten_tai_lieu && Boolean(formik.errors.Ten_tai_lieu)}
                  helperText={formik.touched.Ten_tai_lieu && formik.errors.Ten_tai_lieu}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <TextField
                  fullWidth
                  margin="normal"
                  id="Mo_ta_tai_lieu"
                  name="Mo_ta_tai_lieu"
                  label="Mo_ta_tai_lieu"
                  value={formik.values.Mo_ta_tai_lieu}
                  onChange={formik.handleChange}
                  error={formik.touched.Mo_ta_tai_lieu && Boolean(formik.errors.Mo_ta_tai_lieu)}
                  helperText={formik.touched.Mo_ta_tai_lieu && formik.errors.Mo_ta_tai_lieu}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <input
                  type="file"
                  name="datafile"
                  onChange={(e) => {
                    setFiles1(e.target.files);
                  }}
                />
              </Grid>
            </Grid>
            <Typography component="div" marginTop={2} paddingLeft={2}>
              <Button variant="contained" type="submit" endIcon={<icons.SaveIcon />}>
                Save
              </Button>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default CreateDocument;
