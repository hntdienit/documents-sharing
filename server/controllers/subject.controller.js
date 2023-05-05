import sequelize from "../config/db.js";
import { Op } from "sequelize";

import createError from "../utils/createError.js";

import Subjects from "../models/subject.model.js";

export const learnAll = async (req, res, next) => {
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

export const newsubject = async (req, res, next) => {
  try {
    const newsubject = await Subjects.create({
      Ma_lop_hoc_phan: req.body.Ma_lop_hoc_phan,
      Ten_lop_hoc_phan: req.body.Ten_lop_hoc_phan,
    });
    res.status(201).send("Thêm lớp học phần thành công!");
  } catch (err) {
    next(err);
  }
};

export const listsubject = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 0;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.keyword || "";
    const offset = limit * page;
    const totalRows = await Subjects.count({
      where: {
        [Op.or]: [
          {
            Ma_lop_hoc_phan: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            Ten_lop_hoc_phan: {
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

    const result = await Subjects.findAll({
      where: {
        [Op.or]: [
          {
            Ma_lop_hoc_phan: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            Ten_lop_hoc_phan: {
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

export const getsubject = async (req, res, next) => {
  try {
    const findItem = await Subjects.findByPk(req.params.id);
    if (findItem) {
      return res.status(201).json(findItem);
    } else {
      return next(createError(404, "Không tìm thấy thông tin tìm kiếm!"));
    }
  } catch (err) {
    next(err);
  }
};

export const editsubject = async (req, res, next) => {
  try {
    const findItem = await Subjects.findByPk(req.params.id);
    if (findItem) {
      await Subjects.update(
        {
          Ma_lop_hoc_phan: req.body.Ma_lop_hoc_phan,
          Ten_lop_hoc_phan: req.body.Ten_lop_hoc_phan,
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

export const deletesubject = async (req, res, next) => {
  try {
    const findItem = await Subjects.findByPk(req.params.id);
    if (findItem) {
      await Subjects.destroy({
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
