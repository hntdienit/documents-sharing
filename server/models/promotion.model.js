import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Promotion = sequelize.define(
  "Khuyen_mai",
  {
    Ma_khuyen_mai: { type: DataTypes.STRING, allowNull: false },
    Gia_tri_khuyen_mai: { type: DataTypes.STRING, allowNull: false },
    Ngay_het_han: { type: DataTypes.DATE, allowNull: false },
  },
  {
    createdAt: "Thoi_gian_tao",
    updatedAt: "Thoi_gian_cap_nhat",
  }
);

export default Promotion;
