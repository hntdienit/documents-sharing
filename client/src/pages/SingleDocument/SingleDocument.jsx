import React from "react";
import "./SingleDocument.scss";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import SchoolIcon from "@mui/icons-material/School";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import newRequest from "../../utils/newRequest.js";
import HeaderPage from "../../components/user/HeaderPage/HeaderPage.jsx";
import Reviews from "../../components/user/Reviews/Reviews.jsx";
import Star from "../../components/public/Star/Star.jsx";

import images from "../../assets/images";
import Loading from "../../components/public/Loading/Loading.jsx";
import Error from "../../components/public/Error/Error.jsx";

const SingleDocument = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["singledocument"],
    queryFn: () =>
      newRequest.get(`/document/single/${id}`).then((res) => {
        return res.data;
      }),
  });

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error err={error?.response?.data} />
      ) : (
        <>
          <HeaderPage page={"Tài liệu"} linkpage={"tài liệu"} />
          <div className="singledocument">
            <div className="singledocument__container">
              <div className="singledocument__left">
                <div className="singledocument__wrap">
                  <div className="singledocument__img">
                    <img src={images.logo} alt="" />
                    <span>Development</span>
                  </div>
                  <h3>{data?.Tai_lieu?.Ten_tai_lieu}</h3>
                  <div className="singledocument__meta">
                    <img src={images.author} alt="" />
                    <p>Nelson Mandela</p>
                    <span className="singledocument__stu">
                      <i>
                        <SchoolIcon />
                      </i>
                      20,153 Students
                    </span>
                    <div className="singledocument__rat">
                      <Star stars={4.5} reviews={"4,5609"} isStar isReviews />
                    </div>
                  </div>
                  <div className="singledocument__desc">
                    <div>
                      <span>Mô tả</span>
                      <p>
                        E learning dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos keti accusam et justo
                        duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimel. sanctus est Lorem ipsum
                        dolor sit
                      </p>
                    </div>
                    <Reviews documentId={data?.Tai_lieu?.id} />
                  </div>
                </div>
              </div>
              <div className="singledocument__right">
                <div className="singledocument__details">
                  <h2>
                    Price <span> $170 </span>
                  </h2>
                  <div className="singledocument__detail__list">
                    <span>
                      <PersonOutlineIcon />
                      <i>Instructor</i>
                    </span>
                    <span>{data?.Nguoi_dung?.Ho_ten}</span>
                  </div>
                  <div className="singledocument__detail__list">
                    <span>
                      <PersonOutlineIcon />
                      <i>Instructor</i>
                    </span>
                    <span> Nelson Mandela </span>
                  </div>
                  <div className="singledocument__btn">
                    <button type="button" className="link">
                      Xem tài liệu
                    </button>
                    <button type="button" className="link">
                      Tải về
                    </button>
                  </div>
                </div>
                <div className="singledocument__related">
                  <h3>Tài liệu liên quan</h3>
                  <div className="singledocument__related__box">
                    <Link to={"/"}>Components are clearly alined with those particular assignment</Link>
                    <span> Development </span>
                  </div>
                  <div className="singledocument__related__box">
                    <Link to={"/"}>Components are clearly alined with those particular assignment</Link>
                    <span> Development </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SingleDocument;
