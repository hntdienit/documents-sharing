import React from "react";

const ErrorCompoment = ({err}) => {
  return (
    <div className="errorcompoment">
      <h3>{err || "Đang có lỗi gì đó!"}</h3>
    </div>
  );
};

export default ErrorCompoment;
