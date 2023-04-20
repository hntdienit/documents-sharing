import React from "react";
import { Link } from "react-router-dom";

import images from "../../../assets/images";
import HeaderPage from "../../../components/user/HeaderPage/HeaderPage.jsx";

const Wishlist = () => {
  return (
    <>
      <HeaderPage page={"Danh sách yêu thích"} linkpage={"Danh sách yêu thích"} />
      <div className="wishlist">
        <div className="wishlist_area bg-color-white rbt-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <form action="#">
                  <div className="cart-table table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="pro-thumbnail">Image</th>
                          <th className="pro-title">Product</th>
                          <th className="pro-quantity">Quantity</th>
                          <th className="pro-subtotal">Action</th>
                          <th className="pro-remove">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="pro-thumbnail">
                            <a href="#">
                              <img src={images.course_online_01} alt="Product" />
                            </a>
                          </td>
                          <td className="pro-title">
                            <a href="#">Miracle Morning</a>
                          </td>
                          <td className="pro-price">
                            <span>$295.00</span>
                          </td>
                          <td className="pro-addtocart">
                            <button className="rbt-btn btn-gradient">add to cart</button>
                          </td>
                          <td className="pro-remove">
                            <a href="#">
                              <i className="feather-x"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="pro-thumbnail">
                            <a href="#">
                              <img src={images.course_online_01} alt="Product" />
                            </a>
                          </td>
                          <td className="pro-title">
                            <a href="#">Miracle Morning</a>
                          </td>
                          <td className="pro-price">
                            <span>$295.00</span>
                          </td>
                          <td className="pro-addtocart">
                            <button className="rbt-btn btn-gradient">add to cart</button>
                          </td>
                          <td className="pro-remove">
                            <a href="#">
                              <i className="feather-x"></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
