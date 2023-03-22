import React, { useState } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

import "./Review.scss";
import images from "../../../assets/images";

const item = {
  username: "thanh dien",
  img: images.instructor4,
  thoi_gian: "3 thang",
  isreview: true,
  noidung:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod at tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren veccens.",
};

const Review = () => {
  const [openReview, setOpenReview] = useState(true);

  const handleOpenReview = () => {
    setOpenReview(!openReview);
  };

  return (
    <div className="review">
      <div className="review__title">Đánh giá</div>
      {(!item.isreview || openReview) && (
        <div className="review__form">
          <form>
            <div>
              <div className="review__form__star">
                <p>đánh giá của bạn:</p>
                <ul>
                  <li>
                    <span>
                      <StarIcon />
                    </span>
                  </li>
                  <li>
                    <span>
                      <StarIcon />
                    </span>
                  </li>
                  <li>
                    <span>
                      <StarBorderIcon />
                    </span>
                  </li>
                  <li>
                    <span>
                      <StarBorderIcon />
                    </span>
                  </li>
                  <li>
                    <span>
                      <StarBorderIcon />
                    </span>
                  </li>
                </ul>
              </div>
              <textarea
                className="review__field"
                name="message"
                id="rmessage"
                placeholder="Nội dung đánh giá của bạn"
              ></textarea>
              <div>
                <button type="submit" className="review__submit">
                  Lưu
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      <div className="review__item">
        <div className="review__wrap">
          <img src={item.img} alt="" />
          <div className="review__username">
            <div className="review__name">{item.username}</div>
            <div className="review__time">-- {item.thoi_gian} --</div>
            <div className="review__star">
              <i>
                <StarIcon />
              </i>
              <i>
                <StarIcon />
              </i>
              <i>
                <StarBorderIcon />
              </i>
              <i>
                <StarBorderIcon />
              </i>
              <i>
                <StarBorderIcon />
              </i>
            </div>
          </div>
          {item.isreview && (
            <div className="review__rating__edit">
              <button type="button" onClick={handleOpenReview}>
                Sửa đánh giá
              </button>
            </div>
          )}
        </div>
        <p>{item.noidung}</p>
      </div>
    </div>
  );
};

export default Review;
