import sequelize from "../config/db.js";
import { Op } from "sequelize";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import emailExistence from "email-existence";

import mailer from "../utils/mailer.js";
import createError from "../utils/createError.js";

import Users from "../models/user.model.js";

const setTimeOutOTP = (userId) => {
  setTimeout(async () => {
    const findUser = await Users.findByPk(userId);
    if (findUser) {
      await Users.update({ So_dien_thoai: 0 }, { where: { id: userId } });
    }
  }, 1 * 60 * 1000);
};

const createOTP = () => {
  return Math.floor(Math.random() * (999999 - 100000)) + 100000;
};

const endCode = (id, Email, Quyen) => {
  return jwt.sign(
    {
      iss: "B1910055",
      sub: { id, Email, Quyen },
      iat: new Date().setTime(),
      exp: new Date().setDate(new Date().getDate() + 3),
    },
    process.env.JWT_SECRET
  );
};

export const register = async (req, res, next) => {
  try {

    const user = await Users.findOne({ where: { Email: req.body.Email } });
    if (user) {
      return next(createError(200, "Email đã được đăng ký tài khoản!"));
    }

    const hash = bcrypt.hashSync(req.body.Mat_khau, 5);

    const newUser = await Users.create({
      Ho_ten: req.body.Ho_ten,
      Email: req.body.Email,
      Mat_khau: hash,
      So_dien_thoai: createOTP(),
    });

    emailExistence.check(newUser.Email, function (error, response) {
      if (response) {
        mailer(
          newUser.Email,
          "Mã xác thực tài khoản",
          `<div style="text-align: center">
            <h2>Xác thực email cho tài khoản!</h2>
            <p>Xin chào <span style="color: #00aff0">${newUser.Ho_ten}</span>!</p>
            <p>Bạn vừa đăng ký tài khoản</p>
            <h2>Mã xác minh tài khoản của bạn : <span style="color: #00aff0">${newUser.So_dien_thoai}</span></h2>
          </div>`
        );
        setTimeOutOTP(newUser.id);
        return res.status(201).json(newUser.Email);
      } else {
        Users.destroy({ where: { Email: newUser.Email } });
        return res.json({ error: "Email không tồn tại!" });
      }
    });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { Email, Mat_khau } = req.body;

    const user = await Users.findOne({ where: { Email: Email } });

    if (!user) return res.status(200).json({ error: "Tài khoản không tồn tại!" });

    bcrypt.compare(Mat_khau, user.Mat_khau).then((match) => {
      if (!match) return res.status(200).json({ error: "Tài khoản hoặc mật khẩu không chính xác!" });
      const accessToken = endCode(user.id, user.Email, user.Quyen);
      return res
        .cookie("accessToken", accessToken, {
          httpOnly: true,
        })
        .status(200)
        .json({
          userId: user.id,
          Ho_ten: user.Ho_ten,
          Quyen: user.Quyen,
          Email: user.Email,
          Hinh_dai_dien: user.Hinh_dai_dien,
          AccessToken: accessToken,
        });
    });
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

export const verify = async (req, res, next) => {
  try {
    const user = await Users.findOne({ where: { Email: req.body.Email } });
    if (!user) {
      return next(createError(200, "Không tìm thấy thông tin!"));
    }

    if (parseInt(user.So_dien_thoai) === 0) {
      return res.json({
        error: "Mã xác minh tài khoản của bạn đã hết hạn, vui lòng chọn gửi lại mã xác minh tài khoản để nhận mã mới!",
      });
    }

    if (parseInt(req.body.Ma_xac_thuc) === parseInt(user.So_dien_thoai)) {
      await Users.update({ So_dien_thoai: 1 }, { where: { id: user.id } });
      return res.json();
    } else {
      return next(createError(200, "Mã xác thực không chính xác!"));
    }
  } catch (err) {
    next(err);
  }
};

export const newverify = async (req, res, next) => {
  try {
    console.log(req.body.Email);
    const user = await Users.findOne({ where: { Email: req.body.Email } });
    if (!user) {
      return next(createError(200, "Không tìm thấy thông tin!"));
    }

    await Users.update({ So_dien_thoai: createOTP() }, { where: { id: user.id } });
    const updateUser = await Users.findOne({ where: { Email: req.body.Email } });
    mailer(
      updateUser.Email,
      "Mã xác thực mới",
      `<div style="text-align: center">
        <h2>Xác thực email cho tài khoản!</h2>
        <p>Xin chào <span style="color: #00aff0">${updateUser.Ho_ten}</span>!</p>
        <p>Bạn vừa đăng ký tài khoản</p>
        <h2>Mã xác minh tài khoản của bạn : <span style="color: #00aff0">${updateUser.So_dien_thoai}</span></h2>
      </div>`
    );
    return res.json();
  } catch (err) {
    next(err);
  }
};

export const loginSuccess = async (req, res) => {
  const user = req.user;
  if (!user) return res.redirect("/auth/callback/failure");
  const accessToken = endCode(user.id, user.Email, user.Quyen);
  return res
    .cookie("accessToken", accessToken, {
      httpOnly: true,
    })
    .status(200)
    .json({
      userId: user.id,
      Ho_ten: user.Ho_ten,
      Quyen: user.Quyen,
      Email: user.Email,
      Hinh_dai_dien: user.Hinh_dai_dien,
      AccessToken: accessToken,
    });
};
