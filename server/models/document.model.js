import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Documents = sequelize.define(
  "Tai_lieu",
  {
    Ten_tai_lieu: { type: DataTypes.STRING, allowNull: true },
    Mo_ta_tai_lieu: { type: DataTypes.STRING, allowNull: true },
    Kieu_tai_lieu: { type: DataTypes.STRING, defaultValue: "Tài liệu điện tử" },
    Url: { type: DataTypes.STRING, allowNull: true },
    So_lan_tai_ve: { type: DataTypes.INTEGER, defaultValue: 0 },
    Cong_khai: { type: DataTypes.INTEGER, allowNull: true },
  },
  {
    createdAt: "Thoi_gian_tao",
    updatedAt: "Thoi_gian_cap_nhat",
  }
);

export default Documents;
