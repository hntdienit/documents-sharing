import createError from "../utils/createError.js";
import Users from "../models/user.model.js";

export const getUser = async (req, res, next) => {
  const user = await Users.findByPk(req.params.id);
  if (!user) {
    return next(createError(404, "Người dùng bạn tìm không tồn tại!"));
  }
  const userinfo = {
    id: user.id,
    Ho_ten: user.Ho_ten
  }

  res.status(200).send(userinfo);
};
