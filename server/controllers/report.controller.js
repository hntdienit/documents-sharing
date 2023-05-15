import sequelize from "../config/db.js";
import { Op } from "sequelize";

import createError from "../utils/createError.js";

import Documents from "../models/document.model.js";
import Users from "../models/user.model.js";
import Reports from "../models/report.model.js";
import Images from "../models/image.model.js";
import Notifications from "../models/notification.model.js";

const countNotifi = async (id) => {
  const totalNotifi = await Notifications.count({
    where: {
      Nguoi_dung_id: id,
    },
  });
  console.log(totalNotifi);
  const allNotifi = await Notifications.findAll({
    where: {
      Nguoi_dung_id: id,
    },
  });
  if (totalNotifi > 4) {
    await Notifications.destroy({
      where: {
        id: allNotifi[0].id,
      },
    });
  }
};

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

export const findReport = async (req, res, next) => {
  try {
    const report = await Reports.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Documents,
          include: [{ model: Users }, { model: Images }],
        },
      ],
    });
    if (!report) {
      return next(createError(200, "báo cáo bạn tìm không tồn tại!"));
    }

    // console.log(report);

    res.status(200).json(report);
  } catch (err) {
    next(err);
  }
};

export const checkReport = async (req, res, next) => {
  try {
    if (req.body.checkD) {
      await Documents.update(
        {
          Kiem_duyet: 1,
          Gia: -10,
        },
        {
          where: {
            id: req.body.idTL,
          },
        }
      );
      const doc = await Documents.findByPk(req.body.idTL);
      countNotifi(doc.Nguoi_dung_id);
      await Notifications.create({
        Noi_dung_thong_bao: "Thông báo mới: Bạn đã bị ẩn 1 tài liệu do vi phạm",
        Nguoi_dung_id: doc.Nguoi_dung_id,
      });
      countNotifi(req.body.idNBC);
      await Notifications.create({
        Noi_dung_thong_bao: "Báo cáo tài liệu vi phạm của bạn đã được xử lý!",
        Nguoi_dung_id: req.body.idNBC,
      });
    } else {
      countNotifi(req.body.idNBC);
      await Notifications.create({
        Noi_dung_thong_bao: "Báo cáo tài liệu vi phạm của bạn đã được xử lý!",
        Nguoi_dung_id: req.body.idNBC,
      });
    }

    res.status(201).json();
  } catch (err) {
    next(err);
  }
};
export const NotifiAll = async (req, res, next) => {
  try {
    const notifi = await Notifications.findAll({
      where: {
        Nguoi_dung_id: req.user.id,
      },
    });
    res.status(201).json(notifi);
  } catch (err) {
    next(err);
  }
};
