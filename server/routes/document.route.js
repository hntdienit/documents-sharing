import express from "express";
import { newDocument, listDocument, singleDocument } from "../controllers/document.controller.js";
import validator from "../utils/validate.js";

import UploadMiddleware from "../middlewares/upload.middleware.js";

const router = express.Router();

router.post(
  "/new",
  function (req, res, next) {
    req.storage = "./public/files";
    next();
  },
  UploadMiddleware.array("datafile", 10),
  newDocument
);

router.route("/all").get(listDocument);

router.route("/single/:id").get(singleDocument);

export default router;
