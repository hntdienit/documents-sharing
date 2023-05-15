import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
const Documents = sequelize.define(
  "Tai_lieu",
  {
    Ten_tai_lieu: { type: DataTypes.STRING, allowNull: true },
    Mo_ta_tai_lieu: { type: DataTypes.STRING, allowNull: true },
    Kieu_tai_lieu: { type: DataTypes.STRING, defaultValue: "Tài liệu điện tử" },
    Url: { type: DataTypes.STRING, allowNull: true },
    Cong_khai: { type: DataTypes.BOOLEAN, defaultValue: true },
    Noi_bo: { type: DataTypes.BOOLEAN, defaultValue: false },
    So_luong: { type: DataTypes.INTEGER, defaultValue: 1 },
    Gia: { type: DataTypes.INTEGER, defaultValue: 0 },
    Kiem_duyet: { type: DataTypes.BOOLEAN, defaultValue: false },
  },
  {
    createdAt: "Thoi_gian_tao",
    updatedAt: "Thoi_gian_cap_nhat",
  }
);

export default Documents;
