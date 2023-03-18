import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Subjects = sequelize.define(
  "Mon",
  {
    Ten_mon: { type: DataTypes.STRING, allowNull: true },
    Mo_ta_mon: { type: DataTypes.STRING, allowNull: true },
    Trang_thai_mon: { type: DataTypes.STRING, defaultValue: "HoatDong" },
  },
  {
    createdAt: "Thoi_gian_tao",
    updatedAt: "Thoi_gian_cap_nhat",
  }
);

export default Subjects;
