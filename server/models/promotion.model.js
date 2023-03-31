import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Promotion = sequelize.define(
  "Khuyen_mai",
  {
    Gia_khuyen_mai: { type: DataTypes.STRING, allowNull: false },
    Ngay_bat_dau: { type: DataTypes.DATE, allowNull: false },
    Ngay_ket_thuc: { type: DataTypes.DATE, allowNull: false },
  },
  {
    createdAt: "Thoi_gian_tao",
    updatedAt: "Thoi_gian_cap_nhat",
  }
);

export default Promotion;
