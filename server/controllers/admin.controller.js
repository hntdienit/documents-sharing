import { Op } from "sequelize";
import bcrypt from "bcrypt";

import createError from "../utils/createError.js";

import Users from "../models/user.model.js";

export const newuser = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.Mat_khau, 5);

    const newUser = await Users.create({
      Email: req.body.Email,
      Mat_khau: hash,
      Ho_ten: req.body.Ho_ten,
      Dia_chi: req.body.Dia_chi,
      CCCD: req.body.CCCD,
      Gioi_tinh: req.body.Gioi_tinh,
      So_dien_thoai: req.body.So_dien_thoai,
      Email_da_xac_thuc: 1,
      Vai_tro: "NguoiDung",
    });

    res.status(201).send("Đăng ký tài khoản thành công!");
  } catch (err) {
    next(err);
  }
};

export const listuser = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 0;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.keyword || "";
    const offset = limit * page;
    const totalRows = await Users.count({
      where: {
        [Op.or]: [
          {
            Email: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            Ho_ten: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            Dia_chi: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            CCCD: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            Gioi_tinh: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            So_dien_thoai: {
              [Op.like]: "%" + search + "%",
            },
          },
        ],
        Vai_tro: "NguoiDung",
      },
      offset: offset,
      limit: limit,
      order: [["id", "DESC"]],
    });

    const totalPage = Math.ceil(totalRows / limit);

    const result = await Users.findAll({
      where: {
        [Op.or]: [
          {
            Email: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            Ho_ten: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            Dia_chi: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            CCCD: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            Gioi_tinh: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            So_dien_thoai: {
              [Op.like]: "%" + search + "%",
            },
          },
        ],
        Vai_tro: "NguoiDung",
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

export const newstudent = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.Mat_khau, 5);

    const newUser = await Users.create({
      Email: req.body.Email,
      Mat_khau: hash,
      Ho_ten: req.body.Ho_ten,
      Dia_chi: req.body.Dia_chi,
      CCCD: req.body.CCCD,
      Gioi_tinh: req.body.Gioi_tinh,
      So_dien_thoai: req.body.So_dien_thoai,
      Email_da_xac_thuc: 1,
      Vai_tro: "SinhVien",
    });
    return res.status(201).send("Đăng ký tài khoản thành công!");
  } catch (err) {
    next(err);
  }
};

export const liststudent = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 0;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.keyword || "";
    const offset = limit * page;
    const totalRows = await Users.count({
      where: {
        [Op.or]: [
          {
            Email: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            Ho_ten: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            Dia_chi: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            CCCD: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            Gioi_tinh: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            So_dien_thoai: {
              [Op.like]: "%" + search + "%",
            },
          },
        ],
        Vai_tro: "SinhVien",
      },
      offset: offset,
      limit: limit,
      order: [["id", "DESC"]],
    });

    const totalPage = Math.ceil(totalRows / limit);

    const result = await Users.findAll({
      where: {
        [Op.or]: [
          {
            Email: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            Ho_ten: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            Dia_chi: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            CCCD: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            Gioi_tinh: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            So_dien_thoai: {
              [Op.like]: "%" + search + "%",
            },
          },
        ],
        Vai_tro: "SinhVien",
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

export const newlecturers = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.Mat_khau, 5);

    const newUser = await Users.create({
      Email: req.body.Email,
      Mat_khau: hash,
      Ho_ten: req.body.Ho_ten,
      Dia_chi: req.body.Dia_chi,
      CCCD: req.body.CCCD,
      Gioi_tinh: req.body.Gioi_tinh,
      So_dien_thoai: req.body.So_dien_thoai,
      Email_da_xac_thuc: 1,
      Vai_tro: "GiangVien",
    });
    return res.status(201).send("Đăng ký tài khoản thành công!");
  } catch (err) {
    next(err);
  }
};

export const listlecturers = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 0;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.keyword || "";
    const offset = limit * page;
    const totalRows = await Users.count({
      where: {
        [Op.or]: [
          {
            Email: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            Ho_ten: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            Dia_chi: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            CCCD: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            Gioi_tinh: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            So_dien_thoai: {
              [Op.like]: "%" + search + "%",
            },
          },
        ],
        Vai_tro: "GiangVien",
      },
      offset: offset,
      limit: limit,
      order: [["id", "DESC"]],
    });

    const totalPage = Math.ceil(totalRows / limit);

    const result = await Users.findAll({
      where: {
        [Op.or]: [
          {
            Email: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            Ho_ten: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            Dia_chi: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            CCCD: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            Gioi_tinh: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            So_dien_thoai: {
              [Op.like]: "%" + search + "%",
            },
          },
        ],
        Vai_tro: "GiangVien",
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

export const getuser = async (req, res, next) => {
  try {
    const findItem = await Users.findByPk(req.params.id);
    if (findItem) {
      return res.status(201).json(findItem);
    } else {
      return next(createError(404, "Không tìm thấy thông tin tìm kiếm!"));
    }
  } catch (err) {
    next(err);
  }
};

export const edituser = async (req, res, next) => {
  try {
    const findItem = await Users.findByPk(req.params.id);
    if (findItem) {
      await Users.update(
        {
          Ho_ten: req.body.Ho_ten,
          Email: req.body.Email,
          Dia_chi: req.body.Dia_chi,
          CCCD: req.body.CCCD,
          Gioi_tinh: req.body.Gioi_tinh,
          So_dien_thoai: req.body.So_dien_thoai,
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

export const deleteuser = async (req, res, next) => {
  try {
    const findItem = await Users.findByPk(req.params.id);
    if (findItem) {
      await Users.destroy({
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

// export const payDocument = async (req, res, next) => {
//   try {
//     const newDocument = await Documents.create({
//       Ten_tai_lieu: req.body.Ten_tai_lieu,
//       Mo_ta_tai_lieu: req.body.Mo_ta_tai_lieu,
//       Kieu_tai_lieu: "Tài liệu vật lý",
//       Url: null,
//       Cong_khai: true,
//       So_luong: req.body.So_luong,
//       Gia: req.body.Gia,
//       Nguoi_dung_id: req.user.id,
//       Nganh_hoc_id: req.body.Nganh_hoc_id,
//     });

//     const images = req.files;

//     for (let i = 0; i < images.length; i++) {
//       await Images.create({
//         Tai_lieu_id: newDocument.id,
//         Url: `${req.protocol}://${req.get("host")}/images/${req.files[i].filename}`,
//       });
//       // delete file
//       // const filepath = `./public/image/product/${req.files[i].filename}`;
//       // fs.unlinkSync(filepath);
//     }

//     res.status(201).json("Đăng tài liệu thành công!");
//   } catch (err) {
//     next(err);
//   }
// };

// export const singleDocument = async (req, res, next) => {
//   try {
//     const document = await Documents.findByPk(req.params.id);
//     const userDocument = await Users.findByPk(document.Nguoi_dung_id);
//     if (!document) {
//       return next(createError(404, "Tài liệu bạn tìm không tồn tại!"));
//     }
//     if (!userDocument) {
//       return next(createError(404, "Thông tin chủ sở hữu không tồn tại!"));
//     }

//     const reviewDocument = await Reviews.findAll({ where: { Tai_lieu_id: document.id } });
//     let Tong_sao = 0;
//     reviewDocument.forEach((item) => {
//       Tong_sao += +item.So_sao;
//     });

//     let So_sao = Tong_sao / reviewDocument.length;
//     So_sao = So_sao.toFixed(1);

//     const Hinhs = await Images.findAll({
//       where: { Tai_lieu_id: document.id },
//     });

//     const Nganh = await Majors.findByPk(document.Nganh_hoc_id);

//     const singledocument = {
//       Tai_lieu: document,
//       Danh_gia: {
//         So_sao: So_sao,
//         So_nguoi: reviewDocument.length,
//       },
//       Hinhs: Hinhs,
//       Nganh: Nganh,
//       Nguoi_dung: {
//         Ho_ten: userDocument.Ho_ten,
//       },
//     };
//     res.status(200).json(singledocument);
//   } catch (err) {
//     next(err);
//   }
// };

// export const editDocument = async (req, res, next) => {
//   try {
//     await Documents.update(
//       {
//         Ten_tai_lieu: req.body.Ten_tai_lieu,
//       },
//       {
//         where: {
//           id: req.params.id,
//         },
//       }
//     );
//     return res.status(201).json("sua thanh cong");
//   } catch (err) {
//     next(err);
//   }
// };

// export const deleteDocument = async (req, res, next) => {
//   try {
//     await Documents.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });
//     return res.status(201).json("xoa thanh cong");
//   } catch (err) {
//     next(err);
//   }
// };

// export const checkDocument = async (req, res, next) => {
//   try {
//     if (req.body.checkD) {
//       await Documents.update(
//         {
//           Kiem_duyet: 1,
//         },
//         {
//           where: {
//             id: req.body.id,
//           },
//         }
//       );
//     } else {
//       await Documents.destroy({
//         where: {
//           id: req.body.id,
//         },
//       });
//     }

//     res.status(201).json();
//   } catch (err) {
//     next(err);
//   }
// };
