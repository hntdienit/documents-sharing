import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useQuery } from "@tanstack/react-query";

import HeaderPage from "../../../components/admin/HeaderPage/HeaderPage.jsx";
import newRequest from "../../../utils/newRequest.js";
import icons from "../../../assets/icons/index.js";
import LoadingCompoment from "../../../components/public/LoadingCompoment.jsx";
import ErrorCompoment from "../../../components/public/ErrorCompoment.jsx";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Công nghệ thông tin", "Nông nghiệp", "Kinh tế", "Toán", "Luật"],
  datasets: [
    {
      label: "# of Votes",
      data: [1, 2, 5, 3, 1],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 2,
    },
  ],
};

const Statistic = () => {
  let navigate = useNavigate();

  const sl = [1, 2, 5, 3, 1]

  const major = useQuery({
    queryKey: [`major_tk`],
    queryFn: () =>
      newRequest.get(`/major/all`).then((res) => {
        return res.data;
      }),
  });

  const postForm = async (data) => {
    await newRequest.post("/admin/user", data).then((response) => {
      if (response.data.error) {
        toast.error(response.data.error, {});
      } else {
        toast.success("Thêm người dùng mới thành công", {});
        navigate("/admin/user/list");
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

  if (major.isLoading) return <LoadingCompoment />;
  if (major.error) return <ErrorCompoment />;

  return (
    <>
      <Card elevation={4}>
        {/* <HeaderPage add title={"thống kê"}></HeaderPage> */}
        <div className="fs-3 pt-4 ps-4 fw-500">Thống kê số lượng tài liệu được chia sẻ theo ngành học</div>
        <CardContent>
          <Box component={"form"} sx={{ flexGrow: 1 }} onSubmit={formik.handleSubmit} autoComplete="off">
            <Grid container justifyContent="center" alignItems="center" spacing={2} paddingX={2} className="">
              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <Grid container justifyContent="center" alignItems="center" spacing={2} paddingX={2}>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField
                      fullWidth
                      margin="normal"
                      select
                      label="Quý"
                      id="Nganh_hoc_id"
                      name="Nganh_hoc_id"
                      // value={values.Nganh_hoc_id}
                      // onChange={handleChange}
                      // error={touched.Nganh_hoc_id && Boolean(errors.Nganh_hoc_id)}
                      // helperText={touched.Nganh_hoc_id && errors.Nganh_hoc_id}
                    >
                      {/* {major?.data?.map((m) => (
                                  <MenuItem key={m.id} value={m.id}>
                                    {m?.Ma_nganh_hoc} - {m?.Ten_nganh_hoc}
                                  </MenuItem>
                                ))} */}

                      <MenuItem value={"T"}>Cả năm</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField
                      fullWidth
                      margin="normal"
                      select
                      label="Năm"
                      id="Nganh_hoc_id"
                      name="Nganh_hoc_id"
                      // value={values.Nganh_hoc_id}
                      // onChange={handleChange}
                      // error={touched.Nganh_hoc_id && Boolean(errors.Nganh_hoc_id)}
                      // helperText={touched.Nganh_hoc_id && errors.Nganh_hoc_id}
                    >
                      {/* {major?.data?.map((m) => (
                                  <MenuItem key={m.id} value={m.id}>
                                    {m?.Ma_nganh_hoc} - {m?.Ten_nganh_hoc}
                                  </MenuItem>
                                ))} */}

                      <MenuItem value={"T"}>2023</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    {/* <Link to={`/document/`}>
                <div className="plceholder-button">
                  <button className="rbt-btn btn-gradient rbt-switch-btn rbt-switch-y w-100" type="submit">
                    <span data-text="Về trang chi tiết">Về trang chi tiết</span>
                  </button>
                </div>
              </Link> */}
                  </Grid>
                </Grid>
                <Pie data={data} />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Card elevation={4} className="card_tk">
                  <CardContent>
                    <div className="fs-3">Thông tin thống kê</div>
                    <div>
                      <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 550 }}>
                          <TableHead>
                            <TableRow style={{ backgroundColor: "#e2e3e5" }}>
                              <TableCell align="center">
                                <Typography component={"div"} fontWeight="bold">
                                  STT
                                </Typography>
                              </TableCell>
                              <TableCell align="center">
                                <Typography component={"div"} fontWeight="bold">
                                  Ngành học
                                </Typography>
                              </TableCell>
                              <TableCell align="center">
                                <Typography component={"div"} fontWeight="bold">
                                  Tổng số tài liệu
                                </Typography>
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {major.data.map((item, index) => (
                              <TableRow key={item.id}>
                                <TableCell component="th" scope="row" align="center">
                                  {index + 1}
                                </TableCell>
                                <TableCell align="center">{item?.Ten_nganh_hoc}</TableCell>
                                <TableCell align="center">{sl[index]}</TableCell>
                                {/* <TableCell align="center">{item?.Kieu_tai_lieu}</TableCell> */}
                              </TableRow>
                            ))}
                            {/* <TableRow>
                              <TableCell component="th" scope="row" align="center">
                                1
                              </TableCell>
                              <TableCell align="center">ẻgwrgwrg</TableCell>
                              <TableCell align="center">dsfdsfdsf</TableCell>
                            </TableRow> */}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default Statistic;
