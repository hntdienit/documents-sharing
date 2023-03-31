import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Subjects = sequelize.define(
  "Lop_hoc_phan",
  {
    Ma_lop_hoc_phan: { type: DataTypes.STRING, allowNull: true },
    Ten_lop_hoc_phan: { type: DataTypes.STRING, allowNull: true },
  },
  {
    createdAt: "Thoi_gian_tao",
    updatedAt: "Thoi_gian_cap_nhat",
  }
);

export default Subjects;
