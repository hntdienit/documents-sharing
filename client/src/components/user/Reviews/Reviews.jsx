import React, { useState, useContext } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import "./Reviews.scss";
import images from "../../../assets/images";
import Rate from "../../public/Rate/Rate.jsx";
import Review from "../Review/Review.jsx";
import newRequest from "../../../utils/newRequest.js";
import Loading from "../../public/Loading/Loading.jsx";
import Error from "../../public/Error/Error.jsx";
import {AuthContext} from "../../../helpers/AuthContext.jsx";

const Reviews = ({ documentId }) => {
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
    },
  });

  const handleAddReview = (e) => {
    e.preventDefault();
    const Noi_dung_danh_gia = e.target[0].value;
    const So_sao = rating;
    mutation.mutate({ documentId, So_sao, Noi_dung_danh_gia });
    setOpenReview(false);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error err={error?.response?.data} />
      ) : (
        <div className="review">
          <div className="review__title">Đánh giá</div>
          {(data[0]?.Nguoi_dung_id !== currentUser.userId || openReview) && (
            <div className="review__form">
              <form onSubmit={handleAddReview}>
                <div className="review__form__star">
                  <div>Đánh giá của bạn:</div>
                  <div>
                    <Rate rating={rating} onRating={(rate) => setRating(rate)} />
                  </div>
                  <div>({rating} sao)</div>
                </div>
                <textarea
                  className="review__field"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                ></textarea>
                <div>
                  <button type="submit" className="review__submit">
                    Lưu
                  </button>
                  {data[0]?.Nguoi_dung_id === currentUser.userId && (
                    <button
                      type="button"
                      className="review__submit"
                      onClick={() => {
                        setOpenReview(false);
                      }}
                    >
                      Hủy chỉnh sửa
                    </button>
                  )}
                </div>
              </form>
            </div>
          )}
          {data.map((review) => (
            <Review
              key={review.id}
              review={review}
              setReview={setReview}
              setRating={setRating}
              setOpenReview={setOpenReview}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Reviews;
