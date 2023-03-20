import React from "react";
import "./Category.scss";

import HeaderPage from ".././../components/user/HeaderPage/HeaderPage.jsx";
import Card from "../../components/public/Card/Card.jsx";
import Pagination from "../../components/public/Pagination/Pagination.jsx";

const Category = () => {
  return (
    <>
      <HeaderPage page={"The loai"} linkpage={"the loai"} />
      <div className="category">
        <div className="category__container">
          <div className="category__col_1">
            <div>
              <h4 className="category__title">Category</h4>
              <ul>
                <li>
                  <div>
                    <input type="checkbox" />
                    <label>All</label>
                  </div>
                </li>
                <li>
                  <div>
                    <input type="checkbox" />
                    <label>Development</label>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="category__title">Price Level</h4>
              <ul>
                <li>
                  <div>
                    <input type="radio" id="priceCheck1" name="priceCheck" />
                    <label>Free</label>
                  </div>
                </li>
                <li>
                  <div>
                    <input type="radio" id="priceCheck2" name="priceCheck" />
                    <label>Paid</label>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="category__title">Instructor </h4>
              <ul>
                <li>
                  <div>
                    <input type="checkbox" />
                    <label>Ben Stcoks</label>
                  </div>
                </li>
                <li>
                  <div>
                    <input type="checkbox" />
                    <label>Adam Crew</label>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="category__col_2">
            <div className="category__search">
              <div className="cat_search">
                <div className="widget widget-search">
                  <div className="input-group">
                    <input className="form-control" placeholder="Search" type="text" />
                    <span className="input-group-btn">
                      <button type="button">
                        <i className="pe-7s-search">12</i>
                      </button>
                    </span>
                  </div>
                </div>
              </div>

              <div className="cat_selectbox">
                <div className="select-box">
                  <select className="form-select" aria-label="select">
                        <option value="0" selected>Most Viewed</option>
                        <option value="1">Java programming</option>
                        <option value="2">Designer</option>
                        <option value="3"> English </option>
                      </select>
                </div>
              </div>

              <div className="cat_item_count">Showing 1-8 of 22 results</div>
            </div>

            <div className="category__col_item">
              <Card />
              <Card />
            </div>
            <div className="category__col_item">
              <Card />
              <Card />
            </div>

            <nav className="cat-page-navigation">

              <Pagination/>
              <ul className="pagination">
                <li className="pagination-arrow">
                  <a href="#">
                    <i className="fal fa-angle-double-left"></i>
                  </a>
                </li>
                <li>
                  <a href="#">1</a>
                </li>
                <li>
                  <a className="active" href="#">
                    2
                  </a>
                </li>
                <li>
                  <a href="#">...</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li className="pagination-arrow">
                  <a href="#">
                    <i className="fal fa-angle-double-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
