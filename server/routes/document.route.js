import express from "express";
import { register} from "../controllers/document.controller.js";
import validator from "../utils/validate.js";

import UploadMiddleware from "../middlewares/upload.middleware.js"

const router = express.Router();

router.post(
  "/new",
  function (req, res, next) {
    req.storage = "./public/files";
    next();
  },
  UploadMiddleware.array("datafile", 10),
//   UploadMiddleware.single("datafile"),
  register
);
// router.post("/login", validator.vBody(validator.schemas.login), login)
// router.post("/logout", logout)

export default router;
