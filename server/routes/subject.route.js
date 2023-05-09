import express from "express";
import {
  learnAll,
  newsubject,
  listsubject,
  getsubject,
  editsubject,
  deletesubject,
} from "../controllers/subject.controller.js";
import validator from "../utils/validate.js";

import { verifyToken, checkUser, checkAdmin } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/learn/all").get(verifyToken, checkUser, learnAll);

router.route("/").post(verifyToken, checkAdmin, newsubject).get(listsubject);

router
  .route("/:id")
  .get(getsubject)
  .patch(verifyToken, checkAdmin, editsubject)
  .delete(verifyToken, checkAdmin, deletesubject);

export default router;