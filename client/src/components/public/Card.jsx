import React from "react";
import { Link } from "react-router-dom";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

import images from "../../assets/images";
import Star from "./Star/Star.jsx";

const Card = ({ item }) => {
  let Tong_sao = 0;
  item?.Danh_gia?.forEach((item) => {
    Tong_sao += +item?.So_sao;
  });

  let So_sao = Tong_sao / item?.Danh_gia?.length;
  So_sao = So_sao.toFixed(1);

  return (
    <>
      <div className="rbt-card variation-01 rbt-hover-02 card-list-2">
        <div className="rbt-card-img">
          <Link to={`/document/${item.id}`}>
            <img src={item?.Url ? images.pdf : item?.Hinhs[0]?.Url} alt="Card image" />
          </Link>
        </div>
        <div className="rbt-card-body">
          <div className="rbt-category">
            <Link to={"/"}>{item?.Nganh_hoc?.Ma_nganh_hoc + " - " + item?.Nganh_hoc?.Ten_nganh_hoc}</Link>
          </div>
          <h4 className="rbt-card-title">
            <Link to={`/document/${item.id}`}>{item?.Ten_tai_lieu}</Link>
          </h4>
          <span className="lesson-number">
            <Star
              stars={So_sao}
              isReviews
              reviews={item?.Danh_gia?.length > 0 ? `${item?.Danh_gia?.length} đánh giá` : "0 đánh giá"}
            />
          </span>
          <p className="rbt-card-text mt_d">{item?.Mo_ta_tai_lieu}</p>
          <div className="rbt-card-bottom">
            <Link to={`/document/${item.id}`} className="transparent-button">
              Tìm hiểu thêm
              <DoubleArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
