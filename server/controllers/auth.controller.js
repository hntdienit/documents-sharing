import sequelize from "../config/db.js";
import { Op } from "sequelize";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import emailExistence from "email-existence";

import mailer from "../utils/mailer.js";
import createError from "../utils/createError.js";

// import User from "../models/user.model.js";
import Users from "../models/user.model.js";

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
    const { Email, Mat_khau } = req.body;
    // bcrypt.hash(password, 10).then(async (hash) => {
    //   const newUser = await Users.create({
    //     username: username,
    //     email: email,
    //     password: hash,
    //     // emailverified: Math.floor(Math.random() * (999999 - 100000)) + 100000,
    //   });
    //   // emailExistence.check(newUser.email, function (error, response) {
    //   //   const mailcheck = response;
    //   //   console.log("mailcheck", mailcheck);
    //   //   if (mailcheck === true) {
    //   //     mailer(
    //   //       newUser.email,
    //   //       "Verify Email",
    //   //       `<div style="text-align: center">
    //   //         <div>
    //   //           <img src="${process.env.IMAGE_MAIL}" width="100px" height="100px" />
    //   //         </div>
    //   //         <h2>Confirm email for account!</h2>
    //   //         <p>Hello <span style="color: #00aff0">${newUser.username}!</span></p>
    //   //         <p>You just signed up for an account</p>
    //   //         <h2>Your account verification code : <span style="color: #00aff0">${newUser.emailverified}</span></h2>
    //   //       </div>`
    //   //     );
    //   //     // Carts.create({ userId: newUser.id });
    //   //     setTimeOutOTP(newUser.id);
    //   //     return res
    //   //       .status(201)
    //   //       .json({ verify: "verify", username: newUser.username });
    //   //   } else {
    //   //     Users.destroy({ where: { username: newUser.username } });
    //   //     return res.json({ error: "Email does not exist!" });
    //   //   }
    //   // });
    // });

    //--------------
    const hash = bcrypt.hashSync(req.body.Mat_khau, 5);

    const newUser = await Users.create({
      Email: Email,
      Mat_khau: hash,
    });

    res.status(201).send("Đăng ký tài khoản thành công!");
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
