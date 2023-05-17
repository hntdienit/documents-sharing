import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes("xin chào")) {
      actions.handleHello();
    }

    if (message.includes('moi')) {
      actions.handlenewdoc();
    }

    if (message.includes('mua')) {
      actions.handleshouldbuy();
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
