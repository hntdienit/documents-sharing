import sequelize from "../config/db.js";
import { Op } from "sequelize";

import createError from "../utils/createError.js";

import CartDetails from "../models/cartdetail.model.js";
import Documents from "../models/document.model.js";
import Images from "../models/image.model.js";

export const addProductToCart = async (req, res, next) => {
  try {
    const findDocument = await Documents.findByPk(req.body.Tai_lieu_id);
    const findCart = await CartDetails.findOne({
      where: {
        Tai_lieu_id: req.body.Tai_lieu_id,
        Nguoi_dung_id: req.user.id,
      },
    });

    if (findCart && findDocument) {
      if (findCart.So_luong + req.body.So_luong > findDocument.So_luong) {
        await CartDetails.update(
          { So_luong: findDocument.So_luong },
          {
            where: {
              Nguoi_dung_id: req.user.id,
              Tai_lieu_id: req.body.Tai_lieu_id,
            },
          }
        );
      } else {
        await CartDetails.update(
          { So_luong: findCart.So_luong + req.body.So_luong },
          {
            where: {
              Nguoi_dung_id: req.user.id,
              Tai_lieu_id: req.body.Tai_lieu_id,
            },
          }
        );
      }
    } else {
      await CartDetails.create({
        So_luong: req.body.So_luong,
        Tai_lieu_id: req.body.Tai_lieu_id,
        Nguoi_dung_id: req.user.id,
      });
    }

    res.status(201).json("Thêm thành công!");
  } catch (err) {
    next(err);
  }
};

export const getCart = async (req, res, next) => {
  try {
    const cart = await CartDetails.findAll({
      where: { Nguoi_dung_id: req.user.id },
      required: false,
      include: [
        {
          model: Documents,
          include: [
            {
              model: Images,
            },
          ],
        },
      ],
    });
    return res.status(200).json(cart);
  } catch (err) {
    next(err);
  }
};

export const deleteProductInCart = async (req, res, next) => {
  try {
    const findProduct = await CartDetails.findOne({
      where: { id: req.params.id, Nguoi_dung_id: req.user.id },
    });

    if (findProduct) {
      await CartDetails.destroy({
        where: { id: req.params.id, Nguoi_dung_id: req.user.id },
      });
      res.status(201).json("Xóa thành công!");
    } else return next(createError(404, "Chi tiết giỏ hàng không tồn tại!"));
  } catch (err) {
    next(err);
  }
};

export const patchProductInCart = async (req, res, next) => {
  try {
    const cart = await CartDetails.findByPk(req.params.id);

    if (cart) {
      const document = await Documents.findByPk(cart.Tai_lieu_id);
      if (req.body.So_luong > document.So_luong) {
        return res.status(200).json({ error: "Số lượng không được lớn hơn số lượng hiện có!" });
      }
      if (req.body.So_luong <= 0) {
        await CartDetails.destroy({ where: { id: cart.id } });
        return res.status(200).json("Xóa sản phẩm khỏi giỏ hàng thành công!");
      }

      await CartDetails.update(
        { So_luong: req.body.So_luong },
        {
          where: {
            Nguoi_dung_id: req.user.id,
            id: req.params.id,
          },
        }
      );
      return res.status(201).json("Sửa thành công!");
    } else return next(createError(404, "Chi tiết giỏ hàng không tồn tại!"));

    return res.status(201).json("sua thanh cong");
  } catch (err) {
    next(err);
  }
};
