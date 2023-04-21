import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Majors = sequelize.define(
  "Nganh_hoc",
  {
    Ma_nganh_hoc: { type: DataTypes.STRING, allowNull: false },
    Ten_nganh_hoc: { type: DataTypes.STRING, allowNull: false },
  },
  {
    createdAt: "Thoi_gian_tao",
    updatedAt: "Thoi_gian_cap_nhat",
  }
);

export default Majors;
