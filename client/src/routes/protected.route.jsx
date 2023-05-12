import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../helpers/AuthContext.jsx";

function ProtectedRoute({ role, children }) {
  const { currentUser } = useContext(AuthContext);

  let Content = "";

  switch (role) {
    case undefined:
      Content = children;
      break;
    case "NguoiDung":
      if (currentUser) {
        if (
          currentUser?.Vai_tro === "NguoiDung" ||
          currentUser?.Vai_tro === "SinhVien" ||
          currentUser?.Vai_tro === "GiangVien"
        )
          Content = children;
        else Content = <Navigate to="/P404" replace />;
      } else {
        toast.info("Bạn cần đăng nhập trước khi sử dụng tính năng này1111!", {});
        Content = <Navigate to="/login" replace />;
      }
      break;
    case "SinhVien":
      if (currentUser) {
        if (currentUser?.Vai_tro === "SinhVien" || currentUser?.Vai_tro === "GiangVien") Content = children;
        else Content = <Navigate to="/P404" replace />;
      } else {
        toast.info("Bạn cần đăng nhập trước khi sử dụng tính năng này!", {});
        Content = <Navigate to="/login" replace />;
      }
      break;
    case "GiangVien":
      if (currentUser) {
        if (currentUser?.Vai_tro === "GiangVien") Content = children;
        else Content = <Navigate to="/P404" replace />;
      } else {
        toast.info("Bạn cần đăng nhập trước khi sử dụng tính năng này!", {});
        Content = <Navigate to="/login" replace />;
      }
      break;

    case "QuanTri":
      if (currentUser) {
        if (currentUser?.Vai_tro === "QuanTri") Content = children;
        else Content = <Navigate to="/P404" replace />;
      } else {
        toast.info("Bạn cần đăng nhập trước khi sử dụng tính năng này!", {});
        Content = <Navigate to="/login" replace />;
      }
      break;

    default:
      throw new Error("Quyền truy cập không xác định!");
  }

  return Content;
}

export default ProtectedRoute;
