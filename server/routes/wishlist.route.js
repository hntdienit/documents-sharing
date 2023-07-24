import express from "express";
import { getAll, changeToWishlist } from "../controllers/wishlist.controller.js";

import { verifyToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/all").get(verifyToken, getAll);

router.route("/change").patch(verifyToken, changeToWishlist);

export default router;
