import sequelize from "../config/db.js";
import { Op } from "sequelize";

import createError from "../utils/createError.js";

import Documents from "../models/document.model.js";
import Users from "../models/user.model.js";
import Reviews from "../models/review.model.js";
import Images from "../models/image.model.js";
import Majors from "../models/major.model.js";

export const shareDocument = async (req, res, next) => {
  try {
    if (!req.body.Cong_Khai && !req.body.LopHP) {
      req.body.Cong_Khai = true;
    }
    let data;
    if (req.body.Cong_Khai == "true") {
      if (req.body.LopHP == "true") {
        data = {
          Ten_tai_lieu: req.body.Ten_tai_lieu,
          Mo_ta_tai_lieu: req.body.Mo_ta_tai_lieu,
          Url: `${req.protocol}://${req.get("host")}/files/${req.files[0].filename}`,
          Cong_khai: true,
          Lop_hoc_phan_id: req.body.LopHPId,
          Nguoi_dung_id: req.user.id,
          Nganh_hoc_id: req.body.Nganh_hoc_id,
        };
      } else {
        data = {
          Ten_tai_lieu: req.body.Ten_tai_lieu,
          Mo_ta_tai_lieu: req.body.Mo_ta_tai_lieu,
          Url: `${req.protocol}://${req.get("host")}/files/${req.files[0].filename}`,
          Cong_khai: true,
          Lop_hoc_phan_id: null,
          Nguoi_dung_id: req.user.id,
          Nganh_hoc_id: req.body.Nganh_hoc_id,
        };
      }
    } else {
      data = {
        Ten_tai_lieu: req.body.Ten_tai_lieu,
        Mo_ta_tai_lieu: req.body.Mo_ta_tai_lieu,
        Url: `${req.protocol}://${req.get("host")}/files/${req.files[0].filename}`,
        Cong_khai: false,
        Lop_hoc_phan_id: req.body.LopHPId,
        Nguoi_dung_id: req.user.id,
        Nganh_hoc_id: req.body.Nganh_hoc_id,
      };
    }

    const newDocument = new Documents(data);

    const saveDocument = await newDocument.save();
    res.status(201).json(saveDocument);
  } catch (err) {
    next(err);
  }
};

export const payDocument = async (req, res, next) => {
  try {
    const newDocument = await Documents.create({
      Ten_tai_lieu: req.body.Ten_tai_lieu,
      Mo_ta_tai_lieu: req.body.Mo_ta_tai_lieu,
      Kieu_tai_lieu: "Tài liệu vật lý",
      Url: null,
      Cong_khai: true,
      So_luong: req.body.So_luong,
      Gia: req.body.Gia,
      Nguoi_dung_id: req.user.id,
      Nganh_hoc_id: req.body.Nganh_hoc_id,
    });

    const images = req.files;

    for (let i = 0; i < images.length; i++) {
      await Images.create({
        Tai_lieu_id: newDocument.id,
        Url: `${req.protocol}://${req.get("host")}/images/${req.files[i].filename}`,
      });
      // delete file
      // const filepath = `./public/image/product/${req.files[i].filename}`;
      // fs.unlinkSync(filepath);
    }

    res.status(201).json("Đăng tài liệu thành công!");
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
    const totalRows = await Documents.count({
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
      required: false,
      include: [{ model: Reviews }, { model: Images }, { model: Majors }],
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

    const Nganh = await Majors.findByPk(document.Nganh_hoc_id)

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
