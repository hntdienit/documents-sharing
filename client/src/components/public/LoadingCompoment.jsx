import React from "react";

const LoadingCompoment = ({loading}) => {
  return (
    <div className="loadingcompoment">
      <h3>{loading || "Đang tải nội dung..."}</h3>
    </div>
  );
};

export default LoadingCompoment;
