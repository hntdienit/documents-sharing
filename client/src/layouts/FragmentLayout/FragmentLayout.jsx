import React from "react";
import "./FragmentLayout.scss";

const FragmentLayout = ({ children }) => {
  return (
    <div className="fragmentlayout">
      <div className="fragmentlayout__container">{children}</div>
    </div>
  );
};

export default FragmentLayout;
