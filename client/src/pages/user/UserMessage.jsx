import React, { useContext, useEffect } from "react";
import {  useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";

import newRequest from "../../utils/newRequest";
import { AuthContext } from "../../helpers/AuthContext.jsx";
import images from "../../assets/images";
import LoadingCompoment from "../../components/public/LoadingCompoment";
import ErrorCompoment from "../../components/public/ErrorCompoment";


const UserMessage = ({ id, setId, setUId, c }) => {

  const { isLoading, error, data } = useQuery({
    queryKey: [`user_mess_${id}`],
    queryFn: () =>
      newRequest.get(`/user/signle/${id}`).then((res) => {
        return res.data;
      }),
  });

  if (isLoading) return <LoadingCompoment />;
  if (error) return <ErrorCompoment />;

  return (
    <>
      <li
        className="chat-item pe-1"
        onClick={() => {
          setId(c?.id);
          setUId(id);
        }}
      >
        <p>{data?.id}</p>
        <a className="d-flex align-items-center">
          <figure className="mb-0 me-2">
            <img
              src={data?.Hinh_dai_dien ? data?.Hinh_dai_dien : images.noavatar}
              className="img-xs rounded-circle"
              alt="user"
            />
            {/* <div className="status offline"></div> */}
          </figure>
          <div className="d-flex justify-content-between flex-grow-1 border-bottom">
            <div>
              <p className="tx-14 text-body">{data?.Ho_ten}</p>
              <p className="text-muted tx-13">{c?.Tin_nhan_cuoi?.substring(0, 20)}...</p>
            </div>
            <div className="d-flex flex-column align-items-end">
              {/* <p className="text-muted tx-13 mb-1">
                                          {moment(c.Thoi_gian_cap_nhat).fromNow()}
                                        </p>
                                        <p className="text-muted tx-13 mb-1">{moment().locale('vi')}</p>
                                        <div className="badge rounded-pill bg-primary ms-auto">5</div>
                                        <div className="badge rounded-pill bg-danger ms-auto">3</div>
                                       */}
            </div>
          </div>
        </a>
      </li>
    </>
  );
};

export default UserMessage;
