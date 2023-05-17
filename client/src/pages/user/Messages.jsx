import { useQuery } from "@tanstack/react-query";
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import moment from "moment";
import LoadingCompoment from "../../components/public/LoadingCompoment.jsx";
import ErrorCompoment from "../../components/public/ErrorCompoment.jsx";
import images from "../../assets/images";
import Message from "./Message.jsx";
import UserMessage from "./UserMessage";
import { AuthContext } from "../../helpers/AuthContext";

import VisibilityIcon from "@mui/icons-material/Visibility";
import SearchIcon from "@mui/icons-material/Search";
import MessageIcon from "@mui/icons-material/Message";

const Messages = ({ openMess, setOpenMess, openChatbot, setOpenChatbot, id, setId, uid, setUId }) => {
  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["conversation"],
    queryFn: () =>
      newRequest.get(`/conversation`).then((res) => {
        return res.data;
      }),
  });

  const NguoiMua = useQuery({
    queryKey: ["NguoiMua"],
    queryFn: () =>
      newRequest.get(`/user/signle/${uid}`).then((res) => {
        return res.data;
      }),
  });

  useEffect(() => {
    refetch();
    NguoiMua.refetch();
  }, [uid, id, currentUser]);

  if (isLoading || NguoiMua.isLoading) return <LoadingCompoment />;
  if (error || NguoiMua.error) return <ErrorCompoment />;

  return (
    <>
      {openMess && (
        <div className="messages-wrap messui messages-wrap-active row chat-wrapper">
          <div className="card">
            <div className="card-body">
              <div className="row position-relative w-100">
                <div className="col-lg-4 chat-aside border-end-lg">
                  <div className="aside-content">
                    <div className="aside-header">
                      <div className="d-flex justify-content-between align-items-center pb-2 mb-2">
                        <div className="d-flex align-items-center">
                          <figure className="me-2 mb-0">
                            <img
                              src={currentUser?.Hinh_dai_dien ? currentUser?.Hinh_dai_dien : images.avatar}
                              className="img-sm rounded-circle"
                              alt="profile"
                            />
                          </figure>
                          <div>
                            <h6>{currentUser?.Ho_ten}</h6>
                            <p className="text-muted tx-13">
                              {currentUser?.Vai_tro === "SinhVien" ? "Sinh viên" : "Giảng viên"}
                            </p>
                          </div>
                        </div>
                        <div className="dropdown">
                          {/* <a
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="icon-lg text-muted pb-3px">
                              <VisibilityIcon />
                            </i>
                          </a> */}
                        </div>
                      </div>
                    </div>
                    <div className="aside-body">
                      <hr />
                      <div className="tab-content mt-3">
                        <div
                          className="tab-pane fade show active"
                          id="chats"
                          role="tabpanel"
                          aria-labelledby="chats-tab"
                        >
                          <div>
                            <ul className="list-unstyled chat-list px-1">
                              {data?.map((c) => (
                                <UserMessage
                                  key={c?.id}
                                  id={c?.Nguoi_ban_id === currentUser?.userId ? c?.Nguoi_mua_id : c?.Nguoi_ban_id}
                                  setId={setId}
                                  setUId={setUId}
                                  c={c}
                                />
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-8 chat-content">
                  <Message id={id} NguoiMua={NguoiMua} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className="progress_parent messui backto_top_active"
        onClick={() => {
          setOpenMess(!openMess);
          if (openChatbot) {
            setOpenChatbot(!openChatbot);
          }
        }}
      >
        <i>
          <MessageIcon />
        </i>
      </div>
    </>
  );
};

export default Messages;
