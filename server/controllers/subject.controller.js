import Subjects from "../models/subject.model.js";

export const learnAll = async (req, res, next) => {
  try {
    const list = await Subjects.findAll({
      attributes: ["id", "Ma_lop_hoc_phan", "Ten_lop_hoc_phan"],
      where: {
        Hoat_dong: true,
        Giang_vien_id: req.user.id,
      },
    });
    res.json(list);
  } catch (err) {
    next(err);
  }
};
