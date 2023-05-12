import express from "express";
import { getUser, getUser1, getProfile } from "../controllers/user.controller.js";
import {verifyToken} from "../middlewares/auth.middleware.js"

const router = express.Router();

router.route("/signle/:id").get(getUser1);

router.route("/getprofile").get(verifyToken, getProfile);

router.route("/:id").get(getUser);

export default router;