import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Documents = sequelize.define(
  "Tai_lieu",
  {
    Ten_tai_lieu: { type: DataTypes.STRING, allowNull: true },
    Url: { type: DataTypes.STRING, allowNull: true },
    So_lan_tai_ve: { type: DataTypes.STRING, allowNull: true },
    Kieu_tai_lieu: { type: DataTypes.STRING, allowNull: true },
    Mo_ta_tai_lieu: { type: DataTypes.STRING, allowNull: true },
  },
  {
    createdAt: "Thoi_gian_tao",
    updatedAt: "Thoi_gian_cap_nhat",
  }
);

export default Documents;
