import express from "express";
import { newcourse, listcourse, getcourse, editcourse, deletecourse } from "../controllers/course.controller.js";

import { verifyToken, checkAdmin } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.route("/").post(verifyToken, checkAdmin, newcourse).get(listcourse);

router
  .route("/:id")
  .get(getcourse)
  .patch(verifyToken, checkAdmin, editcourse)
  .delete(verifyToken, checkAdmin, deletecourse);

export default router;
