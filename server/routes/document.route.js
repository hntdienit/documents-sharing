import express from "express";
import {
  shareDocument,
  payDocument,
  pagination,
  singleDocument,
  editDocument,
  deleteDocument,
} from "../controllers/document.controller.js";
import validator from "../utils/validate.js";

import { verifyToken, checkUser } from "../middlewares/auth.middleware.js";
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

router.route("/:id").get(singleDocument).patch(editDocument).delete(deleteDocument);

export default router;
