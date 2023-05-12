import express from "express";
import {

  singleDocument,
  editDocument,
  deleteDocument,
  checkDocument,

  newReport,
  pagination,
} from "../controllers/report.controller.js";
import validator from "../utils/validate.js";

import { verifyToken} from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/").post(verifyToken, newReport).get(pagination);


// router.route("/check").post(verifyToken, checkDocument);

// router.route("/:id").get(singleDocument).patch(editDocument).delete(deleteDocument);

export default router;
