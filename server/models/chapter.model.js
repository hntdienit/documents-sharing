import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Chapters = sequelize.define(
  "Chuongs",
  {
    Ten_chuong: { type: DataTypes.STRING, allowNull: true },
    Mo_ta_chuong: { type: DataTypes.STRING, allowNull: true },
    Trang_thai_chuong: { type: DataTypes.STRING, defaultValue: "HoatDong" },
  },
  {
    createdAt: "Thoi_gian_tao",
    updatedAt: "Thoi_gian_cap_nhat",
  }
);

export default Chapters;
