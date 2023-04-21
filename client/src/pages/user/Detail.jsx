import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import images from "../../assets/images/index.js";
import HeaderPage from "../../components/user/HeaderPage/HeaderPage.jsx";
import Star from "../../components/public/Star/Star.jsx";
import Reviews from "../../components/user/Reviews/Reviews.jsx";
import newRequest from "../../utils/newRequest.js";
import LoadingCompoment from "../../components/public/LoadingCompoment.jsx";
import ErrorCompoment from "../../components/public/ErrorCompoment.jsx";

const Detail = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: [`detail_${id}`],
    queryFn: () =>
      newRequest.get(`/document/${id}`).then((res) => {
        return res.data;
      }),
  });

  if (isLoading) return <LoadingCompoment />;
  if (error) return <ErrorCompoment err={error?.response?.data} />;

  return (
    <>
      <HeaderPage page={"Chi tiết tài liệu"} linkpage={"Chi tiết tài liệu"} />
      <div className="rbt-single-product-area rbt-single-product rbt-section-gap">
        <div className="container">
          <div className="row g-5 row--30 align-items-center">
            <div className="col-lg-6">
              <div className="thumbnail">
                <img className="radius-10 img_detail" src={images.course_online_01} alt="Product Images" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content">
                <div className="rbt-review justify-content-start">
                  <Star stars={3.7} isReviews reviews={"75 đánh giá"} />
                </div>

                <h2 className="title mt--10 mb--10">{data?.Tai_lieu?.Ten_tai_lieu}</h2>
                <span className="rbt-label-style description">By: Hal Elrod</span>

                <div className="rbt-price justify-content-start mt--10">
                  <span className="current-price theme-gradient">$95.00</span>
                  <span className="off-price">$150.00</span>
                </div>

                <p className="my-4">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt. ut
                  labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam. et justo duo dolores
                  et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
                </p>

                <div className="product-action mb--20">
                  <div className="addto-cart-btn">
                    <a className="rbt-btn btn-gradient hover-icon-reverse" href="cart.html">
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Add To Cart</span>
                        <span className="btn-icon">
                          <KeyboardDoubleArrowRightIcon />
                        </span>
                        <span className="btn-icon">
                          <KeyboardDoubleArrowRightIcon />
                        </span>
                      </span>
                    </a>
                  </div>
                </div>

                <ul className="product-feature">
                  <li>
                    <span>số lượng còn:</span> 7
                  </li>
                  <li>
                    <span>Ngành học: </span> <Link to={"/"}>Motivation</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Reviews documentId={data?.Tai_lieu?.id} />
    </>
  );
};

export default Detail;
