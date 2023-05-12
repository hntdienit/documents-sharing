import sequelize from "../config/db.js";
import { Op } from "sequelize";

import createError from "../utils/createError.js";
import Conversation from "../models/conversation.model.js";
import Users from "../models/user.model.js";

export const createConversation = async (req, res, next) => {
  try {
    const newConversation = await Conversation.create({
      Nguoi_ban_id: req.user.id,
      Nguoi_mua_id: req.body.Nguoi_mua_id,
    });
    return res.status(201).json(newConversation.id);
  } catch (err) {
    next(err);
  }
};

export const getSingleConversation = async (req, res, next) => {
  try {
    const conversation = await Conversation.findOne({
      where: {
        Nguoi_ban_id: req.user.id,
        Nguoi_mua_id: req.params.id,
      },
    });
    if (!conversation) {
      return res.status(200).json(0);
    }
    return res.status(200).json(conversation.id);
  } catch (err) {
    next(err);
  }
};

export const getConversations = async (req, res, next) => {
  try {
    const conversations = await Conversation.findAll({
      // attributes: ["id", "Tin_nhan_cuoi", "Nguoi_mua_id"],
      where: {
        // Nguoi_ban_id: req.user.id
        [Op.or]: [
          {
            Nguoi_ban_id: req.user.id,
          },
          {
            Nguoi_mua_id: req.user.id,
          },
        ],
      },
      order: [["id", "DESC"]],
      required: false,
      include: [{ model: Users }],
    });
    return res.status(200).send(conversations);
  } catch (err) {
    next(err);
  }
};
