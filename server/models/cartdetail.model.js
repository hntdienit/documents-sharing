import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const CartDetails = sequelize.define(
  "Chi_tiet_gio_hang",
  {
    So_luong: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    createdAt: "Thoi_gian_tao",
    updatedAt: "Thoi_gian_cap_nhat",
  }
);

export default CartDetails;
