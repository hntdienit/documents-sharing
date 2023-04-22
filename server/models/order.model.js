import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Order = sequelize.define(
  "Don_hang",
  {
    Ma_don_hang: { type: DataTypes.STRING, allowNull: false },
    Tong_don_hang: { type: DataTypes.INTEGER, allowNull: false },
    Trang_thai_thanh_toan: { type: DataTypes.INTEGER, allowNull: false },
    Dia_chi_nhan_hang: { type: DataTypes.STRING, allowNull: false },
  },
  {
    createdAt: "Thoi_gian_tao",
    updatedAt: "Thoi_gian_cap_nhat",
  }
);

export default Order;
