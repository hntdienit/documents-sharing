import User from "../models/user.model.js";
import createError from "../utils/createError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.Mat_khau, 5);
    const newUser = new User({
      ...req.body,
      Mat_khau: hash,
    });

    await newUser.save();
    res.status(201).send("Đăng ký tài khoản thành công!");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ Email: req.body.Email });
    if (!user) return next(createError(404, "Tài khoản không tồn tại!"));
    const isCorrect = bcrypt.compareSync(req.body.Mat_khau, user.Mat_khau);
    if (!isCorrect) return next(createError(400, "Tài khoản hoặc mật khẩu không chính xác!"));

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_KEY
    );
    const { Mat_khau, authGoogle, authType, ...info } = user._doc;
    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .send(info);
  } catch (err) {
    next(err);
  }
};

export const logout = async (req, res) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("Bạn đã đăng xuất thành công. Tạm biệt!");
};
