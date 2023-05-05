import express from "express";
import passport from "passport";
import { register, login, logout, googleSuccess } from "../controllers/auth.controller.js";
import validator from "../utils/validate.js"
import "../middlewares/passport.middleware.js";

const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)

// Google
router.route("/google").get(passport.authenticate("google", { scope: ["email", "profile"] }));
router.route("/callback").get(
  passport.authenticate("google", {
    successRedirect: "/auth/callback/success",
    failureRedirect: "/auth/callback/failure",
  })
);
router.route("/callback/success").get(googleSuccess);
router.route("/callback/failure").get((req, res) => {
  res.send("Error");
});
// Google

export default router;