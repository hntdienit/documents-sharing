import sequelize from "../config/db.js";
import { Op } from "sequelize";
import bcrypt from "bcrypt";

import createError from "../utils/createError.js";

import Courses from "../models/course.model.js";

export const newcourse = async (req, res, next) => {
  try {
    const newcourse = await Courses.create({
      Ma_lop: req.body.Ma_lop,
      Ten_lop_hoc: req.body.Ten_lop_hoc,
    });
    res.status(201).send("Thêm lớp thành công!");
  } catch (err) {
    next(err);
  }
};

export const listcourse = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 0;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.keyword || "";
    const offset = limit * page;
    const totalRows = await Courses.count({
      where: {
        [Op.or]: [
          {
            Ma_lop: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            Ten_lop_hoc: {
              [Op.like]: "%" + search + "%",
            },
          },
        ],
      },
      offset: offset,
      limit: limit,
      order: [["id", "DESC"]],
    });

    const totalPage = Math.ceil(totalRows / limit);

    const result = await Courses.findAll({
      where: {
        [Op.or]: [
          {
            Ma_lop: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            Ten_lop_hoc: {
              [Op.like]: "%" + search + "%",
            },
          },
        ],
      },
      offset: offset,
      limit: limit,
      order: [["id", "DESC"]],
    });

    res.json({
      result: result,
      page: page,
      limit: limit,
      totalRows: totalRows,
      totalPage: totalPage,
    });
  } catch (err) {
    next(err);
  }
};

export const getcourse = async (req, res, next) => {
  try {
    const findItem = await Courses.findByPk(req.params.id)
    if(findItem){
      return res.status(201).json(findItem);
    } else {
      return next(createError(404, "Không tìm thấy thông tin tìm kiếm!"));
    }
  } catch (err) {
    next(err);
  }
};

export const editcourse = async (req, res, next) => {
  try {
    const findItem = await Courses.findByPk(req.params.id)
    if(findItem){
      await Courses.update(
        {
          Ma_lop: req.body.Ma_lop,
          Ten_lop_hoc: req.body.Ten_lop_hoc,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      return res.status(201).json("Sửa thành công");
    } else {
      return next(createError(404, "Không tìm thấy thông tin tìm kiếm!"));
    }
  } catch (err) {
    next(err);
  }
};

export const deletecourse = async (req, res, next) => {
  try {
    const findItem = await Courses.findByPk(req.params.id)
    if(findItem){
          await Courses.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(201).json("Xóa thành công");
    } else {
      return next(createError(404, "Không tìm thấy thông tin tìm kiếm!"));
    }

  } catch (err) {
    next(err);
  }
};