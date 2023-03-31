import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const BuyHistory = sequelize.define(
  "Lich_su_mua",
  {
    Thu_tu_mua: { type: DataTypes.STRING, allowNull: false },
  },
  {
    createdAt: "Thoi_gian_tao",
    updatedAt: "Thoi_gian_cap_nhat",
  }
);

export default BuyHistory;
