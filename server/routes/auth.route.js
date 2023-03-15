import express from "express";
import { register, login, logout } from "../controllers/auth.controller.js";
import validator from "../utils/validate.js"

const router = express.Router();

router.post("/register", register)
router.post("/login", validator.vBody(validator.schemas.login), login)
router.post("/logout", logout)

export default router;