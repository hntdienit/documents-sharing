import React from "react";
import "./Error.scss";

const Error = ({err}) => {
  return (
    <div className="error_custom">
      <h3>{err || "Đang có lỗi gì đó!"}</h3>
    </div>
  );
};

export default Error;
