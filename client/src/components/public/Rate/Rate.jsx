import React, { useMemo, useState } from "react";
import StarIcon from '@mui/icons-material/Star';

import "./Rate.scss";

const Rate = ({ count, rating, onRating }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const getColor = (index) => {
    if (hoverRating >= index) {
      return "rate__star__filled";
    } else if (!hoverRating && rating >= index) {
      return "rate__star__filled";
    }
    return "rate__star__unfilled";
  };

  const starRating = useMemo(() => {
    return Array(5)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => (
        <StarIcon
          key={idx}
          className={getColor(idx)}
          onClick={() => onRating(idx)}
          onMouseEnter={() => setHoverRating(idx)}
          onMouseLeave={() => setHoverRating(0)}
        />
      ));
  }, [count, rating, hoverRating]);

  return <div className="rate_custom">{starRating}</div>;
};

export default Rate;
