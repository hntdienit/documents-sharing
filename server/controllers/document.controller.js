import sequelize from "../config/db.js";
import { Op } from "sequelize";

import createError from "../utils/createError.js";

import Documents from "../models/document.model.js";
import Users from "../models/user.model.js";

export const newDocument = async (req, res, next) => {
  try {
    const newDocument = new Documents({
      Ten_tai_lieu: req.body.Ten_tai_lieu,
      Mo_ta_tai_lieu: req.body.Mo_ta_tai_lieu,
      Url: `${req.protocol}://${req.get("host")}/files/${req.files[0].filename}`,
      Nguoi_dung_id: req.user.id,
    });

    const saveDocument = await newDocument.save();
    res.status(201).json(saveDocument);
  } catch (err) {
    next(err);
  }
};

export const listDocument = async (req, res, next) => {
  try {
    const list = await Documents.findAll();
    res.status(201).json(list);
  } catch (err) {
    next(err);
  }
};
export const listDocument1 = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 0;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.keyword || "";
    const offset = limit * page;
    const totalRows = await Documents.count();

    const totalPage = Math.ceil(totalRows / limit);
    const result = await Documents.findAll({
      where: {
        [Op.or]: [
          {
            Ten_tai_lieu: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            Mo_ta_tai_lieu: {
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

export const singleDocument = async (req, res, next) => {
  try {
    const document = await Documents.findByPk(req.params.id);
    const userDocument = await Users.findByPk(document.Nguoi_dung_id);
    if (!document) {
      return next(createError(404, "Tài liệu bạn tìm không tồn tại!"));
    }
    if (!userDocument) {
      return next(createError(404, "Thông tin chủ sở hữu không tồn tại!"));
    }
    const singledocument = {
      Tai_lieu: document,
      Nguoi_dung: {
        Ho_ten: userDocument.Ho_ten,
      },
    };
    res.status(200).json(singledocument);
  } catch (err) {
    next(err);
  }
};
