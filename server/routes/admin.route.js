import express from "express";
import {
  newuser,
  listuser,
  getuser,
  edituser,
  deleteuser,
  newstudent,
  liststudent,
  newlecturers,
  listlecturers,
} from "../controllers/admin.controller.js";

import { verifyToken, checkAdmin } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.route("/user").post(verifyToken, checkAdmin, newuser).get(listuser);

router.route("/student").post(verifyToken, checkAdmin, newstudent).get(liststudent);

router.route("/lecturers").post(verifyToken, checkAdmin, newlecturers).get(listlecturers);

router
  .route("/user/:id")
  .get(getuser)
  .patch(verifyToken, checkAdmin, edituser)
  .delete(verifyToken, checkAdmin, deleteuser);

export default router;
