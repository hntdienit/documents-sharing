import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Lessons = sequelize.define(
  "Bai_hoc",
  {
    Tieu_de_bai_hoc: { type: DataTypes.STRING, allowNull: true },
    Trang_thai_bai_hoc: { type: DataTypes.STRING, defaultValue: "HoatDong" },
  },
  {
    createdAt: "Thoi_gian_tao",
    updatedAt: "Thoi_gian_cap_nhat",
  }
);

export default Lessons;
