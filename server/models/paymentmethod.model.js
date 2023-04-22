import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const PaymentMethod = sequelize.define(
  "Phuong_thuc_thanh_toan",
  {
    Ma_phuong_thuc_thanh_toan: { type: DataTypes.STRING, allowNull: false },
    Ten_phuong_thuc_thanh_toan: { type: DataTypes.STRING, allowNull: false },
  },
  {
    createdAt: "Thoi_gian_tao",
    updatedAt: "Thoi_gian_cap_nhat",
  }
);

export default PaymentMethod;
