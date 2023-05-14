import React, { useState, useContext } from "react";
import Footer from "../../components/user/Footer/Footer.jsx";
import Header from "../../components/user/Header.jsx";
import Messages from "../../pages/user/Messages.jsx";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import ActionProvider from "../../components/public/Chatbot/ActionProvider.jsx";
import MessageParser from "../../components/public/Chatbot/MessageParser.jsx";
import config from "../../components/public/Chatbot/config.jsx";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { AuthContext } from "../../helpers/AuthContext.jsx";

import "./DefaultLayout.scss";
import "../../assets/scss/style.scss";

function DefaultLayout({ children, openMess, setOpenMess, id, setId, uid, setUId }) {
  const [openChatbot, setOpenChatbot] = useState(false);

  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <Header />
      <div>{children}</div>

      {openChatbot && (
        <div className="messages-wrap chatbotui messages-wrap-active row chat-wrapper">
          <div className="card">
            <div className="card-body">
              <div className="row position-relative w-100">
                <div className="col-lg-12 chat-content">
                  <Chatbot
                    // openMess={openMess}
                    // setOpenMess={setOpenMess}
                    // openChatbot={openChatbot}
                    // setOpenChatbot={setOpenChatbot}
                    config={config}
                    actionProvider={ActionProvider}
                    messageParser={MessageParser}
                    placeholderText="Bạn đang cần gì?"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className="progress_parent backto_top_active chatbotui"
        onClick={() => {
          setOpenChatbot(!openChatbot);
          if (openMess) {
            setOpenMess(!openMess);
          }
        }}
      >
        <i>
          <SmartToyIcon />
        </i>
      </div>

      {currentUser && (
        <Messages
          openMess={openMess}
          setOpenMess={setOpenMess}
          openChatbot={openChatbot}
          setOpenChatbot={setOpenChatbot}
          id={id}
          setId={setId}
          uid={uid}
          setUId={setUId}
        />
      )}

      <Footer />
    </>
  );
}

export default DefaultLayout;
