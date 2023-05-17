import React, { useContext } from "react";
import { AuthContext } from "../../../helpers/AuthContext.jsx";

const LearningOptions = (props) => {
  const { currentUser } = useContext(AuthContext);

  let options;
  if (currentUser) {
    options = [
      {
        text: "Tài liệu mới",
        handler: props.actionProvider.handleJavascriptList,
        id: 1,
      },
      { text: "Tài liệu nên mua", handler: () => {}, id: 2 },
    ];
  } else {
    options = [
      {
        text: "Tài liệu mới",
        handler: props.actionProvider.handleJavascriptList,
        id: 1,
      },
    ];
  }

  const optionsMarkup = options.map((option) => (
    <button className="learning-option-button" key={option.id} onClick={option.handler}>
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;
