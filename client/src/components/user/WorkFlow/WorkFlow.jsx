import React from "react";
import "./WorkFlow.scss";

const WorkFlow = () => {
  return (
    <div className="workflow">
      <section className="workflow__container">
        {/* <div className="container"> */}
        <div className="base-header text-center">
          <h3> Our Work Flow</h3>
        </div>
        <div className="flow">
          <div className="item">
            <div className="workflow_item">
              <i className="pe-7s-search">12</i>
              <h4> Find Your Course </h4>
              <p>
                Lorem ipsum dolor sit amet can be sed diam nonumy eirmod keeps an the satriction of whole life that
                enter.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="workflow_item">
              <i className="pe-7s-date">12</i>
              <h4>Book Your Seat </h4>
              <p>
                Lorem ipsum dolor sit amet can be sed diam nonumy eirmod keeps an the satriction of whole life that
                enter.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="workflow_item">
              <i className="pe-7s-medal">12</i>
              <h4> Instant Certified </h4>
              <p>
                Lorem ipsum dolor sit amet can be sed diam nonumy eirmod keeps an the satriction of whole life that
                enter.
              </p>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </div>
  );
};

export default WorkFlow;
