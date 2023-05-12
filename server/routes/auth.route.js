import express from "express";
import passport from "passport";
import {
  register,
  login,
  logout,
  verify,
  newverify,
  checkEmail,
  newPassword,
  loginSuccess,
} from "../controllers/auth.controller.js";
import validator from "../utils/validate.js";
import "../middlewares/passport.middleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

router.post("/verify", verify);
router.post("/newverify", newverify);

router.post("/checkemail", checkEmail);
router.post("/newpassword", newPassword);

// Google
router.get("/login/success", loginSuccess);
router.route("/google").get(passport.authenticate("google", { scope: ["email", "profile"] }));
router.route("/callback").get(
  passport.authenticate("google", {
    // successRedirect: "/auth/callback/success",
    successRedirect: "http://localhost:5173",
    failureRedirect: "/auth/callback/failure",
  })
);
router.route("/callback/success").get(loginSuccess);
router.route("/callback/failure").get((req, res) => {
  res.status(200).json({
    error: "Lỗi đăng nhập!",
  });
});
// Google

export default router;
