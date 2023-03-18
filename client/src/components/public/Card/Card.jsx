import React from "react";
import "./Card.scss";

const Card = () => {
  return (
    <div className="card_custom">
      <div className="card__container">
          <div className="card__item">
            <img src="./img/hinh.jpg" alt="image" />
            <div className="card__price">
              <span className="card__tag"> UI/UX Design </span>
              <span className="card__p"> $180 </span>
            </div>
            <h4 className="card__tit"> Java programming A-Z fully classNamees with full task </h4>
            <div className="card__lesson">
              <span className="card__less">
                <i className="pe-7s-note2">icon</i> 24 lessons
              </span>
              <span className="card__stu">
                <i className="pe-7s-add-user">icon</i> 259 Students
              </span>
            </div>
            <div className="card__rating">
              <span className="card__rat">
                4.7
                <i className="fa fa-star">1</i>
                <i className="fa fa-star">1</i>
                <i className="fa fa-star">1</i>
                <i className="fa fa-star">1</i>
                <i className="fa fa-star">1</i>
                (4,5609)
              </span>
              <a href="single-course.html">
                <i className="arrow_right">II</i>
              </a>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Card;
