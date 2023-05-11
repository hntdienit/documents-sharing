import express from "express";
import { getUser, getUser1 } from "../controllers/user.controller.js";

const router = express.Router();

router.route("/signle/:id").get(getUser1);

router.route("/:id").get(getUser);

export default router;