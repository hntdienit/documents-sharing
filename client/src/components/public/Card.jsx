import React from "react";
import { Link } from "react-router-dom";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

import images from "../../assets/images";
import Star from "./Star/Star.jsx";
import newRequest from "../../utils/newRequest.js";
import LoadingCompoment from "./LoadingCompoment.jsx";
import ErrorCompoment from "./ErrorCompoment.jsx";

const Card = ({ item }) => {
  let Tong_sao = 0;
  item?.Danh_gia?.forEach((item) => {
    Tong_sao += +item?.So_sao;
  });

  let So_sao = Tong_sao / item?.Danh_gia?.length;
  So_sao = So_sao.toFixed(1);

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["wishlist_cat"],
    queryFn: () =>
      newRequest.get("/wishlist/all").then((res) => {
        return res.data;
      }),
  });

  const handleChangWishlist = async () => {
    await newRequest.patch(`/wishlist/change`, { Tai_lieu_id: item?.id }).then((res) => {
      if (res.data.error) {
        toast.error(`${res.data.error}`, {});
      } else {
        // toast.s(`${res.data.error}`, {});
        refetch();
      }
    });
  };

  if (isLoading) return <LoadingCompoment />;
  if (error) return <ErrorCompoment />;

  var l;

  return (
    <>
      <div className="rbt-card variation-01 rbt-hover-02 card-list-2">
        <div className="rbt-card-img">
          <Link to={`/document/${item.id}`}>
            <img src={item?.Url ? images.pdf : item?.Hinhs[0]?.Url} alt="Card image"  className="img-full"/>
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
            {data?.map((d) => {
              if (d?.Tai_lieu_id === item.id) {
                l = true;
              }
            })}
            {l ? (
              <button onClick={handleChangWishlist} className="rbt-cart-sidenav-activation rbt-round-btn icon_like">
                <FavoriteIcon />
              </button>
            ) : (
              <button onClick={handleChangWishlist} className="rbt-cart-sidenav-activation rbt-round-btn">
                <FavoriteIcon />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;