import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Faculties = sequelize.define(
  "Khoa",
  {
    Ten_khoa: { type: DataTypes.STRING, allowNull: true },
    Mo_ta_khoa: { type: DataTypes.STRING, allowNull: true },
    Trang_thai_khoa: { type: DataTypes.STRING, defaultValue: "HoatDong" },
  },
  {
    createdAt: "Thoi_gian_tao",
    updatedAt: "Thoi_gian_cap_nhat",
  }
);

export default Faculties;
