import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./BotAvatar.jsx";
import UserAvatar from "./UserAvatar.jsx";

import LearningOptions from "./LearningOptions.jsx";
import LinkList from "./LinkList.jsx";
import NewDoc from "./NewDoc.jsx";
import ShouldBuy from "./ShouldBuy.jsx";

const botName = "bot-b1910055";

const config = {
  initialMessages: [
    createChatBotMessage(`Xin chào bạn, tôi tên là ${botName}`),
    createChatBotMessage("Hôm nay bạn cần gì?", {
      withAvatar: true,
      delay: 500,
      widget: "learningOptions",
    }),
  ],
  botName: botName,
  customComponents: {
    header: () => (
      <div
        style={{
          backgroundColor: "#6571ff",
          color: "#fff",
          padding: "15px",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
          display: "flex",
          fontSize: "0.85rem",
          paddingTop: "12.5px",
          paddingBottom: "12.5px",
          paddingRight: "12.5px",
          paddingLeft: "12.5px",
          fontWeight: "700",
          alignItems: "center",
        }}
      >
        Trò chuyện với {botName}
      </div>
    ),
    botAvatar: (props) => <BotAvatar {...props} />,
    userAvatar: (props) => <UserAvatar {...props} />,
  },

  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "newdoc",
      widgetFunc: (props) => <NewDoc {...props} />,
    },
    {
      widgetName: "shouldbuy",
      widgetFunc: (props) => <ShouldBuy {...props} />,
    },
  ],
};

export default config;
