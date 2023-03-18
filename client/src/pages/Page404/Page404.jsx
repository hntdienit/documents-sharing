import React from "react";
import "./Page404.scss";

const Page404 = () => {
  return (
    <div className="page404">
      <section className="notfound-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="notfound_wrap">
              <div className="col-sm-12">
              <div>
                <h3>404 Page</h3>
                <h4>
                  <a href="index.html"> Home </a> <span> &vert; </span> Not Found{" "}
                </h4>
              </div>
            </div>
                <h2> Oops... Page Not Found!</h2>
                <p> Sorry the page could not be found here</p>
                <a href="index.html" className="more-link">
                  {" "}
                  Back to home
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page404;
