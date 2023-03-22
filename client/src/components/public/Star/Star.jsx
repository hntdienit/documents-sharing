import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import "./Star.scss";

const Star = ({ stars, reviews, isStar = false, isReviews = false }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index} className={"star__item"}>
        {stars >= index + 1 ? <StarIcon /> : stars >= number ? <StarHalfIcon /> : <StarBorderIcon />}
      </span>
    );
  });

  return (
    <div className="star__custom">
      {isStar && <div className="star__total">{stars}</div>}
      <div className="star__wrap">{ratingStar}</div>
      {isReviews && <div className="star__reviews">({reviews})</div>}
    </div>
  );
};

export default Star;
