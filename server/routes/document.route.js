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
  paginationpp,
  updatepayDocument,
  updateshareDocument,
  newdoc,
  shouldbuy,
  paginationnotuser,
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
router.patch(
  "/editshare/:id",
  function (req, res, next) {
    req.storage = "./public/files";
    next();
  },
  UploadMiddleware.array("datafile", 10),
  verifyToken,
  checkUser,
  updateshareDocument
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

router.patch(
  "/payedit/:id",
  function (req, res, next) {
    req.storage = "./public/images";
    next();
  },
  UploadMiddleware.array("datafile", 10),
  verifyToken,
  checkUser,
  updatepayDocument
);


router.route("/").get(pagination);

router.route("/notuser").get(paginationnotuser);

router.route("/newdoc").get(newdoc);

router.route("/shouldbuy").get( verifyToken,shouldbuy);

router.route("/user").get(verifyToken, paginationpp);

router.route("/admin").get(pagination1);

router.route("/check").post(verifyToken, checkAdmin, checkDocument);

router.route("/:id").get(singleDocument).patch(editDocument).delete(deleteDocument);

export default router;
