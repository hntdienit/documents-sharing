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
      await Users.update({ Ma_xac_thuc_email: 0 }, { where: { id: userId } });
    }
  }, 1 * 60 * 1000);
};

const createOTP = () => {
  return Math.floor(Math.random() * (999999 - 100000)) + 100000;
};

const endCode = (id, Email, Vai_tro) => {
  return jwt.sign(
    {
      iss: "B1910055",
      sub: { id, Email, Vai_tro },
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
      Ma_xac_thuc_email: createOTP(),
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
            <h2>Mã xác minh tài khoản của bạn : <span style="color: #00aff0">${newUser.Ma_xac_thuc_email}</span></h2>
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
      const accessToken = endCode(user.id, user.Email, user.Vai_tro);
      return res
        .cookie("accessToken", accessToken, {
          httpOnly: true,
        })
        .status(200)
        .json({
          userId: user.id,
          Ho_ten: user.Ho_ten,
          Vai_tro: user.Vai_tro,
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

    if (parseInt(user.Ma_xac_thuc_email) === 0) {
      return res.json({
        error: "Mã xác minh tài khoản của bạn đã hết hạn, vui lòng chọn gửi lại mã xác minh tài khoản để nhận mã mới!",
      });
    }

    if (parseInt(req.body.Ma_xac_thuc_email) === parseInt(user.Ma_xac_thuc_email)) {
      await Users.update({ Email_da_xac_thuc: 1 }, { where: { id: user.id } });
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
    const user = await Users.findOne({ where: { Email: req.body.Email } });
    if (!user) {
      return next(createError(200, "Không tìm thấy thông tin!"));
    }

    await Users.update({ Ma_xac_thuc_email: createOTP() }, { where: { id: user.id } });
    const updateUser = await Users.findOne({ where: { Email: req.body.Email } });
    mailer(
      updateUser.Email,
      "Mã xác thực mới",
      `<div style="text-align: center">
        <h2>Xác thực email cho tài khoản!</h2>
        <p>Xin chào <span style="color: #00aff0">${updateUser.Ho_ten}</span>!</p>
        <p>Bạn vừa đăng ký tài khoản</p>
        <h2>Mã xác minh tài khoản của bạn : <span style="color: #00aff0">${updateUser.Ma_xac_thuc_email}</span></h2>
      </div>`
    );
    setTimeOutOTP(updateUser.id);
    return res.json();
  } catch (err) {
    next(err);
  }
};

export const checkEmail = async (req, res, next) => {
  try {
    const user = await Users.findOne({ where: { Email: req.body.Email } });
    if (!user) {
      return next(createError(200, "Không tìm thấy thông tin!"));
    }

    await Users.update({ Ma_xac_thuc_email: createOTP() }, { where: { id: user.id } });
    const updateUser = await Users.findOne({ where: { Email: req.body.Email } });
    mailer(
      updateUser.Email,
      "Mã xác thực Email",
      `<div style="text-align: center">
        <h2>Xác thực email cho tài khoản!</h2>
        <p>Xin chào <span style="color: #00aff0">${updateUser.Ho_ten}</span>!</p>
        <p>Bạn vừa đăng ký tài khoản</p>
        <h2>Mã xác minh tài khoản của bạn : <span style="color: #00aff0">${updateUser.Ma_xac_thuc_email}</span></h2>
      </div>`
    );
    setTimeOutOTP(updateUser.id);
    return res.json();
  } catch (err) {
    next(err);
  }
};

export const newPassword = async (req, res, next) => {
  try {
    const user = await Users.findOne({ where: { Email: req.body.Email } });
    if (!user) {
      return next(createError(200, "Không tìm thấy thông tin!"));
    }

    const hash = bcrypt.hashSync(req.body.Mat_khau, 5);
    await Users.update({ Mat_khau: hash }, { where: { id: user.id } });
    return res.json("Thay đổi mật khẩu thành công!");
  } catch (err) {
    next(err);
  }
};

export const loginSuccess = async (req, res) => {
  const user = req.user;
  if (!user) return res.redirect("/auth/callback/failure");
  const accessToken = endCode(user.id, user.Email, user.Vai_tro);
  return res
    .cookie("accessToken", accessToken, {
      httpOnly: true,
    })
    .status(200)
    .json({
      userId: user.id,
      Ho_ten: user.Ho_ten,
      Vai_tro: user.Vai_tro,
      Email: user.Email,
      Hinh_dai_dien: user.Hinh_dai_dien,
      AccessToken: accessToken,
    });
};
