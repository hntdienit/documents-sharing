import express from "express";
import {
  getAll,
  newmajor,
  listmajor,
  getmajor,
  editmajor,
  deletemajor,
  docByMajor
} from "../controllers/major.controller.js";

import { verifyToken, checkAdmin } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/all").get(verifyToken, getAll);

router.route("/docbymajor").get(verifyToken, docByMajor);

router.route("/").post(verifyToken, checkAdmin, newmajor).get(listmajor);

router
  .route("/:id")
  .get(getmajor)
  .patch(verifyToken, checkAdmin, editmajor)
  .delete(verifyToken, checkAdmin, deletemajor);


export default router;
