import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Courses = sequelize.define(
  "Khoa_hocs",
  {
    Ten_khoa_hoc: { type: DataTypes.STRING, allowNull: true },
    Mo_ta_khoa_hoc: { type: DataTypes.STRING, allowNull: true },
  },
  {
    createdAt: "Thoi_gian_tao",
    updatedAt: "Thoi_gian_cap_nhat",
  }
);

export default Courses;
