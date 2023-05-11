// import React from "react";
// import { createChatBotMessage } from "react-chatbot-kit";

// import LearningOptions from "../components/public/LearningOptions.jsx";
// import LinkList from "../components/public/LinkList.jsx";

// const config = {
//   botName: "LearningBot",
//   initialMessages: [
//     createChatBotMessage("Hi, I'm here to help. What do you want to learn?", {
//       widget: "learningOptions",
//     }),
//   ],
//   customStyles: {
//     botMessageBox: {
//       backgroundColor: "#376B7E",
//     },
//     chatButton: {
//       backgroundColor: "#376B7E",
//     },
//   },
//   widgets: [
//     {
//       widgetName: "learningOptions",
//       widgetFunc: (props) => <LearningOptions {...props} />
//     },
//     // {
//     //   widgetName: "javascriptLinks",
//     //   widgetFunc: (props) => <LinkList {...props} />,
//     //   props: {
//     //     options: [
//     //       {
//     //         text: "Introduction to JS",
//     //         url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
//     //         id: 1,
//     //       },
//     //       {
//     //         text: "Mozilla JS Guide",
//     //         url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
//     //         id: 2,
//     //       },
//     //       {
//     //         text: "Frontend Masters",
//     //         url: "https://frontendmasters.com",
//     //         id: 3,
//     //       },
//     //     ],
//     //   },
//     // },
//   ],
// };

// export default config;

import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./BotAvatar.jsx";
import UserAvatar from "./UserAvatar.jsx";
import DogPicture from "./DogPicture.jsx";
import LearningOptions from "./LearningOptions.jsx";
import LinkList from "./LinkList.jsx";

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
  // customStyles: {
  //   botMessageBox: {
  //     backgroundColor: "#376B7E",
  //   },
  //   chatButton: {
  //     backgroundColor: "#5ccc9d",
  //   },
  //   widgets: [
  //     {
  //       widgetName: "dogPicture",
  //       widgetFunc: (props) => <DogPicture {...props} />,
  //     },
  //   ],
  // },
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
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to JS",
            url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Mozilla JS Guide",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
    },
  ],

 
};

export default config;
