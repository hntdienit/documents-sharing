import React, { useState } from "react";
import Footer from "../../components/user/Footer/Footer.jsx";
import Header from "../../components/user/Header.jsx";
import Messages from "../../pages/user/Messages.jsx";
import ChatBot from "../../pages/user/ChatBot.jsx";

import "./DefaultLayout.scss";
import "../../assets/scss/style.scss";

function DefaultLayout({ children, openMess, setOpenMess, id, setId, uid, setUId }) {
  const [openChatbot, setOpenChatbot] = useState(false);

  return (
    <>
      <Header />
      <div>{children}</div>

      {/* <ChatBot
        openMess={openMess}
        setOpenMess={setOpenMess}
        openChatbot={openChatbot}
        setOpenChatbot={setOpenChatbot}
      /> */}
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
      <Footer />
    </>
  );
}

export default DefaultLayout;
