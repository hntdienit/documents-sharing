import express from "express";
import {
  shareDocument,
  payDocument,
  pagination,
  pagination1,
  singleDocument,
  editDocument,
  deleteDocument,
  checkDocument,
} from "../controllers/document.controller.js";
import validator from "../utils/validate.js";

import { verifyToken, checkUser, checkAdmin } from "../middlewares/auth.middleware.js";
import UploadMiddleware from "../middlewares/upload.middleware.js";

const router = express.Router();

router.post(
  "/share",
  function (req, res, next) {
    req.storage = "./public/files";
    next();
  },
  UploadMiddleware.array("datafile", 10),
  verifyToken,
  checkUser,
  shareDocument
);

router.post(
  "/pay",
  function (req, res, next) {
    req.storage = "./public/images";
    next();
  },
  UploadMiddleware.array("datafile", 10),
  verifyToken,
  checkUser,
  payDocument
);

router.route("/").get(pagination);

router.route("/admin").get(pagination1);

router.route("/check").post(verifyToken, checkAdmin, checkDocument);

router.route("/:id").get(singleDocument).patch(editDocument).delete(deleteDocument);

export default router;
