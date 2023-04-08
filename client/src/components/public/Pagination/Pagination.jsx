import React from "react";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import ReactPaginate from "react-paginate";

import "./Pagination.scss";

const Pagination = ({ limit, setLimit, setPage, changePage, pages }) => {
  return (
    <>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="select-label">Trang</InputLabel>
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
      <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
        <Typography component={"div"}>
          <ReactPaginate
            nextLabel=">"
            previousLabel="<"
            pageRangeDisplayed={1}
            marginPagesDisplayed={1}
            onPageChange={changePage}
            pageCount={pages}
            containerClassName="page__container"
            pageClassName="page__item"
            pageLinkClassName="page__link"
            previousClassName="page__item"
            previousLinkClassName="page__link"
            nextClassName="page__item"
            nextLinkClassName="page__link"
            breakLabel="..."
            breakClassName="page__item"
            breakLinkClassName="page__link"
            activeLinkClassName="active"
            renderOnZeroPageCount={null}
          />
        </Typography>
      </Grid>
    </>
  );
};

export default Pagination;
