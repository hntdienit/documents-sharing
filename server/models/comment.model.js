import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Comments = sequelize.define(
  "Binh_luan",
  {
    Noi_dung_binh_luan: { type: DataTypes.STRING, allowNull: true },
  },
  {
    createdAt: "Thoi_gian_tao",
    updatedAt: "Thoi_gian_cap_nhat",
  }
);

export default Comments;
