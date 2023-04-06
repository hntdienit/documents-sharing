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
import newRequest from "../../../utils/newRequest.js";
import icons from "../../../assets/icons/index.js";
import Loading from "../../../components/public/Loading/Loading.jsx";
import Error from "../../../components/public/Error/Error.jsx";

const ListDocument = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");
  // const [deleteload, setDeleteload] = useState(0);

  const { search } = useLocation();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["ListDocument"],
    queryFn: () =>
      newRequest.get(`/document?keyword=${keyword}&page=${page}&limit=${limit}`).then((res) => {
        console.log("data...", res.data);
        return res.data;
        // setList(response.data.result);
        // setPage(response.data.page);
        // setPages(response.data.totalPage);
        // setRows(response.data.totalRows);
      }),
  });

  const changePage = ({ selected }) => {
    setPage(selected);
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
          <HeaderPage add title={"CreateDocument"} to={"/admin/listproduct"}>
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
                <Table sx={{ minWidth: 650 }}>
                  <TableHead>
                    <TableRow style={{ backgroundColor: "#e2e3e5" }}>
                      <TableCell align="center">
                        <Typography component={"div"} fontWeight="bold">
                          #
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography component={"div"} fontWeight="bold">
                          Name
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography component={"div"} fontWeight="bold">
                          Action
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.result?.map((item, index) => (
                      <TableRow key={item.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                        <TableCell component="th" scope="row" align="center">
                          {(page + 1) * limit - limit + index + 1}
                        </TableCell>
                        <TableCell align="center">{item.name}</TableCell>
                        <TableCell align="center">
                          <Link to={`/admin/editcategory/${item.id}`}>
                            <Button color="warning">
                              <EditIcon />
                            </Button>
                          </Link>
                          |
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
          </Typography>
          <Grid container spacing={2} paddingX={3} paddingY={3}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="select-label">Pages</InputLabel>
                <Select
                  labelId="select-label"
                  value={limit}
                  label="Pages"
                  size="small"
                  onChange={(e) => {
                    setLimit(e.target.value);
                    setPage(0);
                  }}
                >
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={15}>15</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Typography component={"div"}>
                <ReactPaginate
                  nextLabel=">"
                  onPageChange={changePage}
                  pageRangeDisplayed={1}
                  marginPagesDisplayed={1}
                  pageCount={pages}
                  previousLabel="<"
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousClassName="page-item"
                  previousLinkClassName="page-link"
                  nextClassName="page-item"
                  nextLinkClassName="page-link"
                  breakLabel="..."
                  breakClassName="page-item"
                  breakLinkClassName="page-link"
                  containerClassName="pagination"
                  activeClassName="active"
                  renderOnZeroPageCount={null}
                />
              </Typography>
            </Grid>
          </Grid>
        </Card>
      )}
    </>
  );
};

export default ListDocument;
