import express from "express";
import { learnAll } from "../controllers/subject.controller.js";
import validator from "../utils/validate.js";

import { verifyToken, checkUser } from "../middlewares/auth.middleware.js";
import UploadMiddleware from "../middlewares/upload.middleware.js";

const router = express.Router();

// router.post(
//   "/new",
//   function (req, res, next) {
//     req.storage = "./public/files";
//     next();
//   },
//   UploadMiddleware.array("datafile", 10),
//   verifyToken,
//   checkUser,
//   newDocument
// );

router.route("/learn/all").get(verifyToken, checkUser, learnAll);

// router.route("/:id").get(singleDocument).patch(editDocument).delete(deleteDocument);

export default router;
