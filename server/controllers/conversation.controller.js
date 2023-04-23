import createError from "../utils/createError.js";
import Conversation from "../models/conversation.model.js";

export const createConversation = async (req, res, next) => {
  try {
    const newConversation = await Conversation.create({
      Nguoi_ban_id: req.user.id,
      Nguoi_mua_id: req.body.Nguoi_mua_id,
    });
    res.status(201).send(newConversation);
  } catch (err) {
    next(err);
  }
};

// export const updateConversation = async (req, res, next) => {
//   try {
//     const updatedConversation = await Conversation.findOneAndUpdate(
//       { id: req.params.id },
//       {
//         $set: {
//           // readBySeller: true,
//           // readByBuyer: true,
//           ...(req.isSeller ? { readBySeller: true } : { readByBuyer: true }),
//         },
//       },
//       { new: true }
//     );

//     res.status(200).send(updatedConversation);
//   } catch (err) {
//     next(err);
//   }
// };

export const getSingleConversation = async (req, res, next) => {
  try {
    const conversation = await Conversation.findOne({ id: req.params.id });
    if (!conversation) return next(createError(404, "Not found!"));
    res.status(200).send(conversation);
  } catch (err) {
    next(err);
  }
};

export const getConversations = async (req, res, next) => {
  try {
    // const conversations = await Conversation.find(
    //   req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }
    // ).sort({ updatedAt: -1 });

    const conversations = await Conversation.findAll({
      where: {
        Nguoi_ban_id: req.user.id,
      },
      order: [["id", "DESC"]],
    });

    res.status(200).send(conversations);
  } catch (err) {
    next(err);
  }
};
