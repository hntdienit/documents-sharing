import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Report = sequelize.define(
  "Bao_cao",
  {
    Noi_dung_bao_cao: { type: DataTypes.STRING, allowNull: true },
  },
  {
    createdAt: "Thoi_gian_tao",
    updatedAt: "Thoi_gian_cap_nhat",
  }
);

export default Report;
