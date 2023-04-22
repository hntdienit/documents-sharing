import React, { useState, useContext } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import TextField from "@mui/material/TextField";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import images from "../../../assets/images";
import Rate from "../../public/Rate/Rate.jsx";
import Review from "../Review/Review.jsx";
import newRequest from "../../../utils/newRequest.js";
import LoadingCompoment from "../../public/LoadingCompoment.jsx";
import ErrorCompoment from "../../public/ErrorCompoment.jsx";
import { AuthContext } from "../../../helpers/AuthContext.jsx";

const Reviews = ({ documentId, refetch }) => {
  const [openReview, setOpenReview] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const { currentUser } = useContext(AuthContext);

  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: [`Reviews_${documentId}`],
    queryFn: () =>
      newRequest.get(`/review/document/${documentId}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (review) => {
      return newRequest.post("/review/new", review);
    },
    onSuccess: () => {
      queryClient.invalidateQueries([`Reviews_${documentId}`]);
      refetch();
    },
  });

  const handleAddReview = (e) => {
    e.preventDefault();
    const Noi_dung_danh_gia = e.target[0].value;
    const So_sao = rating;
    mutation.mutate({ documentId, So_sao, Noi_dung_danh_gia });
    setOpenReview(false);
  };

  if (isLoading) return <LoadingCompoment loading={"asdsads"} />;
  if (error) return <ErrorCompoment err={error?.response?.data} />;

  let datanew = data;

  if (data.length !== 0 && currentUser !== null) {
    let user = data.find((d) => {
      return d.Nguoi_dung_id === currentUser.userId;
    });
    let nouser = data.filter((d) => {
      return d.Nguoi_dung_id !== currentUser.userId;
    });

    if (user) {
      datanew = [user, ...nouser];
    } else {
      datanew = [...nouser];
    }
  }

  return (
    <>
      <div className="rbt-product-description rbt-section-gapBottom bg-color-white pt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <ul className="nav nav-tabs tab-button-style-2">
                <li className="nav-item fs-2 fw-bold">
                  <span className="title">Đánh giá</span>
                </li>
              </ul>
              <div className="tab-content">
                <div className="review">
                  {((currentUser !== null && datanew[0]?.Nguoi_dung_id !== currentUser?.userId) || openReview) && (
                    <div className="rbt-comment-form mt-4 rbt-shadow-box">
                      <div className="row">
                        <div className="col-lg-8 comment-form-inner">
                          <h3 className="title fs-1">Thêm đánh giá</h3>
                        </div>
                        <div className="col-lg-4">
                          {datanew[0]?.Nguoi_dung_id === currentUser?.userId && (
                            <button
                              className="rbt-btn btn-gradient hover-icon-reverse"
                              type="button"
                              onClick={() => {
                                setOpenReview(false);
                              }}
                            >
                              <span className="icon-reverse-wrapper">
                                <span className="btn-text">Hủy chỉnh sửa</span>
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
                      </div>
                      <form className="comment-form-style-1 position-relative" onSubmit={handleAddReview}>
                        <div className="notification-text d-flex align-items-center mb--30 mt-2">
                          <h6 className="mb--0 fontWeight600 title me-2">Đánh giá của bạn:</h6>
                          <div className="rbt-review justify-content-start">
                            <Rate rating={rating} onRating={(rate) => setRating(rate)} />
                            <span className="ms-1 mt-1">({rating} sao)</span>
                          </div>
                        </div>

                        <div className="row row--10">
                          <div className="col-lg-12">
                            <TextField
                              id="outlined-multiline-static"
                              label="Nội dung đánh giá"
                              multiline
                              rows={4}
                              fullWidth
                              value={review}
                              onChange={(e) => setReview(e.target.value)}
                            />
                          </div>
                          <div className="col-lg-12 mt-3">
                            <button className="rbt-btn btn-gradient hover-icon-reverse">
                              <span className="icon-reverse-wrapper">
                                <span className="btn-text">Đánh giá</span>
                                <span className="btn-icon">
                                  <KeyboardDoubleArrowRightIcon />
                                </span>
                                <span className="btn-icon">
                                  <KeyboardDoubleArrowRightIcon />
                                </span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  )}
                  {data.length === 0 && (
                    <div className="rbt-comment-form mt-4 rbt-shadow-box no_data_search">
                      <h2>chưa có đánh giá nào!</h2>
                    </div>
                  )}

                  {data &&
                    datanew.map((review) => (
                      <div key={review?.id} className="rbt-comment-form mt-4 rbt-shadow-box">
                        <Review
                          review={review}
                          setReview={setReview}
                          setRating={setRating}
                          setOpenReview={setOpenReview}
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
