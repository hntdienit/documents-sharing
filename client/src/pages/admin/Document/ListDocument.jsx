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
import VisibilityIcon from "@mui/icons-material/Visibility";

import HeaderPage from "../../../components/admin/HeaderPage/HeaderPage.jsx";
import Pagination from "../../../components/public/Pagination.jsx";
import newRequest from "../../../utils/newRequest.js";

const ListDocument = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [deleteload, setDeleteload] = useState(0);

  useEffect(() => {
    newRequest.get(`/document/admin?keyword=${keyword}&page=${page}&limit=${limit}`).then((res) => {
      if (res.data.error) {
        alert(res.data.error);
      } else {
        setList(res.data.result);
        setPage(res.data.page);
        setPages(res.data.totalPage);
        setRows(res.data.totalRows);
      }
    });
  }, [page, limit, keyword, deleteload]);

  const changePage = ({ selected }) => {
    setPage(selected);
  };

  const deleteItem = (Id) => {
    Swal.fire({
      title: "Bạn có chắc muốn xóa?",
      text: "Bạn sẽ không thể phục hồi!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy",
    }).then((result) => {
      if (result.isConfirmed) {
        newRequest.delete(`/document/${Id}`).then((res) => {
          setList(
            list.filter((val) => {
              return val.id !== Id;
            })
          );
        });
        Swal.fire("Xóa!", "Bạn đã xóa thành công", "success");
        setDeleteload(deleteload + 1);
      }
    });
  };

  return (
    <>
      <Card elevation={4}>
        <HeaderPage list notnew title={"tài liệu"} to={"/admin/document/list"} setKeyword={setKeyword} />
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
                        Mô tả tài liệu
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography component={"div"} fontWeight="bold">
                        Kiểu tài liệu
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography component={"div"} fontWeight="bold">
                        Kiểm duyệt
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
                      <TableCell align="center">
                      {item?.Mo_ta_tai_lieu?.substring(0, 50)}...
                      </TableCell>
                      <TableCell align="center">{item?.Kieu_tai_lieu}</TableCell>
                      <TableCell align="center">
                        {!item?.Kiem_duyet ? (
                          <span>
                            {item?.Url ? (
                              <Link to={`/admin/document/viewpdf/${item.id}`}>
                                <Button color="info">
                                  <EditIcon />
                                </Button>
                              </Link>
                            ) : (
                              <Link to={`/admin/document/view/${item.id}`}>
                                <Button color="info">
                                  <EditIcon />
                                </Button>
                              </Link>
                            )}
                          </span>
                        ): (<span>Đã kiểm duyệt</span>)}
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

export default ListDocument;
