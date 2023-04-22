import sequelize from "../config/db.js";
import { Op } from "sequelize";

import createError from "../utils/createError.js";

import Documents from "../models/document.model.js";
import Users from "../models/user.model.js";

export const paymentMethodAll = async (req, res, next) => {
  try {
    const list = await Subjects.findAll({
      attributes: ["id", "Ma_lop_hoc_phan", "Ten_lop_hoc_phan"],
      where: {
        Hoat_dong: true,
        Giang_vien_id: req.user.id,
      },
    });
    res.json(list);
  } catch (err) {
    next(err);
  }
};
