import React from "react";

const LearningOptions = (props) => {
  console.log(props)
  const options = [
    {
      text: "Tài liệu mới",
      handler: props.actionProvider.handleJavascriptList,
      id: 1,
    },
    { text: "Tài liệu nên mua", handler: () => {}, id: 2 },
    { text: "Tài liệu nên đọc", handler: () => {}, id: 3 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;
