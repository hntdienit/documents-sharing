import sequelize from "../config/db.js";
import { Op } from "sequelize";

import createError from "../utils/createError.js";

import Documents from "../models/document.model.js";
import Users from "../models/user.model.js";
import Reviews from "../models/review.model.js";
import Images from "../models/image.model.js";
import Majors from "../models/major.model.js";
import Reports from "../models/report.model.js";

export const newReport = async (req, res, next) => {
  try {
    await Reports.create({
      Noi_dung_bao_cao: req.body.Noi_dung_bao_cao,
      Nguoi_dung_id: req.user.id,
      Tai_lieu_id: req.body.Tai_lieu_id,
    });
    res.status(201).json("Báo cáo tài liệu thành công!");
  } catch (err) {
    next(err);
  }
};

export const pagination = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 0;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.keyword || "";
    const offset = limit * page;
    const totalRows = await Reports.count({
      where: {
        Noi_dung_bao_cao: {
          [Op.like]: "%" + search + "%",
        },
      },
      offset: offset,
      limit: limit,
      order: [["id", "DESC"]],
    });

    const totalPage = Math.ceil(totalRows / limit);

    const result = await Reports.findAll({
      where: {
        Noi_dung_bao_cao: {
          [Op.like]: "%" + search + "%",
        },
      },
      offset: offset,
      limit: limit,
      order: [["id", "DESC"]],
      required: false,
      include: [{ model: Users }, { model: Documents }],
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

    const reviewDocument = await Reviews.findAll({ where: { Tai_lieu_id: document.id } });
    let Tong_sao = 0;
    reviewDocument.forEach((item) => {
      Tong_sao += +item.So_sao;
    });

    let So_sao = Tong_sao / reviewDocument.length;
    So_sao = So_sao.toFixed(1);

    const Hinhs = await Images.findAll({
      where: { Tai_lieu_id: document.id },
    });

    const Nganh = await Majors.findByPk(document.Nganh_hoc_id);

    const singledocument = {
      Tai_lieu: document,
      Danh_gia: {
        So_sao: So_sao,
        So_nguoi: reviewDocument.length,
      },
      Hinhs: Hinhs,
      Nganh: Nganh,
      Nguoi_dung: {
        Ho_ten: userDocument.Ho_ten,
      },
    };
    res.status(200).json(singledocument);
  } catch (err) {
    next(err);
  }
};

export const editDocument = async (req, res, next) => {
  try {
    await Documents.update(
      {
        Ten_tai_lieu: req.body.Ten_tai_lieu,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    return res.status(201).json("sua thanh cong");
  } catch (err) {
    next(err);
  }
};

export const deleteDocument = async (req, res, next) => {
  try {
    await Documents.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(201).json("xoa thanh cong");
  } catch (err) {
    next(err);
  }
};

export const checkDocument = async (req, res, next) => {
  try {
    if (req.body.checkD) {
      await Documents.update(
        {
          Kiem_duyet: 1,
        },
        {
          where: {
            id: req.body.id,
          },
        }
      );
    } else {
      await Documents.destroy({
        where: {
          id: req.body.id,
        },
      });
    }

    res.status(201).json();
  } catch (err) {
    next(err);
  }
};
