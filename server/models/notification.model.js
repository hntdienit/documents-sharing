import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Notifications = sequelize.define(
  "Thong_bao",
  {
    Noi_dung_thong_bao: { type: DataTypes.STRING, allowNull: false },
  },
  {
    createdAt: "Thoi_gian_tao",
    updatedAt: "Thoi_gian_cap_nhat",
  }
);

export default Notifications;
