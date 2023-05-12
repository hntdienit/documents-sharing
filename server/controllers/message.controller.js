import createError from "../utils/createError.js";
import Message from "../models/message.model.js";
import Conversation from "../models/conversation.model.js";
import Users from "../models/user.model.js";

export const createMessage = async (req, res, next) => {
  try {
    const newMessage = await Message.create({
      Hoi_thoai_id: req.body.Hoi_thoai_id,
      Nguoi_dung_id: req.user.id,
      Noi_dung_tin_nhan: req.body.Noi_dung_tin_nhan,
    });
    await Conversation.update(
      {
        Tin_nhan_cuoi: req.body.Noi_dung_tin_nhan,
      },
      {
        where: {
          id: req.body.Hoi_thoai_id,
        },
      }
    );
    res.status(201).send(newMessage);
  } catch (err) {
    next(err);
  }
};

export const getMessages = async (req, res, next) => {
  try {
    const messages = await Message.findAll({
      where: { Hoi_thoai_id: req.params.id },
      required: false,
      include: [
        {
          model: Users,
          attributes: ["id", "Ho_ten", "Hinh_dai_dien"],
        },
      ],
    });
    res.status(200).send(messages);
  } catch (err) {
    next(err);
  }
};
