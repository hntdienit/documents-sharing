import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

import HomeIcon from "@mui/icons-material/Home";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ListIcon from "@mui/icons-material/List";
import SearchIcon from "@mui/icons-material/Search";

import "./HeaderPage.scss";

const HeaderPage = ({ add = false, edit = false, list = false, title, to, setKeyword }) => {
  let action = "";
  let icon = "";

  if (add) {
    action = `Thêm ${title}`;
    icon = <AddCircleOutlineIcon />;
  }
  if (edit) {
    action = `Sửa ${title}`;
    icon = <HomeIcon />;
  }
  if (list) {
    action = `Danh sách ${title}`;
    icon = <ListIcon />;
  }

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
      <div className="admin__hp">
        <Grid container spacing={2} className="ahp__wrap">
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <span className="ahp__title">{icon}</span>
            <span className="ahp__title">{action}</span>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className="ahp__tolist">
              <Link to={to}>
                <Button variant="contained" startIcon={<AddCircleOutlineIcon />}>
                  Danh sách {title}
                </Button>
              </Link>
            </div>
          </Grid>
          {list !== false ? (
            <>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <form onSubmit={formik.handleSubmit} autoComplete="off">
                  <div>
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
                      placeholder="Tìm ...."
                      value={formik.values.keyword}
                      onChange={formik.handleChange}
                    />
                  </div>
                </form>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                sap xep gi do...
              </Grid>
            </>
          ) : (
            <></>
          )}
        </Grid>
      </div>
    </>
  );
};

export default HeaderPage;
