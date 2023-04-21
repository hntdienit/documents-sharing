import React from "react";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import ReactPaginate from "react-paginate";

const Pagination = ({ limit, setLimit, setPage, changePage, pages, even = false }) => {
  return (
    <>
      <Grid container spacing={2} paddingX={3} paddingY={3}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="select-label">Trang</InputLabel>
            {even ? (
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
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
              </Select>
            ) : (
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
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <Typography component={"div"}>
            <ReactPaginate
              nextLabel=">"
              previousLabel="<"
              pageRangeDisplayed={1}
              marginPagesDisplayed={1}
              onPageChange={changePage}
              pageCount={pages}
              containerClassName="pagination"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              activeLinkClassName="active"
              renderOnZeroPageCount={null}
            />
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Pagination;
