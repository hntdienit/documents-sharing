import React, { useContext, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";

import newRequest from "../../utils/newRequest";
import { AuthContext } from "../../helpers/AuthContext.jsx";
import images from "../../assets/images";
import LoadingCompoment from "../../components/public/LoadingCompoment";
import ErrorCompoment from "../../components/public/ErrorCompoment";

import SendIcon from "@mui/icons-material/Send";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Message = ({ id, NguoiMua }) => {
  const { currentUser } = useContext(AuthContext);

  const queryClient = useQueryClient();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      newRequest.get(`/messages/${id}`).then((res) => {
        return res.data;
      }),
      refetchInterval: 1000,
  });

  useEffect(() => {
    refetch();
  }, [id]);

  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post(`/messages`, message);
    },
    onSuccess: () => {
      refetch()
      queryClient.invalidateQueries(["messages"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      Hoi_thoai_id: id,
      Noi_dung_tin_nhan: e.target[0].value,
    });
    e.target[0].value = "";
  };

  if (isLoading) return <LoadingCompoment />;
  if (error) return <ErrorCompoment />;

  return (
    <>
      {NguoiMua.data === "" ? (
        <div className="f-c-c not-user-mess">
          <h2>Bạn chưa chọn người nhắn!</h2>
        </div>
      ) : (
        <>
          <div className="chat-header border-bottom pb-2">
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <i
                  data-feather="corner-up-left"
                  id="backToChatList"
                  className="icon-lg me-2 ms-n2 text-muted d-lg-none"
                ></i>
                <figure className="mb-0 me-2">
                  <img src={NguoiMua.data?.Hinh_dai_dien ? NguoiMua.data?.Hinh_dai_dien : images.avatar} className="img-sm rounded-circle" alt="image" />
                </figure>
                <div>
                  <p>{NguoiMua.data?.Ho_ten}</p>
                  <p className="text-muted tx-13">{NguoiMua.data?.Vai_tro === "SinhVien" ? "Sinh viên" : "Giảng viên"}</p>
                </div>
              </div>
              {/* <div className="d-flex align-items-center me-n1">
                <Link to={"/213"} className="d-none d-sm-block">
                  <i className="icon-lg text-muted">
                    <VisibilityIcon />
                  </i>
                </Link>
              </div> */}
            </div>
          </div>

          <div className="chat-body ps">
            <ul className="messages">
              {data.length === 0 && (
                <div className="f-c-c not-user-mess">
                  <h3>Bạn chưa có tin nhắn với {NguoiMua.data?.Ho_ten}</h3>
                </div>
              )}
              {data.map((m) => (
                <li
                  className={m?.Nguoi_dung_id === currentUser?.userId ? "message-item me" : "message-item friend"}
                  key={m?.id}
                >
                  <img
                    src={m?.Nguoi_dung?.Hinh_dai_dien ? m?.Nguoi_dung?.Hinh_dai_dien : images.noavatar}
                    className="img-xs rounded-circle"
                    alt="avatar"
                  />
                  <div className="content">
                    <div className="message">
                      <div className="bubble">
                        <p>{m?.Noi_dung_tin_nhan}</p>
                      </div>
                      {/* <span>{m?.Nguoi_dung_id}</span> */}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="chat-footer d-flex">
            {/* <div>
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
            </div> */}
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
            <form className="search-form flex-grow-1 me-2" onSubmit={handleSubmit}>
              <div className="input-group">
                <input type="text" className="form-control rounded-pill" id="chatForm" placeholder="Tin nhắn..." />
                <button type="submit" className="btn btn-primary btn-icon rounded-circle ms-2">
                  <i>
                    <SendIcon />
                  </i>
                </button>
              </div>
            </form>
          </div>
        </>
       )}
    </>
  );
};

export default Message;
