import express from "express";
import { getAll } from "../controllers/major.controller.js";

import { verifyToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/all").get(verifyToken, getAll);

export default router;
