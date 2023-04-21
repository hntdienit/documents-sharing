import { Op } from "sequelize";

import createError from "../utils/createError.js";

import Documents from "../models/document.model.js";
import Users from "../models/user.model.js";
import Reviews from "../models/review.model.js";

export const newRating = async (req, res, next) => {
  try {
    const ratingDocument = await Reviews.findOne({
      where: {
        Tai_lieu_id: req.body.documentId,
        Nguoi_dung_id: req.user.id,
      },
    });
    if (ratingDocument) {
      const saveRating = await Reviews.update(
        { So_sao: req.body.So_sao, Noi_dung_danh_gia: req.body.Noi_dung_danh_gia },
        {
          where: {
            id: ratingDocument.id,
          },
        }
      );
      return res.status(201).json("Sửa thành công!");
    }
    const saveRating = await Reviews.create({
      So_sao: req.body.So_sao,
      Noi_dung_danh_gia: req.body.Noi_dung_danh_gia,
      Nguoi_dung_id: req.user.id,
      Tai_lieu_id: req.body.documentId,
    });
    res.status(201).json(saveRating);
  } catch (err) {
    next(err);
  }
};

export const getRatingDocument = async (req, res, next) => {
  try {
    const ratingDocument = await Reviews.findAll({
      where: {
        Tai_lieu_id: req.params.id,
      },
    });
    res.status(200).json(ratingDocument);
  } catch (err) {
    next(err);
  }
};

export const patchReview = async (req, res, next) => {
  try {
    const saveRating = await Reviews.update(
      { So_sao: req.body.So_sao, Noi_dung_danh_gia: req.body.Noi_dung_danh_gia },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    return res.status(201).json("Sửa thành công!");
  } catch (err) {
    next(err);
  }
};
