import sequelize from "../config/db.js";
import { Op, where } from "sequelize";

import createError from "../utils/createError.js";

import Documents from "../models/document.model.js";
import Users from "../models/user.model.js";
import Reviews from "../models/review.model.js";
import Images from "../models/image.model.js";
import Majors from "../models/major.model.js";
import BuyHistory from "../models/buyhistory.model.js";

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
export const updateshareDocument = async (req, res, next) => {
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
          Kiem_duyet: 0,
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
          Kiem_duyet: 0,
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
        Kiem_duyet: 0,
      };
    }

    const newDocument = await Documents.update(data, {
      where: {
        id: req.params.id,
      },
    });

    res.status(201).json(newDocument);
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
export const updatepayDocument = async (req, res, next) => {
  try {
    const newDocument = await Documents.update(
      {
        Ten_tai_lieu: req.body.Ten_tai_lieu,
        Mo_ta_tai_lieu: req.body.Mo_ta_tai_lieu,
        Kieu_tai_lieu: "Tài liệu vật lý",
        Url: null,
        Cong_khai: true,
        So_luong: req.body.So_luong,
        Gia: req.body.Gia,
        Nguoi_dung_id: req.user.id,
        Nganh_hoc_id: req.body.Nganh_hoc_id,
        Kiem_duyet: 0,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

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

    res.status(201).json("Sửa tài liệu đăng tài liệu thành công!");
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
        Kiem_duyet: true,
        Gia: { [Op.gte]: 0 },
        So_luong: { [Op.gt]: 0 },
        Lop_hoc_phan_id:{ [Op.eq]: null },
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
        Kiem_duyet: true,
        Gia: { [Op.gte]: 0 },
        So_luong: { [Op.gt]: 0 },
        Lop_hoc_phan_id:{ [Op.eq]: null },
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
export const paginationnotuser = async (req, res, next) => {
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
        Kiem_duyet: true,
        Gia: { [Op.gte]: 0 },
        So_luong: { [Op.gt]: 0 },
        Kieu_tai_lieu: "Tài liệu điện tử",
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
        Kiem_duyet: true,
        Gia: { [Op.gte]: 0 },
        So_luong: { [Op.gt]: 0 },
        Kieu_tai_lieu: "Tài liệu điện tử",
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
export const paginationpp = async (req, res, next) => {
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
        Kiem_duyet: true,
        Gia: { [Op.gte]: 0 },
        Nguoi_dung_id: req.user.id,
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
        Kiem_duyet: true,
        Gia: { [Op.gte]: 0 },
        Nguoi_dung_id: req.user.id,
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

export const pagination1 = async (req, res, next) => {
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
        Gia: { [Op.gte]: 0 },
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
        Gia: { [Op.gte]: 0 },
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

export const newdoc = async (req, res, next) => {
  try {
    const newdoc = await Documents.findOne({
      where: {
        Kieu_tai_lieu: "Tài liệu vật lý",
      },
      order: [["thoi_gian_tao", "DESC"]],
      include: [{ model: Reviews }, { model: Images }, { model: Majors }],
    });

    res.status(201).json(newdoc);
  } catch (err) {
    next(err);
  }
};

export const shouldbuy = async (req, res, next) => {
  try {
    const lopid = await Users.findByPk(req.user.id);
    const listUser = await Users.findAll({
      where: {
        Lop_id: lopid.Lop_id,
        id: {
          [Op.ne]: req.user.id,
        },
      },
    });
    let a = [];

    if (listUser.length === 0) {
      const newdoc = await Documents.findAll({
        where: {
          Kieu_tai_lieu: "Tài liệu vật lý",
        },
        order: [["thoi_gian_tao", "DESC"]],
        include: [{ model: Reviews }, { model: Images }, { model: Majors }],
      });
      return res.status(201).json(newdoc[0]);
    }

    listUser.map((i) => {
      a = [...a, i.id];
    });

    const lsmua = await BuyHistory.findAll({
      where: {
        Nguoi_dung_id: {
          [Op.in]: a,
        },
      },
      order: [["thoi_gian_tao", "DESC"]],
    });

    if (lsmua.length === 0) {
      const newdoc = await Documents.findAll({
        where: {
          Kieu_tai_lieu: "Tài liệu vật lý",
        },
        order: [["thoi_gian_tao", "DESC"]],
        include: [{ model: Reviews }, { model: Images }, { model: Majors }],
      });
      return res.status(201).json(newdoc[0]);
    }

    const newdoc = await Documents.findOne({
      where: {
        id: lsmua[0].Tai_lieu_id,
      },
      include: [{ model: Reviews }, { model: Images }, { model: Majors }],
    });

    res.status(201).json(newdoc);
  } catch (err) {
    next(err);
  }
};
