import createError from "../utils/createError.js";
import Users from "../models/user.model.js";

export const getUser = async (req, res, next) => {
  const user = await Users.findByPk(req.params.id);
  if (!user) {
    return next(createError(404, "Người dùng bạn tìm không tồn tại!"));
  }
  const userinfo = {
    id: user.id,
    Ho_ten: user.Ho_ten,
  };

  res.status(200).send(userinfo);
};

export const getUser1 = async (req, res, next) => {
  const user = await Users.findOne({
    attributes: ["id", "Ho_ten", "Hinh_dai_dien", "Vai_tro"],
    where: {
      id: req.params.id,
    },
  });
  res.status(200).send(user);
};

export const getProfile = async (req, res, next) => {
  const user = await Users.findOne({
    attributes: ["id", "Email", "Ho_ten", "CCCD", "Dia_chi", "Gioi_tinh", "Hinh_dai_dien", "So_dien_thoai"],
    where: {
      id: req.user.id
    }
  });
  if (!user) {
    return next(createError(200, "Người dùng bạn tìm không tồn tại!"));
  }
  return res.status(200).send(user);
};
