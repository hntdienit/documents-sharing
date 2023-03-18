import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Images = sequelize.define(
  "Hinh",
  {
    Url: { type: DataTypes.STRING, allowNull: true},
  },
  {
    createdAt: "Thoi_gian_tao",
    updatedAt: "Thoi_gian_cap_nhat",
  }
);

export default Images;
