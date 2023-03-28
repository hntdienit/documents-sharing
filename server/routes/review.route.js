import express from "express";
import { newRating, getRatingDocument, patchReview } from "../controllers/review.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/new").post(verifyToken, newRating);
router.route("/document/:id").get(getRatingDocument);

router.route("/:id").patch(patchReview);

// router.route("/single/:id").get(singleDocument);

export default router;
