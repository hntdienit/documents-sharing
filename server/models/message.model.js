import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Messages = sequelize.define(
  "Tin_nhan",
  {
    Noi_dung_tin_nhan: { type: DataTypes.STRING, allowNull: true },
  },
  {
    createdAt: "Thoi_gian_tao",
    updatedAt: "Thoi_gian_cap_nhat",
  }
);

export default Messages;
