import Wishlist from "../models/like.model.js";
import Documents from "../models/document.model.js";
import Images from "../models/image.model.js";

export const getAll = async (req, res, next) => {
  try {
    const list = await Wishlist.findAll({
      where: {
        Nguoi_dung_id: req.user.id,
      },
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
    res.json(list);
  } catch (err) {
    next(err);
  }
};

export const changeToWishlist = async (req, res, next) => {
  try {
    const inWish = await Wishlist.findOne({ where: { Nguoi_dung_id: req.user.id, Tai_lieu_id: req.body.Tai_lieu_id } });

    if (inWish) {
      await Wishlist.destroy({ where: { Nguoi_dung_id: req.user.id, Tai_lieu_id: req.body.Tai_lieu_id } });
      return res.status(201).json("Xóa tài liệu khỏi danh sách yêu thích thành công!");
    }

    await Wishlist.create({ Nguoi_dung_id: req.user.id, Tai_lieu_id: req.body.Tai_lieu_id });

    res.status(201).json("Thêm tài liệu vào danh sách yêu thích thành công!");
  } catch (err) {
    next(err);
  }
};
