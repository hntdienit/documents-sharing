import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Messages.scss";
import moment from "moment";
import LoadingCompoment from "../../components/public/LoadingCompoment.jsx";
import ErrorCompoment from "../../components/public/ErrorCompoment.jsx";

const Messages = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["conversation"],
    queryFn: () =>
      newRequest.get(`/conversation`).then((res) => {
        return res.data;
      }),
  });

  if (isLoading) return <LoadingCompoment />;
  if (error) return <ErrorCompoment />;

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>Người dùng</th>
              <th>Tin nhắn cuối</th>
              <th>Date</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>

          <tbody>
            {data.map((c) => (
              <tr
                // className={
                //   ((currentUser.isSeller && !c.readBySeller) || (!currentUser.isSeller && !c.readByBuyer)) && "active"
                // }
                key={c.id}
              >
                {/* <td>{currentUser.isSeller ? c.buyerId : c.sellerId}</td> */}
                <td>{c.Nguoi_mua_id}</td>
                <td>
                  <Link to={`/message/${c.id}`} className="link">
                    {c?.Tin_nhan_cuoi?.substring(0, 100)}...
                  </Link>
                </td>
                <td>{moment(c.updatedAt).fromNow()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Messages;
