import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useFormik } from "formik";
import * as yup from "yup";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useQuery } from "@tanstack/react-query";

import HeaderPage from "../../../components/admin/HeaderPage/HeaderPage.jsx";
import TableComponent from "../../../components/public/TableComponent/TableComponent.jsx";
import Pagination from "../../../components/public/Pagination/Pagination.jsx";
import newRequest from "../../../utils/newRequest.js";
import icons from "../../../assets/icons/index.js";
import Loading from "../../../components/public/Loading/Loading.jsx";
import Error from "../../../components/public/Error/Error.jsx";

const ListDocument = () => {
  const title = [
    {
      name: "Tên tài liệu",
    },
    {
      name: "Tên tài liệu",
    },
  ];
  const tableData = [
    {
      name: "Ten_tai_lieu",
    },
    {
      name: "Ten_tai_lieu1",
    },
  ];

  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [currentData, setCurrentData] = useState({});
  const [keyword, setKeyword] = useState("");
  // const [deleteload, setDeleteload] = useState(0);

  const { search } = useLocation();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["ListDocument"],
    queryFn: () =>
      newRequest.get(`/document?keyword=${keyword}&page=${page}&limit=${limit}`).then((res) => {
        // setCurrentData(res.data);
        // setList(res.data.result);
        // setPage(res.data.page);
        // setPages(res.data.totalPage);
        // setRows(res.data.totalRows);
        return res.data;
      }),
  });

  useEffect(() => {
    newRequest.get(`/document?keyword=${keyword}&page=${page}&limit=${limit}`).then((res) => {
      if (res.data.error) {
        alert(res.data.error);
      } else {
        setList(res.data.result);
        setPage(res.data.page);
        setPages(res.data.totalPage);
        setRows(res.data.totalRows);
      }
    });
  }, [page, limit, keyword]);

  const changePage = ({ selected }) => {
    setPage(selected);
    // refetch();
  };

  const validationSchema = yup.object({});
  const formik = useFormik({
    initialValues: {
      keyword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setKeyword(values.keyword);
    },
  });

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error err={error?.response?.data} />
      ) : (
        <Card elevation={4}>
          <HeaderPage list title={"CreateDocument"} to={"/admin/listproduct"}>
            <Box component={"form"} sx={{ flexGrow: 1 }} onSubmit={formik.handleSubmit} autoComplete="off">
              <Typography component={"div"}>
                <TextField
                  size="small"
                  id="keyword"
                  name="keyword"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Button type="submit">
                          <SearchIcon />
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  placeholder="Search item......."
                  value={formik.values.keyword}
                  onChange={formik.handleChange}
                />
              </Typography>
            </Box>
          </HeaderPage>
          <Typography component={"div"} marginTop={2} marginX={3}>
            <Card elevation={3}>
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
                          Tên tài liệu
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography component={"div"} fontWeight="bold">
                          Tên tài liệu
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography component={"div"} fontWeight="bold">
                          Tên tài liệu
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography component={"div"} fontWeight="bold">
                          Chức năng
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {list.map((item, index) => (
                      <TableRow key={item.id}>
                        <TableCell component="th" scope="row" align="center">
                          {(page + 1) * limit - limit + index + 1}
                        </TableCell>
                        <TableCell align="center">{item?.Ten_tai_lieu}</TableCell>
                        <TableCell align="center">{item?.Ten_tai_lieu}</TableCell>
                        <TableCell align="center">{item?.Ten_tai_lieu}</TableCell>
                        <TableCell align="center">
                          {/* <Link to={`/admin/editcategory/${item.id}`}> */}
                          <Button color="warning">
                            <EditIcon />
                          </Button>
                          {/* </Link> */}|
                          <Button
                            color="error"
                            // onClick={() => {
                            //   // deleteCaTegory(item.id);
                            // }}
                          >
                            <DeleteForeverIcon />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
            {/* <Card elevation={3}>
              <TableComponent title={title} data={tableData} linkedit={"/admin/editcategory/"} list={list} limit={limit} page={page} />
            </Card> */}
          </Typography>
          <Grid container spacing={2} paddingX={3} paddingY={3}>
            <Pagination limit={limit} setLimit={setLimit} setPage={setPage} changePage={changePage} pages={pages} />
          </Grid>
        </Card>
      )}
    </>
  );
};

export default ListDocument;
