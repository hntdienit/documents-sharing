import express from "express";
import {
  newDocument,
  pagination,
  singleDocument,
  editDocument,
  deleteDocument,
} from "../controllers/document.controller.js";
import validator from "../utils/validate.js";

import { verifyToken, checkPermission } from "../middlewares/auth.middleware.js";
import UploadMiddleware from "../middlewares/upload.middleware.js";

const router = express.Router();

router.post(
  "/new",
  function (req, res, next) {
    req.storage = "./public/files";
    next();
  },
  UploadMiddleware.array("datafile", 10),
  verifyToken,
  newDocument
);

router.route("/").get(pagination);

router.route("/:id").get(singleDocument).patch(editDocument).delete(deleteDocument);

export default router;
