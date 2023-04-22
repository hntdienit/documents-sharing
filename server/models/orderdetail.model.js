import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const OrderDetails = sequelize.define(
  "Chi_tiet_don_hang",
  {
    So_luong: { type: DataTypes.INTEGER, allowNull: false },
    Gia: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    createdAt: "Thoi_gian_tao",
    updatedAt: "Thoi_gian_cap_nhat",
  }
);

export default OrderDetails;
