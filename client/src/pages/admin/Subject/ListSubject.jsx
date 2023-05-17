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

const ListSubject = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [deleteload, setDeleteload] = useState(0);

  useEffect(() => {
    newRequest.get(`/subject?keyword=${keyword}&page=${page}&limit=${limit}`).then((res) => {
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

  const deleteItem = (id) => {
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
        newRequest.delete(`/subject/${id}`).then((res) => {
          setList(
            list.filter((val) => {
              return val.id !== id;
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
        <HeaderPage list title={"lớp học phần"} to={"/admin/subject/create"} setKeyword={setKeyword} />
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
                        Mã lớp học phần
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography component={"div"} fontWeight="bold">
                        Tên lớp học phần
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
                      <TableCell align="center">{item?.Ma_lop_hoc_phan}</TableCell>
                      <TableCell align="center">{item?.Ten_lop_hoc_phan}</TableCell>
                      <TableCell align="center">
                        <Link to={`/admin/subject/edit/${item.id}`}>
                          <Button color="warning">
                            <EditIcon />
                          </Button>
                        </Link>
                        |
                        <Button
                          color="error"
                          onClick={() => {
                            deleteItem(item.id);
                          }}
                        >
                          <DeleteForeverIcon />
                        </Button>
                        {/* |
                        <Button
                          color="primary"
                          onClick={() => {
                            deleteItem(item.id);
                          }}
                        >
                          nds
                        </Button> */}
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

export default ListSubject;
