import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import HeaderPage from "../../../components/admin/HeaderPage/HeaderPage.jsx";
import Pagination from "../../../components/public/Pagination.jsx";
import newRequest from "../../../utils/newRequest.js";

const ListReport = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    newRequest.get(`/report?keyword=${keyword}&page=${page}&limit=${limit}`).then((res) => {
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
  };

  return (
    <>
      <Card elevation={4}>
        <HeaderPage list notnew title={"báo cáo vi phạm"} to={"/admin/major/create"} setKeyword={setKeyword} />
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
                        Nội dung báo cáo
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography component={"div"} fontWeight="bold">
                        Tên tài liệu
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography component={"div"} fontWeight="bold">
                        Người báo cáo
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
                      <TableCell align="center">{item?.Noi_dung_bao_cao}</TableCell>
                      <TableCell align="center">{item?.Tai_lieu?.Ten_tai_lieu}</TableCell>
                      <TableCell align="center">{item?.Nguoi_dung?.Ho_ten}</TableCell>
                      <TableCell align="center">
                        {item?.Tai_lieu?.Gia < 0 ? (
                          "Đã xử lý"
                        ) : (
                          <>
                            <Link to={`/admin/report/view/${item.id}`}>
                              <Button color="warning">
                                <EditIcon />
                              </Button>
                            </Link>
                          </>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Typography>
        <Grid container spacing={2} paddingX={3} paddingY={3}>
          <Pagination limit={limit} setLimit={setLimit} setPage={setPage} changePage={changePage} pages={pages} />
        </Grid>
      </Card>
    </>
  );
};

export default ListReport;
