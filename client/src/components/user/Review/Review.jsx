import React, {useContext } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import "./Review.scss";
import images from "../../../assets/images";
import Star from "../../public/Star/Star.jsx";
import newRequest from "../../../utils/newRequest.js";
import LoadingCompoment from "../../public/LoadingCompoment";
import ErrorCompoment from "../../public/ErrorCompoment";
import { AuthContext } from "../../../helpers/AuthContext";


const Review = ({ review, setReview, setRating, setOpenReview }) => {

  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery({
    queryKey: [`Review_${review?.Nguoi_dung_id}`],
    queryFn: () =>
      newRequest.get(`/user/${review?.Nguoi_dung_id}`).then((res) => {
        return res.data;
      }),
  });

  const handleUserReview = () => {
    setOpenReview(true);
    setRating(review.So_sao);
    setReview(review.Noi_dung_danh_gia);
  };

  if (isLoading) return <LoadingCompoment loading={"123214"}/>;
  if (error) return <ErrorCompoment err={error?.response?.data} />;

  return (
    <>
      <div className="product-description-content mt-2 review_user">
        <ul className="comment-list">
          <li className="comment">
            <div className="comment-body">
              <div className="single-comment w-100">
                <div className="comment-img">
                  <img src={images.course_online_01} alt="Author Images" className="img__review" />
                </div>
                <div className="comment-inner row">
                  <div className="col-lg-8">
                    <h6 className="commenter">
                      <Link to={"/"}>{data.Ho_ten}</Link>
                    </h6>
                    <div className="comment-meta">
                      <div className="time-spent">Nov 23, 2018 at 12:23 pm</div>
                    </div>
                    <div className="rbt-review justify-content-start mb-2">
                      <Star stars={review.So_sao} />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    {currentUser?.userId === data.id && (
                      <button
                        className="rbt-btn btn-gradient hover-icon-reverse edit_review"
                        type="button"
                        onClick={handleUserReview}
                      >
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">Chỉnh sửa</span>
                          <span className="btn-icon">
                            <KeyboardDoubleArrowRightIcon />
                          </span>
                          <span className="btn-icon">
                            <KeyboardDoubleArrowRightIcon />
                          </span>
                        </span>
                      </button>
                    )}
                  </div>
                  <div className="comment-text col-lg-12">
                    <p className="b2">{review.Noi_dung_danh_gia}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Review;
