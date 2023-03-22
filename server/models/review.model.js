import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Reviews = sequelize.define(
  "Danh_gia",
  {
    So_sao: { type: DataTypes.STRING },
    Noi_dung_danh_gia: { type: DataTypes.STRING, allowNull: true },
  },
  {
    createdAt: "Thoi_gian_tao",
    updatedAt: "Thoi_gian_cap_nhat",
  }
);

export default Reviews;
