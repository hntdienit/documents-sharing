import sequelize from "../config/db.js";
import { Op } from "sequelize";

import createError from "../utils/createError.js";

export const register = async (req, res, next) => {
  const Ten_tai_lieu = req.body.Ten_tai_lieu;
  const Mo_ta_tai_lieu = req.body.Mo_ta_tai_lieu;
  const datafile = req.files;
  try {
    console.log("Ten_tai_lieu...", Ten_tai_lieu);
    console.log("Mo_ta_tai_lieu...", Mo_ta_tai_lieu);
    console.log("file name", datafile[0].filename);
    console.log("url", req.files[0].filename);

    res.status(200).send("noi dung tu server...");
  } catch (err) {
    next(err);
  }
};
