import React from "react";

import "./Featured.scss";
import newRequest from "../../../utils/newRequest.js";
import Card from "../../public/Card/Card";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featured__container">
        <div className="featured__base__header">
          <h3> Our Featured Courses </h3>
        </div>
        <div className="featured__card">
          <div className="featured__item">
            <Card />
          </div>
          <div className="featured__item">
            <Card />
          </div>
          <div className="featured__item">
            <Card />
          </div>
        </div>
        <div className="featured__card">
          <div className="featured__item">
            <Card />
          </div>
          <div className="featured__item">
            <Card />
          </div>
          <div className="featured__item">
            <Card />
          </div>
        </div>

        <div className="featured__button">
          <a href="courses.html" className="link">
            View All
          </a>
        </div>
      </div>
    </div>
  );
};

export default Featured;
