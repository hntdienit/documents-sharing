// // MessageParser starter code in MessageParser.js
// class MessageParser {
//     constructor(actionProvider) {
//       this.actionProvider = actionProvider;
//     }

//     parse(message) {
//       const lowerCaseMessage = message.toLowerCase();

//       if (lowerCaseMessage.includes("hello")) {
//         this.actionProvider.greet();
//       }

//       if (lowerCaseMessage.includes("javascript")) {
//         this.actionProvider.handleJavascriptList();
//       }
//     }
//   }

//   export default MessageParser;

import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes("xin chào")) {
      actions.handleHello();
    }
    // if (message.includes('dog')) {
    //   actions.handleDog();
    // }
    if (message.includes('123')) {
      actions.handle123();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;
