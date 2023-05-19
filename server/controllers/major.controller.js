import sequelize from "../config/db.js";
import { Op } from "sequelize";

import createError from "../utils/createError.js";

import Majors from "../models/major.model.js";
import Documents from "../models/document.model.js";

export const getAll = async (req, res, next) => {
  try {
    const list = await Majors.findAll({
      attributes: ["id", "Ma_nganh_hoc", "Ten_nganh_hoc"],
    });
    res.json(list);
  } catch (err) {
    next(err);
  }
};

export const newmajor = async (req, res, next) => {
  try {
    const newmajor = await Majors.create({
      Ma_nganh_hoc: req.body.Ma_nganh_hoc,
      Ten_nganh_hoc: req.body.Ten_nganh_hoc,
    });
    res.status(201).send("Thêm ngành học thành công!");
  } catch (err) {
    next(err);
  }
};

export const listmajor = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 0;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.keyword || "";
    const offset = limit * page;
    const totalRows = await Majors.count({
      where: {
        [Op.or]: [
          {
            Ma_nganh_hoc: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            Ten_nganh_hoc: {
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

    const result = await Majors.findAll({
      where: {
        [Op.or]: [
          {
            Ma_nganh_hoc: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            Ten_nganh_hoc: {
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

export const getmajor = async (req, res, next) => {
  try {
    const findItem = await Majors.findByPk(req.params.id);
    if (findItem) {
      return res.status(201).json(findItem);
    } else {
      return next(createError(404, "Không tìm thấy thông tin tìm kiếm!"));
    }
  } catch (err) {
    next(err);
  }
};

export const editmajor = async (req, res, next) => {
  try {
    const findItem = await Majors.findByPk(req.params.id);
    if (findItem) {
      await Majors.update(
        {
          Ma_nganh_hoc: req.body.Ma_nganh_hoc,
          Ten_nganh_hoc: req.body.Ten_nganh_hoc,
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

export const deletemajor = async (req, res, next) => {
  try {
    const findItem = await Majors.findByPk(req.params.id);
    if (findItem) {
      await Majors.destroy({
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

export const docByMajor = async (req, res, next) => {
  try {
    const thang = parseInt(req.query.thang) || 5;
    const nam = parseInt(req.query.nam) || 2023;
    let tim;
    if (thang === 13) {
      tim = {
        attributes: ["Nganh_hoc_id"],
        where: {
          [Op.and]: [sequelize.where(sequelize.fn("YEAR", sequelize.col("Thoi_gian_tao")), nam)],
        },
        group: "Nganh_hoc_id",
      };
    } else {
      tim = {
        attributes: ["Nganh_hoc_id"],
        where: {
          [Op.or]: {
            [Op.and]: [
              sequelize.where(sequelize.fn("month", sequelize.col("Thoi_gian_tao")), thang),
              sequelize.where(sequelize.fn("YEAR", sequelize.col("Thoi_gian_tao")), nam),
            ],
          },
        },
        group: "Nganh_hoc_id",
      };
    }
    const mang = [];
    const listmajor = await Majors.findAll({});

    let haha;

    haha = await Documents.count(tim);

    let j = 0;

    if(haha.length === 0){
      return res.json({ count: mang, listmajor: listmajor });
    }
    listmajor.map((i) => {
      if (i.id === haha[j].Nganh_hoc_id) {
        mang.push(haha[j].count);
        j++;
      } else {
        mang.push(0);
      }
    });

    // console.log("listmajor", listmajor);
    // console.log("mang", mang);

    return res.json({ count: mang, listmajor: listmajor });
  } catch (err) {
    next(err);
  }
};
