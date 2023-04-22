import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) return next(createError(200, "Bạn chưa đăng nhập!"));

  jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
    if (err) return next(createError(200, "Mã xác thực không chính xác!"));
    req.user = payload.sub;
    next();
  });
};

export const checkAdmin = (req, res, next) => {
  try {
    if (req.user.Quyen !== "QuanTri") {
      return next(createError(200, "Bạn không đủ quyền truy cập!"));
    }
    next();
  } catch (err) {
    next(err);
  }
};

export const checkUser = (req, res, next) => {
  try {
    if (req.user.Quyen === "SinhVien" || req.user.Quyen === "GiangVien") next();
    else return next(createError(403, "Bạn không đủ quyền truy cập!"));
  } catch (err) {
    next(err);
  }
};
