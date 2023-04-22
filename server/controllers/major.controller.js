import Majors from "../models/major.model.js";

export const getAll = async (req, res, next) => {
  try {
    const list = await Majors.findAll({
      attributes: ["id", "Ma_nganh_hoc", "Ten_nganh_hoc"],
    });
    res.json(list);
  } catch (err) {
    next(err);
  }
};
