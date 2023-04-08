import React from "react";
import { Link } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import "./TableComponent.scss";

const TableComponent = ({ title, data, linkedit, list, limit, page }) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 550 }}>
          <TableHead>
            <TableRow style={{ backgroundColor: "#e2e3e5" }}>
              <TableCell align="center">
                <Typography component={"div"} fontWeight="bold">
                  STT
                </Typography>
              </TableCell>
              {title.map((item, index) => (
                <TableCell align="center" key={index}>
                  <Typography component={"div"} fontWeight="bold">
                    {item.name}
                  </Typography>
                </TableCell>
              ))}
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

                {data.map((d12, i) => (
                  <TableCell key={i} align="center">
                    {
                    // item?.d12?.name
                    `${item}.${d12?.name}`
                    
                    }
{console.log(`${item}.${d12?.name}`)}
                    
                  </TableCell>
                ))}

                <TableCell align="center">
                  <Link to={`${linkedit}${item.id}`}>
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
    </>
  );
};

export default TableComponent;
