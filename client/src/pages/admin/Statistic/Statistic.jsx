import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { useFormik } from "formik";
import { Formik } from "formik";
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
import Select from "@mui/material/Select";

import { useQuery } from "@tanstack/react-query";

import HeaderPage from "../../../components/admin/HeaderPage/HeaderPage.jsx";
import newRequest from "../../../utils/newRequest.js";
import icons from "../../../assets/icons/index.js";
import LoadingCompoment from "../../../components/public/LoadingCompoment.jsx";
import ErrorCompoment from "../../../components/public/ErrorCompoment.jsx";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Statistic = () => {
  let navigate = useNavigate();

  const [list, setList] = useState([]);
  const [count, setCount] = useState([]);
  const [thang, setThang] = useState(5);
  const [nam, setNam] = useState(2023);

  // const major = useQuery({
  //   queryKey: [`major_tk`],
  //   queryFn: () =>
  //     newRequest.get(`/major/all`).then((res) => {
  //       return res.data;
  //     }),
  // });

  useEffect(() => {
    newRequest.get(`/major/docbymajor?thang=${thang}&nam=${nam}`).then((res) => {
      if (res.data.error) {
        // alert(res.data.error);
      } else {
        setList(res.data.listmajor);
        setCount(res.data.count);
      }
    });
  }, [thang, nam]);

  // const docbymajor = useQuery({
  //   queryKey: [`docbymajor`],
  //   queryFn: () =>
  //     newRequest.get(`/major/docbymajor`).then((res) => {
  //       return res.data;
  //     }),
  // });

  let arrLabels = [];
  if (list[0] !== undefined) {
    list.map((i) => {
      arrLabels.push(i?.Ten_nganh_hoc);
    });
  }

  const data = {
    labels: arrLabels,
    datasets: [
      {
        label: "Số lượng",
        data: count,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(73, 158, 213, 0.2)",
          "rgba(29, 61, 199, 0.2)",
          "rgba(29, 124, 18, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(73, 158, 213, 1)",
          "rgba(29, 61, 199, 1)",
          "rgba(29, 124, 18, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

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

  const initialValues = {
    Thang: "",
    Nam: "",
  };

  const thangn = [
    {
      id: 1,
      val: "Tháng 1",
    },
    {
      id: 2,
      val: "Tháng 2",
    },
    {
      id: 3,
      val: "Tháng 3",
    },
    {
      id: 4,
      val: "Tháng 4",
    },
    {
      id: 5,
      val: "Tháng 5",
    },
    {
      id: 6,
      val: "Tháng 6",
    },
    {
      id: 7,
      val: "Tháng 7",
    },
    {
      id: 8,
      val: "Tháng 8",
    },
    {
      id: 9,
      val: "Tháng 9",
    },
    {
      id: 10,
      val: "Tháng 10",
    },
    {
      id: 11,
      val: "Tháng 11",
    },
    {
      id: 12,
      val: "Tháng 12",
    },
    {
      id: 13,
      val: "Cả năm",
    },
  ];

  const namn = [
    {
      id: 2023,
      val: "2023",
    },
  ];

  // if (docbymajor.isLoading) return <LoadingCompoment />;
  // if (docbymajor.error) return <ErrorCompoment />;

  return (
    <>
      <Card elevation={4}>
        {/* <HeaderPage add title={"thống kê"}></HeaderPage> */}
        <div className="fs-3 pt-4 ps-4 fw-500">Thống kê số lượng tài liệu được chia sẻ theo ngành học</div>
        <CardContent>
          <Formik
            initialValues={initialValues}
            // validationSchema={validationData.shareDocument}
            onSubmit={(values) => {
              postForm(values);
            }}
          >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <Grid container justifyContent="center" alignItems="center" spacing={2} paddingX={2} className="">
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <Grid container justifyContent="center" alignItems="center" spacing={2} paddingX={2}>
                      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <TextField
                          fullWidth
                          margin="normal"
                          select
                          label="Tháng"
                          id="Thang"
                          name="Thang"
                          value={thang}
                          onChange={(e) => {
                            setThang(e.target.value);
                            // handleStatistic();
                          }}
                        >
                          {thangn.map((i) => (
                            <MenuItem key={i.id} value={i.id}>
                              {i.val}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <TextField
                          fullWidth
                          margin="normal"
                          select
                          label="Năm"
                          id="Nam"
                          name="Nam"
                          value={nam}
                          onChange={(e) => {
                            setNam(e.target.value);
                            // handleStatistic();
                          }}
                        >
                          {namn.map((i) => (
                            <MenuItem key={i.id} value={i.id}>
                              {i.val}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}></Grid>
                    </Grid>
                    {count.length !== 0 ? <Pie data={data} /> : <p>Tháng {thang} chưa có số liệu!</p>}
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
                                {list.map((item, index) => (
                                  <TableRow key={item.id}>
                                    <TableCell component="th" scope="row" align="center">
                                      {index + 1}
                                    </TableCell>
                                    <TableCell align="center">{item?.Ten_nganh_hoc}</TableCell>
                                    <TableCell align="center">{count.length !== 0 ? count[index] : 0}</TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </>
  );
};

export default Statistic;
