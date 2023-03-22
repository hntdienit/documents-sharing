import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import "./Review.scss";
import images from "../../../assets/images";
import Star from "../../public/Star/Star.jsx";
import newRequest from "../../../utils/newRequest.js";
import Loading from "../../public/Loading/Loading.jsx";
import Error from "../../public/Error/Error.jsx";

const item = {
  username: "thanh dien",
  img: images.instructor4,
  thoi_gian: "3 thang",
  isreview: true,
  noidung:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod at tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren veccens.",
};
const user123 = {
  id: 1,
};

const Review = ({ review, setReview, setRating, setOpenReview }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [`Review_${review.Nguoi_dung_id}`],
    queryFn: () =>
      newRequest.get(`/user/${review.Nguoi_dung_id}`).then((res) => {
        return res.data;
      }),
  });

  const handleUserReview = () => {
    setOpenReview(true);
    setRating(review.So_sao);
    setReview(review.Noi_dung_danh_gia);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error err={error?.response?.data} />
      ) : (
        <div className="review__item">
          <div className="review__wrap">
            <img src={item.img} alt="" />
            <div className="review__username">
              <div className="review__name">{data.Ho_ten}</div>
              <div className="review__time">-- {item.thoi_gian} --</div>
              <div className="review__star">
                <Star stars={review.So_sao} />
              </div>
            </div>
            {user123.id === data.id && (
              <div className="review__rating__edit">
                <button type="button" onClick={handleUserReview}>
                  Sửa đánh giá
                </button>
              </div>
            )}
          </div>
          <p>{review.Noi_dung_danh_gia}</p>
        </div>
      )}
    </>
  );
};

export default Review;
