// class ActionProvider {
//     constructor(createChatBotMessage, setStateFunc) {
//       this.createChatBotMessage = createChatBotMessage;
//       this.setState = setStateFunc;
//     }

//     // new method
//     greet() {
//       const greetingMessage = this.createChatBotMessage("Hi, friend.");
//       this.updateChatbotState(greetingMessage);
//     }

//     handleJavascriptList = () => {
//       const message = this.createChatBotMessage(
//         "Fantastic, I've got the following resources for you on Javascript:",
//         {
//           widget: "javascriptLinks",
//         }
//       );

//       this.updateChatbotState(message);
//     };

//     updateChatbotState(message) {
//       // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

//       this.setState((prevState) => ({
//         ...prevState,
//         messages: [...prevState.messages, message],
//       }));
//     }
//   }

//   export default ActionProvider;

import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const updateChatbotState = (message) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const handleHello = () => {
    const botMessage = createChatBotMessage("Xin chào, rất vui được gặp bạn!");
    updateChatbotState(botMessage);
  };

  // const handleDog = () => {
  //   const botMessage = createChatBotMessage("Here's a nice dog picture for you!", {
  //     widget: "dogPicture",
  //     // payload: {},
  //     // delay: 1000,
  //   });
  //   updateChatbotState(botMessage);
  // };

  const handleJavascriptList = () => {
    const botMessage = createChatBotMessage("sdasdt:", {
      widget: "javascriptLinks",
    });
    updateChatbotState(botMessage);
  };

  const handlenewdoc = () => {
    const botMessage = createChatBotMessage("Tài liệu mới", {
      widget: "newdoc",
    });
    updateChatbotState(botMessage);
  };

  const handleshouldbuy = () => {
    const botMessage = createChatBotMessage("Tài liệu bạn nên mua", {
      widget: "shouldbuy",
    });
    updateChatbotState(botMessage);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            // handleDog,
            handleJavascriptList,
            handlenewdoc,
            handleshouldbuy,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
