import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Courses = sequelize.define(
  "Lop_hoc",
  {
    Ma_lop: { type: DataTypes.STRING, allowNull: true },
    Ten_lop_hoc: { type: DataTypes.STRING, allowNull: true },
  },
  {
    createdAt: "Thoi_gian_tao",
    updatedAt: "Thoi_gian_cap_nhat",
  }
);

export default Courses;
