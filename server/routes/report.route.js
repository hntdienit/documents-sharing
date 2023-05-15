import express from "express";
import {
  newReport,
  pagination,
  findReport,
  checkReport,
  NotifiAll
} from "../controllers/report.controller.js";
import validator from "../utils/validate.js";

import { verifyToken} from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/check").post(verifyToken, checkReport);

router.route("/notifi").get(verifyToken, NotifiAll);

router.route("/").post(verifyToken, newReport).get(pagination);

router.route("/:id").get(findReport)


// router.route("/:id").get(singleDocument).patch(editDocument).delete(deleteDocument);

export default router;
