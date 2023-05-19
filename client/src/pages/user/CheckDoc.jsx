import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import EditIcon from "@mui/icons-material/Edit";

import images from "../../assets/images";
import HeaderPage from "../../components/user/HeaderPage/HeaderPage.jsx";
import newRequest from "../../utils/newRequest.js";
import LoadingCompoment from "../../components/public/LoadingCompoment.jsx";
import ErrorCompoment from "../../components/public/ErrorCompoment.jsx";

const CheckDoc = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [deleteload, setDeleteload] = useState(0);

  useEffect(() => {
    newRequest.get(`/document/gv?keyword=${keyword}&page=${page}&limit=${limit}`).then((res) => {
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

  return (
    <>
      <HeaderPage page={"Kiểm duyệt tài liệu"} linkpage={"Kiểm duyệt tài liệu"} />
      <div className="wishlist mt-5 pb-7">
        <div className="wishlist_area bg-color-white rbt-section-gap">
          <div className="container">
            <div className="row">
              {list.length === 0 ? (
                <div className="col-12 h-50vh mt-5">
                  <div className="fs-1 mt-2 text-center">Không có tài liệu nào cần duyệt!</div>
                </div>
              ) : (
                <div className="col-12">
                  <form>
                    <div className="cart-table table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="pro-thumbnail">STT</th>
                            <th className="pro-title">Tên tài liệu</th>
                            <th className="pro-title">Mô tả tài liệu</th>
                            <th className="pro-remove">Kiểm duyệt</th>
                          </tr>
                        </thead>
                        <tbody>
                          {list.map((d, index) => (
                            <tr key={d?.id}>
                              <td className="pro-thumbnail">
                                <span>{(page + 1) * limit - limit + index + 1}</span>
                              </td>
                              <td className="pro-title">
                                <span>{d?.Ten_tai_lieu}</span>
                              </td>
                              <td className="pro-title">
                                <span>{d?.Mo_ta_tai_lieu}</span>
                              </td>

                              <td className="pro-remove">
                                <Link to={`/gv/document/viewpdf/${d?.id}`}>
                                  <EditIcon />
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckDoc;
