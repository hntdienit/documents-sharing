import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import moment from "moment";
import LoadingCompoment from "../../components/public/LoadingCompoment.jsx";
import ErrorCompoment from "../../components/public/ErrorCompoment.jsx";
import images from "../../assets/images";

import SendIcon from "@mui/icons-material/Send";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SearchIcon from "@mui/icons-material/Search";
import MessageIcon from "@mui/icons-material/Message";

const ChatBot = ({ openMess, setOpenMess, openChatbot, setOpenChatbot }) => {
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
    <>
      {/* <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>Người dùng</th>
              <th>Tin nhắn cuối</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {data.map((c) => (
              <tr key={c.id}>
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
      </div> */}
      {openChatbot && (
        <div className="messages-wrap chatbotui messages-wrap-active row chat-wrapper">
          <div className="card">
            <div className="card-body">
              <div className="row position-relative w-100">
                <div className="col-lg-4 chat-aside border-end-lg">
                  <div className="aside-content">
                    <div className="aside-header">
                      <div className="d-flex justify-content-between align-items-center pb-2 mb-2">
                        <div className="d-flex align-items-center">
                          <figure className="me-2 mb-0">
                            <img src={images.avatar} className="img-sm rounded-circle" alt="profile" />
                            <div className="status online"></div>
                          </figure>
                          <div>
                            <h6>Amiah Burton bot</h6>
                            <p className="text-muted tx-13">sinh vien</p>
                          </div>
                        </div>
                        <div className="dropdown">
                          <a
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="icon-lg text-muted pb-3px">
                              <VisibilityIcon />
                            </i>
                          </a>
                        </div>
                      </div>
                      <form className="search-form">
                        <div className="input-group">
                          <span className="input-group-text">
                            <i className="cursor-pointer">
                              <SearchIcon />
                            </i>
                          </span>
                          <input type="text" className="form-control" id="searchForm" placeholder="Tìm người ..." />
                        </div>
                      </form>
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
                              <li className="chat-item pe-1">
                                <a className="d-flex align-items-center">
                                  <figure className="mb-0 me-2">
                                    <img src={images.avatar} className="img-xs rounded-circle" alt="user" />
                                    <div className="status online"></div>
                                  </figure>
                                  <div className="d-flex justify-content-between flex-grow-1 border-bottom">
                                    <div>
                                      <p className="text-body fw-bolder">John Doe</p>
                                      <p className="text-muted tx-13">Hi, How are you?</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-end">
                                      <p className="text-muted tx-13 mb-1">4:32 PM</p>
                                      <div className="badge rounded-pill bg-primary ms-auto">5</div>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="chat-item pe-1">
                                <a className="d-flex align-items-center">
                                  <figure className="mb-0 me-2">
                                    <img src={images.avatar} className="img-xs rounded-circle" alt="user" />
                                    <div className="status offline"></div>
                                  </figure>
                                  <div className="d-flex justify-content-between flex-grow-1 border-bottom">
                                    <div>
                                      <p className="text-body fw-bolder">Carl Henson</p>
                                      <div className="d-flex align-items-center">
                                        <i data-feather="image" className="text-muted icon-md mb-2px"></i>
                                        <p className="text-muted ms-1">Photo</p>
                                      </div>
                                    </div>
                                    <div className="d-flex flex-column align-items-end">
                                      <p className="text-muted tx-13 mb-1">05:24 PM</p>
                                      <div className="badge rounded-pill bg-danger ms-auto">3</div>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="chat-item pe-1">
                                <a className="d-flex align-items-center">
                                  <figure className="mb-0 me-2">
                                    <img src={images.avatar} className="img-xs rounded-circle" alt="user" />
                                    <div className="status offline"></div>
                                  </figure>
                                  <div className="d-flex justify-content-between flex-grow-1 border-bottom">
                                    <div>
                                      <p className="text-body">John Doe</p>
                                      <p className="text-muted tx-13">Hi, How are you?</p>
                                    </div>
                                    <div className="d-flex flex-column align-items-end">
                                      <p className="text-muted tx-13 mb-1">Yesterday</p>
                                    </div>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 chat-content">
                  <div className="chat-header border-bottom pb-2">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <i
                          data-feather="corner-up-left"
                          id="backToChatList"
                          className="icon-lg me-2 ms-n2 text-muted d-lg-none"
                        ></i>
                        <figure className="mb-0 me-2">
                          <img src={images.avatar} className="img-sm rounded-circle" alt="image" />
                          <div className="status online"></div>
                        </figure>
                        <div>
                          <p>Mariana Zenha</p>
                          <p className="text-muted tx-13">Front-end Developer</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center me-n1">
                        <a type="button" className="d-none d-sm-block">
                          <i className="icon-lg text-muted">
                            <VisibilityIcon />
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="chat-body ps">
                    <ul className="messages">
                      <li className="message-item friend">
                        <img src={images.avatar} className="img-xs rounded-circle" alt="avatar" />
                        <div className="content">
                          <div className="message">
                            <div className="bubble">
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <span>8:12 PM</span>
                          </div>
                        </div>
                      </li>
                      <li className="message-item me">
                        <img src={images.noavatar} className="img-xs rounded-circle" alt="avatar" />
                        <div className="content">
                          <div className="message">
                            <div className="bubble">
                              <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry printing and
                                typesetting industry.
                              </p>
                            </div>
                          </div>
                          <div className="message">
                            <div className="bubble">
                              <p>Lorem Ipsum.</p>
                            </div>
                            <span>8:13 PM</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="chat-footer d-flex">
                    <div>
                      <button
                        type="button"
                        className="btn border btn-icon rounded-circle me-2"
                        data-bs-toggle="tooltip"
                        data-bs-title="Emoji"
                      >
                        <i data-feather="smile" className="text-muted"></i>
                      </button>
                    </div>
                    <div className="d-none d-md-block">
                      <button
                        type="button"
                        className="btn border btn-icon rounded-circle me-2"
                        data-bs-toggle="tooltip"
                        data-bs-title="Attatch files"
                      >
                        <i data-feather="paperclip" className="text-muted"></i>
                      </button>
                    </div>
                    <div className="d-none d-md-block">
                      <button
                        type="button"
                        className="btn border btn-icon rounded-circle me-2"
                        data-bs-toggle="tooltip"
                        data-bs-title="Record you voice"
                      >
                        <i className="text-muted">
                          <KeyboardVoiceIcon />
                        </i>
                      </button>
                    </div>
                    <form className="search-form flex-grow-1 me-2">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control rounded-pill"
                          id="chatForm"
                          placeholder="Tin nhắn..."
                        />
                      </div>
                    </form>
                    <div>
                      <button type="button" className="btn btn-primary btn-icon rounded-circle">
                        <i>
                          <SendIcon />
                        </i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className="progress_parent backto_top_active chatbotui"
        onClick={() => {
          setOpenChatbot(!openChatbot)
          if(openMess){
            setOpenMess(!openMess)
          }
        }}
      >
        {/* <i><MessageIcon /></i> */}
        <i>123</i>
      </div>
    </>
  );
};

export default ChatBot;
